# Proteus: Dynamic NFT Platform for Cardano
## Fund15 Proposal Draft v1

**Category:** Cardano Use Cases: Prototype & Launch
**Budget:** 150,000 ADA
**Timeline:** 10 months

---

## PROPOSAL SETUP

### Title (47 chars)
```
Proteus: Dynamic NFT Platform for Cardano
```

### Budget
**150,000 ADA** (~$63,000 USD at 1 ADA = $0.42)

### Timeline
**10 months**

### Problem Statement (196 chars)
```
Cardano lacks user-friendly tools for dynamic NFTs. CIP-68 requires Plutus expertise, blocking creators, developers, and businesses from building evolving on-chain assets like game items or badges.
```

### Solution Overview (198 chars)
```
We will build Proteus: a no-code dashboard + developer API for creating and managing dynamic NFTs on Cardano. Open-source platform enabling gaming, loyalty, credentials, and enterprise use cases.
```

### Supporting Documentation
- **Prototype**: http://cip68.cardano2vn.io/
- **Repository**: https://github.com/cardano2vn/cip68generator
- **Team Hub**: https://www.htlabs.xyz/members

### Dependencies
No critical external dependencies. Platform uses:
- Cardano blockchain infrastructure (public)
- Blockfrost API (standard Cardano indexer, free tier available)
- CIP-68 and CIP-30 public standards

---

## CAMPAIGN CATEGORY QUESTIONS

### What makes your idea innovative compared to existing market solutions?

**First CIP-68 lifecycle management platform on Cardano.**

Current Cardano NFT landscape:
- **NMKR**: Minting-focused, no dynamic metadata management after creation
- **jpg.store**: Marketplace only, zero dynamic capabilities
- **No platform exists** for managing the full lifecycle of CIP-68 dynamic NFTs

**Proteus innovations:**
1. **Hybrid approach**: No-code dashboard for creators + full API for developers - serving both audiences
2. **Dynamic metadata management**: Update, version, and track NFT attributes post-minting
3. **Use case templates**: Pre-built patterns for gaming assets, credentials, loyalty programs
4. **Batch operations**: Bulk mint and update operations for collections (1000+ NFTs)
5. **Open-source**: Community-owned infrastructure vs vendor lock-in

**Competitive positioning**: "Metaplex for Cardano" - Solana has Metaplex for programmable NFTs. Cardano has CIP-68 standard but no management platform. Proteus fills this gap.

### Describe what your prototype/MVP will demonstrate and where it can be accessed

**Testnet Deployment**: http://cip68.cardano2vn.io/
**Source Code**: https://github.com/cardano2vn/cip68generator

**Current prototype demonstrates:**
1. CIP-68 compliant NFT minting with reference token architecture
2. Dynamic metadata updates via smart contract interactions
3. Basic collection management dashboard
4. Wallet connection (Nami, Eternl, Flint support)

**By project end, MVP will demonstrate:**
1. Full no-code collection creation workflow
2. REST API with documented endpoints
3. TypeScript SDK for developer integration
4. Batch minting/updating (1000+ NFTs)
5. Real-time metadata indexing and queries
6. Version history and audit trail

**Community testing**: Beta program launching Month 5 with 10+ partner projects testing API integration.

### Describe realistic success metrics with on-chain data

| Metric | Target (Month 10) | Measurement Method |
|--------|-------------------|-------------------|
| Collections created | 50+ | On-chain count via reference token policy IDs |
| NFTs minted via Proteus | 5,000+ | Transaction count on Cardano explorer |
| Metadata updates performed | 1,000+ | On-chain datum changes tracked |
| Registered developers | 30+ | API key registrations |
| Third-party integrations | 3+ | Published integrations using SDK |

**On-chain verification**: All metrics verifiable via Cardano blockchain explorers and Proteus public dashboard.

---

## PROJECT & SOLUTION

### SOLUTION (3,847 chars)

**The Problem We're Solving**

Dynamic NFTs on Cardano are technically possible via CIP-68 but practically inaccessible. CIP-68 requires:
- Plutus smart contract knowledge
- Understanding of reference token architecture
- Manual transaction building for metadata updates
- Custom indexing for tracking changes

This creates a significant barrier. NFT sector drives 47.9% of Cardano ecosystem growth, yet creators wanting evolving assets (game items, achievement badges, loyalty tiers) cannot build without hiring Plutus developers.

**Our Solution: Proteus Platform**

Proteus abstracts CIP-68 complexity into accessible tools:

**1. No-Code Dashboard (For Creators)**
- Visual collection builder with metadata schema designer
- One-click minting with automatic reference token creation
- Update panel for modifying individual or batch NFT attributes
- Version history showing all metadata changes
- Analytics for collection performance

