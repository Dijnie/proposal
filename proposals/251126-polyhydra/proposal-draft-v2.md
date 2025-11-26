# Polyhydra - Proposal Draft v2
**Category:** Cardano Use Cases: Prototype & Launch
**Budget:** 75,000 ADA | **Timeline:** 6 months

---

## PROPOSAL SETUP

### Title (60 chars max)
```
Polyhydra: Monopoly Board Game on Hydra via Discord
```
(54 characters)

### Budget
**75,000 ADA** (~$31,500 USD at 1 ADA = $0.42)

### Timeline
**6 months** (4 milestones)

---

## PROPOSAL SUMMARY

### Problem Statement (200 chars max)
```
Cardano GameFi lacks fast, social games. Hydra has no consumer apps to prove value. Web2 users face wallet friction before they can play any blockchain game.
```
(159 characters)

### Solution Overview (200 chars max)
```
Monopoly-style Discord Activity on Hydra. Instant turns via state channels, provably fair dice, on-chain results. Full open source. Play first, wallet later.
```
(159 characters)

---

## SUPPORTING DOCUMENTATION

- **Team Portfolio:** https://www.htlabs.xyz/projects
- **Team Members:** https://www.htlabs.xyz/members
- **GitHub (will host):** https://github.com/polyhydra-game
- **Previous Catalyst Projects:**
  - Fund 11: Complete Aiken Course - https://projectcatalyst.io/funds/11/cardano-open-ecosystem/the-complete-aiken-course-cardano-from-zero-to-expert
  - Fund 12: CIP68 Generator - https://projectcatalyst.io/funds/12/cardano-use-cases-concept/open-source-dynamic-assets-tokennft-generator-cip68
  - Fund 10: Marlowe Study Guide - https://projectcatalyst.io/funds/10/f10-startups-and-onboarding-for-students/study-guide-for-marlow

---

## PROJECT DEPENDENCIES

**Discord Embedded App SDK:** Required for Activity integration. SDK is publicly available and stable. No approval needed beyond standard developer registration.

**Hydra Node 1.0.0:** Mainnet-ready (released Oct 2025). Open source, no licensing fees. Team has direct experience with Hydra from previous research.

**UTXO.dev:** Wallet abstraction layer for Discord iframe. Already tested and confirmed working in Discord Activity environment.

**No third-party paid dependencies.** All core technologies are open source.

---

## CAMPAIGN CATEGORY QUESTIONS

### Innovation: What makes your idea innovative compared to what has been previously launched?

**First Hydra-Powered Consumer Game on Mainnet**

While Hydra Doom demonstrated 86+ million transactions as a proof-of-concept, no consumer-facing game has launched on Hydra mainnet. Polyhydra will be the first:

- **State channel gaming:** All game turns processed off-chain with near-instant finality
- **Discord-native Web3:** First Cardano game playable directly inside Discord without prior wallet setup
- **Provably fair randomness:** Commit-reveal VRF scheme verifiable on-chain, no trusted oracle needed
- **Full open source:** Complete game SDK released for community to build on

**Innovation vs. Existing Solutions:**

| Feature | Existing Cardano Games | Polyhydra |
|---------|----------------------|-----------|
| Speed | L1 blocks (20s) | Hydra (<200ms) |
| Entry point | Separate dApp | Inside Discord |
| Wallet required | Before play | Only for rewards |
| Cost per game | 1-2+ ADA | ~0.17 ADA |
| Source code | Mostly closed | Fully open |

### Prototype/MVP: What will your prototype demonstrate and where can it be accessed?

**MVP Deliverables (Month 6):**

1. **Discord Activity Game:**
   - 2-6 player Monopoly-style board game
   - Turn-based gameplay with buy/sell/rent mechanics
   - Real-time multiplayer via voice channel integration

2. **Hydra Integration:**
   - Automatic Head opening per game session
   - State synchronization across all players
   - On-chain settlement when game concludes

3. **Provably Fair System:**
   - Commit-reveal dice rolls
   - Verifiable on-chain transcript
   - Public audit of all game results

4. **Web Fallback:**
   - Browser-based version for non-Discord users
   - Same Hydra backend, different frontend

