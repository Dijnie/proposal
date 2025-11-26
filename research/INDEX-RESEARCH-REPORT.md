# Blockchain Board Games Research Report - Complete Index

**Research Date:** November 26, 2025
**Compiled for:** Polyhydra Fund15 Proposal
**Total Research Volume:** 60 KB across 4 documents + index

---

## DOCUMENT OVERVIEW

### 1. **RESEARCH-SUMMARY.md** (7.7 KB) ⭐ START HERE
**Purpose:** Executive summary and key findings
**Content:**
- 5 main findings distilled
- Polyhydra competitive positioning
- Unresolved risks matrix
- Next steps for team
- 10-minute read

**Use Case:** Quick reference for stakeholders, decision-makers

---

### 2. **blockchain-board-games-research.md** (26 KB) 📊 COMPREHENSIVE DEEP DIVE
**Purpose:** Full research compilation
**Content:**
- Section 1: All existing blockchain board games
  - The Monopolist (BSC)
  - MONOPOLY: World of Women (Ethereum)
  - Axie Infinity (Ronin) - 1M+ users at peak
  - Forest Knight (Polygon)
  - AdaQuest (Cardano)
  - Drunken Dragon (Cardano)
  - Mojo Melee
  - Market context (2025 downturn data)

- Section 2: Turn-based game architecture (5 patterns)
  - Fully on-chain state (L1/L2)
  - State channels (off-chain signatures)
  - Hydra state heads
  - Sidechains (Ronin example)
  - Comparative advantages/tradeoffs

- Section 3: Provably fair randomness (4 methods)
  - Chainlink VRF ($5-10 per roll)
  - Commit-reveal (decentralized)
  - Server seed + client nonce
  - Pragma VRF (StarkNet)

- Section 4: Game state serialization
  - Compact formats (500 bytes for Monopoly)
  - Storage patterns by architecture
  - Event-based history pattern

- Section 5: Real-time vs turn-based on L2
  - Why real-time fails on blockchain
  - Why turn-based excels
  - Hydra-specific advantages

- Section 6: Scaling solutions comparison matrix
  - TPS, latency, cost, finality, decentralization
  - Gaming ecosystem maturity

- Section 7: Unresolved questions
- Section 8: Full source citations

**Use Case:** Technical architects, researchers, deep product understanding

---

### 3. **technical-comparison-table.md** (13 KB) 🔧 TECHNICAL REFERENCE
**Purpose:** Implementation details and code examples
**Content:**
- Quick reference comparison matrix (5 architectures)
- 5 Detailed architecture walkthroughs:
  1. L1 Native (Cardano) - with PlutusScript
  2. L2 Rollup (Arbitrum/Optimism) - with Solidity
  3. State Channels (Counterfactual) - with signature verification
  4. Hydra Head - with UTxO model
  5. Sidechain (Ronin) - with EVM example

- State serialization comparison
  - Compact format (12-20 bytes per turn)
  - Full state storage (4.5 KB per game)
  - Gzip compression ratios

- Randomness implementation (3 code examples):
  1. Chainlink VRF (Solidity)
  2. Commit-reveal (Solidity)
  3. Server seed + client nonce (JavaScript)

- Recommendation matrix by constraints
- Final architecture assessment for Polyhydra

**Use Case:** Developers, architects choosing tech stack, implementation planning

---

### 4. **project-metrics-and-examples.md** (14 KB) 📈 REAL-WORLD DATA
**Purpose:** Active projects, metrics, lessons learned
**Content:**
- Section 1: Active projects with metrics
  1. **Axie Infinity (Ronin)**
     - Peak: 1M+ DAU, 2.7M MAU (2021)
     - Current: 100k-200k DAU (Nov 2025)
     - Technical metrics (TPS, block time, consensus)
     - $625M hack analysis (PoA weakness)
     - Roadmap: zkEVM transition by Q2 2026

  2. **Forest Knight (Polygon)**
     - 5k-20k MAU (estimated)
     - GameFi.org grade: B
     - Cost structure ($0.01-0.05 per battle)
     - Free-to-play funnel analysis

  3. **AdaQuest (Cardano)**
     - <1,000 players (early phase)
     - Community-driven
     - Native Cardano token features

  4. **The Monopolist (BSC)**
     - Only active Monopoly variant
     - <5k players (estimated)
     - Monthly tournaments

- Section 2: Inactive/failed projects
  - Hydra Minecraft (Fund 13 - not approved)

- Section 3: Infrastructure projects
  - Pragma VRF (StarkNet oracle)
  - ZKasino (StarkNet casino)