**2. Developer API (For Builders)**
- RESTful endpoints for all operations: mint, update, query, batch
- GraphQL for flexible data queries
- TypeScript SDK with full type definitions
- Webhook notifications for metadata changes
- Rate-limited free tier + higher limits for registered apps

**3. Smart Contract Infrastructure**
- Pre-audited Aiken contracts for CIP-68 operations
- Configurable update permissions (owner-only, multi-sig, oracle-triggered)
- Gas-optimized batch transactions
- Immutability option for finalizing metadata

**Why This Approach?**

We serve both audiences with one platform:
- **Creators** get Shopify-like simplicity for NFT management
- **Developers** get infrastructure APIs to build games, apps, loyalty systems
- **Ecosystem** gets open-source tooling reducing NMKR dependency

**Technical Stack**
- Smart contracts: Aiken (modern, efficient Cardano language)
- Backend: Node.js with PostgreSQL for indexing
- Frontend: React + TailwindCSS with wallet adapters
- Indexing: Blockfrost + custom webhook system

**Who Benefits?**
- NFT creators wanting evolving collections
- Game developers needing dynamic in-game assets
- Businesses building loyalty/credential systems
- DeFi protocols tracking positions as NFTs
- Cardano ecosystem through better tooling and adoption

### IMPACT (2,156 chars)

**Ecosystem Impact**

Proteus creates three categories of value for Cardano:

**1. Reduces Barriers to Entry**
Currently, creating dynamic NFTs requires Plutus expertise costing $50-100k+ in development. Proteus reduces this to zero technical barrier for basic use cases and minimal integration effort for developers.

*Impact metric*: 50+ creators launching dynamic collections who couldn't before

**2. Enables New Use Cases**
Dynamic NFTs unlock applications impossible with static metadata:
- Game assets that level up
- Loyalty cards accumulating points
- Certificates with updated credentials
- Event tickets transforming to collectibles
- DeFi positions represented as NFTs

*Impact metric*: 3+ third-party applications integrating Proteus API

**3. Strengthens Ecosystem Infrastructure**
Open-source platform provides community-owned alternative to proprietary solutions, reducing vendor concentration risk.

*Impact metric*: 30+ developers building on Proteus SDK

**How We Measure Impact**

All metrics are **on-chain verifiable**:
- Collection count: Reference token policy IDs on Cardano explorer
- NFT volume: Transaction count for Proteus contract addresses
- Metadata updates: Datum change events on-chain
- Developer adoption: API registrations + published integrations

**Sharing Outputs**

- Open-source code: MIT license on GitHub
- Documentation: Public developer portal
- Case studies: Published integration stories from partners
- Community: Discord/Telegram for support
- Monthly reports: Progress updates to Catalyst community

**Long-term Sustainability**

Post-funding, Proteus sustains through:
- Community contributions (open-source)
- Optional premium support for enterprises
- Grant opportunities for feature expansion

### CAPABILITY & FEASIBILITY (2,489 chars)

**Team Capability**

Our team combines deep Cardano expertise with proven track records in the ecosystem:

📌 **Nguyen Anh Tien** – Project Manager | Product Owner | Blockchain Developer
**Role:** Oversees project delivery, product strategy, and blockchain architecture. Leads community engagement and stakeholder coordination for the Proteus platform.
**Experience:** 7+ years in Cardano/Crypto space since 2018. Founder of VILAI stake pool. Cardano Ambassador and Catalyst Funded Proposer. Graduate of Plutus Pioneer Program and Atala Prism Pioneer Program. Challenge Team member and Co-host for Eastern Town Hall.
**Skills:** Project management, product ownership, Cardano ecosystem expertise, community leadership, stake pool operation.
**Contact:**
- Email: tienna@gmail.com
- Telegram: https://t.me/Tiennguyenanh

📌 **Nguyen Van Hieu** – Blockchain Developer
**Role:** Develops and maintains core smart contract infrastructure, focusing on CIP-68 compliance and on-chain security. Provides technical leadership for blockchain integration.
**Experience:** Founder of HADA stake pool. Plutus Pioneer Program graduate. Lead Technical Support at multiple successful blockchain startups with deep expertise in Cardano development.
**Skills:** Plutus, Haskell, smart contract development, stake pool operation, technical support.
**Contact:**
- Email: nvhieu1978@gmail.com
- Telegram: https://t.me/nvhieu1978