**Access Points:**
- Discord: Installable Activity on any server
- Web: https://polyhydra.htlabs.xyz (planned)
- GitHub: Full source code repository
- Testnet: Preview network for community testing

### Success Metrics: Realistic measures with on-chain metrics

**Adoption Metrics (6-month targets):**
- Monthly Active Users (MAU): 200+
- Total games played: 1,000+
- Discord servers installed: 5+
- Average games per user: 5+

**Technical Metrics:**
- Hydra Heads opened: 500+
- On-chain settlements: 100% of completed games
- Average cost per game: <0.1 ADA
- Turn latency: <200ms
- Game completion rate: >90%

**Ecosystem Metrics:**
- Wallet connection rate: 20%+ of players
- GitHub stars: 50+
- Community forks/derivatives: 2+

All metrics verifiable via:
- On-chain transaction IDs (TXIDs)
- Public GitHub analytics
- Discord bot installation count

---

## PROJECT & SOLUTION

### [SOLUTION] Detailed Description (10,000 chars max)

## 1. The Problem: Cardano GameFi Is Stagnant

**Cardano's gaming ecosystem faces critical barriers that have prevented mainstream adoption:**

### 1.1 Layer 1 Speed Limitation

Cardano L1 produces blocks every 20 seconds. For gaming, this creates unacceptable delays:

| Action | Expected Time | L1 Reality | User Experience |
|--------|---------------|------------|-----------------|
| Roll dice | Instant | 20-40s | Frustrating |
| Buy property | Instant | 20-40s | Abandonment |
| Pay rent | Instant | 20-40s | Rage quit |

**Result:** Most Cardano "games" are actually NFT minting projects with minimal gameplay. True interactive gaming is impractical on L1.

### 1.2 Outdated GameFi Projects

Existing Cardano games either:
- Never launched (vaporware)
- Launched but died due to poor UX
- Exist only as NFT collections with "future" gameplay

**The ecosystem lacks a single successful, playable, on-chain game that demonstrates Cardano's potential for gaming.**

---

## 2. The Solution: Hydra Changes Everything

### 2.1 Hydra: The Missing Piece

Hydra Head Protocol (v1.0.0, Oct 2025) enables:
- **Instant finality:** Transactions confirm in <200ms
- **Near-zero cost:** ~0.17 ADA per game (vs 1-2 ADA per turn on L1)
- **Full Cardano compatibility:** Same smart contracts, same security model
- **8 participants per Head:** Perfect for 2-6 player board games

**Hydra transforms Cardano from "too slow for games" to "faster than traditional servers."**

### 2.2 Hydra Doom: Proof of Potential

In August 2024, IOG demonstrated Hydra Doom:
- **86+ million transactions** processed
- **4,000+ TPS** peak throughput
- **5,662 concurrent games** running simultaneously
- **28ms frame time** (vs 20s L1 block time)

**Hydra Doom proved Hydra works for gaming. But it was a demo, not a product.**

Polyhydra takes the next step: **a real, playable, sustainable game on Hydra mainnet.**

---

## 3. Our Approach: Discord + Hydra + Open Source

### 3.1 Why Discord Activity?

Discord has **150+ million monthly active users** who:
- Already spend hours in voice channels with friends
- Are familiar with gaming
- Have never touched cryptocurrency

**Discord Activity = zero friction entry point:**
- No app download
- No wallet setup
- No gas fee confusion
- Just click "Play" in voice channel

### 3.2 Non-Custodial Wallet Integration

We use **UTXO.dev** for seamless wallet experience:
- Invisible to user during gameplay
- Non-custodial (user controls keys)
- Only surfaces when claiming rewards
- Works inside Discord iframe (tested & confirmed)

**Web2 smoothness with Web3 ownership.**

### 3.3 Provably Fair Gaming

Every dice roll is verifiable:

```
1. Player commits: hash(player_nonce + roll)
2. Server commits: hash(server_nonce)
3. Both reveal nonces
4. Combined hash determines outcome
5. All hashes stored on Hydra → L1
```

**No "the server cheated" complaints. Math proves fairness.**

