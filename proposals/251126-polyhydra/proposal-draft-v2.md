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
Game-Fi on Cardano limited by L1 speed/cost. Hydra emerged but lacks community-scale products. Discord's 200M+ gamers have zero Cardano presence.
```
(147 characters)

### Solution Overview (200 chars max)
```
Polyhydra: Monopoly-style Discord Activity board game on Hydra. Turn-based play off-chain, on-chain settlement. Provably-fair dice, Web2 UX + Web3 trust.
```
(154 characters)

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
- React/TypeScript (MIT license)
- CIP-30 wallet standard (Cardano community standard)

**No organizational dependencies.** All technologies are open-source and publicly available. We have reviewed Discord's developer terms and Hydra documentation. No third-party approvals required.

---

## CAMPAIGN CATEGORY QUESTIONS

### Innovation Description

**What makes Polyhydra innovative:**

• **First Cardano Discord Activity** - Zero Cardano apps exist as Discord Activities despite 200M+ monthly active Discord gamers. We're first to market.

• **First Production Hydra Board Game** - While Hydra Doom (IOG demo) and Hydra Minecraft (Fund14) proved concepts, no production Hydra game exists for end users. We prove Hydra "in the field" with real match data.

• **Turn-Based Hydra Architecture** - Board games are the perfect use case for Hydra state channels: sequential state updates, deterministic outcomes, natural pauses between turns.

• **Provably-Fair Standard for Cardano** - We implement commit-reveal VRF with on-chain verification. Players can audit any dice roll post-game using public transcript data.

• **Dual Experience Innovation:**
  - Web2 UX: Fast turns, no wallet per move, Discord-native
  - Web3 Trust: On-chain transcript, provably-fair, verifiable history

**Differentiation from funded projects:**
- Hydra Minecraft = tech demo with 30 players
- Polyhydra = production board game targeting 300+ unique wallets

### Prototype/MVP Description

**MVP Deliverables:**

1. **Monopoly-Style Discord Activity** - 2-6 player board game embedded in Discord voice channels
2. **Turn-Based Gameplay** - Roll dice, buy/rent/sell properties, draw event cards
3. **Hydra Integration** - All turns processed off-chain; final state settled to L1
4. **Provably-Fair Dice** - Commit-reveal randomness verifiable from match transcript
5. **Non-Custodial Wallet** - CIP-30 connection only for rewards/NFTs at game end
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

Game-Fi on Cardano is limited because most interactions must occur on L1 (speed/cost), leading to products primarily revolving around minting/receiving NFTs or tokens. Hydra has emerged to resolve this performance bottleneck, yet it still lacks successful, community-scale products to demonstrate its value and drive Web2 users toward Cardano.

**Five Critical Gaps:**

**1. Speed Limitation**
Cardano L1 processes 20-30 TPS with 20-second block times. Turn-based games could work, but waiting 20+ seconds between turns destroys the flow. Players expect instant feedback.

**2. No Provably-Fair Standard**
Cardano games use centralized random number generation. Players cannot verify game fairness. This erodes trust—critical for any dice-rolling or chance-based mechanics. No commit-reveal VRF standard exists.

**3. Zero Discord Presence**
Discord hosts 200M+ monthly active gamers. Zero Cardano applications exist as Discord Activities. Chess in the Park, Poker Night, and other turn-based games thrive on Discord—but none on Cardano.

**4. Wallet UX Friction**
Current Cardano games require wallet connections for every action. Installing extensions, signing transactions repeatedly—this creates massive drop-off. Board games should feel like board games, not crypto apps.

**5. No Hydra Production Apps**
Hydra Doom proved 807K TPS is possible. Hydra Minecraft is bringing it to gaming demos. But no production application exists that real users can play and that generates meaningful on-chain data.

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

### Direct Impact on Cardano Ecosystem

**1. First Production Hydra Board Game**

Hydra has been in development since 2020. IOG's Hydra Doom demonstrated technical capability (807K TPS peak). Fund14's Hydra Minecraft brings it to gaming demos. Polyhydra creates the first production board game real users can play.

This proves Hydra "in the field" with real data from thousands of matches, reducing doubts about performance/cost.

Impact measurement:
- 100,000+ Hydra transactions
- Public dashboard showing match data
- Reference implementation for future developers

**2. Opening the Door to New Users**

Discord has 200M+ monthly active gamers who have never interacted with Cardano. Polyhydra creates a zero-friction entry point:
- No wallet extension installation required per turn
- Free-to-play entry (wallet only for rewards)
- Social context (play with friends in voice channels)

Web2→Web3 Funnel tracking:
- % of players connecting wallet for rewards
- % receiving settlement NFTs
- Geographic distribution of new users

**3. Proving Hydra for Turn-Based Games**

Turn-based board games are the perfect Hydra use case:
- Sequential state updates (natural for state channels)
- Deterministic outcomes (reproducible)
- Natural pauses (no real-time streaming required)

We document this architecture for community reuse.

**4. Provably-Fair Gaming Standard**

We open-source our VRF implementation as a reference for all Cardano game developers. Currently, no standard exists. Our commit-reveal pattern can be adopted by any project.

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

### Technical Feasibility

**All core technologies are production-ready:**

| Component | Status | Evidence |
|-----------|--------|----------|
| Hydra Protocol | v1.0 Production (Oct 2025) | hydra.family |
| Discord Activities SDK | GA (March 2024) | Chess/Poker games exist |
| React/TypeScript | Stable | Industry standard |
| CIP-30 | Standard | All major wallets support |

**Why Turn-Based Works on Hydra:**
- State channels naturally model turn-by-turn updates
- Single-UTXO game state with monotonic versioning
- All participants sign each state transition (consensus)
- Deterministic execution = reproducible game state

**Precedent Projects:**
- Hydra Doom: Proved 1M TPS, gaming-ready
- Hydra Minecraft: Fund14 funded (₳38,000), 4-month delivery
- Discord Activities: Chess in the Park, Poker Night (turn-based success)

**Risk Mitigation:**

| Risk | Severity | Mitigation |
|------|----------|------------|
| Discord policy changes | HIGH | Adhere to guidelines, prepare web fallback |
| Hydra stability/multi-player sync | HIGH | Early stress-testing, autoscale, snapshots; resume process |
| L1 fee volatility/congestion | MEDIUM | Delayed settlement, batching outside peak hours |
| Wallet onboarding | MEDIUM | Only require wallet for rewards/NFTs |
| UTXO.dev maturity | MEDIUM | Fallback to standard CIP-30 wallets (Nami, Eternl) |

### Team Capability

[PLACEHOLDER - User to provide team details]

**Required Skills (confirmed):**
- Hydra/Plutus development
- TypeScript/Node.js
- React game UI development
- Discord SDK integration
- DevOps/Docker

**Team Structure:**
- Lead Developer: [Name, LinkedIn] - Hydra integration, smart contracts
- Game Developer: [Name, LinkedIn] - React UI, Discord SDK
- Part-time Designer: [Name, LinkedIn] - UI/UX

### Fund Management

- **Wallet**: Multi-sig Cardano wallet for fund custody
- **Accounting**: Monthly expense reports
- **Transparency**: All transactions trackable on-chain
- **Milestone-based**: Funds released per milestone completion

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

[PLACEHOLDER - User to provide]

**Lead Developer**
- Name: [Your Name]
- LinkedIn: [URL]
- Role: Hydra integration, smart contracts, architecture
- Experience: [Relevant experience]

**Game Developer**
- Name: [Name]
- LinkedIn: [URL]
- Role: React UI, Discord SDK integration, game logic
- Experience: [Relevant experience]

**Designer (Part-time)**
- Name: [Name]
- LinkedIn: [URL]
- Role: UI/UX design, visual assets
- Experience: [Relevant experience]

---

## [BUDGET & COSTS]

### Budget Breakdown (₳70,000 = ~$29,400 USD)

| Category | ADA | USD | % | Description |
|----------|-----|-----|---|-------------|
| Development | 42,000 | $17,640 | 60% | 2 developers × 5 months |
| Infrastructure | 8,000 | $3,360 | 11% | Servers, Hydra nodes, hosting |
| Design/UX | 6,000 | $2,520 | 9% | UI design, board assets |
| Testing | 5,000 | $2,100 | 7% | QA, security review |
| Documentation | 5,000 | $2,100 | 7% | Docs, video, close-out |
| Marketing | 4,000 | $1,680 | 6% | Community, social media |
| **Total** | **70,000** | **$29,400** | 100% | |

### Development Cost Justification

**Developer Rates:**
- Lead Developer: $2,500/month (Hydra/TypeScript specialist)
- Game Developer: $2,000/month (React/Discord)
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

**Polyhydra** brings Cardano gaming to where players are: Discord.

We build the first production Hydra board game—a Monopoly-style turn-based game for 2-6 players with provably-fair dice and on-chain settlement. Web2 UX, Web3 trust.

**Budget:** ₳70,000 | **Timeline:** 6 months | **Category:** Cardano Use Cases

**Why fund us:**
- First Cardano Discord Activity (200M+ potential users)
- First production Hydra board game (proving scalability)
- Turn-based = perfect Hydra use case
- Provably-fair dice with public verification
- Open-source (benefits entire ecosystem)
- Lean budget (below market rates)

---

*Draft v2 - Updated with Monopoly-style board game focus*
*Pending: Team details*
