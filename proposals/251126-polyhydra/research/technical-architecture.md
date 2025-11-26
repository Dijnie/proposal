# Polyhydra Technical Architecture

**Date:** 2025-11-26
**Status:** Brainstorm Complete

---

## System Overview

```
┌─────────────────────────────────────────────────────────────────────────┐
│                           POLYHYDRA ARCHITECTURE                        │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  ┌─────────────┐    ┌─────────────┐    ┌─────────────────────────────┐  │
│  │   Discord   │    │    Web      │    │        CLIENTS              │  │
│  │  Activity   │    │   Portal    │    │                             │  │
│  │  (iframe)   │    │  (Next.js)  │    │  • Phaser 3 Game Engine     │  │
│  └──────┬──────┘    └──────┬──────┘    │  • React UI Components      │  │
│         │                  │           │  • UTXO.dev Wallet SDK      │  │
│         └────────┬─────────┘           └─────────────────────────────┘  │
│                  │                                                      │
│                  ▼                                                      │
│  ┌─────────────────────────────────────────────────────────────────┐   │
│  │                    GAME SERVER (NestJS + Colyseus)              │   │
│  │                                                                  │   │
│  │  ┌──────────────┐  ┌──────────────┐  ┌────────────────────┐    │   │
│  │  │ Room Manager │  │ State Sync   │  │ Provably-Fair VRF  │    │   │
│  │  │ (Colyseus)   │  │ (Schema)     │  │ Engine             │    │   │
│  │  └──────────────┘  └──────────────┘  └────────────────────┘    │   │
│  │                                                                  │   │
│  │  ┌──────────────────────────────────────────────────────────┐   │   │
│  │  │              HYDRA INTEGRATION LAYER                      │   │   │
│  │  │  • Head Lifecycle Manager (Open/Commit/Close)            │   │   │
│  │  │  • State Serializer (Game State → Plutus Datum)          │   │   │
│  │  │  • Transaction Builder (Aiken Smart Contracts)           │   │   │
│  │  └──────────────────────────────────────────────────────────┘   │   │
│  └─────────────────────────────────────────────────────────────────┘   │
│                  │                                                      │
│                  ▼                                                      │
│  ┌─────────────────────────────────────────────────────────────────┐   │
│  │                    BLOCKCHAIN LAYER                              │   │
│  │                                                                  │   │
│  │  ┌─────────────────┐         ┌─────────────────────────────┐   │   │
│  │  │   Hydra Node    │◄───────►│    Cardano Node             │   │   │
│  │  │                 │         │                             │   │   │
│  │  │ • State Channel │         │ • Game Settlement TXs       │   │   │
│  │  │ • Instant TXs   │         │ • VRF Proofs Storage        │   │   │
│  │  │ • Zero Fees     │         │ • Game History (Metadata)   │   │   │
│  │  └─────────────────┘         └─────────────────────────────┘   │   │
│  └─────────────────────────────────────────────────────────────────┘   │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## Layer 1: Client Layer

### 1.1 Phaser 3 Game Engine

**Purpose:** Render game board, animations, user interactions

**Components:**
- `BoardScene` - Main game board with 40 property spaces
- `PlayerTokens` - Animated player pieces
- `DiceRoller` - 3D dice animation with VRF result
- `PropertyCards` - Popup property details
- `TradePanel` - Player-to-player trading UI
- `ActionLog` - Real-time game event feed

**Key Features:**
- Canvas-based rendering (performant in iframe)
- Mobile-responsive touch controls
- Smooth animations for dice, tokens, card draws
- Spectator mode (view-only state sync)

### 1.2 Next.js React UI

**Purpose:** Game lobby, menus, wallet interaction, non-game screens

**Components:**
- `LobbyPage` - Room creation, matchmaking
- `GameHUD` - Player stats, turn indicator, action buttons
- `WalletConnector` - UTXO.dev integration
- `LeaderboardPage` - Player rankings
- `HistoryPage` - Past game records

**Tech Stack:**
- Next.js 14 (App Router)
- TailwindCSS for styling
- Zustand for client state
- Socket.io client for Colyseus

### 1.3 UTXO.dev Custodial Wallet

**Purpose:** Abstract blockchain complexity for users

**Integration Flow:**
```
User clicks "Connect"
    → UTXO.dev popup (Discord OAuth or Email)
    → Custodial wallet created/loaded
    → Wallet address returned to client
    → Client stores session token