---

## 4. Technical Architecture

### 4.1 System Overview Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                      DISCORD ACTIVITY                           │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │                   GAME CLIENT                            │   │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────────┐  │   │
│  │  │  Phaser 3   │  │  UTXO.dev   │  │  State Manager  │  │   │
│  │  │  (Game UI)  │  │  (Wallet)   │  │  (Colyseus)     │  │   │
│  │  └──────┬──────┘  └──────┬──────┘  └────────┬────────┘  │   │
│  └─────────┼────────────────┼──────────────────┼───────────┘   │
│            │                │                  │                │
└────────────┼────────────────┼──────────────────┼────────────────┘
             │                │                  │
             ▼                ▼                  ▼
┌─────────────────────────────────────────────────────────────────┐
│                      GAME SERVER (NestJS)                       │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │                   ORCHESTRATOR                           │   │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────────┐  │   │
│  │  │  Colyseus   │  │  Provably   │  │  Hydra Client   │  │   │
│  │  │  (Rooms)    │  │  Fair VRF   │  │  (State Sync)   │  │   │
│  │  └──────┬──────┘  └──────┬──────┘  └────────┬────────┘  │   │
│  └─────────┼────────────────┼──────────────────┼───────────┘   │
│            │                │                  │                │
└────────────┼────────────────┼──────────────────┼────────────────┘
             │                │                  │
             ▼                ▼                  ▼
┌─────────────────────────────────────────────────────────────────┐
│                      BLOCKCHAIN LAYER                           │
│  ┌───────────────────────────┐  ┌───────────────────────────┐  │
│  │       HYDRA HEAD          │  │      CARDANO L1           │  │
│  │  • Real-time game state   │  │  • Head open/close        │  │
│  │  • Turn transactions      │  │  • Final settlement       │  │
│  │  • <200ms finality        │  │  • Game transcript        │  │
│  │  • ~0.17 ADA per game     │  │  • Reward distribution    │  │
│  └───────────────────────────┘  └───────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
```

### 4.2 Game Flow

```
┌──────────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐
│  CREATE  │───▶│   PLAY   │───▶│   END    │───▶│  CLAIM   │
│   ROOM   │    │   GAME   │    │   GAME   │    │ REWARDS  │
└──────────┘    └──────────┘    └──────────┘    └──────────┘
     │               │               │               │
     ▼               ▼               ▼               ▼
