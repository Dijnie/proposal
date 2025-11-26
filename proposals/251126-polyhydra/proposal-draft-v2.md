# Polyhydra - Fund15 Catalyst Proposal Draft v2

**Category:** Cardano Use Cases: Prototype & Launch
**Budget:** ₳70,000 (~$29,400 USD at 1 ADA = $0.42)
**Timeline:** 6 months

---

## PROPOSAL SETUP

### Title (60 chars max)
```
Polyhydra: Monopoly-Style Board Game on Hydra for Discord
```
(56 characters)

### Budget
**₳70,000**

### Timeline
**6 months**

### Problem Statement (200 chars max)
```
Cardano GameFi lacks user traction. Discord has 200M+ gamers with zero Cardano presence. No bridge exists to onboard Web2 users into Cardano ecosystem.
```
(152 characters)

### Solution Overview (200 chars max)
```
Polyhydra: Fun board game as Discord Activity to attract Web2 gamers to Cardano. Simple gameplay, Hydra-powered, provably-fair. Gateway to Cardano GameFi.
```
(154 characters)

---

## SUPPORTING DOCUMENTATION

- GitHub Repository: [To be created - github.com/polyhydra-gamefi]
- Technical Architecture: [Link to published doc]
- Hydra Documentation: https://hydra.family
- Discord Activities SDK: https://discord.com/developers/docs/activities/overview
- UTXO.dev (Non-Custodial Wallet): https://utxo.dev
- Reference: Hydra Minecraft (Fund14 funded): https://projectcatalyst.io/funds/14/cardano-use-cases-concepts/hydra-minecraft

---

## PROJECT DEPENDENCIES

**Technical Dependencies (all open-source, no licensing required):**
- Hydra Protocol v1.0+ (IOG, production-ready Oct 2025)
- Discord Embedded App SDK (Discord, MIT license)
- React/TypeScript (MIT license)
- CIP-30 wallet standard (Cardano community standard)
- UTXO.dev wallet tools (graeLabs, open-source)

**No organizational dependencies.** All technologies are open-source and publicly available. We have reviewed Discord's developer terms and Hydra documentation. UTXO.dev provides browser-based CIP-30 wallet that works without browser extensions—critical for Discord iframe integration.

---

## CAMPAIGN CATEGORY QUESTIONS

### Innovation Description

**What makes Polyhydra innovative:**

• **Web2 User Acquisition Strategy** - Instead of building for crypto users, we build for Discord gamers (200M+) and let them discover Cardano through fun gameplay. Play first, wallet later.

• **First Cardano Discord Activity** - Zero Cardano apps exist as Discord Activities. We're first to tap this massive user base where gamers already spend their time.

• **GameFi Ecosystem Catalyst** - We create open-source patterns (Hydra gaming, provably-fair VRF) that other developers can use. One game inspires many.

• **Fun-First Design** - Most blockchain games feel like crypto apps. Polyhydra feels like a game that happens to be on blockchain. Low friction, high engagement.

• **UTXO.dev Non-Custodial Wallet** - Browser-based wallet integration, no extension required. Players control their own keys. Perfect for onboarding Web2 users who don't have crypto wallets yet.

• **Provably-Fair Standard** - Commit-reveal VRF that any Cardano game can adopt. We open-source the solution to a common problem.

**Differentiation:**
- Other projects: Build for crypto users
- Polyhydra: Build for gamers, convert to crypto users

### Prototype/MVP Description

**MVP Deliverables:**

1. **Monopoly-Style Discord Activity** - 2-6 player board game embedded in Discord voice channels
2. **Turn-Based Gameplay** - Roll dice, buy/rent/sell properties, draw event cards
3. **Hydra Integration** - All turns processed off-chain; final state settled to L1
4. **Provably-Fair Dice** - Commit-reveal randomness verifiable from match transcript
5. **UTXO.dev Non-Custodial Wallet** - Browser-based wallet via CIP-30, no extension required. Players control their own keys; wallet only needed for rewards/NFTs at game end.
6. **Open Source** - MIT licensed, Docker-compose for local testing

**Access:**
- Discord Activity: Publicly installable from Discord App Directory
- Web Fallback: https://polyhydra.io (if Discord unavailable)
- Source Code: GitHub repository
- Demo Video: YouTube walkthrough

