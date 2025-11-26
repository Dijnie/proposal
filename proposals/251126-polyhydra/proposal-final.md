# Polyhydra - Final Proposal
**Category:** Cardano Use Cases: Prototype & Launch
**Budget:** ₳75,000 | **Timeline:** 6 months

---

## 📋 PROPOSAL SETUP

### Title
```
Polyhydra: Monopoly Board Game on Hydra via Discord
```

### Budget & Timeline
- **Requested:** ₳75,000 (~$31,500 USD)
- **Duration:** 6 months
- **Milestones:** 4

---

## 📌 PROBLEM STATEMENT (200 chars)

```
Cardano GameFi lacks fast, social games. Hydra has no consumer apps to prove value. Web2 users face wallet friction before they can play any blockchain game.
```

---

## 📌 SOLUTION OVERVIEW (200 chars)

```
Monopoly-style Discord Activity on Hydra. Instant turns via state channels, provably fair dice, on-chain results. Full open source. Play first, wallet later.
```

---

## 📎 SUPPORTING DOCUMENTATION

| Resource | Link |
|----------|------|
| Team Portfolio | https://www.htlabs.xyz/projects |
| Team Members | https://www.htlabs.xyz/members |
| GitHub | https://github.com/polyhydra-game |
| Fund 11: Aiken Course | [Project Link](https://projectcatalyst.io/funds/11/cardano-open-ecosystem/the-complete-aiken-course-cardano-from-zero-to-expert) |
| Fund 12: CIP68 Generator | [Project Link](https://projectcatalyst.io/funds/12/cardano-use-cases-concept/open-source-dynamic-assets-tokennft-generator-cip68) |

---

## 🔗 PROJECT DEPENDENCIES

| Dependency | Status | Notes |
|------------|--------|-------|
| Discord Embedded App SDK | ✅ Available | Public SDK, standard dev registration |
| Hydra Node 1.0.0 | ✅ Mainnet-ready | Released Oct 2025, open source |
| UTXO.dev | ✅ Tested | Confirmed working in Discord iframe |

**No paid third-party dependencies.** All core technologies are open source.

---

## 💡 CAMPAIGN CATEGORY QUESTIONS

### What makes your idea innovative?

📌 **First Hydra-Powered Consumer Game on Mainnet**

Hydra Doom demonstrated 86+ million transactions as proof-of-concept—but no consumer game has launched on Hydra mainnet. Polyhydra will be the first:

| Feature | Existing Cardano Games | Polyhydra |
|---------|----------------------|-----------|
| Speed | L1 blocks (20s) | Hydra (<200ms) |
| Entry | Separate dApp | Inside Discord |
| Wallet | Required before play | Only for rewards |
| Cost/game | 1-2+ ADA | ~0.17 ADA |
| Source | Mostly closed | **Full open source** |

### What will your prototype demonstrate?

📌 **MVP Deliverables (Month 6)**

| Component | Description |
|-----------|-------------|
| Discord Activity | 2-6 player Monopoly board game in voice channels |
| Hydra Integration | Auto Head open/close, real-time state sync |
| Provably Fair | Commit-reveal VRF, verifiable on-chain |
| Web Fallback | Browser version for non-Discord users |

📌 **Access Points**
- Discord: Installable Activity
- Web: https://polyhydra.htlabs.xyz
- GitHub: Full source code
- Testnet: Preview network for testing

### Success metrics with on-chain data?

📌 **6-Month Targets**

| Metric | Target | Verification |
|--------|--------|--------------|
| Monthly Active Users | 200+ | Discord OAuth |
| Games Completed | 1,000+ | Settlement TXIDs |
| Discord Servers | 5+ | Bot install count |
| Hydra Heads | 500+ | On-chain count |
| Cost per game | <0.1 ADA | Transaction data |
| Turn latency | <200ms | Performance logs |
| Wallet conversion | 20%+ | UTXO.dev signups |

---

## 🎯 PROJECT & SOLUTION

### The Problem

📌 **GameFi on Cardano is underdeveloped due to L1 speed limitations; Hydra, though mainnet-ready since October 2025, needs real-world consumer projects to prove its effectiveness for gaming.**

**Current State:**
- L1 produces blocks every 20 seconds → unplayable for real-time games
- Most Cardano "games" are NFT minting projects with minimal gameplay
- Hydra Doom proved potential (86M+ transactions) but was demo only
- Web2 users abandon at wallet setup → massive onboarding friction

### Our Solution

📌 **A Monopoly-style board game running entirely on Hydra, playable directly in Discord voice channels—delivering Web2-level smoothness with Web3 transparency.**

**Technical Architecture:**

```
┌─────────────────────────────────────────────────────┐
│              DISCORD ACTIVITY (Client)              │
│  ┌───────────┐  ┌───────────┐  ┌───────────────┐   │
│  │ Phaser 3  │  │ UTXO.dev  │  │  Colyseus     │   │
│  │ (Game UI) │  │ (Wallet)  │  │  (State Sync) │   │
│  └─────┬─────┘  └─────┬─────┘  └───────┬───────┘   │
└────────┼──────────────┼────────────────┼───────────┘
         │              │                │
         ▼              ▼                ▼
┌─────────────────────────────────────────────────────┐
│              GAME SERVER (Orchestrator)             │
│  ┌───────────┐  ┌───────────┐  ┌───────────────┐   │
│  │ Colyseus  │  │ Provably  │  │ Hydra Client  │   │
│  │ (Rooms)   │  │ Fair VRF  │  │ (Head Mgmt)   │   │
│  └─────┬─────┘  └─────┬─────┘  └───────┬───────┘   │
└────────┼──────────────┼────────────────┼───────────┘
         │              │                │
         ▼              ▼                ▼
┌─────────────────────────────────────────────────────┐
│               BLOCKCHAIN LAYER                      │
│  ┌─────────────────────┐  ┌─────────────────────┐  │
│  │     HYDRA HEAD      │  │    CARDANO L1       │  │
│  │ • Real-time state   │  │ • Head open/close   │  │
│  │ • <200ms finality   │  │ • Final settlement  │  │
│  │ • ~0.17 ADA/game    │  │ • Game transcript   │  │
│  └─────────────────────┘  └─────────────────────┘  │
└─────────────────────────────────────────────────────┘
```

**Game Flow:**

```
CREATE ROOM → PLAY GAME → END GAME → CLAIM REWARDS
     │            │           │            │
     ▼            ▼           ▼            ▼
 Open Hydra   State Txs   Close Head   L1 Payout
   Head       on Hydra    → Settle      (Optional)
```

### Key Innovations

📌 **Discord-Native Onboarding**
- 150M+ Discord users can play without wallet setup
- UTXO.dev provides non-custodial wallet invisibly
- Wallet only surfaces when claiming rewards

📌 **Provably Fair Gaming**
```
1. Player commits: hash(player_nonce + roll)
2. Server commits: hash(server_nonce)
3. Both reveal → Combined hash = outcome
4. All hashes stored on Hydra → L1
```
No "the server cheated" complaints. Math proves fairness.

📌 **Open Source for Ecosystem**
- Full game SDK released
- Hydra integration library
- Discord Activity template
- Reference Aiken contracts

### Who Benefits

| Stakeholder | Benefit |
|-------------|---------|
| Discord gamers | Fun game, no crypto complexity |
| Web3 newcomers | Smooth Cardano onboarding |
| Cardano ecosystem | Hydra validation + new users |
| GameFi developers | Open source reference implementation |

---

## 📈 IMPACT

📌 **Primary: Validating Hydra for Consumer Applications**

Hydra 1.0.0 is mainnet-ready but lacks consumer products. Polyhydra provides:
- Real-world usage data from thousands of games
- Performance benchmarks under production conditions
- Bug discovery that improves Hydra for everyone

📌 **Secondary: Web2 → Web3 Onboarding Pipeline**

```
See friend playing → Join (no setup) → Enjoy game → Win prize → Create wallet → Cardano user
```

**Projected funnel:**
- 1,000 games → 200+ unique players
- 20% wallet connection → 40+ new Cardano users

📌 **Tertiary: Open Source Multiplier**

Community can build: Card games, Strategy games, Trivia, Prediction markets

**How We Share Outputs:**
- Monthly reports on Cardano Forum with TXIDs
- Public metrics dashboard
- Technical documentation
- Community workshops (Vietnamese Cardano community)

---

## ⚙️ CAPABILITY & FEASIBILITY

### Market Validation

📌 **Early User Interest Confirmed**

| Channel | Size | Status |
|---------|------|--------|
| Cardano2VN Network | 500+ members | Ready for beta |
| Discord Gaming Servers | 2,000+ members | Committed to pilot |
| VILAI & HADA Stake Pools | Delegator network | Partnership confirmed |

**Target Early Adopters:**
- Web3 newcomers (wallet complexity solved by UTXO.dev)
- DAO communities seeking engagement tools
- GameFi enthusiasts wanting Provably Fair mechanics

### Team Expertise

📌 **HTlabs: Proven Cardano Track Record**

| Fund | Project | Status | Relevance |
|------|---------|--------|-----------|
| Fund 11 | Complete Aiken Course | ✅ Delivered | Smart contract expertise |
| Fund 12 | CIP68 Generator | ✅ Delivered | Token/NFT standards |
| Fund 10 | Marlowe Study Guide | ✅ Delivered | Documentation quality |

**Live Production:**
- LMS: [lms.cardano2vn.io](https://lms.cardano2vn.io)
- Minting Tool: [cardano-tool.vercel.app](https://cardano-tool.vercel.app)

📌 **Technical Stack Competency**

| Layer | Technology | Experience |
|-------|------------|------------|
| Game Client | Phaser 3 | Production games |
| Multiplayer | Colyseus/NestJS | Real-time apps |
| Wallet | UTXO.dev | Tested in Discord |
| Smart Contracts | Aiken | Fund 11 course |
| State Channels | Hydra | Research + testnet |

### Team Roster

📌 **Phung Tien Dung – Lead Blockchain Developer**
- **Role:** Hydra state machine, Provably Fair VRF, Aiken contracts
- **Experience:** 5+ years software, 2+ years blockchain, multiple Catalyst projects
- **Skills:** Haskell, Aiken, Node.js, Python
- **Contact:** [GitHub](https://github.com/dijnie) | [LinkedIn](https://linkedin.com/in/dijnie)

📌 **Khanh Duy Nguyen – Frontend & Game Developer**
- **Role:** Phaser 3 game client, Discord Activity, UTXO.dev integration
- **Experience:** Full-stack web development, interactive applications
- **Skills:** React, TypeScript, Phaser 3, Discord SDK
- **Contact:** [Telegram](https://t.me/khanhnguyen1711)

📌 **Le Anh Quan – DevOps & Infrastructure**
- **Role:** Hydra node operations, AWS infrastructure, CI/CD
- **Experience:** 5+ years at FPT Software, backend & system ops
- **Skills:** AWS, Docker, Node.js, Python
- **Contact:** [GitHub](https://github.com/anhquan0) | [LinkedIn](https://linkedin.com/in/lenaquan306)

**Team Hub:** [https://www.htlabs.xyz/members](https://www.htlabs.xyz/members)

### Verification Approach

📌 **Testnet Validation (Months 1-2)**
- Hydra Head open/close lifecycle
- State sync latency <200ms
- Provably Fair VRF correctness
- UTXO.dev in Discord iframe

📌 **Beta Testing (Month 5)**
- 50+ early adopters from Cardano2VN
- Quantitative: completion rate, disconnect frequency
- Qualitative: UI/UX feedback

📌 **Progress Tracking**
- Game uptime >99.5%
- Turn success >99%
- Cost per game <0.1 ADA
- Monthly reports with on-chain TXIDs

### Fund Management

- **Monthly Reports:** Detailed expenditure by category
- **Auditable Invoices:** All third-party costs documented
- **Milestone-Based:** Funds released on verified deliverables

---

## 📅 MILESTONES & BUDGET

### Milestone Overview

```
Month:    1     2     3     4     5     6
          ├─────┼─────┼─────┼─────┼─────┤
M1:       ██████████████                    Architecture & Hydra
M2:             │█████████████████│         Game Dev & Integration
M3:             │     │     │████████████│  VRF & Beta Launch
M4:             │     │     │     │█████████  Production & Close-out
```

---

### 📌 Milestone 1: Architecture & Hydra Setup
**Delivery:** Month 2 | **Cost:** ₳18,000

| Element | Description |
|---------|-------------|
| **Outputs** | Technical architecture document with system components and data flows; Hydra Head manager deployed on preview testnet with automated lifecycle; Game state machine specification for Monopoly rules; Discord Activity skeleton app registered and rendering in voice channels |
| **Acceptance Criteria** | Hydra Head opens/closes successfully on testnet with documented TXIDs; State machine processes 10+ game transitions correctly; Discord Activity loads on desktop and mobile; Architecture reviewed by external Cardano developer |
| **Evidence** | GitHub repository (MIT license); Testnet TXIDs for 5+ Head operations; Video walkthrough (5-10 min); Technical documentation PDF |

---

### 📌 Milestone 2: Game Development & Integration
**Delivery:** Month 4 | **Cost:** ₳18,000

| Element | Description |
|---------|-------------|
| **Outputs** | Complete Phaser 3 game client with board, animations, and 2-6 player support; Colyseus multiplayer server with matchmaking and reconnection logic; Hydra integration recording every game action as transaction; UTXO.dev wallet connectivity for reward claims |
| **Acceptance Criteria** | Full games playable on testnet with all mechanics (dice, properties, rent, bankruptcy); Multiplayer sync maintains consistency across 20+ test games; Wallet connection works in Discord iframe; Turn latency <500ms |
| **Evidence** | Playable testnet build via Discord or web URL; Video of complete 4-player game (15-30 min); Performance metrics report; GitHub release v0.2.0 |

---

### 📌 Milestone 3: VRF & Beta Launch
**Delivery:** Month 5 | **Cost:** ₳18,000

| Element | Description |
|---------|-------------|
| **Outputs** | Provably Fair VRF with commit-reveal scheme and on-chain storage; Public verification tool for independent audit; Open beta with 50+ testers from Cardano2VN; Web fallback version for non-Discord users |
| **Acceptance Criteria** | VRF tool validates 100% of dice rolls correctly; 50+ unique Discord accounts participate in beta; 200+ games played with >85% completion rate; Critical bugs <5 and resolved within 48h |
| **Evidence** | VRF verification tool deployed publicly; Beta participation report (anonymized); Game statistics dashboard; Bug tracking report from GitHub Issues |

---

### 📌 Milestone 4: Production & Close-Out
**Delivery:** Month 6 | **Cost:** ₳21,000

| Element | Description |
|---------|-------------|
| **Outputs** | Mainnet deployment with real ADA settlements and tournament prizes; Public Discord Activity installable on any server; Complete open source release (game client, server, Hydra SDK, Aiken contracts); Project close-out report and video |
| **Acceptance Criteria** | 100+ games on mainnet with verified settlement TXIDs; 5+ Discord servers install Activity with active usage; All repositories public with MIT license and documentation; Close-out report approved by Catalyst reviewers |
| **Evidence** | Mainnet TXIDs for 100+ games; Discord installation count screenshot; GitHub repos public with star count; Close-out report PDF + video |

---

### 💰 Budget Breakdown

| Category | Amount (₳) | USD | % |
|----------|------------|-----|---|
| **Development** | 55,000 | $23,100 | 73% |
| └ Smart contracts (Aiken) | 15,000 | $6,300 | 20% |
| └ Game frontend (Phaser) | 20,000 | $8,400 | 27% |
| └ Backend (NestJS/Colyseus) | 12,000 | $5,040 | 16% |
| └ Hydra integration | 8,000 | $3,360 | 11% |
| **Infrastructure** | 8,000 | $3,360 | 11% |
| └ Cloud hosting (6 mo) | 5,000 | $2,100 | 7% |
| └ Hydra node ops | 3,000 | $1,260 | 4% |
| **Design & UX** | 5,000 | $2,100 | 7% |
| **Testing & QA** | 4,000 | $1,680 | 5% |
| **Documentation** | 3,000 | $1,260 | 4% |
| **TOTAL** | **75,000** | **$31,500** | **100%** |

---

## 💎 VALUE FOR MONEY

📌 **Why This Budget Represents Good Value**

| Factor | Explanation |
|--------|-------------|
| Competitive Pricing | Similar gaming projects: 100-200K ADA. We deliver for 75K |
| Cost Efficiency | Vietnam-based team, no external contractors, open source stack |
| Deliverable Density | Full production game + web fallback + open source SDK |
| Ecosystem Multiplier | Open source enables derivative projects by community |

📌 **Market Rate Comparison**

| Item | Market Rate | Our Cost | Savings |
|------|-------------|----------|---------|
| Full-stack dev (6mo) | $30-50K | $15-20K | 50%+ |
| Game UI development | $10-20K | $8.4K | 30%+ |
| Smart contract work | $10-20K | $6.3K | 50%+ |

**Total value: ~$60-80K equivalent at Western rates for $31.5K budget**

---

## ✅ SUBMISSION CHECKLIST

| Requirement | Status |
|-------------|--------|
| Title ≤60 characters | ✅ 54 chars |
| Problem ≤200 characters | ✅ 159 chars |
| Solution ≤200 characters | ✅ 159 chars |
| Budget in range (15K-200K) | ✅ 75,000 ADA |
| Timeline 2-12 months | ✅ 6 months |
| 4 milestones (75K budget) | ✅ 4 milestones |
| Milestones >200 chars | ✅ All >250 chars |
| Team LinkedIn/GitHub linked | ✅ All members |
| Previous Catalyst referenced | ✅ Fund 10, 11, 12 |
| On-chain metrics defined | ✅ TXIDs, counts |
| Open source commitment | ✅ Full MIT license |
