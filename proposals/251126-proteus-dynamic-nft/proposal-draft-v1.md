# Proteus: Dynamic NFT Platform for Cardano

**Category:** Cardano Use Cases: Prototype & Launch
**Budget:** 120,000 ADA (~$50,400 USD)
**Timeline:** 10 months

---

## PROPOSAL SETUP

### Title (60 chars max)
```
Proteus: Dynamic NFT Issuance & Management Platform
```
(52 chars) ✓

### Budget
**120,000 ADA** (~$50,400 USD at $0.42/ADA)

### Timeline
**10 months**

### Problem Statement (200 chars max)
```
No Crossmint equivalent exists for Cardano. Developers building dynamic NFTs must code everything custom, fragmenting the ecosystem and slowing innovation.
```
(155 chars) ✓

### Solution Overview (200 chars max)
```
We'll build Proteus: API-first platform enabling creators and developers to launch dynamic NFTs in minutes, with no-code UI and enterprise white-label support.
```
(159 chars) ✓

### Supporting Documentation
- Project Website: [INSERT URL]
- GitHub Repository: [INSERT URL]
- MVP Demo: [INSERT URL]
- Technical Documentation: [INSERT URL]

### Dependencies
Proteus integrates with established Cardano infrastructure:
- **Blockfrost API** - Blockchain data access (public API, existing license)
- **Orcfax** - Oracle services for external data feeds (Cardano-native)
- **IPFS/Pinata** - Decentralized metadata storage (standard pricing)

No dependencies create blocking risks. All services have public APIs and established SLAs.

---

## CATEGORY QUESTIONS

### Innovation: What makes Proteus new to Cardano?

Proteus fills a critical infrastructure gap on Cardano:

**No API-First Dynamic NFT Platform Exists:**
- JPG Store (90% of volume) = marketplace only, zero dynamic features
- NMKR = static minting, limited API, no dynamic metadata support
- Paima Studios = game-engine-specific, not general-purpose

**Unique Innovations:**
1. **Unified Dynamic NFT API** - First REST/GraphQL interface for CIP-68 dynamic NFTs
2. **State Machine Orchestrator** - Define NFT lifecycle transitions without smart contract code
3. **Oracle Integration Layer** - Connect NFT properties to real-world data (sports, weather, IoT)
4. **No-Code Dashboard** - Visual creator tools alongside developer APIs
5. **Enterprise White-Label** - B2B deployment for branded campaigns

**Not Rehashing Funded Work:**
Unlike past NFT proposals focused on marketplaces or static minting, Proteus enables *programmable* NFTs without requiring developers to write Plutus/Aiken.

### Prototype/MVP: What will be demonstrated on-chain?

**Existing MVP Status:** Working prototype with core minting functionality

**On-Chain Deliverables:**
1. **Smart Contracts** - CIP-68 compliant minting and update validators deployed on mainnet
2. **Dynamic Collections** - Live collections demonstrating metadata evolution
3. **State Transitions** - Verifiable on-chain state changes via platform API

**Community Testing:**
- Public testnet deployment (Month 4)
- Developer beta program with documentation (Month 6)
- Mainnet launch with community NFT collection (Month 8)

**Access:**
- Web dashboard at proteus.app (or similar domain)
- API endpoints documented at docs.proteus.app
- Open-source SDK on GitHub

### Success Metrics (Realistic, On-Chain)

| Metric | Target | Verification |
|--------|--------|--------------|
| Dynamic NFTs minted | 10,000+ | On-chain query |
| Unique collections | 500+ | Platform analytics |
| Active developers | 100+ | API key registrations |
| Monthly API calls | 100,000+ | Platform metrics |
| Partner integrations | 5+ | Public announcements |
| Metadata updates/month | 5,000+ | On-chain transactions |

**Benchmark:** Similar scope to NMKR early growth (funded via Catalyst), scaled for dynamic NFT focus.

---

## PROJECT & SOLUTION

### SOLUTION (10,000 chars max)

**[IMPACT] The Problem We're Solving**

NFTs represent 47.9% of Cardano's on-chain activity, yet building dynamic NFTs requires:
- Deep Plutus/Aiken smart contract expertise
- Understanding of CIP-68 two-token architecture
- Custom state management infrastructure
- Manual oracle integration for external data

This creates three ecosystem problems:

1. **Developer Friction** - Months of development before launching simple evolving NFTs
2. **Fragmentation** - Every project builds custom infrastructure (waste of resources)
3. **Innovation Bottleneck** - Only well-funded teams can afford dynamic NFT complexity

