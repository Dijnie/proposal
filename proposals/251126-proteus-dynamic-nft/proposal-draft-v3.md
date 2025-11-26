# Proteus: Dynamic NFT Issuance & Management Platform

**Category:** Cardano Use Cases: Prototype & Launch
**Budget:** 120,000 ADA (~$50,400 USD)
**Duration:** 8 months

---

## PROPOSAL SETUP

**Title (54 characters):**
Proteus: Dynamic NFT Issuance & Management Platform

**Budget:** 120,000 ADA

**Timeline:** 8 months

**Problem Statement (199 characters):**
Cardano lacks production infrastructure for dynamic NFT management. Developers reinvent CIP-68 solutions per project, slowing adoption of evolving NFTs for gaming, RWA, and identity use cases.

**Solution Overview (198 characters):**
Proteus: production-grade CIP-68 platform with no-code dashboard and REST API. Built on our Fund 12 CIP68 Generator, adding automation engine, template library, and enterprise-ready infrastructure.

**Supporting Documentation:**
- Team Hub: https://www.htlabs.xyz/members
- Full Portfolio: https://www.htlabs.xyz/projects
- Fund 12 CIP68 Generator (Predecessor): https://projectcatalyst.io/funds/12/cardano-use-cases-concept/open-source-dynamic-assets-tokennft-generator-cip68
- GitHub Repository: https://github.com/htlabs-xyz/cip68generator
- Live CIP25 Minting Tool: https://cardano-tool.vercel.app
- Learning Management System: https://lms.cardano2vn.io
- CIP-68 Specification: https://cips.cardano.org/cip/CIP-68

**Project Dependencies:**
Our project relies on established Cardano infrastructure including Blockfrost API for blockchain indexing, Aiken for smart contract development, and Mesh SDK for transaction building. All dependencies are mature, open-source tools actively maintained by the Cardano community. We operate stake pool nodes (VILAI, HADA) providing direct blockchain access and have production experience with each technology through our Fund 12 CIP68 Generator project. No external organizational dependencies exist that could delay delivery.

---

## CAMPAIGN CATEGORY QUESTIONS

### Innovation

Proteus is the first production-grade dynamic NFT lifecycle management platform on Cardano. While NMKR supports CIP-68 minting and jpg.store provides marketplace functionality, no existing solution addresses the complete NFT lifecycle with enterprise-ready infrastructure, automation capabilities, and Web2-standard developer experience.

Our Fund 12 CIP68 Generator project validated that CIP-68 dynamic NFTs work on Cardano. Core validators are completed and tested on preprod testnet, demonstrating basic mint/burn operations, reference NFT + user token architecture, and metadata handling. Proteus transforms this prototype into production infrastructure by adding four key innovations.

First, an automation engine enabling scheduled and event-triggered metadata updates without manual intervention—essential for GameFi stat changes, time-based access controls, and real-time data integration. Second, a comprehensive template library offering pre-built validator patterns for common use cases: owner-controlled updates, oracle-triggered changes, time-based expiration, and multi-signature approval flows. Third, enterprise-ready infrastructure with API response times under 200ms, transaction success rates exceeding 99%, and platform uptime above 99.5%—matching Web2 developer expectations. Fourth, a no-code dashboard enabling creators without technical backgrounds to deploy and manage dynamic NFT collections through an intuitive visual interface.

### Prototype/MVP

Our Fund 12 CIP68 Generator serves as the direct predecessor and working prototype for this proposal. The open-source repository at https://github.com/htlabs-xyz/cip68generator contains core CIP-68 validators completed and tested on preprod testnet. The prototype demonstrates basic mint/burn operations, reference NFT + user token architecture per CIP-68 specification, and metadata handling through datum updates.

By project completion, Proteus will deliver production-ready smart contracts deployed on Cardano mainnet with multiple validator patterns, a public REST API with comprehensive documentation achieving sub-200ms response times, and a no-code dashboard enabling wallet connection, collection management, template selection, and automated metadata updates with full history visualization.

Community access begins immediately with our existing testnet prototype. New platform features deploy to preprod throughout development with public beta access from Month 6. Mainnet launch occurs in Month 8 following security audit completion.

### Success Metrics

We project conservative 8-month targets with transparent KPI tracking verifiable through on-chain data and public dashboards.