```

**Key Features:**
- No seed phrase required for users
- Discord OAuth for seamless login in Activity
- Email fallback for web portal users
- Backend signs transactions on user's behalf
- Optional: Export to self-custody later

### 1.4 Discord Activity Integration

**Technical Implementation:**
```typescript
import { DiscordSDK } from "@discord/embedded-app-sdk";

const discordSdk = new DiscordSDK(CLIENT_ID);

await discordSdk.ready();

// Authenticate user
const { code } = await discordSdk.commands.authorize({
  client_id: CLIENT_ID,
  response_type: "code",
  scope: ["identify", "guilds"],
});

// Exchange code for access token (via backend)
const auth = await fetch("/api/discord/token", { code });

// Get user info
const user = await discordSdk.commands.getUser();
```

**URL Mappings Required:**
- `api.utxo.dev` - Wallet service
- `game-server.polyhydra.io` - Colyseus server
- `*.cardano.org` - Cardano APIs (if needed)

**Constraints Handled:**
- All external calls go through Discord proxy
- WebRTC not available (use WebSocket only)
- iframe sandbox limitations respected

---

## Layer 2: Game Server Layer

### 2.1 NestJS Application Structure

```
src/
├── app.module.ts
├── game/
│   ├── game.module.ts
│   ├── game.gateway.ts          # WebSocket gateway
│   ├── rooms/
│   │   ├── monopoly.room.ts     # Colyseus Room
│   │   └── monopoly.schema.ts   # State Schema
│   ├── services/
│   │   ├── vrf.service.ts       # Provably-fair dice
│   │   ├── hydra.service.ts     # Hydra integration
│   │   └── game-logic.service.ts
│   └── entities/
│       ├── player.entity.ts
│       ├── property.entity.ts
│       └── game-state.entity.ts
├── hydra/
│   ├── hydra.module.ts
│   ├── head-manager.service.ts  # Head lifecycle
│   ├── state-serializer.ts      # Game → Datum
│   └── tx-builder.service.ts    # Aiken TX builder
└── wallet/
    ├── wallet.module.ts
    └── utxo-dev.service.ts      # UTXO.dev API
```

### 2.2 Colyseus Room & State Schema

**Room Lifecycle:**
```typescript
export class MonopolyRoom extends Room<MonopolyState> {
  maxClients = 4;

  onCreate(options: any) {
    this.setState(new MonopolyState());
    this.hydraService.openHead(this.roomId);
  }

  onJoin(client: Client, options: any) {
    const player = new Player(client.sessionId, options.walletAddress);
    this.state.players.set(client.sessionId, player);
  }

  onMessage(client: Client, message: any) {
    switch (message.type) {
      case "ROLL_DICE":
        this.handleDiceRoll(client);
        break;
      case "BUY_PROPERTY":
        this.handleBuyProperty(client, message.propertyId);
        break;
      // ... other actions
    }
  }

  onLeave(client: Client) {
    this.state.players.delete(client.sessionId);
  }

  onDispose() {
    this.hydraService.closeHead(this.roomId);
  }
}
```

**State Schema (Auto-sync to clients):**
```typescript
export class MonopolyState extends Schema {
  @type({ map: Player }) players = new MapSchema<Player>();
  @type({ map: Property }) properties = new MapSchema<Property>();
  @type("string") currentTurn: string;
  @type("number") turnNumber: number;
  @type("number") dice1: number;
  @type("number") dice2: number;
  @type("string") phase: GamePhase;
  @type("string") lastVrfProof: string;
}

export class Player extends Schema {
  @type("string") id: string;
  @type("string") walletAddress: string;
  @type("number") position: number;
  @type("number") money: number;
  @type("boolean") inJail: boolean;
  @type(["string"]) ownedProperties: string[];
}

export class Property extends Schema {
  @type("number") id: number;
  @type("string") name: string;
  @type("string") owner: string;
  @type("number") houses: number;
  @type("boolean") mortgaged: boolean;
}
```

### 2.3 Provably-Fair VRF Engine

**Algorithm:**
```typescript
export class VrfService {
  // Server generates secret seed before game starts
  generateServerSeed(): { seed: string; commitment: string } {
    const seed = crypto.randomBytes(32).toString("hex");
    const commitment = this.hash(seed);
    return { seed, commitment };
  }