On Ethereum/Solana, platforms like Crossmint provide API-first NFT infrastructure. **Cardano has no equivalent.** This gap limits adoption for:
- Game developers needing evolving in-game assets
- Artists wanting generative/reactive collections
- Enterprises deploying credential/certification NFTs
- DApp builders adding NFT features without blockchain expertise

**[FEASIBILITY] Our Solution: Proteus Platform**

Proteus is a comprehensive dynamic NFT platform with three components:

**1. Developer API (REST + GraphQL)**
```
POST /v1/collections → Create CIP-68 collection
POST /v1/nfts → Mint dynamic NFT
PATCH /v1/nfts/{id}/metadata → Update on-chain metadata
POST /v1/nfts/{id}/transition → Execute state machine step
```

Key capabilities:
- Single API call to mint without wallet integration
- Batch operations for high-volume use cases
- Webhook notifications for state changes
- Multi-tenant isolation for enterprise deployments

**2. Creator Dashboard (No-Code UI)**
- Visual collection builder with template library
- Metadata editor with preview
- State machine designer (drag-and-drop)
- Analytics and holder insights
- Team collaboration features

**3. Dynamic NFT Engine**
- **Evolving Metadata**: Properties change based on time, actions, or external data
- **State Machines**: Define lifecycle stages (mint → active → evolved → legendary)
- **Oracle Integration**: Connect to Orcfax for real-world data feeds
- **Trigger System**: Automated updates via conditions or schedules

**[VFM] Technical Architecture**

Built on proven Cardano standards:
- **CIP-68**: On-chain metadata datums (ecosystem standard, production-ready)
- **CIP-86**: Metadata oracle updates (emerging, optional enhancement)
- **CIP-25**: Legacy support for backward compatibility

Infrastructure stack:
- Smart contracts: Aiken (efficient, auditable)
- Backend: Node.js/TypeScript with PostgreSQL
- Frontend: React/Next.js
- Blockchain: Blockfrost API for chain access
- Storage: IPFS via Pinata for metadata

**Why This Approach?**

1. **Standard Compliance** - CIP-68 is the ecosystem standard; Proteus makes it accessible
2. **Proven Technologies** - No experimental dependencies
3. **Horizontal Scaling** - Queue-based architecture handles high volume
4. **Open Source Core** - API SDK and libraries MIT licensed

**Who Benefits:**
- **Game Developers**: Evolving assets without smart contract expertise
- **NFT Creators**: Dynamic collections via visual tools
- **Enterprises**: White-label deployment for branded campaigns
- **DApp Builders**: Add NFT features in hours, not months

---

### IMPACT (10,000 chars max)

**[IMPACT] Ecosystem Value Proposition**

Proteus creates cascading value for Cardano:

**1. Developer Ecosystem Expansion**
- **Current State**: Building dynamic NFTs requires 3-6 months of Plutus learning
- **With Proteus**: Launch in days with familiar REST APIs
- **Impact**: Lower barrier attracts developers from Ethereum/Solana

**2. Network Activity Growth**
- Every API call generates on-chain transactions
- Target: 100,000+ monthly minting/update transactions
- Direct contribution to network utilization metrics

**3. Innovation Acceleration**
- Shared infrastructure means projects focus on innovation, not plumbing
- Enables use cases currently impractical: real-time gaming NFTs, IoT-connected collectibles, dynamic credentials

**4. Enterprise Adoption**
- White-label capability enables B2B deployments
- Enterprises bring users who may not know they're using Cardano

**[IMPACT] Measurable Success Criteria**

| Outcome | Measurement | Target |
|---------|-------------|--------|
| Developer adoption | API registrations | 100+ developers |
| Collection creation | Platform data | 500+ collections |
| On-chain activity | Blockchain transactions | 10,000+ NFTs minted |
| Documentation reach | Page views | 50,000+ views |
| Community engagement | Discord members | 500+ members |
| Partner integrations | Announced partnerships | 5+ integrations |

**Measurement Methodology:**
- On-chain metrics via Blockfrost queries (verifiable by anyone)
- Platform analytics with public dashboard
- Monthly progress reports to Catalyst community

**[IMPACT] Output Sharing Strategy**

1. **Open Source SDK** - MIT licensed JavaScript/TypeScript SDK
2. **Public Documentation** - Comprehensive guides at docs.proteus.app
3. **Tutorial Series** - Video walkthroughs for common use cases
4. **Developer Blog** - Technical deep-dives on CIP-68 implementation
5. **Community Workshops** - Monthly live sessions during development
6. **Catalyst Updates** - Regular milestone reports with on-chain evidence

---

### CAPABILITY & FEASIBILITY (10,000 chars max)

**[FEASIBILITY] Team Capabilities**

[TEAM SECTION - UPDATE WITH ACTUAL TEAM]

