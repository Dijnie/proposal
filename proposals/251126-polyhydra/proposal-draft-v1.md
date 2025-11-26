# Polyhydra - Fund15 Catalyst Proposal Draft v1

**Category:** Cardano Use Cases: Prototype & Launch
**Budget:** ₳70,000 (~$29,400 USD at 1 ADA = $0.42)
**Timeline:** 6 months

---

## PROPOSAL SETUP

### Title (60 chars max)
```
Polyhydra: Hydra GameFi on Discord with Provably-Fair Play
```
(58 characters)

### Budget
**₳70,000**

### Timeline
**6 months**

### Problem Statement (200 chars max)
```
Cardano games are slow (L1 only), lack provably-fair randomness, and miss 200M+ Discord gamers. No Hydra gaming exists in production. Players can't verify game fairness on-chain.
```
(179 characters)

### Solution Overview (200 chars max)
```
We build Polyhydra: a Hydra-powered GameFi platform with provably-fair VRF, deployed as Discord Activity. Players get 1000+ TPS, on-chain state saves, and non-custodial wallet via CIP-30.
```
(189 characters)

---

## SUPPORTING DOCUMENTATION

- GitHub Repository: [To be created - github.com/polyhydra-gamefi]
- Technical Architecture: [Link to published doc]
- Hydra Documentation: https://hydra.family
- Discord Activities SDK: https://discord.com/developers/docs/activities/overview
- Reference: Hydra Minecraft (Fund14 funded): https://projectcatalyst.io/funds/14/cardano-use-cases-concepts/hydra-minecraft

---

## PROJECT DEPENDENCIES

**Technical Dependencies (all open-source, no licensing required):**
- Hydra Protocol v1.0+ (IOG, production-ready Oct 2025)
- Discord Embedded App SDK (Discord, MIT license)
- Phaser 3 game engine (MIT license)
- CIP-30 wallet standard (Cardano community standard)

**No organizational dependencies.** All technologies are open-source and publicly available. We have reviewed Discord's developer terms and Hydra documentation. No third-party approvals required.

---

## CAMPAIGN CATEGORY QUESTIONS

### Innovation Description

**What makes Polyhydra innovative:**

• **First Cardano Discord Activity** - Zero Cardano apps exist as Discord Activities despite 200M+ monthly active Discord gamers. We're first to market.

• **First Production Hydra GameFi** - While Hydra Doom (IOG demo) and Hydra Minecraft (Fund14) proved concepts, no production Hydra game exists for end users.

• **Provably-Fair Standard for Cardano** - We implement commit-reveal VRF with on-chain verification. No standardized provably-fair gaming exists on Cardano today.

• **Novel Architecture Combining Four Technologies:**
  - Hydra L2 (1000+ TPS)
  - Discord Activities SDK (iframe embedding)
  - Phaser 3 (browser games)
  - CIP-30 non-custodial wallet

**Differentiation from funded projects:**
- Hydra Minecraft = tech demo with 30 players
- Polyhydra = production platform targeting 300+ unique wallets

### Prototype/MVP Description

**MVP Deliverables:**

1. **Playable Discord Activity** - Simple provably-fair game (dice/coin flip) embedded in Discord voice channels
2. **Hydra Integration** - Game state synchronized via Hydra head, settled on-chain
3. **Non-Custodial Wallet** - CIP-30 browser wallet connection (compatible with Nami, Eternl, UTXO.dev)
4. **Provably-Fair Engine** - Commit-reveal randomness with on-chain verification
5. **Open Source** - MIT licensed, Docker-compose for local testing

**Access:**
- Discord Activity: Publicly installable from Discord App Directory
- Web Fallback: https://polyhydra.io (if Discord unavailable)
- Source Code: GitHub repository
- Demo Video: YouTube walkthrough

**Community Testing:**
- Public beta in Month 5
- Discord server for bug reports
- On-chain metrics dashboard

