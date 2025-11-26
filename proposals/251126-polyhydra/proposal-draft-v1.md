# Polyhydra - Fund15 Proposal Draft v1

**Category:** Cardano Use Cases: Prototype & Launch
**Budget:** 75,000 ADA (~$31,500)
**Timeline:** 6 months

---

## PROPOSAL SETUP

### Title (60 chars max)
```
Polyhydra: Monopoly-Style Board Game on Hydra L2
```
(52 characters)

### Budget
**75,000 ADA**

### Timeline
**6 months**

### Problem Statement (200 chars max)
```
Cardano gaming lacks casual board games. No blockchain Monopoly uses L2 state channels. Players face high fees, server dependency, and no true game state verification on existing alternatives.
```
(193 characters)

### Solution Overview (200 chars max)
```
We build Polyhydra: Monopoly-style game on Hydra L2 with zero-fee turns, provably-fair dice via VRF, Discord Activity integration, and on-chain game state—first board game on Cardano.
```
(184 characters)

### Supporting Documentation
- Team Hub: https://www.htlabs.xyz/members
- HTlabs Projects: https://www.htlabs.xyz/projects
- GitHub (Dung): https://github.com/dijnie
- GitHub (Quan): https://github.com/anhquan0
- LinkedIn (Quan): https://www.linkedin.com/in/lenaquan306/
- LMS Production: https://lms.cardano2vn.io
- CIP25 Minting Tool: https://cardano-tool.vercel.app

### Project Dependencies
```
Dependencies on third-party services:
1. Discord Developer Platform - For Discord Activity hosting (free tier, public API)
2. UTXO.dev - Custodial wallet service for seamless user onboarding (established Cardano service)
3. Hydra Node Infrastructure - Self-hosted, no external dependency

All services have public APIs and documentation. No special licenses required.
```

---

## CAMPAIGN CATEGORY QUESTIONS

### Innovation (What makes your idea innovative?)

Polyhydra introduces three breakthrough innovations to Cardano gaming:

**1. First Board Game on Hydra L2**
No production board game exists on Cardano, and no blockchain globally has implemented Monopoly-style gameplay using state channels. Polyhydra pioneers this category by running complete game sessions inside Hydra Heads—every dice roll, property purchase, and rent payment is a verifiable on-chain transaction with <200ms latency.

**2. Discord Activity Integration**
Unlike traditional Web3 games requiring wallet downloads and seed phrase management, Polyhydra deploys as a Discord Activity. Players launch directly from Discord servers, with UTXO.dev custodial wallets abstracting all blockchain complexity. This "invisible Web3" approach targets Discord's 150M+ monthly active users.

**3. Provably-Fair VRF Mechanics**
Traditional online Monopoly games rely on server-side randomness that players cannot verify. Polyhydra implements Verifiable Random Function (VRF) on-chain, allowing any player to mathematically prove dice rolls were fair—eliminating cheating concerns that plague existing board games.

**Comparison to Existing Solutions:**
| Feature | Polyhydra | Maya (BSC) | Traditional Online |
|---------|-----------|------------|-------------------|
| Transaction Cost | Zero (Hydra) | Gas fees | N/A |
| Game State | On-chain verifiable | Server-dependent | Server-only |
| Randomness | VRF provably-fair | Chainlink | Unverifiable |
| Entry Barrier | Discord login | Wallet + tokens | Account signup |

### Prototype/MVP Description

**Deliverable:** Web-based and Discord Activity board game playable on Cardano Preview Testnet, with mainnet deployment by Month 6.

**Access Points:**
1. **Discord Activity:** Launchable from any Discord server via Activities menu
2. **Web Portal:** Standalone website for non-Discord users

**Technical Stack:**
- **Client:** Phaser 3 game engine + Next.js React UI
- **Server:** NestJS + Colyseus multiplayer framework
- **Wallet:** UTXO.dev custodial integration (invisible to users)
- **Blockchain:** Hydra state channels + Aiken smart contracts