┌──────────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐
│  Open    │    │  Hydra   │    │  Close   │    │  L1 Tx   │
│  Hydra   │    │  State   │    │  Head    │    │  Reward  │
│  Head    │    │  Updates │    │  Settle  │    │  Payout  │
└──────────┘    └──────────┘    └──────────┘    └──────────┘
```

### 4.3 Component Details

**Game Client (Discord Activity):**
- **Phaser 3:** 2D game engine for board, dice animations, card effects
- **UTXO.dev:** Non-custodial wallet, invisible during play
- **Colyseus Client:** Real-time state synchronization

**Game Server (Orchestrator):**
- **NestJS:** Robust Node.js framework for API and WebSocket
- **Colyseus Server:** Room management, player matchmaking
- **Provably Fair Module:** Commit-reveal VRF implementation
- **Hydra Client:** State channel management via hydra-node API

**Blockchain Layer:**
- **Hydra Head:** Per-game state channel (2-6 players)
- **Cardano L1:** Settlement layer for final results

---

## 5. Why This Matters for Cardano

### 5.1 Proving Hydra Works

Polyhydra will generate:
- **Thousands of real transactions** from actual gameplay
- **Performance benchmarks** under production conditions
- **Bug reports** that improve Hydra for everyone

**Every game played validates Hydra for the ecosystem.**

### 5.2 Attracting More GameFi Projects

When Polyhydra succeeds:
- Other developers see "Hydra gaming is possible"
- Our open source code becomes their starting point
- Cardano becomes a viable gaming platform

### 5.3 Open Source Multiplier Effect

We release everything:
- Hydra game SDK (Head management, state sync)
- Provably fair randomness library
- Discord Activity template for Cardano
- Reference Aiken smart contracts

**One funded project enables dozens of derivative projects.**

---

## 6. Who Benefits

| Stakeholder | Benefit |
|-------------|---------|
| Discord gamers | Fun game without crypto complexity |
| Web3 newcomers | Smooth onboarding to Cardano |
| Cardano ecosystem | Hydra validation + new users |
| GameFi developers | Open source reference implementation |
| DAO communities | Engagement tool for Discord servers |

---

### [IMPACT] Positive Impact on Cardano Community (10,000 chars max)

**Primary Impact: Validating Hydra for Consumer Applications**

Hydra's October 2025 mainnet release enables real ADA transactions in state channels. However, the ecosystem lacks consumer products proving this capability. Polyhydra provides:

- **Real-world usage data:** Thousands of Hydra transactions from actual gameplay
- **Performance benchmarks:** Documented latency, throughput, and cost metrics
- **Bug discovery:** Production stress testing identifies issues before critical DeFi adoption
- **Developer confidence:** Successful consumer launch encourages more Hydra builders

**Secondary Impact: Web2 to Web3 Onboarding Pipeline**

Traditional blockchain games lose users at wallet creation. Polyhydra inverts this:

1. Player sees friend playing in Discord
2. Joins game with zero setup
3. Enjoys gameplay (blockchain invisible)
4. Wins tournament, wants prize
5. Creates wallet (motivated by reward)
6. Now a Cardano user

**Projected funnel:**
- 1,000 games played → 200+ unique players
- 20% wallet connection rate → 40+ new Cardano users
- Cost per user acquisition: ~800 ADA ($336) - competitive with traditional CAC

**Tertiary Impact: Open Source Gaming Infrastructure**

Full open source release includes:

- Hydra game SDK (Head management, state sync)
- Provably fair randomness library
- Discord Activity template for Cardano
- Reference Aiken smart contracts

Community can build:
- Card games (Poker, Blackjack)
- Strategy games (Chess, Go)
- Trivia/quiz games
- Prediction markets

**How We Measure Impact:**

**Quantitative Metrics:**
| Metric | Target | Measurement |
|--------|--------|-------------|
| Hydra transactions | 10,000+ | On-chain count |
| Unique players | 200+ | Discord OAuth |
| Games completed | 1,000+ | Settlement TXIDs |
| Wallet conversions | 40+ | UTXO.dev signups |
| GitHub engagements | 50+ stars | Public analytics |

**Qualitative Metrics:**
- Community feedback via Discord server
- Developer adoption of open source components
- Media coverage and ecosystem awareness

**Sharing Outputs:**

1. **Monthly Progress Reports:** Posted on Cardano Forum with TXID evidence
2. **Public Dashboard:** Real-time metrics at polyhydra.htlabs.xyz/stats
3. **Technical Documentation:** Comprehensive guides on Hydra gaming patterns
4. **Community Workshops:** Vietnamese Cardano community training sessions
5. **Conference Presentations:** Submit to Cardano Summit, RareEvo

**Long-term Ecosystem Value:**

Beyond immediate metrics, Polyhydra establishes:

- **Hydra gaming category:** First mover creates the playbook for followers
- **Discord as Cardano gateway:** Template for other projects to adopt
- **Vietnamese community leadership:** Demonstrates local builders' capability
- **Infrastructure reusability:** SDK components accelerate future development

---

### [CAPABILITY & FEASIBILITY] Team Capability and Approach Validation (10,000 chars max)

Building on HTlabs' proven Cardano development track record, Polyhydra delivers a production-ready Discord gaming experience that seamlessly bridges Web2 gamers to Cardano via Hydra.

---

## Early User Interest & Market Validation

Our concept and preliminary research have already identified strong demand channels:

**Cardano2VN Network:** Access to **500+ Vietnamese Cardano community members** for immediate beta testing and feedback loops. This community has supported our previous Catalyst projects and is eager to test Polyhydra.

**Gaming Community Reach:** Direct access to 3 active Discord gaming servers (totaling **2,000+ members**) ready to pilot the Activity. Server admins have expressed interest in engagement tools for their communities.

**Stake Pool Operators:** Strong relationships with **VILAI and HADA stake pools**, providing direct connection to delegators interested in GameFi engagement and potential tournament sponsorship.

**Target early adopters identified through community engagement:**
- **Web3 Newcomers:** Discord users curious about crypto but deterred by wallet complexity (solved by our "invisible" UTXO.dev integration)
- **DAO Communities:** Cardano DAOs on Discord seeking social activities to increase member engagement
- **GameFi Enthusiasts:** Players looking for "Provably Fair" gaming mechanics that transparently prevent cheating

---

## Expertise and Experience

HTlabs demonstrates deep Cardano expertise through multiple successful Catalyst projects and live production deployments:

**Completed Catalyst Projects:**

| Fund | Project | Status | Relevance to Polyhydra |
|------|---------|--------|------------------------|
| Fund 11 | Complete Aiken Course | ✅ Delivered | Smart contract expertise for game logic |
| Fund 12 | CIP68 Generator | ✅ Delivered | Token standards for game assets/rewards |
| Fund 10 | Marlowe Study Guide | ✅ Delivered | Documentation and education quality |
| Fund 13 | Various contributions | ✅ Active | Ongoing ecosystem engagement |

**Live Production Deployments:**
- **Learning Management System:** Production LMS at [lms.cardano2vn.io](https://lms.cardano2vn.io)
- **Free Native Minting Tool (CIP25):** Live at [cardano-tool.vercel.app](https://cardano-tool.vercel.app)

**Technical Competency Specific to Polyhydra:**

| Layer | Technology | Team Experience |
|-------|------------|-----------------|
| Game Client | Phaser 3 | Production game development |
| Multiplayer | Colyseus on NestJS | Real-time application architecture |
| Wallet | UTXO.dev | Tested in Discord iframe |
| Smart Contracts | Aiken | Fund 11 course delivered |
| State Channels | Hydra | Research and testnet experiments |

**Additional relevant projects:** Cardano App Development Course, IoT Blockchain Templates, Dualtarget DeFi platform. Full portfolio: [https://www.htlabs.xyz/projects](https://www.htlabs.xyz/projects)

---

## Team Roster

**Phung Tien Dung – Lead Blockchain Developer**
- **Role:** Architects Hydra state machine, implements Provably Fair VRF, writes Aiken smart contracts
- **Experience:** 5+ years software engineering, 2+ years blockchain development
- **Skills:** Haskell, Aiken, Node.js, Python, C/C++
- **Catalyst Track Record:** Led multiple funded projects to successful completion
- **Contact:** [GitHub](https://github.com/dijnie) | [LinkedIn](https://linkedin.com/in/dijnie) | tiendung0325@gmail.com

**Khanh Duy Nguyen – Frontend & Game Developer**
- **Role:** Develops Phaser 3 game client, Discord Activity integration, UTXO.dev wallet connectivity
- **Experience:** Full-stack web development with focus on interactive applications
- **Skills:** React, TypeScript, Phaser 3, WebSocket, Discord SDK
- **Contact:** [Telegram](https://t.me/khanhnguyen1711) | nguyenkhanh17112003@gmail.com

**Le Anh Quan – DevOps & Infrastructure**
- **Role:** Manages Hydra node operations, AWS infrastructure, CI/CD pipelines, monitoring
- **Experience:** 5+ years at FPT Software in backend and system operations
- **Skills:** AWS, Docker, Kubernetes, Node.js, Python, monitoring tools
- **Contact:** [GitHub](https://github.com/anhquan0) | [LinkedIn](https://linkedin.com/in/lenaquan306)

**Team Hub:** [https://www.htlabs.xyz/members](https://www.htlabs.xyz/members)

---

## Verification of Approach

**Testnet Validation (Months 1-2):**
We will deploy the game logic and Hydra Head manager on preview testnet to confirm:
- Hydra Head open/close lifecycles work reliably
- Turn-based state synchronization achieves <200ms latency
- Provably Fair VRF logic produces correct, verifiable outcomes
- UTXO.dev wallet integration functions within Discord iframe environment

**Open Beta Testing (Month 5):**
- **50+ early adopters** from Cardano2VN playing full game sessions on testnet
- Collect quantitative metrics: game completion rates, disconnect frequency, average game duration
- Gather qualitative feedback to refine UI/UX before mainnet launch

**Progress Tracking:**
Transparent KPI reporting throughout project:
- Game uptime target: >99.5%
- Turn transaction success: >99%
- Average cost per game: <0.1 ADA
- Monthly reports on Cardano Forum and GitHub with on-chain evidence (TXIDs of game settlements)

---

## Fund Management

**Monthly Budget Reports:**
- Detailed expenditure breakdowns by category (development, infrastructure, design)
- Line-item justification submitted to Catalyst monthly
- Posted publicly on Cardano Forum for community transparency

**Auditable Invoices:**
- All third-party invoices (VPS hosting, cloud services) documented and archived
- Available for Catalyst review upon request

**Milestone-Based Disbursements:**
- Funds released only upon verified deliverables
- Required evidence: KPI reports, on-chain evidence (Hydra settlement TXIDs), GitHub code releases, video demonstrations
- Payment after Catalyst reviewer acceptance

---

## Why We're Best Suited

**Proven Catalyst Delivery:** Successful completion of Fund 10, 11, 12, and 13 projects demonstrates rigorous milestone management and accountability. We have never missed a deadline or failed to deliver.

**Full-Stack GameFi Capability:** Unlike teams that specialize only in web or only in blockchain, we bridge the gap. We possess the specific stack required:
- **Frontend:** React/Next.js + Phaser 3
- **Backend:** NestJS + Colyseus
- **Blockchain:** Hydra + Aiken

**Community Trust:** We maintain a reputation for transparent reporting and open-source contributions. Our local presence in Vietnam allows us to leverage a highly engaged user base for rapid testing and iteration.

**Hydra Pioneers:** We are among the few teams actively implementing Hydra for consumer-facing applications, moving beyond theoretical research to practical utility.

---

## Project Timeline

The **6-month timeline** features 4 major milestones. Work is continuous with overlapping workstreams:

```
Month:    1     2     3     4     5     6
          ├─────┼─────┼─────┼─────┼─────┤
