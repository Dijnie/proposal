# Polyhydra - Fund15 Proposal Draft v3

**Category:** Cardano Use Cases: Prototype & Launch
**Budget:** 75,000 ADA (~$31,500)
**Timeline:** 6 months

---

## PROPOSAL SETUP

### Title (60 chars max)
```
Polyhydra: OpenSource Monopoly-Style Board Game on Hydra L2
```
(52 characters)

### Budget
**75,000 ADA**

### Timeline
**6 months**

### Problem Statement (200 chars max)
```
GameFi on Cardano is underdeveloped due to speed and fee limitations; Hydra, though new, needs real-world projects to prove its effective application in GameFi.
```
(163 characters)

### Solution Overview (200 chars max)
```
Polyhydra: Monopoly style game with Hydra, providing a fast, cost-effective and fair Web3 gaming experience like Web2, ensuring transparency to attract players and providing GameFi on Cardano.
```
(194 characters)

### Supporting Documentation
- Team Hub: https://www.htlabs.xyz/members
- HTlabs Projects: https://www.htlabs.xyz/projects
- GitHub (Dung): https://github.com/dijnie
- GitHub (Quan): https://github.com/anhquan0
- LinkedIn (Quan): https://www.linkedin.com/in/lenaquan306/
- LMS Production: https://lms.cardano2vn.io
- CIP25 Minting Tool: https://cardano-tool.vercel.app
- **Hydra POC Demo:** https://github.com/htlabs-xyz/hydra-game-poc (testnet demonstration)
- **Phaser Game Prototype:** https://github.com/htlabs-xyz/polyhydra-prototype (board game mechanics demo)

### Project Dependencies
```
Dependencies on third-party services:
1. Discord Developer Platform - For Discord Activity hosting (free tier, public API)
2. UTXO.dev - Primary custodial wallet service for seamless user onboarding
   Contingency: Mesh SDK with self-hosted custodial layer if UTXO.dev unavailable
3. Hydra Node Infrastructure - Self-hosted, no external dependency

All services have public APIs and documentation. No special licenses required.
```

---

## CAMPAIGN CATEGORY QUESTIONS

### Innovation (What makes your idea innovative?)

Polyhydra introduces three breakthrough innovations to Cardano gaming:

**1. Pioneer GameFi on Cardano with Hydra**
Polyhydra pioneers the application of GameFi on Cardano, leveraging Hydra to deliver a Web2-class gaming experience. Unlike previous NFT/dApp projects, Polyhydra brings real-time gameplay with <200ms latency, zero transaction fees, and seamless onboarding—attracting Web2 players and establishing a scalable GameFi standard for Cardano.

**2. Discord Activity Integration**
Unlike traditional Web3 games requiring wallet downloads and seed phrase management, Polyhydra deploys as a Discord Activity. Players launch directly from Discord servers, with UTXO.dev custodial wallets abstracting all blockchain complexity. This "invisible Web3" approach targets Discord's 150M+ monthly active users.

**3. Provably-Fair VRF Mechanics**
Traditional online Monopoly games rely on server-side randomness that players cannot verify. Polyhydra implements Verifiable Random Function (VRF) on-chain, allowing any player to mathematically prove dice rolls were fair—eliminating cheating concerns that plague existing board games.

### Prototype/MVP Description

**Existing Prototypes (Pre-Submission):**

We have developed two proof-of-concept prototypes to validate our technical approach:

1. **Hydra Game POC** (https://github.com/htlabs-xyz/hydra-game-poc):
   - Demonstrates Hydra Head lifecycle (open/commit/close) on Preview Testnet
   - Simple state machine tracking player moves
   - Verified <200ms round-trip latency for state updates
   - Testnet TXIDs available in repository README

2. **Phaser Board Game Prototype** (https://github.com/htlabs-xyz/polyhydra-prototype):
   - 40-space board with dice rolling mechanics
   - 2-4 player turn management
   - Property purchase and rent calculation
   - Built with Phaser 3 + Rex Board Plugin

**Deliverable:** Web-based and Discord Activity board game playable on Cardano Preview Testnet, with mainnet deployment by Month 6.

**Access Points:**
1. **Discord Activity:** Launchable from any Discord server via Activities menu
2. **Web Portal:** Standalone website for non-Discord users

**MVP Features:**
- 2-4 player games and spectators
- Generic city-themed properties (40 spaces)
- Core Monopoly mechanics: dice rolls, property buying, rent collection, jail, chance cards
- Hydra-synchronized game state (every turn recorded on-chain)
- Provably-fair VRF dice rolls
- Game history stored permanently on Cardano

**Community Testing:**
- Open beta on Preview Testnet (Month 4-5)
- Target: 50+ testers from Cardano2VN community
- Public Discord server for feedback collection

### Success Metrics (On-chain)

**Quantitative KPIs:**
- **Games Completed:** 500+ (On-chain game settlement TXs)
- **Unique Players:** 200+ (Unique wallet addresses)
- **Hydra Heads Opened:** 300+ (On-chain head open TXs)
- **Total Transactions:** 50,000+ (Hydra snapshot TXs)
- **Avg Latency:** <200ms (Turn confirmation time)
- **Game Uptime:** >99% (Server monitoring logs)

**On-chain Evidence:**
- All game settlements recorded with TXIDs
- Hydra Head open/close transactions verifiable on explorer
- VRF proofs stored in transaction metadata
- Monthly reports with TXID lists published to Cardano Forum

---

## PROJECT & SOLUTION

### [SOLUTION] Detailed Description (10,000 chars max)

**📌 Context and Challenges**

Integrating blockchain into casual gaming faces significant barriers: a lack of real-world implementations, sparse technical guidance, and challenges delivering the seamless experience of Web2 games. Cardano's gaming ecosystem focuses on metaverses and action games, with no casual board games despite representing a $15B+ global market.

Current blockchain board games face fundamental problems:
- **High transaction fees** make turn-by-turn gameplay economically unfeasible
- **Slow confirmation times** (10-60 seconds) destroy real-time gaming experience
- **Server dependency** means players must trust centralized game operators
- **Complex onboarding** with wallet installations excludes casual gamers
- **Unverifiable randomness** enables operator cheating in dice-based games

Hydra, Cardano's L2 scaling solution achieving 1,000+ TPS with sub-second latency, theoretically solves speed and cost problems. However, Hydra lacks real-world gaming implementations. The October 2025 v1.0.0 release made Hydra production-ready, creating opportunity for pioneering projects.

**📌 Solutions**

Develop Polyhydra, a Monopoly-style board game integrated with Hydra, delivering a Web3 gaming experience as smooth as Web2 with blockchain's transparency and fairness. Implementation includes:

**1. Hydra-Powered Game Sessions**
Each game runs inside a dedicated Hydra Head. When players join, server opens new Head, commits initial game state, processes all turns as off-chain transactions. Players experience instant (<200ms) turn confirmations with zero fees. Upon completion, final state settles to Cardano mainnet as permanent, verifiable record.

Technical implementation:
- NestJS + Colyseus server manages Hydra Head lifecycle (open/commit/close)
- Colyseus Schema provides server-authoritative state sync with binary patches
- Game state encoded as Plutus datums within Hydra snapshots
- Aiken smart contracts validate game rules (prevent illegal moves)

**2. Discord Activity Integration**
Polyhydra deploys as Discord Activity—embedded application within Discord's interface. Players launch games directly from server menus without leaving Discord. UTXO.dev custodial wallets handle blockchain interactions invisibly:
- No wallet installation required
- No seed phrase management
- No transaction signing popups
- Players experience "normal" gaming while benefiting from blockchain verification

**3. Provably-Fair VRF Dice**
Every dice roll uses Verifiable Random Function cryptography:
- Server commits to `serverSeedCommitment` before game starts
- Each turn: client provides `clientSeed`
- Dice roll: `result = hash(serverSeed + clientSeed + nonce)`
- Any player can verify: `hash(serverSeed) === serverSeedCommitment`
- Proof stored on-chain in transaction metadata

**4. On-chain State Sync**
Every game action is recorded on-chain through Hydra state channels:
- Game start → Open Hydra Head, commit initial state
- Each turn → Submit state transition TX (instant, zero fee)
- Game end → Close Head, settle final state to L1
- Full game history stored permanently on Cardano for replay/audit

**📌 Content Summary**

**Game Development:**
- Build Monopoly-style board game with Phaser 3 engine featuring smooth animations, intuitive UI, mobile-responsive design
- Implement core mechanics: dice rolling, property acquisition, rent calculation, trading, mortgaging, jail system, chance/community chest cards
- Support 2-4 concurrent players with unlimited spectator mode
- Generic city theme with 40 properties across color groups

**Technical Stack:**
- **Client:** Phaser 3 (Canvas rendering) + Next.js 16 (React UI) + TailwindCSS
- **Server:** NestJS + Colyseus (multiplayer framework with Schema-based state sync)
- **Wallet:** UTXO.dev SDK (Discord OAuth, custodial, no seed phrase)
- **Blockchain:** Hydra (state channels) + Aiken (smart contracts) + Cardano (settlement)

**Platform Deployment:**
- Discord Activity via Embedded App SDK
- Web portal for standalone access
- UTXO.dev wallet abstraction for invisible Web3

**Community Engagement:**
- Beta testing with VietNam community (500+ members)
- Confirmed partnerships with GameFi Vietnam and Cardano2VN Discord servers
- Monthly progress reports on Cardano Forum

**📌 Impact**

Polyhydra powerfully demonstrates Cardano's ability to deliver fast, cost-effective, transparent casual gaming with Web3 experience matching Web2. It draws Web2 players through seamless Discord onboarding, boosts chain activity via game settlements and Hydra transactions, and offers a practical blueprint for developers, sparking innovation in Cardano's gaming ecosystem. The project strengthens Cardano's global gaming standing, paving the way for sustainable growth.

### [IMPACT] Community Impact (10,000 chars max)

**Positive Impact on Cardano Community**

**1. Hydra Ecosystem Growth**
Polyhydra becomes one of first consumer-facing Hydra applications, demonstrating L2 scaling works for real use cases beyond theoretical benchmarks. Success validates Hydra for other gaming projects:
- Reference implementation for Hydra gaming patterns
- Documentation of best practices and pitfalls
- Proof that 1,000+ TPS claims translate to user experience

**2. User Onboarding Pipeline**
Discord Activity integration creates low-friction path from Web2 to Web3:
- Users play Polyhydra without knowing it's blockchain-based
- Positive experience builds trust in Cardano gaming
- Optional ADA purchases introduce cryptocurrency naturally
- Custodial-to-self-custody migration path for interested users

Target funnel: Discord user → Polyhydra player → ADA holder → Cardano ecosystem participant

**3. Community Engagement Tool**
Cardano DAOs and stake pools gain social activity for member engagement:
- Host tournaments within Discord servers
- Create custom games for community events
- Build social bonds through shared gameplay
- Increase server activity and retention

**4. Vietnamese Cardano Community Showcase**
HTlabs' success demonstrates Vietnamese developer capabilities:
- Builds reputation for Cardano2VN community
- Encourages local developers to build on Cardano
- Creates Vietnamese-language gaming content for regional adoption

**Impact Measurement**

**Quantitative Metrics:**
- **Unique Players:** 200+ (Direct user adoption)
- **Games Completed:** 500+ (Platform engagement)
- **Discord Servers Hosting:** 10+ (Community distribution)
- **Hydra TXs:** 50,000+ (L2 utilization proof)
- **Avg Session Length:** 20+ min (User retention)
- **Turn Latency:** <200ms (UX quality validation)

**Qualitative Metrics:**
- Player satisfaction surveys (target >80% positive)
- Community feedback analysis from Discord
- Developer inquiries about Hydra integration
- Media coverage and social mentions

**Output Sharing**

**Public Deliverables:**
1. **Monthly Progress Reports** on Cardano Forum with:
   - Development updates and screenshots
   - KPI tracking against targets
   - TXID lists for on-chain verification
   - Technical challenges and solutions

2. **Technical Documentation** on GitHub:
   - Hydra game integration architecture
   - Aiken smart contract patterns for games
   - Discord Activity deployment guide
   - VRF implementation reference

3. **Demo Videos** on YouTube:
   - Full gameplay walkthroughs
   - Technical deep-dives for developers
   - Hydra performance demonstrations

4. **Community Workshops** covering:
   - How Polyhydra uses Hydra
   - Building Discord Activities on Cardano
   - Provably-fair gaming implementation

**Long-term Value**
- Open-source framework for community use
- Permanent documentation for future Cardano games
- Active player base contributing to gaming culture
- Evidence for marketing Cardano's gaming capabilities

### [CAPABILITY & FEASIBILITY] Team & Validation (10,000 chars max)

Building on HTlabs' proven Cardano development track record, Polyhydra delivers a production-ready Discord gaming experience that seamlessly bridges Web2 gamers to Cardano via Hydra.

### Existing Prototypes & Validation

Before submitting this proposal, we have developed working prototypes demonstrating core technical capabilities:

**1. Hydra Game POC** (https://github.com/htlabs-xyz/hydra-game-poc)
- Successfully opened and closed Hydra Heads on Cardano Preview Testnet
- Implemented simple game state machine with move tracking
- Measured <200ms round-trip latency for state updates
- Documented testnet transaction IDs for verification
- Video demonstration available showing full lifecycle

**2. Phaser Board Game Prototype** (https://github.com/htlabs-xyz/polyhydra-prototype)
- Built with Phaser 3 + Rex Board Plugin (phaser3-rex-plugins)
- Implements 40-space board layout with dice rolling
- Supports 2-4 player turn management
- Property purchase and rent calculation logic
- Playable demo hosted on GitHub Pages

These prototypes validate our technical approach and demonstrate hands-on capability with both Hydra and game development technologies.

### Early User Interest & Market Validation

Our concept and preliminary research have already identified strong demand channels:

* **Cardano2VN Network:** Access to **500+ Vietnamese Cardano community members** for immediate beta testing and feedback loops.
* **Gaming Community Partnerships:**
  - **GameFi Vietnam Discord** (800+ members) - Confirmed beta testing partnership
  - **Cardano2VN Gaming Channel** (600+ members) - Confirmed hosting for Discord Activity
  - **VILAI Stake Pool Community** (500+ members) - Letter of support received
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
* **Game Stack:** Demonstrated proficiency with **Phaser 3** (Client) and **Colyseus** (Multiplayer Server) through our board game prototype.
* **Hydra Stack:** Hands-on experience with Hydra Head operations validated through our Hydra Game POC.
* **Blockchain Stack:** Expert knowledge of **Aiken** for smart contract logic proven through Aiken Course and CIP68 projects.
* **Additional projects:** Cardano App Development Course, IoT Blockchain Templates, Dualtarget DeFi platform. Full portfolio: [https://www.htlabs.xyz/projects](https://www.htlabs.xyz/projects)

### Team Time Commitments

| Team Member | Role | Weekly Hours | Commitment |
|-------------|------|--------------|------------|
| Phung Tien Dung | Lead Developer / Blockchain | 30-35 hrs | Primary focus |
| Khanh Duy Nguyen | Frontend / Game Dev | 25-30 hrs | Dedicated |
| Le Anh Quan | DevOps / Infrastructure | 15-20 hrs | Part-time (FPT primary) |
| **Total** | | **70-85 hrs/week** | |

### Risk Assessment & Mitigation

| Risk | Likelihood | Impact | Mitigation Strategy |
|------|------------|--------|---------------------|
| Hydra SDK compatibility issues | Medium | High | Already validated via POC; use official MeshJS tutorial patterns; direct communication with Hydra team on Discord |
| Discord Activity approval delay | Low | Medium | Start approval process Month 1; web portal as fallback access point |
| UTXO.dev service unavailable | Low | High | **Contingency:** Mesh SDK with self-hosted custodial wallet layer; architecture supports wallet provider swap |
| Team capacity constraints | Low | Medium | Quan available for surge support; consider contractor for UI polish if needed |
| ADA price volatility | Medium | Medium | Convert 50% of each milestone to stablecoins upon receipt to lock USD value |
| Hydra Head operation costs | Low | Low | Tested on testnet; mainnet costs minimal (~0.2 ADA per head) |
| Player adoption below target | Medium | Medium | Leverage confirmed community partnerships; incentivize early adopters with beta tester recognition |

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
* **ADA Volatility Management:** Convert 50% of each milestone payment to USDC/USDT immediately upon receipt to protect against price fluctuations affecting delivery.

### Why We're Best Suited

* **Proven Catalyst Delivery:** Successful completion of Fund 10, 11, 12, and 13 projects demonstrates our rigorous milestone management and accountability.
* **Full-Stack GameFi Capability:** Unlike teams that specialize only in web or only in blockchain, we bridge the gap. We possess the specific stack required: **React/Next.js** (Frontend), **Phaser/Colyseus** (Game Logic), and **Hydra/Aiken** (Blockchain Settlement).
* **Community Trust:** We maintain a reputation for transparent reporting and open-source contributions. Our local presence (Vietnam) allows us to leverage a highly engaged user base for rapid testing and iteration.
* **Validated Technical Approach:** Our Hydra POC and Phaser prototype demonstrate hands-on capability, not just theoretical claims.

### Project Timeline Clarification

The **6-month timeline** features 4 major milestones with completion months listed. Work is continuous throughout:

* **Months 1-2:** Architecture & Hydra Setup (Milestone 1 completion)
* **Months 3-4:** Game Development & Wallet Integration (Milestone 2 completion)
* **Month 5:** VRF Implementation & Beta Launch (Milestone 3 completion)
* **Month 6:** Production Launch & Close-Out (Milestone 4 completion)

No gaps in development - milestones represent completion dates, not start dates. The team works continuously across all 6 months with overlapping workstreams (e.g., Frontend and Smart Contract development happen in parallel).

---

## MILESTONES

**Budget: 75,000 ADA = Minimum 3 milestones + Final required**

### Milestone 1: Architecture & Hydra Setup
- **Delivery Month:** 2
- **Cost:** 18,500 ADA

**Outputs:**
- Technical architecture document detailing the 3-layer system design (Client/Server/Blockchain) with data flow diagrams and component specifications
- Hydra Head manager service implementing complete lifecycle management including open, commit, snapshot, and close operations with error handling
- Aiken smart contracts for game state validation ensuring legal moves, turn order verification, and anti-cheat mechanisms
- VRF dice logic using hash(serverSeed:clientSeed:nonce) algorithm with cryptographic commitment scheme for provably-fair randomness
- Colyseus room schema with automatic state serialization to Plutus Datum format for on-chain storage
- Complete development environment configured for Cardano Preview Testnet with all dependencies documented

**Acceptance Criteria:**
- Hydra Head successfully opens and closes on Cardano Preview Testnet with verifiable transaction IDs recorded on blockchain explorer
- Smart contracts compile without errors using Aiken toolchain and deploy to testnet with correct validation logic passing all unit tests
- VRF engine produces mathematically verifiable random outputs that any third party can independently validate using the provided proof data
- Colyseus server synchronizes game state between multiple test clients with consistent state replication and no data loss during reconnection scenarios

**Evidence:**
- GitHub repository containing all source code with comprehensive documentation, inline comments, and detailed README files explaining setup and usage
- Testnet transaction IDs demonstrating successful Hydra Head open/close operations viewable on Cardano Preview explorer with metadata
- Video demonstration (5-10 minutes) showing VRF proof generation, verification process, and Hydra Head lifecycle in action
- Technical architecture PDF document with system diagrams, sequence flows, and API specifications

### Milestone 2: Game Development & Wallet Integration
- **Delivery Month:** 4
- **Cost:** 25,000 ADA

**Outputs:**
- Phaser 3 game client featuring complete Monopoly mechanics including 40 property spaces across 8 color groups, animated 3D dice rolling, jail system with bail/roll options, Chance and Community Chest card decks, property trading interface, and mortgage management
- NestJS + Colyseus multiplayer server with room creation, matchmaking, player synchronization, and automatic Hydra Head management per game session
- UTXO.dev wallet integration supporting Discord OAuth authentication and email fallback, enabling custodial wallet creation without seed phrase management
- Discord Activity deployment using Embedded App SDK with proper URL mappings for external service connections
- Support for 2-4 concurrent players with unlimited spectator mode allowing real-time game observation
- State serializer converting Colyseus game state to Plutus Datum format for Hydra on-chain storage

**Acceptance Criteria:**
- Complete game playable on Cardano Preview Testnet with all core mechanics functional and no game-breaking bugs identified during internal testing
- Discord Activity successfully launches from Discord server Activities menu and maintains stable connection throughout game session
- Wallet connects automatically upon game launch without requiring manual user intervention or complex setup steps
- All core Monopoly mechanics working correctly: dice rolling with VRF, property purchasing, rent calculation based on ownership and houses, jail entry/exit, card draws with proper effects
- Turn latency consistently under 200ms measured across 50+ test turns with Hydra state synchronization

**Evidence:**
- Live Discord Activity accessible from designated test Discord server demonstrating full functionality to reviewers upon request
- Gameplay video walkthrough (15-20 minutes) showing complete game session from start to finish including all major mechanics
- Testnet transaction IDs for multiple game sessions showing Hydra Head operations and game state settlements
- GitHub code release with tagged version, changelog, and deployment instructions for community verification

### Milestone 3: Beta Launch & VRF Implementation
- **Delivery Month:** 5
- **Cost:** 16,000 ADA

**Outputs:**
- Public beta release on Cardano Preview Testnet with open access for community members to join and test the game through Discord Activity and web portal
- Full VRF integration with complete on-chain proof storage allowing any player to verify dice roll fairness using provided verification tools
- Onboarding of 50+ beta testers from Cardano2VN community and partner Discord gaming servers with structured feedback collection process
- Comprehensive bug fixes addressing issues reported during community testing including gameplay bugs, UI/UX improvements, and connection stability enhancements
- Performance optimization targeting consistent sub-200ms latency under concurrent player load with server scaling adjustments as needed

**Acceptance Criteria:**
- Minimum 50 unique players successfully complete full game sessions verified through unique wallet addresses recorded in on-chain game settlements
- VRF proofs stored on-chain and independently verifiable for 100% of dice rolls using publicly accessible verification tool or script
- Turn latency maintained consistently under 200ms even with multiple concurrent games running simultaneously on the server infrastructure
- Game completion rate exceeds 99% meaning less than 1% of started games fail due to technical issues, crashes, or disconnections
- Player satisfaction survey conducted with beta testers achieving minimum 80% positive rating on overall experience

**Evidence:**
- Comprehensive beta tester list with anonymized feedback summary document highlighting key insights, reported issues, and implemented improvements
- On-chain verification showing unique wallet addresses that participated in beta testing viewable on Cardano explorer with game settlement transactions
- Public VRF proof verification tool deployed as web interface or command-line script with documentation enabling anyone to verify any dice roll from beta period
- Performance metrics report including latency percentiles (p50, p95, p99), server uptime statistics, and concurrent player capacity data collected during beta testing period

### Milestone 4: Production Launch & Close-Out
- **Delivery Month:** 6
- **Cost:** 15,500 ADA

**Outputs:**
- Production deployment on Cardano Mainnet with fully functional game accessible to all users through Discord Activity integration and standalone web portal
- Web portal launch providing alternative access point for users who prefer browser-based gameplay without Discord dependency
- Public documentation release on GitHub including complete technical documentation, API references, deployment guides, and developer tutorials for community contribution
- Comprehensive close-out report detailing project achievements, lessons learned, KPI performance analysis, and recommendations for future development
- Open-source framework release making core Hydra gaming components available for other developers to build upon with permissive licensing

**Acceptance Criteria:**
- Game successfully deployed and operational on Cardano Mainnet with real ADA transactions for Hydra Head operations and game settlements
- Complete documentation published on GitHub repository with clear organization, searchable content, and examples covering all major system components
- Close-out video (10-15 minutes) professionally produced demonstrating full game functionality, Hydra integration, VRF verification, and key achievements throughout the project
- All KPI targets achieved or exceeded: minimum 200 unique players onboarded, 500 games completed with on-chain settlements, and 50,000+ Hydra transactions processed during project period

**Evidence:**
- Mainnet game session transaction IDs viewable on Cardano mainnet explorer demonstrating live production usage with real settlements
- GitHub documentation repository with comprehensive README, technical guides, code comments, and contribution guidelines accessible to public
- Close-out video published on YouTube with public access link included in final report submission to Catalyst
- Final KPI report document containing complete metrics analysis, TXID lists for verification, user statistics, performance data, and comparison against original targets with explanations for any variances

---

## POST-FUNDING SUSTAINABILITY

**How Polyhydra Survives After Catalyst Funding**

**1. Community-Maintained Open Source**
- Core game released under MIT license
- Technical documentation enables community contributions
- Bug fixes and improvements from player community
- Discord server remains active for player support

**2. Premium Features (Future Revenue)**
- Custom property themes (city-specific boards)
- Tournament hosting tools for stake pools/DAOs
- Premium cosmetics (dice skins, board styles)
- Revenue funds ongoing server costs

**3. Partnership Revenue**
- Stake pool sponsorship of tournaments
- DAO hosting fees for private game instances
- Gaming community partnership integrations

**4. Infrastructure Cost Management**
- Server costs: ~$200/month (covered by premium features or community donations)
- Hydra operations: minimal (<0.5 ADA/day at projected usage)
- Discord Activity: Free tier sufficient

**5. Long-term Vision**
- Apply for future Catalyst funding for expansion features
- Explore token incentives for governance (Phase 2)
- Partnership with other Cardano gaming projects

---

## FINAL PITCH

### [RESOURCES] Team Roster
Our team combines deep Cardano expertise with proven track records in the ecosystem:

**📌 Phung Tien Dung – Fullstack Blockchain Developer (30-35 hrs/week)**
- Role: Leads blockchain integration and smart contract development. Architects Hydra state machine and provably-fair VRF implementation.
- Experience: 5+ years in software engineering, 2+ years in blockchain; expert in dApp development (Next.js) and smart contract writing (Aiken, Haskell). Contributed to multiple Catalyst-funded projects.
- Skills: Node.js, Python, C/C++, Haskell, Aiken; proficient in Cardano blockchain development.
- Contact: tiendung0325@gmail.com | Telegram: https://t.me/dijnie | GitHub: https://github.com/dijnie

**📌 Khanh Duy Nguyen – Blockchain Developer (25-30 hrs/week)**
- Role: Develops game frontend (React/TypeScript) and Discord Activity integration. Implements wallet connectivity and game UI.
- Experience: Full-stack developer with expertise in building scalable web platforms. Specialized in blockchain application development and user-facing interfaces.
- Skills: Backend and frontend development, web platform integration, wallet connectivity, API design.
- Contact: nguyenkhanh17112003@gmail.com | Telegram: https://t.me/khanhnguyen1711

**📌 Le Anh Quan – Full-Stack Developer | System Operator (15-20 hrs/week)**
- Role: Manages infrastructure, DevOps pipelines, and Hydra node operations. Ensures platform reliability and secure deployment.
- Experience: Software engineering expert with 5+ years of backend experience at FPT Software. Extensive production system management and cloud deployment.
- Skills: Java, Node.js, Python; proficient in system operations, DevOps management, and AWS deployment.
- Contact: GitHub: https://github.com/anhquan0 | LinkedIn: https://www.linkedin.com/in/lenaquan306/

**Team Hub:** https://www.htlabs.xyz/members

### [BUDGET & COSTS] Breakdown

**Total Budget: 75,000 ADA (~$31,500 USD at $0.42/ADA)**

- **Smart Contract Dev:** 16,500 ADA / $6,930 (22%) - Hydra manager, Aiken contracts, VRF logic
- **Game Development:** 21,000 ADA / $8,820 (28%) - Phaser client, Colyseus server, mechanics
- **Frontend & Integration:** 14,000 ADA / $5,880 (19%) - React UI, Discord Activity, wallet integration
- **Infrastructure:** 8,000 ADA / $3,360 (11%) - Server hosting, Hydra nodes, testnet costs
- **Testing & QA:** 5,000 ADA / $2,100 (7%) - Beta testing, bug fixes, performance tuning
- **Documentation:** 3,000 ADA / $1,260 (4%) - Technical docs, user guides, close-out video
- **Contingency:** 7,500 ADA / $3,150 (10%) - Unexpected costs, scope adjustments, price volatility buffer
- **Total:** 75,000 ADA / $31,500 (100%)

**Third-Party Costs:**
- Discord Developer Platform: Free (public API)
- UTXO.dev: Free tier sufficient for beta
- Server Hosting (AWS/DigitalOcean): ~$200/month included
- Hydra Node: Self-hosted, included in Infrastructure

**Labor Rate Justification:**
- Vietnam-based team with competitive rates
- Senior blockchain developer: ~$30-40/hour (vs $100+ US/EU)
- Frontend developer: ~$25-35/hour
- DevOps engineer: ~$25-30/hour
- Rates align with Vietnam IT industry standards (source: TopDev Vietnam 2024)

**ADA Price Volatility Management:**
- Convert 50% of each milestone payment to USDC/USDT upon receipt
- Maintains USD-equivalent purchasing power for team costs
- Remaining 50% held in ADA for ecosystem alignment

### [VALUE FOR MONEY] Justification

**1. Competitive Budget Analysis**

Polyhydra requests 75,000 ADA for complete Hydra-integrated game—significantly below comparable Catalyst gaming proposals:
- Typical gaming proposals: 100,000-200,000 ADA
- Polyhydra delivers similar scope at 40-60% lower cost
- Vietnam-based team enables cost efficiency without quality compromise

**2. Deliverable Value**

For 75,000 ADA, Cardano receives:
- First production board game on ecosystem
- Hydra L2 proof-of-concept for gaming
- Reusable open-source framework for developers
- Discord Activity integration reference
- VRF implementation example
- 200+ new ecosystem users

**3. Cost Per Outcome**
- **Per unique player (200 target):** 375 ADA (Competitive)
- **Per game session (500 target):** 150 ADA (Below average)
- **Per Hydra TX (50,000 target):** 1.5 ADA (Highly efficient)

**4. Long-term ROI**

- Open-source framework benefits entire ecosystem
- Documentation reduces learning curve for future projects
- Successful launch attracts additional gaming development
- Community growth from player onboarding

**5. Risk-Adjusted Value**

HTlabs' proven Catalyst track record (Fund 10-13 completions) reduces delivery risk compared to unproven teams requesting larger budgets. Successful delivery of Complete Aiken Course (F11) and CIP68 Generator (F12) demonstrates technical capability for Polyhydra's scope.

**6. Pre-Validated Technical Approach**

Our Hydra POC and Phaser prototype demonstrate working implementations, reducing technical risk that typically justifies higher budgets for exploratory projects.

---

## SUBMISSION CHECKLIST

- [x] Title under 60 characters (52)
- [x] Problem statement under 200 characters (163)
- [x] Solution overview under 200 characters (194)
- [x] Budget within category range (75K ADA)
- [x] Timeline 2-12 months (6 months)
- [x] All team members have verifiable credentials
- [x] Dependencies clearly stated with contingencies
- [x] Innovation clearly articulated (3 breakthroughs)
- [x] MVP/Prototype described with links to existing POCs
- [x] Success metrics are on-chain verifiable
- [x] Solution section with Context/Solutions/Content/Impact structure
- [x] Impact section with quantitative/qualitative metrics
- [x] Capability section with team credentials and validation
- [x] Milestones meet requirements (4 milestones for 75K)
- [x] Budget breakdown itemized with 10% contingency
- [x] Value for money justified with comparisons
- [x] Supporting documentation links valid
- [x] Hydra POC evidence included
- [x] Game development prototype evidence included
- [x] Risk assessment table with mitigations
- [x] Team time commitments specified
- [x] UTXO.dev contingency plan documented
- [x] Partnership names confirmed
- [x] Post-funding sustainability plan included
- [x] ADA volatility management addressed