### Success Metrics (Blockchain Usage)

**On-Chain Metrics (6-month targets):**

| Metric | Target | Measurement |
|--------|--------|-------------|
| Hydra Transactions | 100,000+ | Hydra node logs |
| Unique Wallets | 300+ | CIP-30 connections |
| Game Sessions | 5,000+ | On-chain settlement records |
| VRF Verifications | 10,000+ | Smart contract calls |

**Off-Chain Metrics:**

| Metric | Target | Measurement |
|--------|--------|-------------|
| Discord Installs | 1,000+ | Discord Analytics |
| Monthly Active Players | 500+ | Server analytics |
| GitHub Stars | 50+ | Repository metrics |

**Benchmark Comparison:**
- Hydra Minecraft targets 30 players, 100K+ transactions
- Polyhydra targets 10x player scale with production focus

---

## [SOLUTION] Detailed Description (10,000 chars)

### The Problem We're Solving

Cardano's GameFi ecosystem faces five critical gaps that prevent mainstream adoption:

**1. Speed Limitation**
Cardano L1 processes 20-30 TPS with 20-second block times. Real-time gaming requires instant feedback. Players waiting 20+ seconds for action confirmation abandon games. Competitors on Solana (65,000 TPS) and Ethereum L2s (9,000+ TPS) offer superior gaming UX.

**2. No Provably-Fair Standard**
Cardano games use centralized random number generation. Players cannot verify game fairness. This erodes trust—critical for any gambling or chance-based mechanics. Ethereum has Chainlink VRF; Cardano has no equivalent standard.

**3. Zero Discord Presence**
Discord hosts 200M+ monthly active gamers. Zero Cardano applications exist as Discord Activities. This is a massive missed opportunity. Discord Activities launched March 2024; games like "Death by AI" achieved 700K daily active users.

**4. Wallet UX Friction**
Current Cardano games require browser extension wallets. Installing extensions, creating wallets, and managing seed phrases creates 70-90% user drop-off. Mainstream gamers won't jump through these hoops.

**5. No On-Chain State Framework**
Game state lives off-chain in centralized databases. Players can't prove ownership of progress, items, or achievements on-chain. There's no framework for affordable on-chain game state using Cardano's eUTXO model.

### Our Solution: Polyhydra

Polyhydra is a Hydra-powered GameFi platform that solves all five problems:

**Architecture:**
```
┌─────────────────────────────────────────────┐
│           DISCORD ACTIVITY (iframe)          │
│  ┌─────────────┐  ┌────────────────────┐    │
│  │  Phaser 3   │  │  Discord SDK       │    │
│  │  Game UI    │  │  (auth, voice)     │    │
│  └──────┬──────┘  └─────────┬──────────┘    │
│         └──────────┬────────┘               │
│              CIP-30 Wallet                   │
└──────────────────┬──────────────────────────┘
                   │ WebSocket
┌──────────────────┴──────────────────────────┐
│              GAME SERVER                     │
│    Game Logic + VRF Engine + Hydra Client   │
└──────────────────┬──────────────────────────┘
                   │
┌──────────────────┴──────────────────────────┐
│          HYDRA HEAD (1000+ TPS)             │
│    Game state, player actions, settlements   │
└──────────────────┬──────────────────────────┘
                   │ Settlement
┌──────────────────┴──────────────────────────┐
│           CARDANO MAINNET (L1)              │
│     Final state, NFT mints, rewards         │
└─────────────────────────────────────────────┘
```

**How It Works:**

1. **Player joins Discord voice channel** and launches Polyhydra Activity
2. **Wallet connects via CIP-30** (one-click, no extension required with UTXO.dev fallback)
3. **Game loads in iframe** using Phaser 3 engine
4. **Actions process via Hydra** at 1000+ TPS with instant finality
5. **VRF generates provably-fair outcomes** using commit-reveal on-chain
6. **Session ends, state settles** to Cardano mainnet