  // Dice roll using server seed + client seed + nonce
  rollDice(
    serverSeed: string,
    clientSeed: string,
    nonce: number
  ): { result: number; proof: VrfProof } {
    const combined = `${serverSeed}:${clientSeed}:${nonce}`;
    const hash = this.hash(combined);

    // Extract dice values from hash
    const dice1 = (parseInt(hash.slice(0, 8), 16) % 6) + 1;
    const dice2 = (parseInt(hash.slice(8, 16), 16) % 6) + 1;

    const proof: VrfProof = {
      serverSeed,
      clientSeed,
      nonce,
      hash,
      dice1,
      dice2,
    };

    return { result: dice1 + dice2, proof };
  }

  // Anyone can verify
  verifyRoll(proof: VrfProof): boolean {
    const combined = `${proof.serverSeed}:${proof.clientSeed}:${proof.nonce}`;
    const expectedHash = this.hash(combined);
    return expectedHash === proof.hash;
  }

  private hash(input: string): string {
    return crypto.createHash("sha256").update(input).digest("hex");
  }
}
```

**Flow:**
1. Game start → Server commits to `serverSeedCommitment`
2. Each turn → Client provides `clientSeed` (can be Discord user input)
3. Dice roll → Server reveals `serverSeed`, computes result, returns `proof`
4. Client can verify → `hash(serverSeed) === serverSeedCommitment`
5. Proof stored → On-chain in transaction metadata

---

## Layer 3: Hydra Integration Layer

### 3.1 Head Lifecycle Manager

```typescript
export class HeadManagerService {
  private heads: Map<string, HydraHead> = new Map();

  async openHead(roomId: string, participants: string[]): Promise<string> {
    // Initialize Hydra Head for this game session
    const head = await this.hydraClient.init({
      participants: participants.map(p => p.walletAddress),
      contestationPeriod: 60, // 60 seconds
    });

    // Commit initial game state
    await head.commit(this.serializeInitialState());

    this.heads.set(roomId, head);
    return head.id;
  }

  async submitTurn(roomId: string, turnData: TurnAction): Promise<TxId> {
    const head = this.heads.get(roomId);

    // Create transaction within Hydra Head
    const tx = await head.newTx({
      inputs: [head.currentUtxo],
      outputs: [{
        address: head.scriptAddress,
        datum: this.serializeTurnDatum(turnData),
        value: head.currentUtxo.value,
      }],
    });

    // Submit to Hydra (instant, no fees)
    const txId = await head.submit(tx);
    return txId;
  }

  async closeHead(roomId: string): Promise<SettlementTx> {
    const head = this.heads.get(roomId);

    // Close head, settle final state to L1
    const settlement = await head.close();

    // Fanout rewards to players
    await head.fanout();

    this.heads.delete(roomId);
    return settlement;
  }
}
```

### 3.2 State Serializer (Game State → Plutus Datum)

```typescript
export class StateSerializer {
  // Convert Colyseus state to Plutus Datum format
  serializeGameState(state: MonopolyState): PlutusData {
    return {
      constructor: 0, // GameState
      fields: [
        // Players array
        {
          list: Array.from(state.players.values()).map(p => ({
            constructor: 0, // Player
            fields: [
              { bytes: p.walletAddress },
              { int: p.position },
              { int: p.money },
              { int: p.inJail ? 1 : 0 },
              { list: p.ownedProperties.map(id => ({ int: id })) },
            ],
          })),
        },
        // Current turn
        { bytes: state.currentTurn },
        // Turn number
        { int: state.turnNumber },
        // Last dice roll
        { int: state.dice1 },
        { int: state.dice2 },
        // VRF proof hash
        { bytes: state.lastVrfProof },
      ],
    };
  }

  // Deserialize from chain (for verification/replay)
  deserializeGameState(datum: PlutusData): MonopolyState {
    // Reverse of above
  }
}
```

### 3.3 Aiken Smart Contract (Game Rules Validator)

```aiken
// validators/polyhydra.ak

type GameState {
  players: List<Player>,
  current_turn: ByteArray,
  turn_number: Int,
  dice1: Int,
  dice2: Int,
  vrf_proof: ByteArray,
}

type Player {
  wallet: ByteArray,
  position: Int,
  money: Int,
  in_jail: Int,
  owned_properties: List<Int>,
}

type GameAction {
  RollDice { player: ByteArray, vrf_proof: ByteArray }
  BuyProperty { player: ByteArray, property_id: Int }
  PayRent { from: ByteArray, to: ByteArray, amount: Int }
  EndTurn { player: ByteArray }
}