**MVP Features:**
- 2-4 player games with unlimited spectators
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
| Metric | Target | Measurement |
|--------|--------|-------------|
| Games Completed | 500+ | On-chain game settlement TXs |
| Unique Players | 200+ | Unique wallet addresses |
| Hydra Heads Opened | 300+ | On-chain head open TXs |
| Total Transactions | 50,000+ | Hydra snapshot TXs |
| Avg Latency | <200ms | Turn confirmation time |
| Game Uptime | >99% | Server monitoring logs |

**On-chain Evidence:**
- All game settlements recorded with TXIDs
- Hydra Head open/close transactions verifiable on explorer
- VRF proofs stored in transaction metadata
- Monthly reports with TXID lists published to Cardano Forum

---

## PROJECT & SOLUTION

### [SOLUTION] Detailed Description (10,000 chars max)

**📌 Context and Challenges**

Cardano's gaming ecosystem has grown significantly with metaverse projects (Cornucopias, Pavia) and action games (Speed Throne, Outlaws Brawl), yet a critical gap remains: casual, accessible games that appeal to mainstream audiences. Board games—the world's most familiar gaming format—are completely absent from Cardano, despite representing a $15B+ global market.

Current blockchain board games face fundamental problems:
- **High transaction fees** make turn-by-turn gameplay economically unfeasible
- **Slow confirmation times** (10-60 seconds) destroy real-time gaming experience
- **Server dependency** means players must trust centralized game operators
- **Complex onboarding** with wallet installations and seed phrases excludes casual gamers
- **Unverifiable randomness** enables operator cheating in dice-based games

Hydra, Cardano's Layer 2 scaling solution, theoretically solves the speed and cost problems—achieving 1,000+ TPS with sub-second latency. However, Hydra lacks real-world gaming implementations to prove its capabilities. The October 2025 v1.0.0 release made Hydra production-ready, creating an opportunity for pioneering projects.

**📌 Solutions**

Polyhydra delivers a Monopoly-style board game that demonstrates Hydra's gaming potential while solving blockchain gaming's core UX problems:

**1. Hydra-Powered Game Sessions**
Each game runs inside a dedicated Hydra Head. When players join a match, the server opens a new Head, commits initial game state, and processes all turns as off-chain transactions. Players experience instant (<200ms) turn confirmations with zero fees. Upon game completion, the final state settles to Cardano mainnet, creating a permanent, verifiable record.

Technical implementation:
- NestJS server manages Hydra Head lifecycle (open/commit/close)
- Colyseus handles real-time multiplayer synchronization
- Game state encoded as Plutus datums within Hydra snapshots
- Aiken smart contracts validate game rules (prevent illegal moves)

**2. Discord Activity Integration**
Polyhydra deploys as a Discord Activity—an embedded application within Discord's interface. Players launch games directly from server menus without leaving Discord. UTXO.dev custodial wallets handle all blockchain interactions invisibly:
- No wallet installation required
- No seed phrase management
- No transaction signing popups
- Players experience "normal" gaming while benefiting from blockchain verification

This approach targets Discord's massive user base (150M+ MAU) and Cardano DAOs seeking engaging community activities.

**3. Provably-Fair VRF Dice**
Every dice roll uses Verifiable Random Function cryptography:
- Server commits to randomness before roll
- Result computed from commit + block hash
- Any player can verify fairness mathematically
- Proof stored in transaction metadata
- Eliminates "rigged dice" accusations common in online board games

**4. Free-to-Play Model**
Players participate without purchasing tokens or NFTs:
- ADA used only for optional cosmetics and premium features
- Zero barrier to entry maximizes adoption
- Revenue from future NFT property packs and tournament entry fees

**📌 Content Summary**

**Game Development:**
- Build Monopoly-style board game with Phaser 3 engine featuring smooth animations, intuitive UI, and mobile-responsive design
- Implement core mechanics: dice rolling, property acquisition, rent calculation, trading, mortgaging, jail system, chance/community chest cards
- Support 2-4 concurrent players with unlimited spectator mode
- Generic city theme with 40 properties across color groups

**Blockchain Integration:**
- Deploy Hydra Head manager for game session lifecycle
- Write Aiken smart contracts for game rule validation
- Implement VRF-based provably-fair dice system
- Store complete game history on-chain for audit/replay

