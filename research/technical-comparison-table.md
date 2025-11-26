# Technical Comparison: Turn-Based Game Architectures on Blockchain

## Quick Reference Table

### Architecture Patterns Comparison

| Feature | L1 Native | L2 Rollup | State Channel | Hydra Head | Sidechain |
|---------|-----------|-----------|---------------|-----------|-----------|
| **Examples** | Cardano, Bitcoin | Arbitrum, Optimism | Counterfactual, Perun | Hydra Doom, Polyhydra | Ronin, Polygon |
| **TPS in-game** | 250 | 4,000-40,000 | ∞ (off-chain) | 1,000+ | 10,000+ |
| **Block time** | 20s | 2-4s | Instant (signed) | <1s (off-chain) | 3s |
| **Cost/turn** | ~0.17 ADA ($0.07) | $0.001-0.01 | $0 (settle only) | ~$0.0001 (via L1) | ~$0.001 |
| **Players/session** | 2-100 | 2-100 | 2-4 (optimal) | 4-30 | 2-100 |
| **Finality type** | Blockchain final | Rollup final + L1 | Local instant + dispute | Head snapshot + L1 | Sidechain + bridge |
| **Decentralization** | High | High | High | High | Medium-Low |
| **Implementation complexity** | Medium | Medium | High | Very High | High |
| **Gaming ecosystem maturity** | Early (Cardano) | Mature (Polygon) | Academic | Emerging (IOG demos) | Mature (Ronin) |
| **Best use case** | Small-scale casual | Medium scale (1000s) | 2-4 player sync | Medium scale (100s-1000s) | Medium-large scale |

---

## Detailed Architecture Patterns

### 1. L1 Native (Cardano Example)

**Turn Flow:**
```
Player 1 submits TX → L1 processes (20s) → State updates → Event broadcast
Player 2 submits TX → L1 processes (20s) → State updates → Event broadcast
Game continues...
```

**State Management:**
```solidity
// Cardano (PlutusScript)
data GameState = GameState {
  board :: BoardState,
  currentPlayer :: Address,
  nonce :: Int,
  stateHash :: Hash
}

// Only state hash stored on-chain
record GameRecord = Record {
  stateHash: Hash,
  playerBalance: [ADA],
  timestamp: POSIXTime
}
```

**Gas Model:**
- Per-turn cost: ~100k-500k gas (Cardano executes full validation)
- Scaling: Each turn is independent TX
- For 30-turn game: 30 × 0.17 ADA = 5.1 ADA (~$2.14)

**Pros:**
- True decentralization (no sidechains)
- Native UTxO model excellent for game assets
- Native NFT support (no wrapping needed)

**Cons:**
- 20-second block time (perceptible lag)
- Limited to ~250 TPS network-wide
- Not optimized for rapid state updates

---

### 2. L2 Rollup (Arbitrum/Optimism Example)

**Turn Flow:**
```
Player 1 TX submitted → L2 processes (2-4s) → State updates → Batched to L1 (every 10-30s)
Player 2 TX submitted → L2 processes (2-4s) → State updates → Batched to L1
[Eventually: All state changes compressed into 1 L1 TX]
```

**State Management:**
```solidity
// On Arbitrum/Optimism
contract GameState {
  struct GameSession {
    bytes32 stateHash;
    address currentPlayer;
    uint256 nonce;
    mapping(address => uint256) balances;
  }

  mapping(uint256 => GameSession) games;

  event ActionPerformed(uint256 gameId, address player, bytes action, bytes32 newState);
}
```

**Gas Model:**
- Per-turn L2 cost: 10k-50k gas (~$0.001-0.01)
- Batching: 100 turns = 1 L1 TX (amortized: ~10k gas per turn)
- For 30-turn game: ~0.03 ETH (~$90 at current rates)
- **vs Cardano:** 100x more expensive but 5x faster (2-4s vs 20s)

**Pros:**
- Fast block times (2-4 seconds)
- High throughput (4,000-40,000 TPS)
- EVM compatible (Solidity tools, libraries)
- Mature ecosystem (Polygon, Arbitrum, Optimism)