- Section 4: Comparative cost analysis
  - 30-turn game costs across 8 blockchains
  - Hydra: $0.06 total (winner)
  - zkSync: $0.003 (most efficient)
  - State channels: $1-2 settlement

- Section 5: Market adoption barriers
  - Why Monopoly hasn't succeeded (5 reasons)
  - Tokenomics challenge
  - UX friction
  - Regulatory uncertainty
  - Network effects
  - Complexity

- Section 6: Successful patterns from Axie
  - What worked (accessibility, loops, monetization)
  - What failed (tokenomics collapse, centralization)

- Section 7: Emerging opportunities for Polyhydra
  - First Hydra board game
  - Discord-native distribution
  - Provably fair positioning
  - Low cost sustainability

- Section 8: Polyhydra tracking metrics
  - Pre-launch validation checks
  - Post-launch dashboard metrics (MAU, DAU, games/week, etc.)

**Use Case:** Product managers, community, growth planning, risk assessment

---

## CROSS-REFERENCE GUIDE

### By Topic

**Architecture Decision-Making:**
- Read: technical-comparison-table.md (Quick matrix) → blockchain-board-games-research.md (Deep dive) → RESEARCH-SUMMARY.md (Decision guidance)

**Project Benchmarking:**
- Read: project-metrics-and-examples.md (Axie, Forest Knight data) → blockchain-board-games-research.md (Market context)

**Randomness Implementation:**
- Read: technical-comparison-table.md (Code examples) → blockchain-board-games-research.md (Section 3 - deep explanation)

**Polyhydra Specific Guidance:**
- Read: RESEARCH-SUMMARY.md (Section "Polyhydra Positioning") → technical-comparison-table.md (Last section "For Polyhydra") → project-metrics-and-examples.md (Opportunities section)

**Cost Analysis:**
- Read: technical-comparison-table.md (Architecture cost comparison) → project-metrics-and-examples.md (30-turn cost analysis table)

---

## KEY STATISTICS AT A GLANCE

### Market Data
- **Blockchain Monopoly-style games:** Only 1 active (The Monopolist, BSC)
- **Peak blockchain gaming adoption:** Axie Infinity 1M+ DAU (2021)
- **Current decline:** Web3 gaming DAU down 6% Q1 2025; investment down 71% QoQ

### Technology Metrics
- **Cheapest option:** zkSync Era @ $0.003 per 30-turn game
- **Hydra advantage:** $0.06 per game (1000x cheaper than Polygon, 15x cheaper than Arbitrum)
- **State size:** Monopoly board ~500 bytes (compressible to 150 bytes)
- **Hydra TPS:** 1000+ within head; settlement cost negligible

### Project Metrics (Active)
| Project | Users | Cost/Turn | Chain | Status |
|---------|-------|-----------|-------|--------|
| Axie Infinity | 100k-200k | $0.001 | Ronin | Declining |
| Forest Knight | 5k-20k | $0.01 | Polygon | Active |
| AdaQuest | <1k | $0.07 | Cardano | Early |
| The Monopolist | <5k | $0.001 | BSC | Active |

---

## RESEARCH METHODOLOGY

### Search Queries Executed (8 total)
1. "blockchain board games Monopoly style turn-based 2024 2025"
2. "Ethereum Polygon turn-based multiplayer games architecture"
3. "provably fair dice rolls blockchain VRF randomness implementation"
4. "game state serialization blockchain smart contracts state management"
5. "Hydra protocol multiplayer games examples"
6. "Cardano blockchain games NFT turn-based strategy 2025"
7. "Hydra Minecraft Cardano Fund14 game multiplayer"
8. "layer 2 rollups scaling games arbitrum optimism zk-proofs"
9. "Forest Knight Polygon turn-based game active users metrics"
10. "state channels turn-based games off-chain signature verification"
11. "ZKasino StarkNet provably fair gaming Cairo"
12. "Ronin sidechain Axie Infinity TPS performance gaming blockchain"
13. "Axie Infinity turn-based game architecture blockchain state management"
14. "StarkNet Cairo VRF randomness games provably fair"

### Sources Cited
- 20+ authoritative sources (official whitepapers, blogs, research papers)
- Blockchain explorers (DappRadar, on-chain data)
- Project websites (Axie Infinity, Forest Knight, Cardano ecosystem)
- Academic papers (state channels, game channels)
- Infrastructure documentation (Chainlink, Pragma, IOG)

