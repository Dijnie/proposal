# Technical Feasibility Report: Polyhydra

**Date:** 2025-11-26

---

## Executive Summary

Polyhydra's technical stack is feasible with current production-ready technologies. Hydra v1.0 (Oct 2025) provides 1000+ TPS, Discord Activities SDK (March 2024) enables iframe embedding, Phaser 3 is proven for web games, and CIP-30 wallet integration is mature.

---

## 1. Hydra Protocol Assessment

### Production Readiness: READY
- **Hydra v1.0** achieved production status October 2025
- Validated through "Hydra Doom" demo: 807,000+ TPS peak
- Active development by IOG with monthly updates

### Technical Capabilities
| Feature | Status | Gaming Relevance |
|---------|--------|------------------|
| 1000 TPS per head | Production | Real-time gameplay |
| Isomorphic contracts | Production | Same Plutus scripts L1/L2 |
| State channel commits | Production | Game state saves |
| HTTP/WebSocket API | Production | Game server integration |
| Multi-party heads | Production | Multiplayer sessions |

### Integration Requirements
- `hydra-node` instance (4+ cores, 24GB RAM, 150GB SSD)
- Cardano node connection or Blockfrost API
- `--cardano-signing-key` with 50+ ADA for fees
- Protocol version 0.10.0+ for mainnet

### Limitations
- Static topology (network config required upfront)
- Participant limits per head (scalable via multiple heads)
- 200-second grace time for Close/Contest transactions

### Existing Gaming Implementations
- Hydra Doom Tournament (1M TPS demo)
- Flappy Bird (live, BIRD token rewards)
- Rock Paper Scissors (live, crypto rewards)
- Tower Defense DAO (upcoming)

---

## 2. Discord Activities SDK Assessment

### Production Readiness: READY
- Global rollout March 2024
- 700,000 DAU achieved by "Death by AI" game
- Full mobile/desktop/web support

### Technical Architecture
```
Discord Client (iframe)
    └── Embedded App SDK (@discord/embedded-app-sdk)
        └── Web Game (Phaser 3 + HTML5)
            └── Backend (Node.js/WebSocket)
                └── Hydra Node
```

### Key Features for Polyhydra
| Feature | Purpose |
|---------|---------|
| Authentication | Discord OAuth for user identity |
| Voice integration | Speaking detection for games |
| Rich Presence | Show game state on profile |
| Monetization API | In-app purchases (SKUs) |
| Proxy/CSP | Security, DDoS protection |

### Integration Constraints
- All requests proxied through Discord
- URL mappings required for external services (Hydra API)
- iframe security sandbox

---

## 3. Phaser 3 + Blockchain Integration

### Proven Integration Pattern
```javascript
// Web3.js + Phaser 3 architecture
Phaser.Game (client)
    └── Web3.js (wallet connection)
        └── CIP-30 connector (UTXO.dev/Nami/Eternl)
            └── Smart contract calls
```

### Blockchain Use Cases in Phaser
- In-game currency management
- NFT asset ownership
- Immutable score recording
- P2P asset transactions

### Performance Considerations
- Phaser handles 60fps rendering
- Blockchain calls async (non-blocking)
- Game state cached locally, synced to Hydra

---

## 4. UTXO.dev / Wallet Integration

### UTXO.dev Tools
- **WalletDrop**: In-browser .skey usage via CIP-30
- **Transaction Builder**: Visual Tx construction
- **UTxO Consolidator**: Fee optimization

### Integration Method
- Standard CIP-30 DApp Connector
- No browser extension required (via WalletDrop)
- Client-side key management (non-custodial)

### Fallback Options
- Nami, Eternl, Lace (extension wallets)
- All use same CIP-30 interface

### Gaming Transaction Flow
```
1. User loads .skey in WalletDrop
2. Game requests Tx signature via CIP-30
3. Client-side signing (never leaves browser)
4. Signed Tx submitted to Hydra head
```

---

## 5. Provably-Fair Randomness (VRF)

### Implementation Options