Platform performance metrics target API response times under 200ms, transaction success rates exceeding 99%, and platform uptime above 99.5%. User adoption metrics target 50+ collections created, 10,000+ dynamic NFTs minted, 50,000+ metadata updates processed, and 500+ monthly active users. Developer engagement targets 50+ registered API keys and 10+ third-party integrations.

Beta testing with 50-100 early adopters will provide quantitative validation including completion rates, error rates, and user feedback. All metrics will be reported monthly on Cardano Forum and GitHub with on-chain evidence including transaction IDs. Progress tracking enables course correction if targets are not being met.

---

## PROJECT & SOLUTION

### Solution

CIP-68 introduced a powerful standard for dynamic NFTs on Cardano, enabling on-chain metadata that can change over time. Our Fund 12 project proved this technology works—core validators are tested and functional. However, the ecosystem still lacks production infrastructure that makes dynamic NFTs accessible to mainstream developers and creators.

The current state forces developers building GameFi projects, RWA platforms, or identity solutions to create custom implementations for each project. No unified API exists for metadata updates. No automation handles scheduled or event-triggered changes. No no-code tools enable non-technical creators to participate. This fragmentation slows ecosystem growth, increases development costs, creates inconsistent implementations, and limits dynamic NFT adoption to technically sophisticated teams.

Proteus addresses this gap by transforming our proven Fund 12 prototype into production infrastructure matching Web2 developer experience standards. The platform architecture consists of four integrated layers serving both technical and non-technical users.

The smart contract layer builds on our tested CIP-68 validators, extending them with a comprehensive template library. The owner-only pattern restricts metadata updates to designated owners through signature verification, suitable for creator-controlled art and manual inventory management. The oracle-triggered pattern enables automatic metadata changes authorized by external data sources, ideal for GameFi statistics and real-time data integration. The time-based pattern supports scheduled updates and expiration logic for memberships, subscriptions, and access passes. The multi-signature pattern requires approval from multiple parties before metadata changes execute, enabling governance and collaborative ownership models.

The automation engine provides the intelligence layer that distinguishes Proteus from basic minting tools. Scheduled automation executes metadata changes at specified times without manual intervention—enabling membership renewals, seasonal content updates, and time-locked reveals. Event-triggered automation responds to on-chain or off-chain events, updating NFT metadata when game achievements occur, oracle data changes, or external conditions are met. Batch processing handles bulk operations efficiently, essential for collections with thousands of tokens requiring simultaneous updates.

The REST API layer offers comprehensive programmatic access through endpoints for collection creation, NFT minting, metadata updates, automated scheduling, history queries, and analytics. Enterprise-grade performance targets sub-200ms response times with 99%+ transaction success rates. Authentication uses API keys with tiered rate limiting. Webhook notifications alert integrators to state changes in real-time.

The no-code dashboard provides visual tools for creators preferring graphical interfaces over code. Features include wallet connection supporting CIP-30 compatible wallets, a collection wizard with template selection, drag-and-drop metadata editing, automation scheduling interface, real-time update previews, and history timeline visualization. Users can deploy dynamic NFT collections without writing any code.

Immediate beneficiaries include GameFi developers creating evolving characters and achievements, RWA projects issuing certificates with status updates, event organizers managing tickets with changing access levels, membership platforms handling subscription tiers, and identity projects maintaining credentials with expiration and renewal capabilities. The broader ecosystem benefits from open-source validators becoming community building blocks, comprehensive API documentation enabling rapid developer onboarding, and reference implementations establishing best practices for CIP-68 usage.

### Impact

Proteus fills a critical infrastructure gap enabling new application categories on Cardano. By providing production-ready tools for dynamic NFT management, we unlock innovations in gaming, real-world asset tokenization, identity management, and programmable digital assets that are currently impractical due to development complexity.

The direct impact on developer productivity is substantial. Teams currently spending weeks building custom CIP-68 implementations can instead integrate our API in days. This acceleration effect multiplies across the ecosystem—every project using Proteus avoids redundant infrastructure work and can focus resources on their unique value proposition. If Proteus enables 50 projects that would otherwise invest $20,000 each in custom development, the ecosystem saves over $1,000,000 in redundant infrastructure investment.

Quantitative impact measurement uses on-chain verifiable metrics. Transaction volume targets 100,000+ smart contract interactions trackable through Cardano explorers. Developer adoption tracks through 50+ registered API keys with usage analytics. Project integrations targets 10+ active partnerships documented through case studies. Community reach measures through documentation views and Discord membership targeting 1,000+ engaged participants. Open-source engagement tracks through GitHub stars, forks, and pull requests targeting 100+ stars.