validator polyhydra_game {
  fn validate(
    datum: GameState,
    redeemer: GameAction,
    ctx: ScriptContext
  ) -> Bool {
    when redeemer is {
      RollDice { player, vrf_proof } -> {
        // Verify it's player's turn
        expect datum.current_turn == player
        // VRF proof validation (simplified)
        expect verify_vrf(vrf_proof, datum.turn_number)
        True
      }
      BuyProperty { player, property_id } -> {
        // Verify player has enough money
        // Verify property is unowned
        // Verify player is on that property
        True
      }
      PayRent { from, to, amount } -> {
        // Verify rent calculation is correct
        // Verify property ownership
        True
      }
      EndTurn { player } -> {
        // Verify turn advancement is valid
        True
      }
    }
  }
}
```

---

## Data Flow: Complete Turn Sequence

```
┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐
│ Client  │  │ Server  │  │ Hydra   │  │ Cardano │
└────┬────┘  └────┬────┘  └────┬────┘  └────┬────┘
     │            │            │            │
     │ 1. ROLL_DICE           │            │
     │ {clientSeed}           │            │
     ├───────────────────────►│            │
     │            │            │            │
     │            │ 2. Generate VRF result │
     │            │ {serverSeed+clientSeed+nonce}
     │            │            │            │
     │            │ 3. Build turn TX      │
     │            │ {newState, vrfProof}  │
     │            ├───────────►│            │
     │            │            │            │
     │            │ 4. Hydra snapshot     │
     │            │ (instant, 0 fee)      │
     │            │◄───────────┤            │
     │            │            │            │
     │ 5. State update (Colyseus patch)   │
     │ {position, dice, proof}            │
     │◄───────────┤            │            │
     │            │            │            │
     │ 6. Animate dice, move token        │
     │            │            │            │
     │            │            │            │
   [Game continues...]        │            │
     │            │            │            │
     │            │ N. Game ends          │
     │            │ Close Hydra Head      │
     │            ├───────────►│            │
     │            │            │            │
     │            │            │ Settlement TX
     │            │            ├───────────►│
     │            │            │            │
     │            │            │ Final state│
     │            │            │ on L1      │
     │            │            │◄───────────┤
     │            │            │            │
```

---

## Latency Analysis

| Operation | Expected Latency | Notes |
|-----------|------------------|-------|
| Client → Server (WebSocket) | 50-100ms | Discord proxy adds ~20ms |
| VRF calculation | <10ms | Pure CPU, single hash |
| Hydra snapshot | <200ms | L2, instant finality |
| Colyseus state patch | <50ms | Binary diff, optimized |
| **Total turn latency** | **~300-400ms** | Acceptable for turn-based |
| Game settlement (L1) | 20-60s | Only at game end |

---

## Security Considerations

### VRF Integrity
- Server seed committed before game starts
- Client seed from user input (can't be predicted)
- Proof stored on-chain for audit

### Hydra Head Security
- All participants must agree on state
- Contestation period allows disputes
- Final settlement is L1-secured

### Wallet Security (UTXO.dev)
- Custodial but reputable service
- Users can export to self-custody
- Server-side signing reduces client complexity

### Smart Contract Auditing
- Aiken formal verification where possible
- Testnet validation extensive
- Open-source for community review

---

## Open Questions

1. **Hydra Head Size Limits** - Max participants per head? Max state size?
2. **UTXO.dev Discord OAuth** - Confirmed working in iframe?
3. **Colyseus + Hydra Latency** - Real-world benchmarks needed
4. **Discord URL Mapping Approval** - Any restrictions on blockchain APIs?
5. **Aiken Contract Size** - Fit within Cardano script limits?

---

## Summary

**Architecture Strengths:**
- Clean separation: Client (Phaser) → Server (Colyseus) → Chain (Hydra)
- Proven tech stack: Colyseus used in Web3 games (Chainers, Carbon Heavy)
- Discord Activity compatible: All constraints addressed
- Provably-fair: VRF with on-chain proofs
- Scalable: Each game = isolated Hydra Head

**Implementation Priority:**
1. Colyseus room + state schema (core multiplayer)
2. VRF engine (provably-fair dice)
3. Hydra integration (L2 settlement)
4. Discord Activity wrapper (distribution)
5. UTXO.dev wallet (user onboarding)
