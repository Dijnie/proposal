# Polyhydra - Proposal Draft v1
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

**The Problem We Solve**

GameFi on Cardano faces three critical barriers:

1. **Speed Limitation:** L1 transactions take 20+ seconds, making real-time gaming impractical. Most Cardano games resort to off-chain servers with minimal blockchain interaction.

2. **Hydra Adoption Gap:** Hydra 1.0.0 is mainnet-ready since October 2025, yet zero consumer products demonstrate its value. The ecosystem needs real-world validation beyond proof-of-concepts.

3. **Web2 Onboarding Friction:** Every blockchain game requires wallet setup before play. This creates massive drop-off—users leave before experiencing the game.

**Our Solution: Polyhydra**

A Monopoly-style board game running entirely on Hydra, playable directly within Discord voice channels.

**Core Architecture:**

```
Discord Activity (React/TypeScript)
    ↓ WebSocket
Game Orchestrator (NestJS + Colyseus)
    ↓ Hydra Client
Hydra Node (State Channels)
    ↓ Settlement
Cardano L1 (Final Results)
```

**How It Works:**

1. **Game Creation:** Player creates a room in Discord voice channel. System opens a Hydra Head, locking initial state.

2. **Gameplay:** 2-6 players take turns—roll dice, buy properties, pay rent. Each action is a Hydra transaction with <200ms finality. No L1 interaction during play.

3. **Provably Fair Dice:**
   - Player commits hash(nonce + roll_value)
   - Server commits its hash
   - Both reveal simultaneously
   - Combined values determine outcome
   - All hashes recorded for verification

4. **Game End:** Winner determined. Hydra Head closes. Final state settled to L1 with full game transcript (moves, rolls, outcomes).

5. **Rewards (Optional):** Tournament winners receive ADA from prize pool. Wallet connection only required here.

**Technical Components:**

**Frontend (Discord Activity):**
- React/TypeScript game board
- Phaser 3 for animations
- Real-time state sync via Colyseus
- UTXO.dev for seamless wallet integration

**Backend (Orchestrator):**
- NestJS server managing game logic
- Colyseus for multiplayer synchronization
- Hydra client for state channel operations
- Redis for session caching

**Blockchain (Hydra + Cardano):**
- Hydra Head per game session
- Aiken smart contracts for game rules
- On-chain settlement with metadata
- Provably fair VRF implementation

**Web Fallback:**
- Browser-based version sharing same backend
- For users who prefer web over Discord
- Identical Hydra integration

**Why This Approach Works:**

1. **Hydra fits turn-based perfectly:** 2-6 players per Head is optimal. Snapshot consensus naturally enforces turn order. Cost drops from 1-2 ADA/turn to ~0.17 ADA/game.

2. **Discord reduces friction:** 150M+ monthly active users already on Discord. No app download, no wallet setup to start. Viral spread through server recommendations.

3. **Provably fair builds trust:** Every dice roll verifiable. No "the server cheated" complaints. Blockchain transparency without blockchain complexity.

4. **Open source accelerates ecosystem:** Full SDK release enables community to build their own Hydra games. Cardano gaming infrastructure grows beyond one project.

**Who Benefits:**

- **Discord Communities:** Fun activity for voice channels, DAO engagement tool
- **Web3 Newcomers:** Experience Cardano through familiar game format
- **Cardano Ecosystem:** Hydra validation, new user pipeline, open source infrastructure
- **Developers:** Reference implementation for Hydra gaming

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

**Team Credentials**

**Phung Tien Dung – Lead Blockchain Developer**
- 5+ years software engineering, 2+ years blockchain
- Expert in Aiken, Haskell smart contracts
- Multiple Catalyst projects delivered
- GitHub: https://github.com/dijnie
- LinkedIn: https://linkedin.com/in/dijnie

**Khanh Duy Nguyen – Frontend Developer**
- Full-stack web development expertise
- React/TypeScript specialist
- Discord Activity integration experience
- Telegram: https://t.me/khanhnguyen1711

**Le Anh Quan – DevOps & Infrastructure**
- 5+ years at FPT Software
- AWS, Docker, CI/CD pipelines
- Hydra node operations
- LinkedIn: https://linkedin.com/in/lenaquan306

**Team Hub:** https://www.htlabs.xyz/members

**Proven Catalyst Track Record**

| Fund | Project | Status | Relevance |
|------|---------|--------|-----------|
| Fund 11 | Complete Aiken Course | ✅ Delivered | Smart contract expertise |
| Fund 12 | CIP68 Generator | ✅ Delivered | Token/NFT standards |
| Fund 10 | Marlowe Study Guide | ✅ Delivered | Documentation quality |
| Fund 13 | Various contributions | ✅ Active | Ongoing ecosystem work |

**All projects completed on time with positive community feedback.**

**Technical Feasibility Validation**

**1. Hydra Capability (Proven):**
- Hydra Node 1.0.0 mainnet-ready (Oct 2025)
- Hydra Doom achieved 86M+ transactions, 4,000 TPS
- Our team has tested Head lifecycle on preview testnet
- 2-6 players per Head is within optimal range (max 8)

**2. Discord Activity (Tested):**
- Embedded App SDK publicly available
- UTXO.dev confirmed working in Discord iframe
- Team has built Discord integrations previously