**Lead Developer / Project Lead**
- Name: [INSERT]
- LinkedIn: [INSERT]
- Experience: X years blockchain development, previous Cardano projects
- Role: Architecture, smart contract development, technical leadership

**Backend Developer**
- Name: [INSERT]
- LinkedIn: [INSERT]
- Experience: X years Node.js/TypeScript, API development
- Role: Platform backend, API implementation, database design

**Frontend Developer**
- Name: [INSERT]
- LinkedIn: [INSERT]
- Experience: X years React/Next.js, dashboard development
- Role: Creator dashboard, user experience, documentation site

**[FEASIBILITY] Why We're Best Suited**

1. **Working MVP** - Not concept stage; core minting functionality exists
2. **Cardano Experience** - Team has [X] years combined Cardano development
3. **CIP-68 Expertise** - Direct experience with dynamic metadata standards
4. **Prior Delivery** - [List any previous shipped projects]

**[FEASIBILITY] Technical Feasibility Evidence**

Our MVP demonstrates:
- CIP-68 compliant minting contracts (deployed on testnet)
- REST API for programmatic minting
- Basic metadata update functionality
- Integration with Blockfrost for chain access

Remaining work is feature expansion, not research - significantly reducing execution risk.

**[VFM] Fund Management Processes**

1. **Milestone-Based Releases** - Funds requested per milestone completion
2. **Transparent Reporting** - Monthly public updates with spending breakdown
3. **Multi-Sig Treasury** - 2-of-3 multisig for project funds
4. **Audit Trail** - All transactions documented and shareable
5. **Community Accountability** - Open Discord for feedback and concerns

**[FEASIBILITY] Risk Assessment & Mitigation**

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| CIP-86 adoption delay | Medium | Low | CIP-68 updates work without CIP-86; optional enhancement |
| Oracle reliability | Medium | Medium | Orcfax is Cardano-native; fallback data sources configured |
| Developer adoption slow | Medium | Medium | Strong docs, tutorials, community engagement, free tier |
| Smart contract vulnerability | Low | High | Professional security audit included in budget |
| Team availability | Low | Medium | All team committed full-time; backup contractors identified |

**[FEASIBILITY] Development Approach**

1. **Agile Sprints** - 2-week development cycles with demos
2. **Test-Driven** - 90%+ code coverage on smart contracts
3. **Progressive Delivery** - Testnet first, then mainnet
4. **Community Feedback** - Beta testers involved from Month 4
5. **Documentation-First** - API docs written before implementation

---

## MILESTONES

Budget: 120,000 ADA | Timeline: 10 months | Required: 4 milestones (75k-150k range)

### Milestone 1: Foundation & Architecture
**Delivery Month:** 2
**Cost:** 25,000 ADA

**Outputs:**
- Complete technical architecture documentation
- API specification (OpenAPI/Swagger)
- Smart contract design with CIP-68 compliance
- Security audit scope and vendor selection
- Development environment and CI/CD pipeline

**Acceptance Criteria:**
- Architecture document published on GitHub
- API spec covers all core endpoints
- Contract design reviewed by external Cardano developer
- Audit vendor contract signed

**Evidence:**
- GitHub repository with documentation
- Published API specification
- Signed audit agreement (redacted as needed)

---

### Milestone 2: Core Platform Development
**Delivery Month:** 5
**Cost:** 40,000 ADA

**Outputs:**
- REST/GraphQL API for minting and updates
- CIP-68 smart contracts deployed on testnet
- Basic creator dashboard (collection creation, minting)
- Developer SDK (TypeScript)
- Testnet deployment

**Acceptance Criteria:**
- API endpoints functional with documented examples
- Contracts pass automated test suite (90%+ coverage)
- Dashboard allows collection creation without code
- SDK published to npm
- 50+ test NFTs minted on testnet

**Evidence:**
- API documentation with working examples
- Testnet contract addresses
- npm package link
- Video demonstration

---

### Milestone 3: Dynamic Features & Beta
**Delivery Month:** 8
**Cost:** 35,000 ADA

**Outputs:**
- State machine engine for NFT lifecycles
- Oracle integration (Orcfax) for external data
- Metadata evolution triggers
- Public beta launch on mainnet
- Developer beta program (10+ developers)

**Acceptance Criteria:**
- State transitions demonstrated on-chain
- Oracle-connected NFT collection live
- 10+ developers actively testing
- 100+ dynamic NFTs minted in beta

**Evidence:**
- Mainnet contract addresses
- On-chain state transition examples
- Beta tester testimonials
- Platform analytics dashboard

---

### Milestone 4: Launch & Documentation (Final)
**Delivery Month:** 10
**Cost:** 20,000 ADA