**Technical Components:**

• **Hydra Integration**: We use the Hydra SDK following patterns from Hydra Doom and Hydra Minecraft. Docker-compose setup with cardano-node + hydra-node. WebSocket API for real-time game events.

• **Provably-Fair VRF**: Commit-reveal scheme:
  - Server commits hash(salt + random_value) before player action
  - Player makes choice
  - Server reveals salt + value
  - Smart contract verifies hash matches
  - Result is deterministic and verifiable

• **Discord Activity**: Embedded App SDK integration. Game runs in Discord's secure iframe. Authentication via Discord OAuth. Voice channel presence for social features.

• **Wallet UX**: CIP-30 standard connection. Compatible with Nami, Eternl, Lace. UTXO.dev WalletDrop as zero-extension fallback.

**What We Build (MVP Scope):**

1. Single simple game (provably-fair dice or coin flip)
2. Hydra head management for game sessions
3. Commit-reveal VRF smart contract
4. Discord Activity deployment
5. CIP-30 wallet integration
6. Docker-compose for local development
7. Open-source MIT repository

**Who Benefits:**

• **Cardano Community**: First production Hydra gaming demonstrates scalability
• **Game Developers**: Open-source reference implementation to build upon
• **Players**: Provably-fair gaming with real ownership
• **Ecosystem**: New user acquisition channel via Discord

**Why This Matters for Cardano:**

Hydra Doom proved 1M TPS is possible. Hydra Minecraft is bringing it to gaming. Polyhydra takes the next step: production-ready, user-facing, distributed via the world's largest gaming social platform.

---

## [IMPACT] Community Impact (10,000 chars)

### Direct Impact on Cardano Ecosystem

**1. First Production Hydra Gaming Application**

Hydra has been in development since 2020. IOG's Hydra Doom demonstrated technical capability (807K TPS peak). Fund14's Hydra Minecraft brings it to gaming demos. Polyhydra creates the first production application real users can play.

Impact measurement:
- 100,000+ Hydra transactions
- Public documentation of Hydra gaming patterns
- Reference implementation for future developers

**2. New User Acquisition Channel**

Discord has 200M+ monthly active gamers who have never interacted with Cardano. Polyhydra creates a zero-friction entry point:
- No wallet extension installation
- No crypto purchase required (free-to-play entry)
- Social context (play with friends in voice channels)

Impact measurement:
- 300+ unique wallets connected
- Conversion tracking from Discord install to wallet connection
- Geographic distribution of new users

**3. Provably-Fair Gaming Standard**

We open-source our VRF implementation as a reference for all Cardano game developers. Currently, no standard exists. Our commit-reveal pattern can be adopted by any project.

Impact measurement:
- GitHub forks and stars
- Documentation views
- Developer adoption (tracked via community feedback)

**4. Technical Education**

All code is MIT licensed. We provide:
- Comprehensive documentation
- Docker-compose for local testing
- Video tutorials
- Architecture diagrams

Impact measurement:
- Documentation page views
- Tutorial completion rates
- Community questions answered

### Quantitative Impact Metrics

| Metric | Target | How Measured |
|--------|--------|--------------|
| Hydra Transactions | 100,000+ | Hydra node logs, public dashboard |
| Unique Wallets | 300+ | CIP-30 connection records |
| Discord Installs | 1,000+ | Discord Developer Analytics |
| Game Sessions | 5,000+ | Server logs, on-chain settlements |
| GitHub Stars | 50+ | Repository metrics |
| Documentation Views | 5,000+ | Analytics |

### Qualitative Impact

- **Community Engagement**: Discord server for players and developers
- **Ecosystem Positioning**: Cardano as viable gaming platform
- **Developer Enablement**: Reusable patterns and components

### How We Share Outputs