All outputs will be shared openly under Apache 2.0 license. Smart contracts, API server code, and dashboard source will be published on GitHub with full documentation. Monthly progress reports on Cardano Forum and GitHub include on-chain evidence with transaction IDs. Workshop sessions at Cardano events and direct collaboration with other Catalyst projects extend knowledge transfer beyond direct users.

### Capability & Feasibility

HTlabs demonstrates deep Cardano expertise through multiple successful Catalyst projects across Fund 10, 11, 12, and 13, plus live production deployments serving the Vietnamese Cardano community.

Our verified project portfolio includes the Learning Management System live at https://lms.cardano2vn.io, the Free Native Minting Tool (CIP25) at https://cardano-tool.vercel.app, the Complete Aiken Course from Fund 11, the Study Guide for Marlowe from Fund 10, the Dualtarget staking optimization platform from Fund 11, the Real-time LAMP IoT-Blockchain Prototype from Fund 11, and critically, the Open Source CIP68 Generator from Fund 12 which serves as the direct foundation for this proposal.

The Fund 12 CIP68 Generator project at https://github.com/htlabs-xyz/cip68generator contains core CIP-68 validators completed and tested on preprod testnet. This prototype demonstrates basic mint/burn operations, reference NFT + user token architecture, and metadata handling. Proteus builds upon this validated foundation by adding production-grade features, the automation engine, the developer API, the no-code dashboard, the template library, and enterprise capabilities.

Our team combines complementary expertise. Nguyen Anh Tien (Project Manager) brings 7+ years of Cardano ecosystem experience since 2018, operating VILAI stake pool, serving as Cardano Ambassador, and successfully delivering multiple Catalyst projects. Nguyen Van Hieu (Lead Smart Contract Developer) operates HADA stake pool and graduated from Plutus Pioneer Program, providing deep smart contract security expertise. Phung Tien Dung (Fullstack Blockchain Developer) contributes 5+ years of software engineering including 2+ years in blockchain, proficient in Aiken, Haskell, and production dApp development. Khanh Duy Nguyen (Frontend/Backend Developer) handles API development, dashboard implementation, and wallet integration. Le Anh Quan (DevOps/Infrastructure) brings 5+ years of backend experience at FPT Software with AWS deployment and production system management expertise.

Verification approach includes testnet validation deploying platform and smart contracts on preprod testnet to confirm performance (latency, throughput, gas optimization) and CIP-68 compliance with all contracts publicly verifiable on blockchain explorers. Open beta testing engages 50-100 early adopters creating testnet collections, providing quantitative metrics (completion rates, error rates) and feedback to refine UX and documentation with issues tracked via public GitHub.

Fund management follows established practices from our successful Catalyst track record. Monthly budget reports provide detailed expenditure breakdowns by category with line-item justification submitted to Catalyst. All third-party invoices (AWS, Cloudflare, Blockfrost, auditors) are documented and archived for review. Milestone-based disbursements release funds only upon verified deliverables including KPI reports, on-chain evidence with transaction IDs, GitHub releases, and video demonstrations.

Why we're best suited: Proven Catalyst delivery across Fund 10, 11, 12, and 13 demonstrates milestone management and accountability. CIP-68 expertise from Fund 12 CIP68 Generator means core challenges are already solved—we're productizing proven technology, not experimenting. Full-stack capability spanning smart contracts, web development, and production infrastructure enables delivery of complete integrated systems. Community trust through transparent reporting, open-source contributions, and consistent delivery across multiple projects provides verifiable track record.

---

## MILESTONES

The 8-month timeline features 6 milestones with continuous development throughout. Milestones represent completion dates with overlapping workstreams ensuring no development gaps.

### Milestone 1: Architecture & Planning
**Delivery:** Month 1 | **Cost:** 12,000 ADA (10%)

This milestone establishes technical foundation and project infrastructure. Deliverables include complete system architecture documentation covering smart contracts, API, dashboard, and automation engine; technology stack finalization with development environment setup; security model design specifying authentication, authorization, and audit logging; API specification using OpenAPI/Swagger format; and project management infrastructure including GitHub repositories, CI/CD pipelines, and communication channels.

Acceptance requires architecture documentation reviewed and approved, development environments operational for all team members, and CI/CD pipeline successfully building and testing existing Fund 12 codebase.