**Platform Deployment:**
- Discord Activity for seamless community gaming
- Web portal for standalone access
- UTXO.dev wallet abstraction for invisible Web3 experience

**Community Engagement:**
- Beta testing with Cardano2VN community (500+ members)
- Public Discord server for player feedback
- Monthly progress reports on Cardano Forum
- Open-source game framework documentation

**📌 Impact**

Polyhydra demonstrates Cardano's capability to deliver fast, fair, and accessible blockchain gaming:

**For Players:**
- First opportunity to play verified-fair board games on blockchain
- Zero learning curve via Discord Activity
- Permanent game history and achievement records

**For Cardano Ecosystem:**
- Proves Hydra's real-world gaming viability
- Attracts Web2 gamers through familiar format
- Creates reusable Hydra gaming framework for other developers
- Increases chain activity through game settlements

**For Developers:**
- Public documentation of Hydra game integration patterns
- Reference architecture for Discord Activity + Cardano
- Aiken smart contract examples for game logic

### [IMPACT] Community Impact (10,000 chars max)

**Positive Impact on Cardano Community**

**1. Hydra Ecosystem Growth**
Polyhydra becomes one of the first consumer-facing Hydra applications, demonstrating that Layer 2 scaling works for real use cases beyond theoretical benchmarks. Success validates Hydra for other gaming projects, creating a multiplier effect:
- Reference implementation for Hydra gaming patterns
- Documentation of best practices and pitfalls
- Proof that 1,000+ TPS claims translate to user experience

**2. User Onboarding Pipeline**
Discord Activity integration creates a low-friction path from Web2 to Web3:
- Users play Polyhydra without knowing it's blockchain-based
- Positive experience builds trust in Cardano gaming
- Optional ADA purchases introduce cryptocurrency naturally
- Custodial-to-self-custody migration path for interested users

Target funnel: Discord user → Polyhydra player → ADA holder → Cardano ecosystem participant

**3. Community Engagement Tool**
Cardano DAOs and stake pools gain a social activity for member engagement:
- Host tournaments within Discord servers
- Create custom games for community events
- Build social bonds through shared gameplay
- Increase server activity and retention

**4. Vietnamese Cardano Community Showcase**
HTlabs' success with Polyhydra demonstrates Vietnamese developer capabilities:
- Builds reputation for Cardano2VN community
- Encourages other local developers to build on Cardano
- Creates Vietnamese-language gaming content for regional adoption

**Impact Measurement**

**Quantitative Metrics:**
| Metric | Target | Why It Matters |
|--------|--------|----------------|
| Unique Players | 200+ | Direct user adoption |
| Games Completed | 500+ | Platform engagement |
| Discord Servers | 10+ | Community distribution |
| Hydra TXs | 50,000+ | L2 utilization proof |
| Avg Session Length | 20+ min | User retention |

**Qualitative Metrics:**
- Player satisfaction surveys (target >80% positive)
- Community feedback analysis from Discord
- Developer inquiries about Hydra integration
- Media coverage and social mentions

**Output Sharing**

**Public Deliverables:**
1. **Monthly Progress Reports** - Published on Cardano Forum with:
   - Development updates and screenshots
   - KPI tracking against targets
   - TXID lists for on-chain verification
   - Technical challenges and solutions

2. **Technical Documentation** - GitHub repository containing:
   - Hydra game integration architecture
   - Aiken smart contract patterns for games
   - Discord Activity deployment guide
   - VRF implementation reference

3. **Demo Videos** - YouTube content showing:
   - Full gameplay walkthroughs
   - Technical deep-dives for developers
   - Hydra performance demonstrations

4. **Community Workshops** - Live sessions covering:
   - How Polyhydra uses Hydra
   - Building Discord Activities on Cardano
   - Provably-fair gaming implementation

**Long-term Value**

Beyond the 6-month project scope, Polyhydra creates lasting ecosystem value:
- **Open-source Framework:** Core Hydra gaming code released for community use
- **Documentation:** Permanent reference for future Cardano games
- **Community:** Active player base contributing to Cardano gaming culture
- **Proof Point:** Evidence for marketing Cardano's gaming capabilities