1. **Open Source Repository**: All code on GitHub (MIT license)
2. **Monthly Progress Updates**: Cardano Forum posts
3. **Technical Blog Posts**: Medium/dev.to articles
4. **Demo Videos**: YouTube tutorials
5. **Community Calls**: Monthly Discord AMA sessions
6. **Close-out Video**: Final presentation of achievements

### Long-term Ecosystem Value

Polyhydra creates infrastructure for future Cardano gaming:
- Proven Hydra gaming architecture
- Reusable VRF components
- Discord integration patterns
- Wallet UX best practices

This is not a one-off game—it's foundational infrastructure that benefits all future Cardano GameFi projects.

---

## [CAPABILITY & FEASIBILITY]

### Technical Feasibility

**All core technologies are production-ready:**

| Component | Status | Evidence |
|-----------|--------|----------|
| Hydra Protocol | v1.0 Production (Oct 2025) | hydra.family |
| Discord Activities SDK | GA (March 2024) | 700K DAU games exist |
| Phaser 3 | Stable (v3.80+) | Millions of games built |
| CIP-30 | Standard | All major wallets support |

**Precedent Projects:**
- Hydra Doom: Proved 1M TPS, gaming-ready
- Hydra Minecraft: Fund14 funded (₳38,000), 4-month delivery
- Discord Activities: Multiple games with 100K+ users

**Risk Mitigation:**

| Risk | Severity | Mitigation |
|------|----------|------------|
| Hydra complexity | HIGH | Follow Hydra Minecraft patterns, use SDK |
| Discord policy changes | MEDIUM | Web fallback ready from Month 1 |
| Wallet UX issues | MEDIUM | Multiple CIP-30 wallet support |
| Player acquisition | MEDIUM | Discord viral mechanics, free-to-play |

### Team Capability

[PLACEHOLDER - User to provide team details]

**Required Skills (confirmed):**
- Hydra/Plutus development
- TypeScript/Node.js
- Phaser 3 game development
- Discord SDK integration
- DevOps/Docker

**Team Structure:**
- Lead Developer: [Name, LinkedIn] - Hydra integration, smart contracts
- Game Developer: [Name, LinkedIn] - Phaser 3, Discord SDK
- Part-time Designer: [Name, LinkedIn] - UI/UX

### Fund Management

- **Wallet**: Multi-sig Cardano wallet for fund custody
- **Accounting**: Monthly expense reports
- **Transparency**: All transactions trackable on-chain
- **Milestone-based**: Funds released per milestone completion

### Validation Approach

1. **Month 1-2**: Technical prototype validating Hydra + Discord integration
2. **Month 3-4**: Internal testing with team and advisors
3. **Month 5**: Public beta with community feedback
4. **Month 6**: Production launch with metrics tracking

---

## MILESTONES

### Milestone 1: Architecture & Hydra Setup
**Delivery Month:** 2
**Cost:** ₳17,500

**Outputs:**
- Technical architecture document
- Hydra node running on preview testnet
- Docker-compose configuration
- Basic Phaser 3 game scaffold
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

### Milestone 2: Game & Wallet Integration
**Delivery Month:** 4
**Cost:** ₳21,000

**Outputs:**
- Playable game (dice/coin flip)
- Full Hydra integration for game actions
- Wallet connection flow polished
- Game state persistence via Hydra
- Basic UI/UX design

**Acceptance Criteria:**
- Game playable end-to-end
- All game actions recorded on Hydra
- Wallet balance updates reflected
- Session state recoverable

**Evidence of Completion:**
- Playable demo link
- Video walkthrough
- Hydra transaction logs
- User testing feedback (5+ testers)

---

### Milestone 3: VRF & Discord Activity
**Delivery Month:** 5
**Cost:** ₳17,500

**Outputs:**
- Commit-reveal VRF smart contract
- Discord Activity deployed
- Provably-fair game outcomes
- Public beta launch
- Testing documentation