📌 **Phung Tien Dung** – Project Manager | Blockchain Developer
**Role:** Leads blockchain integration and smart contract development for CIP-68 dynamic NFT infrastructure, architecting reusable validators and ensuring secure, efficient on-chain operations for the Proteus platform.
**Experience:** 5+ years in software engineering, 2+ years in blockchain; expert in dApp development (Next.js) and smart contract writing (Aiken, Haskell). Contributed to multiple Catalyst-funded projects.
**Skills:** Node.js, Python, C/C++, Haskell, Aiken; proficient in Cardano blockchain development.
**Contact:**
- Email: tiendung0325@gmail.com
- Telegram: https://t.me/dijnie
- GitHub: https://github.com/dijnie

📌 **Khanh Duy Nguyen** – Blockchain Developer
**Role:** Develops backend API and frontend dashboard components, implementing wallet integration for seamless user onboarding and ensuring smooth platform functionality across all NFT management features.
**Experience:** Full-stack developer with expertise in building scalable web platforms. Specialized in blockchain application development and user-facing interfaces.
**Skills:** Backend and frontend development, web platform integration, wallet connectivity, API design.
**Contact:**
- Email: nguyenkhanh17112003@gmail.com
- Telegram: https://t.me/khanhnguyen1711

📌 **Le Anh Quan** – Full-Stack Developer | System Operator
**Role:** Manages infrastructure, DevOps pipelines, and system operations. Ensures platform reliability, scalability, and secure deployment across cloud environments.
**Experience:** Software engineering expert with 5+ years of backend experience at FPT Software. Extensive production system management and cloud deployment.
**Skills:** Java, Node.js, Python; proficient in system operations, DevOps management, and AWS deployment.
**Contact:**
- GitHub: https://github.com/anhquan0
- LinkedIn: https://www.linkedin.com/in/lenaquan306/

**Team Hub:** https://www.htlabs.xyz/members

**Collective Experience:**
- Cardano dApp development and stake pool operation (VILAI, HADA)
- Plutus/Aiken smart contract expertise (Pioneer Program graduates)
- Successfully funded Catalyst proposers
- Production-grade backend and infrastructure (FPT Software)
- Active Cardano community leadership (Ambassador, Eastern Town Hall)

**Why We're Best Suited**

1. **Existing Prototype**: Working CIP-68 implementation on testnet
2. **Technical Depth**: Team understands Cardano-specific constraints (UTxO, Plutus, CIP standards)
3. **Full-Stack Capability**: Can deliver end-to-end from contracts to UI
4. **Open-Source Ethos**: Committed to community-owned infrastructure

**Feasibility Evidence**

**Technical Validation:**
- CIP-68 standard is mature and documented
- Aiken provides efficient smart contract development
- Indexing infrastructure (Blockfrost) is proven
- Wallet standards (CIP-30) are stable

**Prototype Status:**
- Core CIP-68 minting works on testnet
- Basic dashboard functional
- API endpoints operational

**Timeline Feasibility:**
10-month timeline provides buffer for:
- Smart contract security review
- Community beta testing
- Documentation refinement
- Partner integration support

**Risk Mitigation**

| Risk | Mitigation |
|------|------------|
| Smart contract bugs | Professional audit before mainnet |
| Low adoption | Partner program with 10+ committed testers |
| Scope creep | Strict milestone adherence, MVP-first approach |
| Team capacity | Modular development allowing parallel work |

**Fund Management**

- Dedicated project wallet with multi-sig
- Monthly expense tracking shared publicly
- Milestone-based fund release
- Transparent reporting to Catalyst community

---

## MILESTONES

**Budget: 150,000 ADA requires 4 milestones + final close-out (5 total)**

### Milestone 1: Smart Contract Infrastructure
**Month 3 | 40,000 ADA**

**Outputs:**
- CIP-68 compliant Aiken smart contracts for minting and updating
- Unit test suite with 90%+ coverage
- Testnet deployment with documentation
- Basic security review (internal)

**Acceptance Criteria:**
- Contracts compile and deploy to testnet
- All unit tests pass
- Minting and updating functions operational
- Code published to GitHub

**Evidence:**
- GitHub repository with tagged release v0.1
- Testnet contract addresses
- Test coverage report
- Internal security review document

---

### Milestone 2: Core API & Backend
**Month 5 | 35,000 ADA**

**Outputs:**
- REST API with endpoints: mint, update, query, batch
- PostgreSQL indexer tracking all Proteus NFTs
- API documentation (OpenAPI/Swagger)
- Staging environment deployment

**Acceptance Criteria:**
- API responds to all documented endpoints
- Indexer captures on-chain events within 1 minute
- Documentation complete for all endpoints
- Staging environment stable for testing