### [CAPABILITY & FEASIBILITY] Team & Validation (10,000 chars max)

**Team Capabilities**

HTlabs delivers Polyhydra with a proven track record in Cardano development and successful Catalyst project delivery.

**📌 Phung Tien Dung – Fullstack Blockchain Developer (Lead)**
- **Role:** Blockchain integration, smart contract development, Hydra state machine architecture, VRF implementation
- **Experience:** 5+ years software engineering, 2+ years blockchain; expert in dApp development (Next.js) and smart contracts (Aiken, Haskell)
- **Catalyst Track Record:** Contributed to multiple funded projects across Fund 10-13
- **Skills:** Node.js, Python, C/C++, Haskell, Aiken
- **Contact:** GitHub: https://github.com/dijnie | Telegram: @dijnie

**📌 Khanh Duy Nguyen – Blockchain Developer**
- **Role:** Game frontend development (React/TypeScript), Discord Activity integration, wallet connectivity, game UI
- **Experience:** Full-stack developer specializing in blockchain applications and user-facing interfaces
- **Skills:** Backend/frontend development, web platform integration, wallet connectivity, API design
- **Contact:** Telegram: @khanhnguyen1711

**📌 Le Anh Quan – Full-Stack Developer | System Operator**
- **Role:** Infrastructure management, DevOps pipelines, Hydra node operations, platform reliability
- **Experience:** 5+ years backend experience at FPT Software; extensive production system and cloud deployment
- **Skills:** Java, Node.js, Python; AWS deployment, DevOps management
- **Contact:** GitHub: https://github.com/anhquan0 | LinkedIn: https://www.linkedin.com/in/lenaquan306/

**Team Hub:** https://www.htlabs.xyz/members

**Proven Catalyst Delivery**

HTlabs demonstrates consistent Catalyst success:

| Fund | Project | Status | Relevance |
|------|---------|--------|-----------|
| Fund 10 | Study Guide for Marlowe | Completed | Smart contract education |
| Fund 11 | Complete Aiken Course | Completed | Aiken expertise validation |
| Fund 12 | Open Source CIP68 Generator | Completed | Token standard mastery |
| Fund 13 | Multiple contributions | Active | Ongoing ecosystem work |

**Live Production Systems:**
- **LMS Platform:** https://lms.cardano2vn.io - Production learning management system
- **CIP25 Minting Tool:** https://cardano-tool.vercel.app - Public NFT minting service

**Technical Competency for Polyhydra:**
- **Game Stack:** Proficient in Phaser 3 (Client) + Colyseus (Multiplayer) on NestJS
- **Blockchain Stack:** Expert in Hydra (State Channels) + Aiken (Smart Contracts)
- **Full Portfolio:** https://www.htlabs.xyz/projects

**Feasibility Validation**

**1. Technical Approach Verification**

*Hydra Integration:*
- Hydra v1.0.0 production-ready (released Oct 2025)
- Team has researched Hydra documentation and examples
- Architecture designed for Hydra Head per-game-session model
- Fallback plan: simplified state sync if full Hydra proves complex

*Game Development:*
- Phaser 3 is mature, well-documented game engine
- Colyseus provides battle-tested multiplayer framework
- Team has prior experience with similar tech stack

*Discord Activity:*
- Discord Activities API is stable and documented
- UTXO.dev provides proven Cardano wallet integration
- No special Discord partnership required (public API)

**2. Testnet Validation Plan**

Deploy on Preview Testnet to confirm:
- Hydra Head open/close lifecycles function correctly
- Turn-based state synchronization achieves <200ms latency
- VRF logic produces verifiable random outputs
- UTXO.dev wallet works within Discord iframe environment

**3. Community Validation**

- **Cardano2VN Network:** 500+ Vietnamese community members for beta testing
- **Gaming Discord Access:** 3 active servers (2,000+ total members) ready to pilot
- **SPO Relationships:** VILAI and HADA pools for delegator engagement

**4. Risk Mitigation**

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Hydra complexity | Medium | High | Phased integration; fallback to simplified sync |
| Discord API changes | Low | Medium | Abstract Discord layer; web portal backup |
| Low user adoption | Medium | Medium | Leverage existing community; F2P model |
| Smart contract bugs | Low | High | Testnet testing; Aiken formal verification |

