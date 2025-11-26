# Polyhydra - Ideation Summary

**Date:** 2025-11-26
**Category:** Cardano Use Cases: Prototype & Launch
**Budget:** ₳70,000 (MVP)
**Timeline:** 6 months

---

## Problem Statement (200 chars)

Cardano GameFi lacks user traction. Discord has 200M+ gamers with zero Cardano presence. No bridge exists to onboard Web2 users into Cardano ecosystem.

## Solution Overview (200 chars)

Polyhydra: Fun board game as Discord Activity to attract Web2 gamers to Cardano. Simple gameplay, Hydra-powered, provably-fair. Gateway to Cardano GameFi.

---

## Two Primary Goals

1. **🎯 Onboard Web2 Users to Cardano** - Discord is where 200M+ gamers are. We build a fun game there, let them discover Cardano naturally.

2. **🚀 Boost Cardano GameFi Ecosystem** - Open-source patterns, provably-fair standard, real user data. One game to inspire many.

---

## Game Concept: Monopoly-Style Board Game

**Core Gameplay:**
- 2-6 players in voice channel
- Turn-by-turn: roll dice, buy/rent/sell properties, event cards
- Intuitive UI with smooth animations
- Game ends → Head closes → Match transcript recorded on L1

**Why This Approach:**
- **Fits turn-based nature** - Hydra perfect for sequential state updates
- **Reduced friction via Discord** - Players already there; no wallet per turn
- **Trust & Fairness** - PF dice + on-chain history = no cheating possible

---

## Refined Problem Statement

The Cardano GameFi ecosystem faces critical gaps:

1. **Speed Limitation**: L1 transactions too slow for real-time gaming (20-30 TPS)
2. **Fairness Trust Issues**: No standardized provably-fair randomness for Cardano games
3. **Poor Distribution**: Games isolated from social platforms; Discord has 200M+ monthly gamers
4. **Wallet UX Friction**: Complex wallet connections deter mainstream adoption
5. **No Hydra Production Apps**: Doom/Minecraft are demos, no community-scale products

---

## Proposed Solution

**Polyhydra** is a Monopoly-style Discord Activity board game combining:

| Component | Technology | Purpose |
|-----------|------------|---------|
| L2 Scaling | Hydra Protocol | 1000+ TPS, turn processing off-chain |
| Frontend | React/TypeScript | Discord Activity iframe, board UI |
| Orchestrator | Node.js | Game rules, PF engine, Hydra coordinator |
| Wallet | UTXO.dev (CIP-30) | Non-custodial, only for rewards/NFTs |
| Randomness | Commit-Reveal (HMAC/SHA256) | Provably-fair dice, verifiable from transcript |
| Settlement | Hydra → L1 Fan-out | txID + state hash + metadata on-chain |

---

## Technical Architecture

```
┌─────────────────────────────────────────────────────────┐
│              DISCORD ACTIVITY (iframe)                  │
│  ┌─────────────────┐  ┌───────────────────────────┐    │
│  │   React/TS UI   │  │   Embedded App SDK        │    │
│  │   Board Game    │  │   (auth, voice, events)   │    │
│  └────────┬────────┘  └─────────────┬─────────────┘    │
└───────────│─────────────────────────│──────────────────┘
            │ WebSocket/Events        │
┌───────────┴─────────────────────────┴──────────────────┐
│                    ORCHESTRATOR                         │
│  ┌────────────────┐  ┌────────────────────────────┐    │
│  │  Game Rules    │  │   Hydra Coordinator        │    │
│  │  (buy/rent/    │  │   (open/close heads)       │    │
│  │   sell/events) │  └─────────────┬──────────────┘    │
│  └────────┬───────┘                │                    │
│           │  Provably Fair Engine  │                    │
│           │  commit(H) → reveal →  │                    │
│           │  SHA256(server+client) │                    │
└───────────┴────────────────────────┴───────────────────┘
                        │
┌───────────────────────┴────────────────────────────────┐
│                    HYDRA HEAD                           │
│  - Opens when table created                            │
│  - State machine: positions, assets, balances          │
│  - Turn-by-turn commits (instant, ~0 cost)             │
│  - Closes at game end → fan-out to L1                  │
└───────────────────────┬────────────────────────────────┘
                        │ Settlement
┌───────────────────────┴────────────────────────────────┐
│                  CARDANO L1                             │
│  - Match transcript (txID, state hash, metadata)       │
│  - Leaderboard update                                  │
│  - Reward distribution / NFT minting                   │
└────────────────────────────────────────────────────────┘
```