**Cons:**
- Still has latency (can't use for real-time games)
- Costs scale with game complexity
- Withdrawal delays (5-7 days for Optimistic rollups to L1)

---

### 3. State Channels (Counterfactual / Force-Move / Perun)

**Turn Flow:**
```
Setup: Players exchange signed state commits
Turn 1: Player A signs new state, sends to B (instant)
Turn 2: Player B verifies math locally (CPU), signs counter-state, sends back (instant)
Turn 3: Player A signs next state (instant)
...
End: Final signed state submitted to contract (disputes trigger on-chain replay)
```

**State Serialization:**
```javascript
// State for signing
const stateForSigning = {
  appAddress: "0x123...",
  players: ["0xAlice", "0xBob"],
  state: {
    board: [0,1,2,...],  // Board positions
    balances: [100, 95],  // Player scores
    turn: 3
  },
  nonce: 3,  // Turn counter
  timeout: 1700000000
};

// Hash it
const stateHash = keccak256(encode(stateForSigning));

// Sign it
const signature_a = sign(stateHash, privateKey_a);
const signature_b = sign(stateHash, privateKey_b);

// Store locally; only settle on-chain if dispute
```

**On-Chain Settlement (Dispute Case):**
```solidity
function progressGame(bytes stateData, bytes[] signatures) {
  // Verify both signatures match state hash
  address signer_a = ecrecover(stateHash, sig_a);
  address signer_b = ecrecover(stateHash, sig_b);

  require(signer_a == player_a && signer_b == player_b);

  // Validate game logic
  require(validateMove(prevState, stateData));

  // Update on-chain
  gameState = stateData;
}
```

**Gas Model:**
- Per-turn L1 cost: $0 (all off-chain)
- Settlement: 1-2 TX (~$1-5 total for entire game if no disputes)
- For 30-turn game: ~$1-2 (1000x cheaper than L2!)

**Pros:**
- Instant moves (off-chain signing)
- Minimal gas cost
- Fully decentralized (no oracles, sidechains)
- Perfect for 2-4 player games

**Cons:**
- Requires both players online continuously
- Dispute resolution adds complexity
- Scalable to ~4 players max (more players = exponential signatures)
- Not suitable for async gameplay

---

### 4. Hydra Head (Cardano L2)

**Head Lifecycle:**
```
1. OPEN: Party A & B open a Head with initial state
   - Both sign TxInit + TxMut
   - Head address created on-chain
   - Off-chain head begins

2. EXECUTE: Players make moves within Head
   - Player A sends signed move → Player B validates locally
   - No on-chain TX; pure off-chain consensus
   - Happens at 1000+ TPS within head
   - Snapshot every N turns (for recovery)

3. CLOSE: One player initiates close
   - Winner or both agree on final state
   - Both sign final snapshot
   - Final state (winner, balances, transcript hash) committed to L1

4. SETTLE: L1 records outcome
   - Head closed on-chain
   - Rewards distributed
   - On-chain: Single TX, ~3k gas total
```

**State Management (Inside Head):**
```
Initial UTxO: {gameId: 123, state: {...}, nonce: 0}

Move 1 (Player A): {gameId: 123, state: {...}, nonce: 1}
Move 2 (Player B): {gameId: 123, state: {...}, nonce: 2}
...
Move 30 (Player A): {gameId: 123, state: {...}, nonce: 30, winner: A}

Final snapshot signed by both → close head
```

**Gas Model:**
- Per-turn cost: $0 (all off-chain within Head)
- Settlement: 1 L1 TX (~0.17 ADA = $0.07 for entire game)
- For 30-turn game: **~$0.07 total**

**Pros:**
- Cheapest on-chain cost (1 TX per game)
- Fastest turn execution (1000+ TPS)
- Complete state privacy within head (no leakage to chain)
- Cardano-native (UTxO model perfect for game assets)
- Proven (Hydra Doom, Hydra Minecraft)

**Cons:**
- Both players must stay connected (Head closes if one drops)
- Requires Hydra node + head orchestration
- Academic/new (not battle-tested like Ethereum rollups)
- Limited to ~2-30 players per head (design tradeoff)

**Optimal for Polyhydra:**
- Discord Activity game (players sync via Discord chat anyway)
- Asynchronous play (player disconnects = pause game, resume later)
- One Head per game session
- Final settlement on L1 when game concludes

---

### 5. Sidechain (Ronin Example)

**Transaction Flow:**
```
Player TX submitted → Sidechain validators process (3s block) → State updates
Periodic checkpoint (every ~100 blocks) → Committed to L1 via Plasma bridge
Players can exit to L1 anytime (challenge period: ~7 days)
```

**State Management:**
```solidity
// On Ronin sidechain (EVM-compatible)
contract Monopoly {
  struct GameState {
    bytes32 stateHash;
    address[] players;
    mapping(address => uint256) balances;
    uint256 currentTurnIndex;
  }

  mapping(uint256 => GameState) games;
}

// Periodic checkpoints to Ethereum (Plasma-style)
function submitCheckpoint(bytes32 newRoot) {
  require(msg.sender == validator);
  // Submit new state root to Ethereum
  mainchain.checkpoint(newRoot);
}
```

**Gas Model:**
- Per-turn sidechain cost: ~1k gas (~$0.001 or less on Ronin)
- L1 settlement: Amortized (~1 checkpoint per 100 turns)
- For 30-turn game: ~$0.03-0.05

**Pros:**
- Stable, predictable TPS (3-second blocks)
- Simple EVM development (Solidity)
- Established player base (Axie Infinity, Pixels)
- Fast finality on sidechain (3-10 seconds)

**Cons:**
- Trust assumption: sidechain validators (PoA initially, now DPoS)
- L1 exit delays (7-day challenge period on bridges)
- Developer lock-in (need sidechain ecosystem)
- Not ideal for decentralization-first games

---

## State Serialization Comparison

### Compact Format (State Channels / Hydra)
```
TURN_DATA {
  GAME_ID: 2 bytes
  PLAYER_ID: 1 byte
  ACTION: 1 byte (1=roll, 2=buy, 3=pay)
  ACTION_PARAM: variable (2-4 bytes)
  NONCE: 2 bytes
  TIMESTAMP: 4 bytes
}
Total per turn: ~12-20 bytes
30-turn game: ~400 bytes

STATE_SNAPSHOT {
  BOARD_STATE: 50 props × 4 bytes = 200 bytes
  PLAYER_DATA: 8 players × 20 bytes = 160 bytes
  GAME_META: 50 bytes
}
Total snapshot: ~410 bytes
Compressed (gzip): ~150 bytes
```

### Full State (L1/L2 Storage)
```solidity
mapping(uint256 => GameState) games;

struct GameState {
  bytes32 stateHash;           // 32 bytes
  address[] players;           // 20 × 8 players = 160 bytes (pointer)
  uint256[] balances;          // 32 × 8 = 256 bytes (pointer)
  mapping(address => uint256) playerPosition;  // Dynamic
  mapping(uint256 => Property) properties;     // 50 properties × 80 bytes = 4000 bytes
}

Total storage per game: ~4.5 KB on-chain
30 concurrent games: ~135 KB (expensive for L1)
```

---

## Randomness Implementation Comparison

### Method 1: Chainlink VRF (On L2 - Polygon/Arbitrum)
```solidity
import "@chainlink/contracts/src/v0.8/VRFConsumerBaseV2.sol";

contract DiceGame is VRFConsumerBaseV2 {
  uint64 s_subscriptionId;

  function rollDice() external returns (uint256 requestId) {
    requestId = COORDINATOR.requestRandomWords(
      keyHash,
      s_subscriptionId,
      requestConfirmations = 3,
      callbackGasLimit = 100000,
      numWords = 1  // 1 random number
    );
  }

  function fulfillRandomWords(uint256 requestId, uint256[] memory randomWords) internal override {
    uint256 diceResult = (randomWords[0] % 6) + 1;
    gameState.diceResult = diceResult;
    gameState.turn++;
  }
}
```

**Cost:** ~0.25 LINK (~$5-10 per roll) + gas
**Latency:** 3-5 blocks (~10-20 seconds)
**Security:** Cryptographically verified, oracle-backed

### Method 2: Commit-Reveal (State Channels / Hydra)
```solidity
contract DiceGame {
  struct CommitPhase {
    bytes32 commitA;  // keccak256(clientSeed_a)
    bytes32 commitB;  // keccak256(clientSeed_b)
    uint256 expiry;
  }

  function commit(bytes32 clientCommit) external {
    commits[gameId][msg.sender] = clientCommit;
  }

  function reveal(bytes clientSeed) external {
    require(keccak256(clientSeed) == commits[gameId][msg.sender]);

    // Both seeds collected?
    if (bothRevealed) {
      uint256 diceRoll = uint256(keccak256(seedA + seedB + nonce)) % 6 + 1;
      state.diceResult = diceRoll;
    }
  }
}
```

**Cost:** ~$0.01-0.1 (2 TX: commit + reveal)
**Latency:** <1 second (off-chain verification)
**Security:** Depends on commitment hash (SHA256), requires both players honest

### Method 3: Server Seed + Client Nonce (Off-Chain)
```javascript
// Client side
const clientNonce = generateRandomNumber();
const rollRequest = {gameId, clientNonce, playerId};

// Server validates move, responds:
const serverSeed = getServerSeedForGame(gameId);
const nonce = getNextNonce(gameId);
const diceRoll = parseInt(keccak256(serverSeed + clientNonce + nonce).toString('hex').substring(0, 2)) % 6 + 1;

// Server stores all rolls
gameTranscript.push({turn, player, diceRoll, serverSeed, nonce});

// Post-game settlement
// Player verifies: keccak256(revealedServerSeed) === commitmentHashFromGameStart
```

**Cost:** $0 (off-chain, settled post-game)
**Latency:** Instant
**Security:** Trust-based (requires server honesty for post-game reveal)

---

## Recommendation Matrix

**Choose based on your constraints:**

| If You Want | Solution | Why |
|------------|----------|-----|
| Fastest per-turn latency + lowest cost | State Channels | Instant moves, $0 per turn |
| Decentralization + moderate cost | Hydra Head | 1000 TPS, ~$0.07 per game |
| Largest ecosystem + proven games | Polygon L2 | 100+ games active, mature |
| Cheapest long-term + casual play | Cardano L1 | Low per-game cost, no bridge risk |
| Easy onboarding + sync gameplay | Sidechain (Ronin) | Simple EVM, established ecosystem |
| Trustless randomness + proof | Chainlink VRF | Industry standard, GLI-19 certified |
| Decentralized randomness | Commit-Reveal | No oracles, but 2-phase interaction |

---

**For Polyhydra:**
- **Architecture:** Hydra Head
- **Per-game cost:** ~$0.07 (single L1 settlement TX)
- **Randomness:** Commit-reveal within head (instant, trustless)
- **Settlement:** Off-chain snapshots + single L1 TX at game close
- **Scalability:** 1000+ TPS within head, unlimited concurrent games (1 head per game or N games per head)