**3. Game Stack (Experienced):**
- Phaser 3 for game rendering
- Colyseus for multiplayer state
- NestJS for backend orchestration
- All technologies team has production experience with

**Verification Approach**

**Phase 1: Architecture Validation (Month 1-2)**
- Deploy Hydra Head manager on preview testnet
- Confirm open/close lifecycle works reliably
- Benchmark state sync latency (<200ms target)
- Test UTXO.dev in Discord Activity iframe

**Phase 2: Core Development (Month 3-4)**
- Build game UI with Phaser 3
- Implement Colyseus multiplayer
- Integrate Hydra client for state management
- Develop provably fair VRF system

**Phase 3: Beta Testing (Month 5)**
- Open beta with Cardano2VN community
- 50+ testers playing full game sessions
- Collect metrics: completion rate, disconnect frequency
- Iterate based on feedback

**Phase 4: Production Launch (Month 6)**
- Mainnet deployment with real ADA
- Public Discord Activity release
- Web fallback version live
- Full documentation and open source release

**Fund Management**

**Monthly Budget Reports:**
- Detailed expenditure breakdown by category
- Line-item justification for all expenses
- Posted publicly on Cardano Forum

**Milestone-Based Disbursements:**
- Funds released only upon verified deliverables
- On-chain evidence (TXIDs) for all claims
- GitHub releases and video demonstrations
- Catalyst reviewer acceptance required

**Auditable Records:**
- All invoices documented and archived
- Third-party costs (hosting, services) receipted
- Team time tracking with deliverable mapping

**Why We're Best Suited**

1. **Full-Stack GameFi Capability:** We bridge frontend (React), game logic (Phaser/Colyseus), and blockchain (Hydra/Aiken). Most teams specialize in only one area.

2. **Proven Delivery:** 4+ successful Catalyst projects with on-time completion and positive feedback.

3. **Community Access:** Direct connection to 500+ Cardano2VN members and 2,000+ Discord gamers for immediate beta testing.

4. **Hydra Pioneers:** Among few teams actively building consumer Hydra applications, not just infrastructure.

5. **Local Presence:** Vietnam-based team enables cost efficiency while maintaining quality.

---

## MILESTONES

**Milestone Requirements:** For 75,000 ADA, minimum 4 milestones including final close-out.

### Milestone 1: Architecture & Hydra Setup
**Delivery:** Month 2 | **Cost:** 18,000 ADA

**Outputs:**
- Technical architecture document
- Hydra Head manager deployed on preview testnet
- Game state machine specification
- Discord Activity skeleton app

**Acceptance Criteria:**
- Hydra Head opens/closes successfully on testnet
- State transitions work for basic game flow
- Discord Activity loads in voice channel
- Documentation reviewed and approved

**Evidence:**
- GitHub repository with code
- Testnet TXIDs for Head operations
- Video demonstration of setup
- Technical documentation PDF

---

### Milestone 2: Game Development & Integration
**Delivery:** Month 4 | **Cost:** 18,000 ADA

**Outputs:**
- Complete game UI (board, cards, animations)
- Multiplayer synchronization via Colyseus
- Hydra integration for game state
- UTXO.dev wallet connectivity

**Acceptance Criteria:**
- 2-6 players can complete full game on testnet
- All game mechanics functional (dice, properties, rent)
- Wallet connection works for reward claims
- <500ms turn latency achieved

**Evidence:**
- Playable testnet build
- Video of full game session
- Performance metrics report
- GitHub code release

---

### Milestone 3: VRF Implementation & Beta Launch
**Delivery:** Month 5 | **Cost:** 18,000 ADA

**Outputs:**
- Provably fair VRF system deployed
- Open beta with 50+ testers
- Web fallback version
- Public metrics dashboard

**Acceptance Criteria:**
- VRF verifiable from on-chain data
- 50+ unique beta testers confirmed
- 200+ games played in beta
- Bug fix rate <5 critical issues

**Evidence:**
- VRF verification tool public
- Beta tester list (anonymized)
- Game count dashboard
- Bug tracking report

---

### Milestone 4: Production Launch & Close-Out
**Delivery:** Month 6 | **Cost:** 21,000 ADA

**Outputs:**
- Mainnet deployment
- Discord Activity public release
- Full open source code
- Project close-out report and video

**Acceptance Criteria:**
- 100+ games on mainnet
- 5+ Discord servers installed
- All code open sourced
- Close-out documentation complete

**Evidence:**
- Mainnet settlement TXIDs
- Discord installation count
- GitHub repository public
- Close-out report + video

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

**4. Risk Mitigation:**
- Proven team with Catalyst track record
- Technologies already tested (Hydra, Discord, UTXO.dev)
- Conservative KPIs achievable with existing community

**5. Ecosystem Multiplier:**
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

- [ ] Title under 60 characters
- [ ] Problem statement under 200 characters
- [ ] Solution under 200 characters
- [ ] Budget within category range (15K-200K ADA) ✓
- [ ] Timeline 2-12 months ✓
- [ ] 4 milestones for 75K budget ✓
- [ ] Team LinkedIn profiles linked
- [ ] Previous Catalyst projects referenced
- [ ] On-chain metrics defined
- [ ] Open source commitment stated
- [ ] All character limits respected