**Community Testing:**
- Public beta in Month 5
- Discord server for bug reports
- On-chain metrics dashboard showing all match transcripts

### Success Metrics (Blockchain Usage)

**On-Chain Metrics (6-month targets):**

| Metric | Target | Measurement |
|--------|--------|-------------|
| Hydra Transactions | 100,000+ | Hydra node logs |
| Unique Wallets | 300+ | L1 settlement addresses |
| Game Transcripts (txIDs) | 5,000+ | On-chain settlement records |
| Hydra Heads opened/closed | Track | Node metrics |
| Median fee/game | <$0.10 | On-chain data |

**Off-Chain Metrics:**

| Metric | Target | Measurement |
|--------|--------|-------------|
| Discord Installs | 1,000+ | Discord Analytics |
| Games/week | 500+ | Server analytics |
| Retention Rate | >20% D7 | Analytics |

**All txIDs publicly listed for community self-verification.**

---

## [SOLUTION] Detailed Description (10,000 chars)

### The Problem We're Solving

**Cardano GameFi is struggling to attract users.** While the technology is solid, there's no fun, accessible game that brings Web2 users into the ecosystem.

**Two Core Problems:**

**1. No Web2 → Cardano Bridge**
Discord hosts 200M+ monthly active gamers—the largest gaming community online. Yet zero Cardano applications exist as Discord Activities. This is a massive missed opportunity to onboard new users where they already spend time.

**2. Cardano GameFi Needs a Catalyst**
Current Cardano games are either too complex (requiring wallet setup for every action) or not engaging enough. The ecosystem needs a simple, fun game that:
- Attracts players first, blockchain second
- Shows what Cardano can do (fast, cheap, fair)
- Creates a template for other GameFi developers

### Our Solution: Polyhydra

We are building a Discord Activity board game in a "Monopoly" style that runs on Hydra. This aims to provide an experience as smooth as Web2 while remaining as transparent and verifiable as Web3:

**Core Gameplay:**
- Players open the Activity in a voice channel
- Create/join a 2-6 player room
- Play turn-by-turn (roll dice, buy/rent/sell properties, event cards)
- Intuitive UI with smooth animations
- When game ends → Head closes → Match transcript (txID, state hash, metadata) recorded on L1
- Leaderboard updates instantly

**Why This Approach:**

• **Fits the turn-based nature** - Hydra allows continuous state updates with near-zero cost within the Head, only writing to L1 when the final outcome needs to be settled.

• **Reduced friction via Discord** - Players are where they already spend their daily time; no wallet connection is needed for every turn.

• **Trust & Fairness** - Provably-fair dice + on-chain history assures players that cheating is impossible.

**Technical Architecture:**

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

**Provably-Fair Technique:**
- Commit-reveal model for server_nonce and client_nonce
- Combined with on-chain anchor
- HMAC/SHA256 generates random numbers
- Can be self-verified from public data in match transcript

**Reliability Features:**
- Pause/resume support
- Reconnect handling for disconnected players
- Light snapshots for recovery
- Auto-forfeit for unresponsive players (60s timeout)

**Who Will Participate & Benefit:**

• **Discord Groups (2-6 players)** - Play together turn-by-turn, experiencing Web2-like smoothness but with Web3 transparency, anti-cheating, and on-chain record after every game.

• **Web3 Newcomers** - Access Cardano through a familiar game, without needing wallet interactions for every turn; only connect wallet when receiving rewards/post-match NFTs.

• **Cardano Ecosystem** - Increased visibility and on-chain activity due to a new stream of users from Discord.

• **Hydra Developers** - Real production data from thousands of matches, open-source patterns to reuse.

---

## [IMPACT] Community Impact (10,000 chars)

### Two Primary Impacts

**🎯 Impact 1: Onboard Web2 Users to Cardano**

Discord has 200M+ monthly active gamers who have never interacted with Cardano. Polyhydra creates a zero-friction entry point:

- **Play first, crypto later** - No wallet needed to play; only for rewards
- **Where users already are** - Discord voice channels, with friends
- **Natural discovery** - Discord Activities appear in server lists
- **Social viral loop** - Friends invite friends to play together

This is user acquisition through entertainment, not marketing.