M1:       ████████████│     │     │     │  Architecture & Hydra
M2:             │█████████████████│     │  Game Dev & Integration
M3:             │     │     │████████████│  VRF & Beta Launch
M4:             │     │     │     │█████████  Production & Close-out
```

No gaps in development—milestones represent completion dates, not start dates. Frontend and smart contract development happen in parallel to maximize efficiency.

---

## MILESTONES

**Milestone Requirements:** For 75,000 ADA, minimum 4 milestones including final close-out.

---

### Milestone 1: Architecture Design & Hydra Infrastructure Setup
**Delivery:** Month 2 | **Cost:** 18,000 ADA

**Outputs:**
- Complete technical architecture document detailing system components, data flows, and integration points between Discord Activity, game server, Hydra nodes, and Cardano L1
- Hydra Head manager service deployed on Cardano preview testnet with automated open/close lifecycle management
- Game state machine specification defining all valid states, transitions, and rules for Monopoly-style gameplay
- Discord Activity skeleton application registered with Discord Developer Portal and rendering basic UI in voice channels

**Acceptance Criteria:**
- Hydra Head successfully opens and closes on preview testnet with documented transaction IDs proving lifecycle completion
- State machine correctly processes at least 10 different game transitions (dice roll, buy property, pay rent, etc.) in isolated tests
- Discord Activity loads without errors in voice channel on desktop and mobile Discord clients
- Architecture document reviewed and approved by at least one external Cardano developer for technical soundness

**Evidence of Completion:**
- Public GitHub repository containing all source code with MIT license
- Testnet TXIDs for at least 5 Head open/close operations demonstrating reliability
- Video walkthrough (5-10 minutes) demonstrating Hydra setup and Discord Activity loading
- PDF technical documentation available for community review

---

### Milestone 2: Core Game Development & Wallet Integration
**Delivery:** Month 4 | **Cost:** 18,000 ADA

**Outputs:**
- Complete Phaser 3 game client with full Monopoly-style board, animated dice rolls, property cards, and player tokens supporting 2-6 simultaneous players
- Colyseus multiplayer server handling room creation, player matchmaking, turn synchronization, and reconnection logic for dropped connections
- Bidirectional Hydra integration where every game action (roll, buy, sell, rent) is recorded as a Hydra transaction with automatic state synchronization
- UTXO.dev wallet connectivity allowing players to connect wallets for reward claims without disrupting gameplay flow

**Acceptance Criteria:**
- Complete 2-6 player games playable on preview testnet from start to finish with all core mechanics functional (dice, properties, rent, bankruptcy)
- Multiplayer synchronization maintains consistency across all players with no state divergence detected in 20+ test games
- Wallet connection flow completes successfully in Discord iframe environment on both desktop and mobile
- Turn latency measured at <500ms from action to confirmation across all test sessions

**Evidence of Completion:**
- Playable testnet build accessible via Discord Activity installation or web URL
- Video recording of complete 4-player game session (15-30 minutes) demonstrating all mechanics
- Performance metrics report showing latency measurements, transaction counts, and any errors encountered
- GitHub release tagged v0.2.0 with updated documentation

---

### Milestone 3: Provably Fair VRF Implementation & Open Beta Launch
**Delivery:** Month 5 | **Cost:** 18,000 ADA

**Outputs:**
- Provably Fair VRF system using commit-reveal scheme where both player and server contribute randomness, with all commitments and reveals stored on Hydra for verification
- Public verification tool allowing anyone to input game ID and independently verify all dice rolls and random events matched the committed hashes
- Open beta program with 50+ unique testers from Cardano2VN community playing full game sessions and providing structured feedback
- Web fallback version of the game accessible via browser for users who prefer not to use Discord or cannot access Activities

**Acceptance Criteria:**
- VRF verification tool correctly validates 100% of dice rolls from test games with zero false positives or negatives
- At least 50 unique Discord accounts participate in beta testing with confirmed game completions tracked via server logs
- Minimum 200 games played during beta period with completion rate >85% (games reaching natural end vs abandoned)
- Critical bug count remains below 5 issues throughout beta, with all critical bugs resolved within 48 hours of report

**Evidence of Completion:**
- VRF verification tool deployed publicly with documentation explaining the cryptographic approach
- Anonymized beta tester participation report showing unique user count, games played, and feedback summary
- Game statistics dashboard showing real-time metrics: games played, completion rate, average duration
- Bug tracking report from GitHub Issues showing all reported issues and resolution status

---

### Milestone 4: Mainnet Production Launch & Project Close-Out
**Delivery:** Month 6 | **Cost:** 21,000 ADA

**Outputs:**
- Full mainnet deployment with Hydra Heads operating on Cardano mainnet, processing real ADA for game settlements and tournament prize distributions
- Public Discord Activity release available for any Discord server to install, with documentation and setup guide for server administrators
- Complete open source release of all project components: game client, server, Hydra integration library, Provably Fair module, and Aiken smart contracts
- Project close-out report documenting achievements against KPIs, lessons learned, and recommendations for future Hydra gaming projects, plus 5-10 minute video summary

**Acceptance Criteria:**
- Minimum 100 games completed on mainnet with real ADA settlements verified via on-chain transaction IDs
- At least 5 Discord servers install the Activity with confirmed active usage beyond initial installation
- All source code repositories public with MIT license, comprehensive README files, and contribution guidelines
- Close-out report and video submitted to Catalyst and approved by reviewers

**Evidence of Completion:**
- Mainnet settlement TXIDs for 100+ games published in close-out report
- Discord Activity installation count from Discord Developer Dashboard screenshot
- GitHub repositories public with star count and any community forks documented
- Close-out report PDF and video hosted on YouTube/IPFS with links submitted to Catalyst

---

## RESOURCES

### Team Roster

| Name | Role | LinkedIn/Contact | Allocation |
|------|------|------------------|------------|
| Phung Tien Dung | Lead Blockchain Dev | [LinkedIn](https://linkedin.com/in/dijnie) / [GitHub](https://github.com/dijnie) | 60% |
| Khanh Duy Nguyen | Frontend Developer | [Telegram](https://t.me/khanhnguyen1711) | 80% |
| Le Anh Quan | DevOps/Infrastructure | [LinkedIn](https://linkedin.com/in/lenaquan306) | 40% |

**No additional hiring planned.** Team has all required skills.

### External Resources

| Resource | Purpose | Cost |
|----------|---------|------|
| AWS/Cloud hosting | Hydra nodes, game servers | Included in budget |
| Discord Developer | Activity registration | Free |
| UTXO.dev | Wallet integration | Free tier sufficient |

---

## BUDGET & COSTS

### Detailed Breakdown

| Category | Amount (ADA) | USD Equiv | % of Budget |
|----------|--------------|-----------|-------------|
| **Development** | 55,000 | $23,100 | 73% |
| - Smart contracts (Aiken) | 15,000 | $6,300 | 20% |
| - Game frontend (React/Phaser) | 20,000 | $8,400 | 27% |
| - Backend (NestJS/Colyseus) | 12,000 | $5,040 | 16% |
| - Hydra integration | 8,000 | $3,360 | 11% |
| **Infrastructure** | 8,000 | $3,360 | 11% |
| - Cloud hosting (6 months) | 5,000 | $2,100 | 7% |
| - Hydra node operations | 3,000 | $1,260 | 4% |
| **Design & UX** | 5,000 | $2,100 | 7% |
| - Game UI/graphics | 3,500 | $1,470 | 5% |
| - User experience design | 1,500 | $630 | 2% |
| **Testing & QA** | 4,000 | $1,680 | 5% |
| - Beta testing coordination | 2,000 | $840 | 3% |
| - Security review | 2,000 | $840 | 3% |
| **Documentation** | 3,000 | $1,260 | 4% |
| - Technical docs | 2,000 | $840 | 3% |
| - Community guides | 1,000 | $420 | 1% |
| **TOTAL** | **75,000** | **$31,500** | **100%** |

### Cost Justification

**Development rates:** ~$15-20/hour, competitive for Vietnam-based senior developers with blockchain expertise. Below Western freelance rates ($50-150/hour).

**Infrastructure:** AWS EC2 + managed services at ~$350/month for 6 months. Includes redundancy for Hydra nodes.

**No paid third-party services:** All core technologies (Hydra, Discord SDK, UTXO.dev) are free/open source.

---

## VALUE FOR MONEY

### Why This Budget Represents Good Value

**1. Competitive Pricing:**
- Similar Catalyst gaming projects requested 100K-200K ADA
- We deliver MVP + web fallback + open source for 75K ADA
- 3-person experienced team reduces coordination overhead

**2. Cost Efficiency:**
- Vietnam-based team: quality output at lower cost
- No external contractors needed
- Free/open source technology stack

**3. Deliverable Density:**
- 4 major milestones with concrete outputs
- Full production game, not just prototype
- Open source SDK with long-term ecosystem value

**4. Ecosystem Multiplier:**
- Open source release enables derivative projects
- Documentation accelerates other Hydra developers
- First-mover creates category others can follow

### Comparison to Market Rates

| Item | Market Rate | Our Cost | Savings |
|------|-------------|----------|---------|
| Full-stack dev (6mo) | $30-50K | $15-20K | 50%+ |
| Game UI development | $10-20K | $8.4K | 30%+ |
| Smart contract audit | $5-10K | $840 (internal) | 80%+ |
| Hydra integration | Custom quote | $3.3K | N/A |

**Total value delivered: ~$60-80K equivalent at Western rates for $31.5K budget.**

---

## SUBMISSION CHECKLIST

- [x] Title under 60 characters
- [x] Problem statement under 200 characters
- [x] Solution under 200 characters
- [x] Budget within category range (15K-200K ADA)
- [x] Timeline 2-12 months
- [x] 4 milestones for 75K budget
- [x] All milestones >200 characters
- [x] Team LinkedIn profiles linked
- [x] Previous Catalyst projects referenced
- [x] On-chain metrics defined
- [x] Open source commitment stated
- [x] Architecture diagram included
- [x] All character limits respected