**Fund Management**

- **Monthly Budget Reports:** Detailed expenditure by category with line-item justification
- **Auditable Records:** All invoices (hosting, services) documented for Catalyst review
- **Milestone-Based Release:** Funds disbursed upon verified deliverables with on-chain evidence
- **Transparent Reporting:** Monthly updates on Cardano Forum with TXID verification

**Why HTlabs is Best Suited**

1. **Proven Catalyst Delivery:** Successful Fund 10-13 project completion demonstrates accountability
2. **Full-Stack GameFi Capability:** Rare combination of React/Next.js + Phaser/Colyseus + Hydra/Aiken expertise
3. **Community Trust:** Established reputation through open-source contributions and Vietnamese community leadership
4. **Hydra Pioneers:** Among few teams actively implementing Hydra for consumer applications

---

## MILESTONES

**Budget: 75,000 ADA = Minimum 3 milestones + Final required**

### Milestone 1: Architecture & Hydra Setup
- **Delivery Month:** 2
- **Cost:** 20,000 ADA

**Outputs:**
- Technical architecture document
- Hydra Head manager implementation (open/commit/close lifecycle)
- Aiken smart contracts for game state validation
- VRF dice logic implementation
- Development environment setup

**Acceptance Criteria:**
- Hydra Head successfully opens/closes on Preview Testnet
- Smart contracts compile and deploy without errors
- VRF produces verifiable random outputs
- Architecture document approved by team

**Evidence:**
- GitHub repository with documented code
- Testnet TXIDs for Hydra Head operations
- VRF proof verification demonstration
- Technical architecture PDF

### Milestone 2: Game Development & Wallet Integration
- **Delivery Month:** 4
- **Cost:** 25,000 ADA

**Outputs:**
- Phaser 3 game client with full Monopoly mechanics
- NestJS + Colyseus multiplayer server
- UTXO.dev wallet integration
- Discord Activity deployment
- 2-4 player functionality with spectator mode

**Acceptance Criteria:**
- Complete game playable on testnet
- Discord Activity launches from test server
- Wallet connects without manual user action
- All core mechanics functional (dice, buying, rent, jail, cards)

**Evidence:**
- Live Discord Activity demo
- Gameplay video walkthrough
- Testnet game session TXIDs
- GitHub code release

### Milestone 3: Beta Launch & VRF Implementation
- **Delivery Month:** 5
- **Cost:** 15,000 ADA

**Outputs:**
- Public beta on Preview Testnet
- Full VRF integration with on-chain proofs
- 50+ beta testers onboarded
- Bug fixes from community feedback
- Performance optimization

**Acceptance Criteria:**
- 50+ unique players completed games
- VRF proofs verifiable for all dice rolls
- <200ms turn latency achieved
- >99% game completion rate (no crashes)

**Evidence:**
- Beta tester list and feedback summary
- On-chain player count verification
- VRF proof verification tool
- Performance metrics report

### Milestone 4: Production Launch & Close-Out
- **Delivery Month:** 6
- **Cost:** 15,000 ADA

**Outputs:**
- Mainnet deployment
- Web portal launch
- Public documentation release
- Close-out report and video
- Open-source framework release

**Acceptance Criteria:**
- Game live on Cardano Mainnet
- Documentation published on GitHub
- Close-out video demonstrates full functionality
- KPI targets met or exceeded

**Evidence:**
- Mainnet game session TXIDs
- GitHub documentation repository
- Close-out video on YouTube
- Final KPI report with all metrics

---

## FINAL PITCH

### [RESOURCES] Team Roster

**📌 Phung Tien Dung – Lead Developer**
- Role: Blockchain integration, Hydra architecture, smart contracts, VRF
- LinkedIn: (Available on request)
- GitHub: https://github.com/dijnie
- Telegram: https://t.me/dijnie
- Email: tiendung0325@gmail.com

**📌 Khanh Duy Nguyen – Frontend Developer**
- Role: Game UI, Discord Activity, wallet integration
- Telegram: https://t.me/khanhnguyen1711
- Email: nguyenkhanh17112003@gmail.com