**Acceptance Criteria:**
- VRF outcomes verifiable on-chain
- Discord Activity installable
- 50+ beta testers onboarded
- Bug tracking system active

**Evidence of Completion:**
- Discord Activity installation link
- VRF verification guide
- Beta tester feedback summary
- Smart contract audit report (self-audit)

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

[PLACEHOLDER - User to provide]

**Lead Developer**
- Name: [Your Name]
- LinkedIn: [URL]
- Role: Hydra integration, smart contracts, architecture
- Experience: [Relevant experience]

**Game Developer**
- Name: [Name]
- LinkedIn: [URL]
- Role: Phaser 3 development, Discord SDK integration
- Experience: [Relevant experience]

**Designer (Part-time)**
- Name: [Name]
- LinkedIn: [URL]
- Role: UI/UX design, visual assets
- Experience: [Relevant experience]

**Advisors (optional):**
- [Name]: Hydra expertise
- [Name]: Gaming industry

---

## [BUDGET & COSTS]

### Budget Breakdown (₳70,000 = ~$29,400 USD)

| Category | ADA | USD | % | Description |
|----------|-----|-----|---|-------------|
| Development | 42,000 | $17,640 | 60% | 2 developers × 5 months |
| Infrastructure | 8,000 | $3,360 | 11% | Servers, Hydra nodes, hosting |
| Design/UX | 6,000 | $2,520 | 9% | UI design, visual assets |
| Testing | 5,000 | $2,100 | 7% | QA, security review |
| Documentation | 5,000 | $2,100 | 7% | Docs, video, close-out |
| Marketing | 4,000 | $1,680 | 6% | Community, social media |
| **Total** | **70,000** | **$29,400** | 100% | |

### Development Cost Justification

**Developer Rates:**
- Lead Developer: $2,500/month (Hydra/Plutus specialist)
- Game Developer: $2,000/month (Phaser/TypeScript)
- Combined: $4,500/month × 5 months = $22,500
- Actual budget: $17,640 (below market rate, founders contributing)

**Comparable Market Rates:**
- Blockchain developers: $4,000-8,000/month (US/EU)
- Our rate: ~$1,750/month (cost-efficient, Vietnam/SEA based)

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

### Third-Party Services
- None required. All tools are open-source.

---

## [VALUE FOR MONEY]

### Cost Comparison

**Hydra Minecraft (Fund14):**
- Budget: ₳38,000
- Scope: Tech demo, 30 players
- Duration: 4 months

**Polyhydra:**
- Budget: ₳70,000 (1.8x Hydra Minecraft)
- Scope: Production platform, 300+ users, Discord distribution
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

### Developer Efficiency

**Lines of Code Estimate:** ~10,000
**Cost per LOC:** $2.94

Industry average for blockchain development: $5-15/LOC

### Long-term Value

This is not one-off spend:
- Open-source code reusable by community
- Architecture patterns documented
- VRF standard for ecosystem adoption
- Foundation for future games

### Why This Budget is Appropriate

1. **Lean team**: 2 core developers, part-time designer
2. **Below-market rates**: SEA-based team, founder commitment
3. **Focused scope**: Single game MVP, not full platform
4. **Open source**: Community benefits from every dollar spent
5. **Precedent-based**: Comparable to funded Hydra Minecraft

---

## SUMMARY

**Polyhydra** brings Cardano gaming to where players are: Discord.

We build the first production Hydra GameFi application with provably-fair mechanics, targeting 300+ users and 100,000+ on-chain transactions in 6 months.

Budget: ₳70,000 | Timeline: 6 months | Category: Cardano Use Cases

**Why fund us:**
- First Cardano Discord Activity (200M+ potential users)
- First production Hydra gaming (proving scalability)
- Open-source (benefits entire ecosystem)
- Lean budget (below market rates)
- Proven approach (follows Hydra Minecraft patterns)

---

*Draft v1 - Pending team details and user review*