**Reliability Features:**
- Pause/resume support
- Reconnect handling
- Light snapshots for recovery
- Auto-forfeit for disconnected players

---

## Unique Value Proposition

| Web2 Experience | Web3 Transparency |
|-----------------|-------------------|
| Fast turns (instant) | On-chain game transcript |
| Low latency gameplay | Provably Fair dice/events |
| No wallet per turn | Verifiable match history |
| Discord-native UX | Settlement NFTs/rewards |

**Key Differentiators:**
1. **First Hydra Board Game** - Proving Hydra "in the field" with real user data
2. **First Cardano Discord Activity** - Access to 200M+ Discord gamers
3. **Dual Experience** - Fast like Web2, transparent like Web3
4. **Provably Fair** - Commit-reveal dice, auditable post-game
5. **Opening Door to New Users** - Web2→Web3 funnel via familiar game

---

## Target Catalyst Category

**Cardano Use Cases: Prototype & Launch** (15,000 - 200,000 ADA)

**Rationale:**
- Building novel on-chain utility (Hydra GameFi)
- Entrepreneurial team with technical capability
- Prototype-focused scope fits category intent
- Innovation: First Discord Activity on Cardano

---

## Impact Metrics (MVP Scope)

### On-Chain Measurable
| Metric | Target (6 months) | Source |
|--------|-------------------|--------|
| Hydra Transactions | 100,000+ | Head activity logs |
| Unique Wallets | 300+ | L1 addresses |
| Game Transcripts | 5,000+ | Settlement txs |
| Hydra Heads opened/closed | Track | Node metrics |
| Median fee/game | <$0.10 | On-chain data |
| Transcript NFTs | Track | L1 mints |

### Off-Chain Measurable
| Metric | Target | Source |
|--------|--------|--------|
| Discord Installs | 1,000+ | Developer Portal |
| MAU/WAU/DAU | Track growth | Analytics |
| Retention Rate | >20% D7 | Analytics |
| Games/week | 500+ | Server logs |
| Error rate | <1% | Monitoring |

### Web2→Web3 Funnel
| Metric | Target | Purpose |
|--------|--------|---------|
| % players connecting wallet | Track | Conversion |
| % receiving rewards/NFTs | Track | Engagement |

**All txIDs publicly listed for community self-verification.**

---

## Target Users & Beneficiaries

| Segment | Benefit |
|---------|---------|
| **Discord Groups (2-6 players)** | Play together turn-by-turn, Web2-like smoothness with Web3 transparency, anti-cheating, on-chain record |
| **Web3 Newcomers** | Access Cardano through familiar game; no wallet needed per turn, only for rewards/NFTs |
| **Cardano Ecosystem** | Increased visibility, on-chain activity from Discord users |
| **Hydra Developers** | Real production data, open-source patterns to reuse |

---

## Feasibility Assessment

### Technical Feasibility: HIGH
- Hydra v1.0 production-ready (Oct 2025)
- Discord Activities SDK mature (March 2024 GA)
- Phaser 3 proven for Discord games
- UTXO.dev tools available for CIP-30

### Team Requirements (MVP - 2 devs)
- Full-stack dev (Hydra/TypeScript/Phaser)
- Game dev (Phaser 3/Discord SDK)
- Part-time: Designer/UX

### Timeline (6 months)
| Month | Phase | Deliverable |
|-------|-------|-------------|
| 1-2 | Architecture | Hydra setup, Docker, tech spec |
| 3-4 | Development | Game + wallet integration |
| 5 | Integration | VRF + Discord Activity |
| 6 | Launch | Production + docs + video |