**📌 Le Anh Quan – DevOps & Infrastructure**
- Role: Server infrastructure, Hydra nodes, deployment
- GitHub: https://github.com/anhquan0
- LinkedIn: https://www.linkedin.com/in/lenaquan306/

**Team Hub:** https://www.htlabs.xyz/members

All team members have confirmed availability and commitment. No additional recruitment required—existing team covers all technical requirements.

### [BUDGET & COSTS] Breakdown

**Total Budget: 75,000 ADA (~$31,500 USD at $0.42/ADA)**

| Category | ADA | USD | % | Description |
|----------|-----|-----|---|-------------|
| Smart Contract Development | 18,000 | $7,560 | 24% | Hydra manager, Aiken contracts, VRF logic |
| Game Development | 22,000 | $9,240 | 29% | Phaser client, Colyseus server, mechanics |
| Frontend & Integration | 15,000 | $6,300 | 20% | React UI, Discord Activity, wallet integration |
| Infrastructure | 8,000 | $3,360 | 11% | Server hosting, Hydra nodes, testnet costs |
| Testing & QA | 5,000 | $2,100 | 7% | Beta testing, bug fixes, performance tuning |
| Documentation | 4,000 | $1,680 | 5% | Technical docs, user guides, close-out video |
| Contingency | 3,000 | $1,260 | 4% | Unexpected costs, scope adjustments |
| **Total** | **75,000** | **$31,500** | 100% | |

**Third-Party Costs:**
- Discord Developer Platform: Free (public API)
- UTXO.dev: Free tier sufficient for beta
- Server Hosting (AWS/DigitalOcean): ~$200/month included in Infrastructure
- Hydra Node: Self-hosted, included in Infrastructure

**Labor Rate Justification:**
- Vietnam-based team with competitive rates
- Senior blockchain developer: ~$30-40/hour
- Frontend developer: ~$25-35/hour
- DevOps engineer: ~$25-30/hour
- Rates align with Vietnam IT industry standards

### [VALUE FOR MONEY] Justification

**1. Competitive Budget Analysis**

Polyhydra requests 75,000 ADA for a complete Hydra-integrated game—significantly below comparable Catalyst gaming proposals:
- Typical gaming proposals: 100,000-200,000 ADA
- Polyhydra delivers similar scope at 40-60% lower cost
- Vietnam-based team enables cost efficiency without quality compromise

**2. Deliverable Value**

For 75,000 ADA, Cardano receives:
- First production board game on the ecosystem
- Hydra Layer 2 proof-of-concept for gaming
- Reusable open-source framework for other developers
- Discord Activity integration reference
- VRF implementation example

**3. Cost Per Outcome**

| Outcome | Implied Cost | Industry Comparison |
|---------|--------------|---------------------|
| Per unique player (200 target) | 375 ADA | Competitive |
| Per game session (500 target) | 150 ADA | Below average |
| Per Hydra TX (50,000 target) | 1.5 ADA | Highly efficient |

**4. Long-term ROI**

- Open-source framework benefits entire ecosystem
- Documentation reduces learning curve for future projects
- Successful launch attracts additional gaming development
- Community growth from player onboarding

**5. Risk-Adjusted Value**

HTlabs' proven Catalyst track record (Fund 10-13 completions) reduces delivery risk compared to unproven teams requesting larger budgets.

---

## SUBMISSION CHECKLIST

- [ ] Title under 60 characters
- [ ] Problem statement under 200 characters
- [ ] Solution overview under 200 characters
- [ ] Budget within category range (15K-200K ADA)
- [ ] Timeline 2-12 months
- [ ] All team members have verifiable credentials
- [ ] Dependencies clearly stated
- [ ] Innovation clearly articulated
- [ ] MVP/Prototype described with access method
- [ ] Success metrics are on-chain verifiable
- [ ] Solution section under 10,000 characters
- [ ] Impact section under 10,000 characters
- [ ] Capability section under 10,000 characters
- [ ] Milestones meet requirements (3+ for 75K)
- [ ] Budget breakdown itemized
- [ ] Value for money justified
- [ ] Supporting documentation links valid