**Evidence:**
- API endpoint URL (staging)
- Swagger documentation URL
- Integration test results
- Staging environment uptime logs

---

### Milestone 3: Dashboard MVP & SDK
**Month 7 | 40,000 ADA**

**Outputs:**
- Web dashboard for collection management
- Wallet connection (Nami, Eternl, Flint, Lace)
- TypeScript SDK published to npm
- Beta program launch with 10+ partners

**Acceptance Criteria:**
- Dashboard allows creating collection without coding
- Wallet connection works with 4+ wallet providers
- SDK published with usage examples
- 10+ beta testers actively using platform

**Evidence:**
- Dashboard URL (testnet)
- npm package link
- Beta tester list and feedback summary
- Usage analytics from beta period

---

### Milestone 4: Mainnet Launch & Audit
**Month 9 | 25,000 ADA**

**Outputs:**
- Professional smart contract security audit
- Mainnet deployment
- Production API and dashboard
- Full documentation portal

**Acceptance Criteria:**
- Audit report with no critical/high findings
- Mainnet contracts deployed
- Production systems stable (99%+ uptime target)
- Documentation covers all features

**Evidence:**
- Audit report from recognized firm
- Mainnet contract addresses
- Production URLs (API, dashboard, docs)
- Uptime monitoring dashboard

---

### Milestone 5: Project Close-out
**Month 10 | 10,000 ADA**

**Outputs:**
- Project Close-out Report
- Project Close-out Video
- Final metrics report
- Lessons learned documentation
- Handover to community maintainers

**Acceptance Criteria:**
- All previous milestones completed
- Metrics targets achieved (50+ collections, 5000+ NFTs)
- Video walkthrough published
- Community contribution guide published

**Evidence:**
- Close-out report (published)
- YouTube/Loom video link
- On-chain metrics dashboard
- GitHub CONTRIBUTING.md

---

## FINAL PITCH

### RESOURCES - Team & Roles

📌 **Nguyen Anh Tien** – Project Manager | Product Owner | Blockchain Developer
**Role:** Oversees project delivery, product strategy, and blockchain architecture. Leads community engagement and stakeholder coordination for the Proteus platform.
**Experience:** 7+ years in Cardano/Crypto space since 2018. Founder of VILAI stake pool. Cardano Ambassador and Catalyst Funded Proposer. Graduate of Plutus Pioneer Program and Atala Prism Pioneer Program. Challenge Team member and Co-host for Eastern Town Hall.
**Skills:** Project management, product ownership, Cardano ecosystem expertise, community leadership, stake pool operation.
**Contact:**
- Email: tienna@gmail.com
- Telegram: https://t.me/Tiennguyenanh

📌 **Nguyen Van Hieu** – Blockchain Developer
**Role:** Develops and maintains core smart contract infrastructure, focusing on CIP-68 compliance and on-chain security. Provides technical leadership for blockchain integration.
**Experience:** Founder of HADA stake pool. Plutus Pioneer Program graduate. Lead Technical Support at multiple successful blockchain startups with deep expertise in Cardano development.
**Skills:** Plutus, Haskell, smart contract development, stake pool operation, technical support.
**Contact:**
- Email: nvhieu1978@gmail.com
- Telegram: https://t.me/nvhieu1978

📌 **Phung Tien Dung** – Blockchain Developer
**Role:** Leads blockchain integration and smart contract development for CIP-68 dynamic NFT infrastructure, architecting reusable validators and ensuring secure, efficient on-chain operations for the Proteus platform.
**Experience:** 5+ years in software engineering, 2+ years in blockchain; expert in dApp development (Next.js) and smart contract writing (Aiken, Haskell). Contributed to multiple Catalyst-funded projects.
**Skills:** Node.js, Python, C/C++, Haskell, Aiken; proficient in Cardano blockchain development.
**Contact:**
- Email: tiendung0325@gmail.com
- Telegram: https://t.me/dijnie
- GitHub: https://github.com/dijnie

📌 **Khanh Duy Nguyen** – Blockchain Developer
**Role:** Develops backend API and frontend dashboard components, implementing wallet integration for seamless user onboarding and ensuring smooth platform functionality across all NFT management features.
**Experience:** Full-stack developer with expertise in building scalable web platforms. Specialized in blockchain application development and user-facing interfaces.
**Skills:** Backend and frontend development, web platform integration, wallet connectivity, API design.
**Contact:**
- Email: nguyenkhanh17112003@gmail.com
- Telegram: https://t.me/khanhnguyen1711