---

## Key Differentiators

| Polyhydra | Competitors (Cornucopias, etc) |
|-----------|-------------------------------|
| Hydra L2 native | L1 only, slow |
| Discord distribution | Web-only |
| Provably-fair VRF | Centralized RNG |
| Browser-based | Download required |
| CIP-30 in-browser wallet | Extension wallets |

---

## Identified Risks & Mitigations

| Risk | Severity | Mitigation |
|------|----------|------------|
| Discord policy changes | HIGH | Adhere to guidelines, prepare web fallback |
| Hydra stability/multi-player sync | HIGH | Early stress-testing, autoscale, snapshots; resume process for abnormal closures |
| L1 fee volatility/congestion | MEDIUM | Delayed settlement, batching outside peak hours |
| Wallet onboarding | MEDIUM | Only require wallet for rewards/NFTs; concise instructions in Activity |
| UTXO.dev maturity | MEDIUM | Fallback to standard CIP-30 wallets (Nami, Eternl) |

---

## Sustainability & Scalability

### Post-Funding Sustainability
| Revenue Stream | Description |
|----------------|-------------|
| Cosmetics/IAPs | In-Discord purchases (not pay-to-win) |
| Pro Server Packages | Branding, custom tournaments for servers |
| Partnerships | Cardano ecosystem sponsors for tournaments |

### Upgrade Roadmap
1. Extended maps/rules
2. Tournament mode
3. Team mode
4. Real-time events
5. Cross-server leaderboards

---

## Budget Breakdown (₳70,000 MVP)

**Based on Hydra Minecraft pattern (₳38K for 4-month demo)**

| Category | ADA | % |
|----------|-----|---|
| Development (2 devs x 5 months) | 42,000 | 60% |
| Infrastructure (Hydra nodes, hosting) | 8,000 | 11% |
| Design/UX | 6,000 | 9% |
| Testing | 5,000 | 7% |
| Documentation + Video | 5,000 | 7% |
| Marketing/Community | 4,000 | 6% |
| **Total** | **70,000** | 100% |

---

## Milestone Structure (4 milestones for ≤75K ADA)

| MS | Title | Deliverables | Month | ADA |
|----|-------|--------------|-------|-----|
| 1 | Architecture + Hydra Setup | Tech spec, Hydra node running, Docker config | 2 | 17,500 |
| 2 | Game + Wallet Integration | Phaser game, CIP-30/UTXO.dev working | 4 | 21,000 |
| 3 | VRF + Discord Activity | Provably-fair, Discord deployed, beta | 5 | 17,500 |
| 4 | Launch + Close-out | Production launch, docs, video | 6 | 14,000 |

---

## Innovation Highlights

1. **Novel Hydra Use Case**: Extends Hydra Doom/Minecraft proof-of-concepts to production GameFi
2. **Discord-First**: First Cardano app as Discord Activity
3. **Provably-Fair Standard**: Could become reference implementation for Cardano gaming
4. **Social Gaming Infrastructure**: Enables future games to build on platform

---

## Precedent: Funded Hydra Gaming Projects

| Project | Fund | Budget | Status | Learnings |
|---------|------|--------|--------|-----------|
| Hydra Doom | IOG Demo | N/A | Complete | Proved 1M TPS |
| Hydra Minecraft | F14 | ₳38,000 | Funded | Focused scope wins |

**Key Learning from Hydra Minecraft:**
- Modest budget (₳38K) for focused demo
- Clear technical scope (block events only)
- Strong team credentials (Anastasia Labs)
- Open source commitment (MIT)
- Builds on proven precedent

See: `research/reference-hydra-minecraft.md` for detailed analysis

---

## Unresolved Questions

1. UTXO.dev production readiness - need direct team contact
2. Hydra head management for multiple concurrent games
3. Discord monetization compliance with Cardano tokens
4. VRF oracle availability on Cardano (Chainlink alternative?)
5. Cost model for sustained Hydra node operation