Evidence includes published architecture documentation on GitHub, API specification document, and CI/CD pipeline demonstration.

### Milestone 2: Smart Contract Development
**Delivery:** Month 2 | **Cost:** 24,000 ADA (20%)

This milestone delivers enhanced smart contract infrastructure building on Fund 12 validators. Deliverables include extended validator templates (owner-only, oracle-triggered, time-based, multi-signature patterns), comprehensive test suite with property-based testing achieving 90%+ coverage, preprod testnet deployment of all validator patterns, and security review checklist completion.

Acceptance requires all validator patterns successfully processing mint, update, and burn operations on preprod testnet with test coverage exceeding 90% and no critical security issues identified.

Evidence includes preprod testnet transaction hashes demonstrating all operations, GitHub repository with tagged release, test coverage report, and security review document.

### Milestone 3: Backend API Development
**Delivery:** Month 4 | **Cost:** 24,000 ADA (20%)

This milestone delivers the REST API layer with automation engine. Deliverables include REST API v1.0 with all core endpoints (collections, minting, updates, history, analytics), automation engine supporting scheduled and event-triggered updates, API documentation with code examples in multiple languages, authentication system with API key management, and performance optimization achieving sub-200ms response times.

Acceptance requires API endpoints functional for all core operations with response times under 200ms, automation engine successfully processing scheduled and triggered updates, and documentation covering all endpoints with working code examples.

Evidence includes API endpoint URLs with documentation link, automation demonstration video, performance benchmark results, and integration test results.

### Milestone 4: Dashboard & User Interface
**Delivery:** Month 6 | **Cost:** 24,000 ADA (20%)

This milestone delivers the no-code dashboard for creators. Deliverables include web dashboard with collection wizard, template selection, and metadata editor; wallet integration supporting CIP-30 compatible wallets (Nami, Eternl, Flint, Lace); automation scheduling interface for no-code automation configuration; history timeline visualization; and public beta launch with 50-100 early adopters.

Acceptance requires dashboard enabling complete collection lifecycle without code, successful wallet connection with 5+ wallet types, beta users successfully creating and managing collections, and user feedback collected and documented.

Evidence includes dashboard URL accessible for public testing, beta user testimonials and feedback, usage analytics dashboard, and UX improvement recommendations document.

### Milestone 5: Testing & Security Audit
**Delivery:** Month 7 | **Cost:** 24,000 ADA (20%)

This milestone ensures production readiness through comprehensive testing and external security review. Deliverables include end-to-end integration testing across all platform components, load testing confirming performance under expected production traffic, external security audit of smart contracts by qualified third party, bug fixes and optimizations based on audit findings, and security documentation and incident response procedures.

Acceptance requires all integration tests passing, load tests confirming KPI targets (API <200ms, uptime >99.5%), security audit completed with no critical or high-severity issues unresolved, and security documentation reviewed and approved.

Evidence includes integration test results, load test reports, external audit report, and remediation documentation.

### Milestone 6: Mainnet Launch & Close-Out
**Delivery:** Month 8 | **Cost:** 12,000 ADA (10%)

This milestone completes project delivery with mainnet deployment and community handoff. Deliverables include smart contracts deployed on Cardano mainnet, API and dashboard production environment with monitoring, complete user documentation and tutorials, community handoff documentation for ongoing maintenance, Project Close-out Report and Video per Catalyst requirements.

Acceptance requires mainnet deployment verified with live transactions, platform operational with real users, documentation complete for community maintenance, and close-out materials submitted per Catalyst requirements.

Evidence includes mainnet contract addresses and policy IDs, production monitoring dashboard, final metrics report, Close-out Report PDF, and Close-out Video.

---

## FINAL PITCH

### Resources

Our team allocation distributes responsibilities across proven expertise. Nguyen Anh Tien dedicates 25% effort as Project Manager handling oversight, stakeholder communication, and milestone reporting. Nguyen Van Hieu commits 30% as Lead Smart Contract Developer responsible for validator development, security review, and on-chain architecture. Phung Tien Dung allocates 30% as Fullstack Blockchain Developer for API development, automation engine, and blockchain integration. Khanh Duy Nguyen provides 30% for dashboard development, wallet integration, and user experience. Le Anh Quan contributes 20% for cloud infrastructure, CI/CD pipelines, and production monitoring.