**Option A: On-chain VRF Oracle**
- Chainlink VRF not native to Cardano
- Cardano native VRF via `sortition` in Ouroboros
- Custom oracle implementation required

**Option B: Commit-Reveal Scheme**
```
1. Server commits hash(salt + value)
2. Player makes decision
3. Server reveals salt + value
4. Smart contract verifies hash match
```

**Option C: Hydra-native Randomness**
- Use Hydra head finality as randomness source
- Combine with commit-reveal for fairness

### Recommended Approach
Commit-reveal scheme with Hydra settlement:
- Simple implementation
- Provable on-chain
- No oracle dependency

---

## 6. Architecture Diagram

```
┌─────────────────────────────────────────────────────────┐
│                    DISCORD CLIENT                        │
│  ┌─────────────────────────────────────────────────┐   │
│  │           DISCORD ACTIVITY (iframe)              │   │
│  │  ┌─────────────┐  ┌──────────────────────────┐  │   │
│  │  │  Phaser 3   │  │   Embedded App SDK       │  │   │
│  │  │  Game UI    │  │   (auth, voice, presence)│  │   │
│  │  └──────┬──────┘  └────────────┬─────────────┘  │   │
│  │         │                      │                 │   │
│  │  ┌──────┴──────────────────────┴─────────┐      │   │
│  │  │         UTXO.dev / CIP-30             │      │   │
│  │  │      (wallet, signing, Tx build)      │      │   │
│  │  └───────────────────┬───────────────────┘      │   │
│  └──────────────────────│───────────────────────────┘   │
└─────────────────────────│───────────────────────────────┘
                          │ WebSocket
┌─────────────────────────┴───────────────────────────────┐
│                    GAME SERVER                           │
│  ┌─────────────────┐  ┌─────────────────────────────┐   │
│  │  Game Logic     │  │    Hydra Client             │   │
│  │  State Manager  │  │    (hydra-node API)         │   │
│  └────────┬────────┘  └─────────────┬───────────────┘   │
│           │                         │                    │
│  ┌────────┴─────────────────────────┴───────────────┐   │
│  │           VRF / Commit-Reveal Engine             │   │
│  └──────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘
                          │
┌─────────────────────────┴───────────────────────────────┐
│                    HYDRA NODE                            │
│  ┌─────────────────────────────────────────────────┐   │
│  │  Hydra Head (1000+ TPS, instant finality)       │   │
│  │  - Game session state                           │   │
│  │  - Player balances                              │   │
│  │  - VRF commitments                              │   │
│  └──────────────────────┬──────────────────────────┘   │
└─────────────────────────│───────────────────────────────┘
                          │ Settlement
┌─────────────────────────┴───────────────────────────────┐
│                 CARDANO MAINNET (L1)                     │
│  - Final game state settlement                          │
│  - NFT minting/transfers                                │
│  - Token rewards distribution                           │
└─────────────────────────────────────────────────────────┘
```

---

## 7. Risk Assessment

| Component | Risk | Severity | Mitigation |
|-----------|------|----------|------------|
| Hydra integration | Complex setup | HIGH | Reference implementations exist |
| Discord iframe security | CSP restrictions | MEDIUM | URL mappings, proxy config |
| UTXO.dev maturity | Limited docs | MEDIUM | Fallback to standard wallets |
| VRF on Cardano | No native oracle | MEDIUM | Commit-reveal scheme |
| Multi-head management | Scaling complexity | LOW | Start single-head MVP |

---

## 8. Conclusion

**Overall Feasibility: HIGH**

All core technologies are production-ready:
- Hydra v1.0 proven for gaming (Hydra Doom)
- Discord Activities mature with 700K DAU games
- Phaser 3 + Web3 integration well-documented
- CIP-30 wallet standard established

**Critical Path:**
1. Hydra node setup and API integration
2. Discord Activity proxy configuration
3. Commit-reveal VRF implementation
4. Game state serialization for Hydra

---

## Unresolved Questions

1. Hydra head cost model for sustained operation
2. Discord's stance on crypto/NFT integrations
3. UTXO.dev team availability for support
4. Multi-region Hydra node deployment strategy