📌 **Le Anh Quan** – Full-Stack Developer | System Operator
**Role:** Manages infrastructure, DevOps pipelines, and system operations. Ensures platform reliability, scalability, and secure deployment across cloud environments.
**Experience:** Software engineering expert with 5+ years of backend experience at FPT Software. Extensive production system management and cloud deployment.
**Skills:** Java, Node.js, Python; proficient in system operations, DevOps management, and AWS deployment.
**Contact:**
- GitHub: https://github.com/anhquan0
- LinkedIn: https://www.linkedin.com/in/lenaquan306/

**Core Team (5 members)** | **Team Hub:** https://www.htlabs.xyz/members

**Collective Skills:**
- Cardano smart contract development (Plutus/Aiken)
- Stake pool operation and infrastructure (VILAI, HADA)
- Full-stack web development (Next.js, React)
- Backend API and database design
- DevOps and AWS deployment
- Wallet integration (CIP-30)
- Open-source project management
- Community leadership

**No Additional Hiring Required** - 5-person team covers all skills with proven Cardano experience

### BUDGET & COSTS

**Analysis in USD (then converted to ADA)**

| Category | USD | ADA | % |
|----------|-----|-----|---|
| Smart Contract Development | $16,800 | 40,000 | 27% |
| Smart Contract Audit | $6,300 | 15,000 | 10% |
| Backend/API Development | $14,700 | 35,000 | 23% |
| Frontend/Dashboard | $12,600 | 30,000 | 20% |
| Infrastructure (10 mo) | $4,200 | 10,000 | 7% |
| Documentation | $2,520 | 6,000 | 4% |
| Testing/QA | $2,100 | 5,000 | 3% |
| Project Management | $3,780 | 9,000 | 6% |
| **Total** | **$63,000** | **150,000** | **100%** |

**Conversion Rate:** 1 ADA = $0.42 USD

**Third-Party Costs:**
- Smart contract audit: ~$5,000-7,000 USD (Anastasia Labs, MLabs, or similar)
- Infrastructure: ~$400/month (servers, Blockfrost, monitoring)
- No additional software licenses required (open-source stack)

**Cost Justification:**
- Development rates: $40-60/hour (competitive for experienced Cardano developers)
- Timeline: 10 months full delivery
- Team: 2-3 FTE equivalent across project

### VALUE FOR MONEY

**Why This Budget Represents Good Value**

**1. Comprehensive Deliverables for Cost**
150,000 ADA delivers:
- Audited smart contracts
- Full API with documentation
- User-friendly dashboard
- TypeScript SDK
- 10-month development + support

Comparable proprietary development would cost $100k+ USD.

**2. Open-Source Multiplier**
Every ADA spent creates reusable infrastructure:
- Contracts usable by any Cardano project
- SDK accelerates other developers
- Documentation benefits ecosystem
- Community can extend and maintain

**3. Competitive Rates**
- Developer rates align with Eastern European/Southeast Asian markets
- Lower than US/Western Europe equivalents
- Efficient team size (no bloat)

**4. Risk-Adjusted Value**
- Existing prototype de-risks technical feasibility
- Milestone structure protects Treasury
- Audit requirement ensures security
- Team has prior Cardano experience

**5. Long-term Ecosystem Value**
- Fills critical infrastructure gap
- Enables use cases generating future Treasury returns
- Reduces dependency on single vendor (NMKR)
- Attracts developers to Cardano

**Comparison to Similar Proposals**
- NFT infrastructure projects typically request 100k-200k ADA
- Proteus delivers more comprehensive tooling (contracts + API + dashboard + SDK)
- Budget is mid-range for scope delivered

---

## SUBMISSION CHECKLIST

Before submitting, verify:

- [ ] Title ≤60 characters
- [ ] Problem statement ≤200 characters
- [ ] Solution overview ≤200 characters
- [ ] All sections within character limits
- [ ] Team LinkedIn profiles linked
- [ ] GitHub repository accessible
- [ ] Testnet prototype accessible
- [ ] Budget totals match milestone totals
- [ ] Milestones have clear acceptance criteria
- [ ] ADA amounts calculated correctly (1 ADA = $0.42)
- [ ] No critical dependencies on unavailable resources
- [ ] All team members disclosed roles
- [ ] Prior Catalyst compliance verified (if applicable)

---

## ALL PLACEHOLDERS FILLED ✓

| Item | Status |
|------|--------|
| Prototype URL | ✓ http://cip68.cardano2vn.io/ |
| GitHub Repository | ✓ https://github.com/cardano2vn/cip68generator |
| Team Hub | ✓ https://www.htlabs.xyz/members |
| Team Information | ✓ 5 members with full details |

---

*Draft v1 - Ready for user review and iteration*