All team members are confirmed and committed with established communication channels through Telegram and Discord. Weekly sync meetings coordinate parallel workstreams. Previous successful collaboration across Fund 10, 11, 12, and 13 projects demonstrates team effectiveness.

Team verification links:
- Team Hub: https://www.htlabs.xyz/members
- Nguyen Anh Tien: VILAI stake pool operator, Cardano Ambassador
- Nguyen Van Hieu: HADA stake pool operator, Plutus Pioneer
- Phung Tien Dung: GitHub https://github.com/dijnie
- Le Anh Quan: LinkedIn https://linkedin.com/in/lenaquan306

### Budget & Costs

Total request of 120,000 ADA (~$50,400 USD) allocates across six milestone-aligned categories.

Architecture and planning receives 12,000 ADA ($5,040, 10%) covering system design, documentation, and project infrastructure setup. Smart contract development receives 24,000 ADA ($10,080, 20%) for validator patterns, testing infrastructure, and security review. Backend API development receives 24,000 ADA ($10,080, 20%) for REST API construction, automation engine, and performance optimization. Dashboard development receives 24,000 ADA ($10,080, 20%) for web interface, wallet integration, and user experience design. Testing and security audit receives 24,000 ADA ($10,080, 20%) for integration testing, load testing, and external security audit. Mainnet launch and close-out receives 12,000 ADA ($5,040, 10%) for production deployment, documentation, and community handoff.

Third-party costs included within allocations: Blockfrost API production tier ~$50/month ($400 over 8 months), AWS cloud hosting ~$200/month ($1,600 over 8 months), external security audit ~$5,000, domain and SSL ~$100.

Our Vietnam-based team operates at competitive rates of $25-35/hour for senior blockchain developers, significantly below US/EU market rates of $100-150/hour for equivalent expertise. This regional advantage enables delivery of enterprise-quality infrastructure at approximately 30% of Western market costs.

### Value for Money

This proposal represents excellent value for the Cardano treasury through multiple dimensions.

The regional cost advantage provides equivalent technical output at substantially lower cost than Western alternatives. Senior blockchain developers on our team command $25-35/hour rates compared to $100-150/hour in US and EU markets, delivering the same quality infrastructure at roughly one-third the cost.

Building on Fund 12 investment maximizes ecosystem ROI. The CIP68 Generator project already validated technical feasibility and delivered working validators. Proteus productizes this proven foundation rather than starting from scratch, accelerating time-to-value and reducing technical risk compared to unproven proposals.

Compared to alternatives, custom dynamic NFT development costs $50,000+ per project for one-time use. NMKR charges 3% plus 2 ADA per mint but offers no lifecycle management or automation. Proteus provides reusable infrastructure serving unlimited projects for a one-time $50,400 investment with enterprise features exceeding any existing solution.

Budget efficiency allocates 80% directly to development activities (smart contracts, API, dashboard, testing) with only 20% to planning, documentation, and administrative overhead. External security audit is explicitly budgeted ensuring production-grade security rather than internal review only.

Track record across Fund 10, 11, 12, and 13 demonstrates consistent delivery. Live production deployments (LMS, CIP25 tool) prove we ship working software. Community can verify our track record through Catalyst history and live products before voting.

Sustainability planning ensures platform serves community beyond funding period. Open-source release under Apache 2.0 guarantees permanent availability. Platform design enables community ownership and maintenance. The automation engine and enterprise features create potential revenue opportunities through premium tiers without paywalling core functionality.

---

## SUBMISSION CHECKLIST

- [x] Title under 60 characters (54)
- [x] Problem statement under 200 characters (199)
- [x] Solution overview under 200 characters (198)
- [x] Budget within category range: 120,000 ADA (15k-200k)
- [x] Timeline within limits: 8 months (2-12 range)
- [x] 6 milestones exceeds minimum requirement for 75k-150k ADA (4 required)
- [x] Team profiles with verifiable links
- [x] Budget breakdown aligned with milestones
- [x] Supporting documentation includes GitHub repo, live products, Catalyst history
- [x] Dependencies identified as mature open-source tools
- [x] Innovation clearly differentiated from Fund 12 predecessor
- [x] MVP/prototype linked with verifiable GitHub repository
- [x] Success metrics defined with specific KPI targets
- [x] Impact measurement plan with on-chain verification
- [x] Feasibility validated through Fund 10-13 track record and working prototype
- [x] Value for money justified with Fund 12 foundation and cost comparisons
- [x] External security audit explicitly budgeted