**Conversion Funnel:**
```
Discord User → Sees Activity → Plays Game → Enjoys → Connects Wallet → Gets Reward → Explores Cardano
```

**🎯 Impact 2: Boost Cardano GameFi Ecosystem**

Polyhydra serves as a catalyst for GameFi development:

- **Proof that fun comes first** - Show other devs how to build engaging games
- **Open-source patterns** - Hydra gaming architecture anyone can use
- **Provably-fair standard** - Commit-reveal VRF for all Cardano games
- **Real user data** - Metrics that prove Cardano gaming works

We're not just building a game—we're building a template for Cardano GameFi.

### Quantitative Impact Metrics

**On-Chain (All verifiable):**
| Metric | Target | How Measured |
|--------|--------|--------------|
| Hydra Transactions | 100,000+ | Hydra node logs, public dashboard |
| Unique Wallets | 300+ | L1 settlement records |
| Game Transcripts | 5,000+ | On-chain txIDs |
| Hydra Heads opened/closed | Track | Node metrics |
| Median fee/game | <$0.10 | On-chain data |

**Off-Chain:**
| Metric | Target | How Measured |
|--------|--------|--------------|
| Discord Installs | 1,000+ | Discord Developer Analytics |
| Games/week | 500+ | Server logs |
| Retention Rate | >20% D7 | Analytics |
| Error rate | <1% | Monitoring |

### How We Share Outputs

1. **Open Source Repository**: All code on GitHub (MIT license)
2. **Monthly Progress Updates**: Cardano Forum posts
3. **Data Dashboard**: Public metrics showing Hydra activity
4. **Technical Blog Posts**: Architecture documentation
5. **Demo Videos**: YouTube tutorials
6. **Community Calls**: Monthly Discord AMA sessions
7. **Close-out Video**: Final presentation of achievements

### Long-term Ecosystem Value

**Sustainability & Scalability:**

Post-funding revenue streams:
- Cosmetics/IAPs in Discord (not pay-to-win)
- Pro Server Packages (branding, custom tournaments)
- Partnerships with Cardano ecosystem sponsors

Upgrade Roadmap:
1. Extended maps/rules
2. Tournament mode
3. Team mode
4. Real-time events
5. Cross-server leaderboards

---

## [CAPABILITY & FEASIBILITY]

Building on HTlabs' proven Cardano development track record, Polyhydra delivers a production-ready Discord gaming experience that seamlessly bridges Web2 gamers to Cardano via Hydra.

### Early User Interest & Market Validation

Our concept and preliminary research have already identified strong demand channels:

* **Cardano2VN Network:** Access to **500+ Vietnamese Cardano community members** for immediate beta testing and feedback loops.
* **Gaming Community Reach:** Direct access to 3 active Discord gaming servers (totaling 2,000+ members) ready to pilot the Activity.
* **Stake Pool Operators:** Strong relationships with VILAI and HADA stake pools, providing a direct connection to delegators interested in GameFi engagement.

**Target early adopters identified through community engagement:**
* **Web3 Newcomers:** Discord users curious about crypto but deterred by wallet complexity (solved by our "invisible" UTXO.dev integration).
* **DAO Communities:** Cardano DAOs on Discord seeking social activities to increase member engagement.
* **GameFi Enthusiasts:** Players looking for "Provably Fair" gaming mechanics that transparently prevent cheating.

### Expertise and Experience

HTlabs demonstrates deep Cardano expertise through multiple successful Catalyst projects and live production deployments:

**Key Projects:**
* **Learning Management System:** Production LMS at [lms.cardano2vn.io](https://lms.cardano2vn.io)
* **Free Native Minting Tool (CIP25):** Live at [cardano-tool.vercel.app](https://cardano-tool.vercel.app)
* **Complete Aiken Course:** Fund 11 project - [Project Link](https://projectcatalyst.io/funds/11/cardano-open-ecosystem/the-complete-aiken-course-cardano-from-zero-to-expert)
* **Open Source CIP68 Generator:** Fund 12 project - [Project Link](https://projectcatalyst.io/funds/12/cardano-use-cases-concept/open-source-dynamic-assets-tokennft-generator-cip68)
    * *Relevance:* Demonstrates our ability to handle complex token standards and metadata, which is crucial for Polyhydra's game assets.
* **Study Guide for Marlowe:** Fund 10 project - [Project Link](https://projectcatalyst.io/funds/10/f10-startups-and-onboarding-for-students/study-guide-for-marlow)

**Technical Competency for Polyhydra:**
* **Game Stack:** Proficient in **Phaser 3** (Client) and **Colyseus** (Multiplayer Server) on **NestJS**, ensuring a smooth, real-time gaming experience.
* **Blockchain Stack:** Expert knowledge of **Hydra** (State Channels) for scaling and **Aiken** for smart contract logic.
* **Additional projects:** Cardano App Development Course, IoT Blockchain Templates, Dualtarget DeFi platform. Full portfolio: [https://www.htlabs.xyz/projects](https://www.htlabs.xyz/projects)

### Verification of Approach

* **Testnet Validation:** Deploy the game logic and Hydra Head manager on the preview testnet. We will confirm:
    * Hydra Head open/close lifecycles.
    * Turn-based state synchronization latency (<200ms).
    * Provably Fair VRF (Verifiable Random Function) logic correctness.
    * UTXO.dev wallet integration within the Discord iframe environment.
* **Open Beta Testing:** **50+ early adopters** playing full game sessions on testnet. We will collect quantitative metrics (game completion rates, disconnect frequency) and qualitative feedback to refine the UI/UX.
* **Progress Tracking:** Transparent KPI reporting: Game uptime >99.5%, Turn transaction success >99%, Average cost per game <0.1 ADA. Monthly reports on Cardano Forum/GitHub with on-chain evidence (TXIDs of game settlements).

### Fund Management

* **Monthly Budget Reports:** Detailed expenditure breakdowns by category (development, infrastructure, design) with line-item justification submitted to Catalyst monthly.
* **Auditable Invoices:** All third-party invoices (VPS hosting, Discord developer fees, cloud services) documented and archived for Catalyst review.
* **Milestone-Based Disbursements:** Funds released only upon verified deliverables: KPI reports, on-chain evidence (Hydra settlement TXIDs), GitHub code releases, and video demonstrations. Payment after Catalyst reviewer acceptance.

### Why We're Best Suited

* **Proven Catalyst Delivery:** Successful completion of Fund 10, 11, 12, and 13 projects demonstrates our rigorous milestone management and accountability.
* **Full-Stack GameFi Capability:** Unlike teams that specialize only in web or only in blockchain, we bridge the gap. We possess the specific stack required: **React/Next.js** (Frontend), **Phaser/Colyseus** (Game Logic), and **Hydra/Aiken** (Blockchain Settlement).
* **Community Trust:** We maintain a reputation for transparent reporting and open-source contributions. Our local presence (Vietnam) allows us to leverage a highly engaged user base for rapid testing and iteration.
* **Hydra Pioneers:** We are among the few teams actively implementing Hydra for consumer-facing applications, moving beyond theoretical research to practical utility.

### Project Timeline Clarification

The **6-month timeline** features 4 major milestones with completion months listed. Work is continuous throughout:

* **Months 1-2:** Architecture & Hydra Setup (Milestone 1 completion)
* **Months 3-4:** Game Development & Wallet Integration (Milestone 2 completion)
* **Month 5:** VRF Implementation & Beta Launch (Milestone 3 completion)
* **Month 6:** Production Launch & Close-Out (Milestone 4 completion)

No gaps in development - milestones represent completion dates, not start dates. The team works continuously across all 6 months with overlapping workstreams (e.g., Frontend and Smart Contract development happen in parallel).

---

## MILESTONES

### Milestone 1: Architecture & Hydra Setup
**Delivery Month:** 2
**Cost:** ₳17,500

**Outputs:**
- Technical architecture document
- Hydra node running on preview testnet
- Docker-compose configuration
- Basic React game scaffold
- CIP-30 wallet connection working

**Acceptance Criteria:**
- Hydra head can be opened/closed successfully
- Transactions can be submitted to Hydra head
- Wallet connects and signs transactions
- Documentation published

**Evidence of Completion:**
- GitHub repository with code
- Video demonstration of Hydra head operation
- Architecture document (PDF)
- Testnet transaction hashes

---

### Milestone 2: Board Game & Wallet Integration
**Delivery Month:** 4
**Cost:** ₳21,000

**Outputs:**
- Playable board game (Monopoly-style mechanics)
- Full Hydra integration for turn processing
- Wallet connection flow (for rewards only)
- Game state persistence via Hydra
- Basic UI/UX design with board, dice, cards

**Acceptance Criteria:**
- 2-6 player game playable end-to-end
- All turns recorded on Hydra head
- Game state recoverable from snapshots
- Turn timeout and reconnect working

**Evidence of Completion:**
- Playable demo link
- Video walkthrough of full game
- Hydra transaction logs
- User testing feedback (5+ testers)

---

### Milestone 3: VRF & Discord Activity
**Delivery Month:** 5
**Cost:** ₳17,500

**Outputs:**
- Commit-reveal VRF for dice rolls
- Discord Activity deployed
- Provably-fair outcomes verifiable
- Public beta launch
- Match transcript viewer

**Acceptance Criteria:**
- VRF outcomes verifiable from transcript data
- Discord Activity installable
- 50+ beta testers onboarded
- Bug tracking system active

**Evidence of Completion:**
- Discord Activity installation link
- VRF verification guide with examples
- Beta tester feedback summary
- On-chain settlement records

---

### Milestone 4: Launch & Close-out
**Delivery Month:** 6
**Cost:** ₳14,000

**Outputs:**
- Production launch
- Final documentation
- Close-out report
- Close-out video
- Community handoff

**Acceptance Criteria:**
- 300+ unique wallets connected
- 100,000+ Hydra transactions
- All documentation complete
- Video demonstrates full functionality

**Evidence of Completion:**
- On-chain metrics dashboard
- Close-out report (PDF)
- Close-out video (YouTube)
- GitHub repository finalized

---

## [RESOURCES] Team

Our team combines deep Cardano expertise with proven track records in the ecosystem:

**📌 Nguyen Anh Tien – Project Manager | Blockchain Developer**
- Role: Oversees project delivery, product strategy, and blockchain architecture. Leads community engagement and Hydra integration coordination.
- Experience: 7+ years in Cardano/Crypto space since 2018. Founder of VILAI stake pool. Cardano Ambassador and Catalyst Funded Proposer. Graduate of Plutus Pioneer Program and Atala Prism Pioneer Program. Challenge Team member and Co-host for Eastern Town Hall.
- Skills: Project management, product ownership, Cardano ecosystem expertise, community leadership, stake pool operation.
- Contact: tienna@gmail.com | Telegram: https://t.me/Tiennguyenanh

**📌 Phung Tien Dung – Fullstack Blockchain Developer**
- Role: Leads blockchain integration and smart contract development. Architects Hydra state machine and provably-fair VRF implementation.
- Experience: 5+ years in software engineering, 2+ years in blockchain; expert in dApp development (Next.js) and smart contract writing (Aiken, Haskell). Contributed to multiple Catalyst-funded projects.
- Skills: Node.js, Python, C/C++, Haskell, Aiken; proficient in Cardano blockchain development.
- Contact: tiendung0325@gmail.com | Telegram: https://t.me/dijnie | GitHub: https://github.com/dijnie

**📌 Khanh Duy Nguyen – Blockchain Developer**
- Role: Develops game frontend (React/TypeScript) and Discord Activity integration. Implements wallet connectivity and game UI.
- Experience: Full-stack developer with expertise in building scalable web platforms. Specialized in blockchain application development and user-facing interfaces.
- Skills: Backend and frontend development, web platform integration, wallet connectivity, API design.
- Contact: nguyenkhanh17112003@gmail.com | Telegram: https://t.me/khanhnguyen1711

**📌 Le Anh Quan – Full-Stack Developer | System Operator**
- Role: Manages infrastructure, DevOps pipelines, and Hydra node operations. Ensures platform reliability and secure deployment.
- Experience: Software engineering expert with 5+ years of backend experience at FPT Software. Extensive production system management and cloud deployment.
- Skills: Java, Node.js, Python; proficient in system operations, DevOps management, and AWS deployment.
- Contact: GitHub: https://github.com/anhquan0 | LinkedIn: https://www.linkedin.com/in/lenaquan306/

**Team Hub:** https://www.htlabs.xyz/members

---

## [BUDGET & COSTS]

### Budget Breakdown (₳70,000 = ~$29,400 USD)

| Category | ADA | USD | % | Description |
|----------|-----|-----|---|-------------|
| Development | 42,000 | $17,640 | 60% | 4 team members × 5 months (part-time allocation) |
| Infrastructure | 8,000 | $3,360 | 11% | Servers, Hydra nodes, hosting |
| Design/UX | 6,000 | $2,520 | 9% | UI design, board assets |
| Testing | 5,000 | $2,100 | 7% | QA, security review |
| Documentation | 5,000 | $2,100 | 7% | Docs, video, close-out |
| Marketing | 4,000 | $1,680 | 6% | Community, social media |
| **Total** | **70,000** | **$29,400** | 100% | |

### Development Cost Justification

**Team Allocation:**
- Project Lead (Tien): 20% time - coordination, community
- Lead Blockchain Dev (Dung): 60% time - Hydra, smart contracts
- Frontend Dev (Khanh): 60% time - React, Discord Activity
- DevOps (Quan): 30% time - infrastructure, deployment

**Effective Rate:**
- Total dev budget: $17,640 / 5 months = $3,528/month
- Distributed across 4 members at varied commitment levels
- Founders contributing additional unpaid hours

**Comparable Market Rates:**
- Blockchain developers: $4,000-8,000/month (US/EU)
- Our effective rate: ~$880/member/month (cost-efficient, Vietnam/SEA based, founder commitment)

### Infrastructure Costs

| Item | Monthly | Months | Total USD |
|------|---------|--------|-----------|
| VPS (Hydra node) | $200 | 6 | $1,200 |
| VPS (Game server) | $100 | 6 | $600 |
| Domain + CDN | $50 | 6 | $300 |
| Testnet ADA | - | - | $0 |
| Discord Developer | - | - | $0 (free tier) |
| **Total** | | | **$2,100** |

Buffer of $1,260 for unexpected infrastructure needs.

---

## [VALUE FOR MONEY]

### Cost Comparison

**Hydra Minecraft (Fund14):**
- Budget: ₳38,000
- Scope: Tech demo, 30 players
- Duration: 4 months

**Polyhydra:**
- Budget: ₳70,000 (1.8x Hydra Minecraft)
- Scope: Production board game, 300+ users, Discord distribution
- Duration: 6 months

We deliver 10x the user reach for less than 2x the budget.

### Cost Per User Acquisition

**Target:** 300 unique wallets
**Budget:** ₳70,000

**CPA:** ₳233/user (~$98 USD)

For comparison:
- Traditional app user acquisition: $1-5 per install
- Blockchain user acquisition: $50-200 per wallet
- Our CPA is competitive for blockchain onboarding

### Long-term Value

This is not one-off spend:
- Open-source code reusable by community
- Turn-based Hydra architecture patterns documented
- VRF standard for ecosystem adoption
- Foundation for future Cardano Discord games

### Why This Budget is Appropriate

1. **Lean team**: 2 core developers, part-time designer
2. **Below-market rates**: SEA-based team, founder commitment
3. **Focused scope**: Single board game MVP, not full platform
4. **Open source**: Community benefits from every dollar spent
5. **Precedent-based**: Comparable to funded Hydra Minecraft

---

## SUMMARY

**Polyhydra** = Fun game to bring Discord users to Cardano.

**Two Goals:**
1. **Onboard Web2 users** - 200M+ Discord gamers, zero Cardano presence → we fix that
2. **Boost Cardano GameFi** - Open-source patterns, provably-fair standard, real user data

**What We Build:** Monopoly-style board game as Discord Activity. Simple, fun, social. Players first, blockchain second.

**Budget:** ₳70,000 (~$29,400) | **Timeline:** 6 months | **Category:** Cardano Use Cases

**Why fund us:**
- **User acquisition** - Discord is where gamers are (200M+)
- **Fun first** - Game that people actually want to play
- **Low friction** - No wallet needed until rewards; UTXO.dev non-custodial wallet (no extension)
- **GameFi catalyst** - Open-source patterns for ecosystem
- **Proven team** - Cardano Ambassador, Plutus Pioneers, Catalyst track record
- **Lean MVP** - $30K for production game with real users

---

*Draft v2 - Complete with team details*
*Ready for final review before submission*