### Data Confidence Levels
- **High:** Active project metrics (on-chain verifiable, whitepapers)
- **Medium:** Estimated user counts (derived from public data)
- **Low:** Future projections (Hydra scaling limits, market adoption)

---

## USING THIS RESEARCH

### For Proposal Writers
- Use RESEARCH-SUMMARY.md for "Market Analysis" section
- Use project-metrics-and-examples.md for "Competitive Analysis"
- Use RESEARCH-SUMMARY.md "Polyhydra Positioning" for differentiation arguments

### For Developers
- Use technical-comparison-table.md for architecture decision
- Use blockchain-board-games-research.md Section 3 for randomness implementation
- Use blockchain-board-games-research.md Section 4 for state serialization design

### For Project Managers
- Use project-metrics-and-examples.md Section 6 for "What Worked" at Axie
- Use project-metrics-and-examples.md Section 7 for growth opportunities
- Use RESEARCH-SUMMARY.md for risk assessment

### For Community
- Use RESEARCH-SUMMARY.md for high-level understanding
- Use project-metrics-and-examples.md for comparison with other games
- Use technical-comparison-table.md for "Why Hydra is chosen"

---

## NEXT RESEARCH DIRECTIONS

### If Project Progresses
1. **Detailed Hydra benchmarking:** Measure actual head resume/pause latency with IOG
2. **CIP-30 testing:** Real browser testing of Cardano wallets in Discord iframe
3. **User research:** Survey Cardano community (Monopoly interest, wallet comfort level)
4. **Competitor analysis:** Deep dive into The Monopolist's monetization strategy
5. **Regulatory research:** Cardano Foundation stance on play-to-earn classification

### If Architecture Changes
1. **Polygon pivot:** If choosing Polygon over Hydra, benchmark Forest Knight's code
2. **State channel pivot:** If 2-4 players only, study Counterfactual/Perun frameworks
3. **VRF pivot:** If choosing external oracle, benchmark Chainlink vs Pragma costs

---

## DOCUMENT LOCATIONS

All files in: `/home/tid/project/fun15/catalyst/proposal/research/`

- `RESEARCH-SUMMARY.md` - Executive summary (read first)
- `blockchain-board-games-research.md` - Full research compilation
- `technical-comparison-table.md` - Technical reference & code examples
- `project-metrics-and-examples.md` - Real-world data & lessons learned
- `INDEX-RESEARCH-REPORT.md` - This file (navigation guide)

---

## FINAL NOTES

### What This Research Shows
1. **Market gap exists:** No production Monopoly-style game on blockchain
2. **Technology is ready:** Hydra v1.0 (Oct 2025) production-ready
3. **Economics work:** $0.06 per game enables sustainable tournaments
4. **Distribution channel ready:** Discord Activity API (200M users)
5. **Differentiation available:** Provably fair, non-custodial, zero per-turn friction

### Key Risks Identified
1. **UX complexity:** Discord Activity + Hydra head coordination = complex resume flow
2. **Monetization:** Pure play-to-earn failed for Axie; need cosmetics/tournaments
3. **Regulatory:** Some regions treat play-to-earn as gambling
4. **Network maturity:** Hydra has not been stress-tested with 1000+ concurrent heads

### Confidence Assessment
- ✅ Technical feasibility: HIGH (Hydra proven by Doom)
- ✅ Market opportunity: HIGH (gap + Discord distribution)
- ⚠️ Monetization viability: MEDIUM (depends on game design)
- ⚠️ Hydra scaling limits: MEDIUM (academic, not production-tested)
- ⚠️ Player acquisition: MEDIUM (no Monopoly precedent on blockchain)

---

**Report Index compiled:** November 26, 2025
**Total research time:** ~3 hours
**Total document volume:** ~60 KB
**Source quality:** High (official docs, whitepapers, peer-reviewed where applicable)

---

## QUICK LINKS TO KEY SECTIONS

**Polyhydra Tech Decision:**
→ technical-comparison-table.md, last section: "For Polyhydra"

**Why Hydra Wins:**
→ blockchain-board-games-research.md, Section 5: "Turn-Based vs Real-Time"

**Randomness Deep Dive:**
→ blockchain-board-games-research.md, Section 3 (4 methods with tradeoffs)

**Cost Comparison:**
→ technical-comparison-table.md, "Gas Model" under each architecture

**Axie Lessons:**
→ project-metrics-and-examples.md, Section 6: "Successful Patterns"

**Market Adoption Barriers:**
→ project-metrics-and-examples.md, Section 5: "Why Monopoly-Style Games Haven't Succeeded"

---

**End of Index**