**Outputs:**
- Production mainnet deployment
- Complete documentation site
- Video tutorial series (5+ tutorials)
- Project Close-out Report
- Project Close-out Video
- Smart contract security audit report

**Acceptance Criteria:**
- 500+ NFTs minted via platform
- 50+ registered developer accounts
- Documentation site live with tutorials
- Audit report published (no critical issues)
- Close-out report and video submitted

**Evidence:**
- Platform URL and documentation
- On-chain metrics dashboard
- Published audit report
- Catalyst close-out submissions

---

## FINAL PITCH

### RESOURCES: Team & Roles

[UPDATE WITH ACTUAL TEAM INFORMATION]

| Name | Role | LinkedIn | Expertise |
|------|------|----------|-----------|
| [Lead Name] | Project Lead / Smart Contracts | [URL] | Cardano development, Plutus/Aiken, CIP-68 |
| [Backend Name] | Backend Developer | [URL] | Node.js, API design, PostgreSQL |
| [Frontend Name] | Frontend Developer | [URL] | React, Next.js, UI/UX |

**Engagement Evidence:**
- Active in Cardano developer Discord
- Previous contributions to [X ecosystem project]
- Team has shipped [X] together previously

**Planned Additions:**
- Technical Writer (part-time, Month 3) - Documentation
- Security Auditor (contracted, Month 8) - Smart contract review

---

### BUDGET & COSTS

**Total: 120,000 ADA (~$50,400 USD)**

| Category | ADA | USD | % | Justification |
|----------|-----|-----|---|---------------|
| Development - Backend | 35,000 | $14,700 | 29% | API, database, infrastructure |
| Development - Frontend | 25,000 | $10,500 | 21% | Dashboard, documentation site |
| Development - Smart Contracts | 20,000 | $8,400 | 17% | CIP-68 contracts, testing |
| Security Audit | 15,000 | $6,300 | 12% | External smart contract audit |
| Infrastructure (10 mo) | 10,000 | $4,200 | 8% | Hosting, APIs, IPFS storage |
| Documentation & Community | 10,000 | $4,200 | 8% | Tutorials, videos, workshops |
| Contingency | 5,000 | $2,100 | 4% | Unexpected costs buffer |
| **Total** | **120,000** | **$50,400** | 100% | |

**Third-Party Costs:**
- Blockfrost Pro: ~$100/month (blockchain API)
- Pinata: ~$50/month (IPFS pinning)
- Hosting (Vercel/Railway): ~$100/month
- Security Audit: ~$5,000-6,000 one-time

**Labor Rates:**
- Lead Developer: $50/hour (competitive for Cardano expertise)
- Backend/Frontend: $40/hour (market rate for region)
- Based on ~400 hours development per milestone

---

### VALUE FOR MONEY

**Why 120,000 ADA is Good Value:**

**1. Comparison to Alternatives**
- Custom dynamic NFT development: 6+ months, $100k+ for single project
- Proteus: $50k enables unlimited projects for entire ecosystem
- **ROI: 10x+ value multiplier** across all users

**2. Benchmark to Similar Projects**
- NMKR received comparable Catalyst funding for NFT tooling
- Proteus delivers more advanced features (dynamic, state machines, oracles)
- Budget is conservative for scope

**3. Efficient Resource Allocation**
- 75%+ of budget goes to direct development
- No overhead for office space, marketing fluff
- Open source means community benefits indefinitely

**4. Sustainability Plan**
Post-funding revenue model:
- **Free Tier**: 100 NFTs/month (community adoption)
- **Pro Tier**: $49/month unlimited minting
- **Enterprise**: Custom pricing for white-label
- Transaction fees: 0.5% on paid tiers

Platform becomes self-sustaining within 6 months of launch.

**5. Long-Term Ecosystem Value**
- Open source SDK benefits all Cardano developers
- Reduces barrier for future projects
- Creates reference implementation for CIP-68 best practices

---

## SUBMISSION CHECKLIST

Before submitting via Catalyst App:

- [ ] Title is ≤60 characters
- [ ] Problem statement is ≤200 characters
- [ ] Solution overview is ≤200 characters
- [ ] Budget matches milestone totals (120,000 ADA)
- [ ] Timeline is 2-12 months (10 months)
- [ ] All team members have LinkedIn profiles linked
- [ ] Supporting documentation URLs are valid
- [ ] Dependencies are listed or "No dependencies"
- [ ] Milestones have: title, outputs, criteria, evidence, month, cost
- [ ] Final milestone includes close-out report/video
- [ ] All sections within character limits
- [ ] Proofread for typos and clarity

---

**Document Version:** Draft v1
**Date:** 2025-11-26
**Status:** Awaiting user review and team information
