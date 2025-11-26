# Proteus: Dynamic NFT Issuance & Management Platform

**Category:** Cardano Use Cases: Prototype & Launch
**Budget:** 120,000 ADA (~$50,400 USD)
**Duration:** 12 months

---

## PROPOSAL SETUP

**Title (54 characters):**
Proteus: Dynamic NFT Issuance & Management Platform

**Budget:** 120,000 ADA

**Timeline:** 12 months

**Problem Statement (195 characters):**
Cardano lacks infrastructure for dynamic NFT management. Developers reinvent CIP-68 solutions per project, slowing adoption of evolving NFTs for gaming, RWA, and identity use cases.

**Solution Overview (196 characters):**
Proteus: comprehensive CIP-68 dynamic NFT platform with dashboard for creators and REST API for developers. Mint, update, and burn NFTs with flexible on-chain validator logic and update history.

**Supporting Documentation:**
- Team Hub: https://www.htlabs.xyz/members
- GitHub: https://github.com/htlabs-xyz
- CIP-68 Specification: https://cips.cardano.org/cip/CIP-68
- VILAI Stake Pool: https://vilai.io
- HADA Stake Pool: https://pool.pm/HADA

**Project Dependencies:**
Our project relies on established Cardano infrastructure including Blockfrost API for blockchain indexing, Aiken for smart contract development, and Mesh SDK for transaction building. All dependencies are mature, open-source tools actively maintained by the Cardano community. We operate stake pool nodes providing direct blockchain access and have production experience with each technology in our stack. No external organizational dependencies exist that could delay delivery.

---

## CAMPAIGN CATEGORY QUESTIONS

### Innovation

Proteus is the first dedicated dynamic NFT lifecycle management platform on Cardano. While NMKR supports CIP-68 minting and jpg.store provides marketplace functionality, no existing solution addresses the complete NFT lifecycle—mint, update, and burn operations with flexible validator logic.

Our platform introduces four key innovations. First, complete lifecycle management enabling the full sequence of dynamic NFT operations through a unified interface. Second, flexible validator patterns offering pre-built, auditable smart contract templates for owner-controlled updates and oracle-triggered automatic changes—reducing development time from weeks to minutes. Third, an API-first architecture providing language-agnostic REST endpoints that any platform can integrate without SDK complexity. Fourth, on-chain update history tracking that creates an audit trail critical for RWA tokenization, identity credentials, and compliance use cases.

### Prototype/MVP

We have validated our technical approach through a working MVP on Preprod testnet. The CIP-68 metadata change mechanism has been tested successfully, and our owner-only validator pattern processes mint, update, and burn operations correctly. Transaction construction for all core operations has been verified.

By project completion, we will deliver production-ready smart contracts deployed on Cardano mainnet with two validator patterns, a public REST API with comprehensive documentation and code examples, and a web dashboard enabling wallet connection, collection management, and metadata updates with history visualization. The community can access our testnet deployment from Month 4, public API from Month 6, and mainnet beta from Month 10.

### Success Metrics

We project conservative 12-month targets based on capturing approximately 1% of NMKR's annual minting volume. Our measurable goals include 50+ collections created, 10,000+ dynamic NFTs minted, 50,000+ metadata updates processed, 10+ third-party API integrations, and 500+ monthly active users. All on-chain metrics will be verifiable through Cardano explorers, and we will publish monthly progress reports with transaction hashes and maintain a public statistics dashboard.

---

## PROJECT & SOLUTION

### Solution

CIP-68 introduced a powerful standard for dynamic NFTs on Cardano over two years ago, yet the ecosystem still lacks production-ready infrastructure to utilize this capability. Developers building GameFi projects, RWA platforms, or identity solutions must create custom smart contracts for each implementation. No unified API exists for metadata updates, forcing teams to reinvent the same infrastructure repeatedly. This fragmentation slows ecosystem growth, increases development costs, creates inconsistent implementations, and excludes non-technical creators from the dynamic NFT space.

Proteus addresses this gap by providing the missing infrastructure layer between low-level blockchain tools and high-level applications. Our platform architecture consists of three integrated components working together to serve both technical and non-technical users.

The smart contract layer provides two production-ready validator patterns. The owner-only pattern restricts metadata updates to designated owners through signature verification, suitable for creator-controlled art and manual inventory management. The oracle-triggered pattern enables automatic metadata changes authorized by external data sources, ideal for GameFi statistics, real-time data integration, and automated updates. Both patterns include version control, update history tracking in the datum, and burn functionality for complete lifecycle management.

The REST API layer offers comprehensive programmatic access through endpoints for collection creation, NFT minting, metadata updates, asset burning, history queries, and analytics. The API uses standard HTTP authentication with API keys, implements rate limiting with tiered access levels, and provides webhook notifications for state changes. This language-agnostic approach allows any platform—regardless of technology stack—to integrate dynamic NFT capabilities.

The web dashboard provides a user-friendly interface for creators who prefer visual tools over code. Features include wallet connection supporting Nami, Eternl, Flint and other CIP-30 compatible wallets; a collection wizard with template selection; a drag-and-drop metadata editor; real-time update previews; and history timeline visualization.

The immediate beneficiaries include GameFi developers creating evolving characters and achievements, RWA projects issuing certificates with status updates, event organizers managing tickets with changing access levels, and identity projects maintaining credentials with expiration and renewal capabilities. The broader ecosystem benefits from open-source validators that become community building blocks, comprehensive API documentation enabling rapid developer onboarding, and reference implementations establishing best practices for CIP-68 usage.

### Impact

Proteus fills a critical infrastructure gap that will unlock new application categories on Cardano. By providing standardized tools for dynamic NFT management, we enable innovations in gaming, real-world asset tokenization, identity management, and programmable art that are currently impractical due to development complexity.

The direct impact on developer productivity is substantial. Teams currently spend weeks building custom CIP-68 implementations can instead integrate our API in days. This acceleration effect multiplies across the ecosystem—every project using Proteus avoids redundant infrastructure work and can focus resources on their unique value proposition.

We will measure impact through quantitative on-chain metrics including transaction volume targeting 100,000+ smart contract interactions, developer adoption tracked through 50+ API key registrations, and project integrations targeting 10+ active partnerships. Community reach will be measured through documentation views and Discord membership targeting 1,000+ engaged participants, while open-source engagement will be tracked through GitHub stars, forks, and pull requests targeting 100+ stars.

All outputs will be shared openly. Smart contracts will be released under Apache 2.0 license with full source code on GitHub. Documentation will include technical references for developers, tutorial videos for creators, and integration guides for common use cases. We commit to monthly progress updates through Catalyst and Discord channels, technical blog posts explaining our implementation approaches, and community calls for feedback and feature requests. Knowledge transfer will occur through workshop sessions at Cardano events and direct collaboration with other Catalyst projects building on our infrastructure.

### Capability & Feasibility

Our team combines deep Cardano expertise with proven delivery track records across five members with complementary skills.

Nguyen Anh Tien serves as Project Manager and Blockchain Developer, bringing 7+ years of Cardano ecosystem experience since 2018. As founder of VILAI stake pool, Cardano Ambassador, and previous Catalyst funded proposer with successful deliveries, he provides project leadership and stakeholder coordination. His credentials include graduation from both Plutus Pioneer Program and Atala Prism Pioneer Program, plus experience as Challenge Team member and Co-host for Eastern Town Hall. Contact: tienna@gmail.com | Telegram: @Tiennguyenanh

Nguyen Van Hieu leads smart contract infrastructure as Blockchain Developer, focusing on CIP-68 compliance and on-chain security. As founder of HADA stake pool and Plutus Pioneer Program graduate, he brings deep technical leadership experience from multiple blockchain startups. Contact: nvhieu1978@gmail.com | Telegram: @nvhieu1978

Phung Tien Dung serves as Fullstack Blockchain Developer responsible for blockchain integration, smart contract development, and validator architecture. With 5+ years of software engineering experience including 2+ years specifically in blockchain, he is proficient in Node.js, Python, Haskell, and Aiken. He has contributed to multiple Catalyst-funded projects. Contact: tiendung0325@gmail.com | Telegram: @dijnie | GitHub: github.com/dijnie

Khanh Duy Nguyen handles backend API and frontend dashboard development as Blockchain Developer, implementing wallet integration for seamless user onboarding. His full-stack expertise spans backend systems, frontend interfaces, API design, and wallet connectivity. Contact: nguyenkhanh17112003@gmail.com | Telegram: @khanhnguyen1711

Le Anh Quan manages infrastructure, DevOps pipelines, and system operations as Full-Stack Developer and System Operator. His 5+ years of backend experience at FPT Software provides expertise in Java, Node.js, Python, and AWS deployment. Contact: GitHub: github.com/anhquan0 | LinkedIn: linkedin.com/in/lenaquan306

We have already validated our technical approach through a working MVP. The CIP-68 metadata change mechanism has been tested on Preprod testnet, the owner-only validator pattern is implemented and functional, and transaction construction for update operations is verified. Our technology stack—Aiken for smart contracts, Mesh SDK for transaction building, Blockfrost for chain indexing—consists entirely of proven tools we have production experience with. Our stake pool infrastructure provides direct blockchain access, and our AWS expertise ensures reliable cloud deployment.

Fund management will follow established practices from our previous Catalyst experience. We will use multi-signature wallets for fund custody, maintain clear budget allocation per milestone with regular financial reporting, and provide transparent communication through monthly progress updates. Risk mitigation strategies include scope prioritization focusing on two core validators before expansion, conservative timeline estimates with built-in buffers, and identified fallback approaches for technical risks including smart contract complexity, API scalability, user adoption challenges, and oracle integration dependencies.

---

## MILESTONES

Our 120,000 ADA budget requires four milestones including the final close-out per Fund15 guidelines.

### Milestone 1: Foundation & Smart Contracts
**Delivery:** Month 3 | **Cost:** 36,000 ADA (30%)

This milestone establishes the core smart contract infrastructure. We will deliver complete architecture documentation, both validator patterns (owner-only and oracle-triggered) deployed on Preprod testnet, a comprehensive unit and integration test suite, and completed security review checklist.

Acceptance requires both validators successfully processing mint, update, and burn operations on testnet with test coverage exceeding 80% for smart contract code. Documentation must be reviewed and approved internally with no critical security issues identified.

Evidence includes testnet transaction hashes demonstrating all operations, GitHub repository with tagged release v0.1, test coverage report, and security review document.

### Milestone 2: API & Dashboard MVP
**Delivery:** Month 6 | **Cost:** 36,000 ADA (30%)

This milestone delivers the application layer. We will deploy REST API v1.0 with testnet backend, publish API documentation with code examples, launch web dashboard MVP with core features, implement CIP-30 wallet integration, and complete integration testing.

Acceptance requires all API endpoints functional for core operations, dashboard supporting collection creation, minting, and metadata updates, successful testing with 3+ wallet types, and API response times under 500ms.

Evidence includes API endpoint URLs with documentation link, dashboard URL accessible for community testing, video demonstration of end-to-end flow, and performance test results.

### Milestone 3: Production Deployment
**Delivery:** Month 9 | **Cost:** 36,000 ADA (30%)

This milestone transitions to mainnet production. We will deploy smart contracts on Cardano mainnet, launch API production environment with monitoring, release dashboard public beta, publish user documentation and tutorials, and begin community onboarding program.

Acceptance requires mainnet deployment verified with test transactions, API uptime exceeding 99% during beta period, successful onboarding of 10+ beta users, and documentation covering all features.

Evidence includes mainnet contract addresses and policy IDs, uptime monitoring dashboard, user testimonials and feedback, and published documentation links.

### Milestone 4: Close-out & Handoff
**Delivery:** Month 12 | **Cost:** 12,000 ADA (10%)

This final milestone completes project delivery. We will submit Project Close-out Report and Video per Catalyst requirements, publish final platform statistics, complete community handoff documentation, and release open-source contribution guide.

Acceptance requires all previous milestones completed and verified, platform operational with active users, documentation complete for community maintenance, and close-out materials submitted per Catalyst requirements.

Evidence includes Close-out Report PDF, Close-out Video on YouTube or similar platform, final metrics dashboard screenshot, and GitHub repository with contribution guidelines.

---

## FINAL PITCH

### Resources

Our team allocation distributes responsibilities across complementary skill sets. Nguyen Anh Tien dedicates 25% effort to project oversight, stakeholder communication, and milestone reporting. Nguyen Van Hieu commits 30% to validator development, security review, and on-chain architecture. Phung Tien Dung allocates 30% to API development, blockchain integration, and testing. Khanh Duy Nguyen provides 30% for dashboard development, wallet integration, and user experience. Le Anh Quan contributes 20% to cloud infrastructure, CI/CD pipelines, and monitoring.

All team members are confirmed and committed with direct communication channels established through Telegram and Discord. We maintain weekly sync meetings and have previous collaboration experience on blockchain projects together.

### Budget & Costs

Our total request of 120,000 ADA (~$50,400 USD) is allocated across eight categories reflecting the full scope of deliverables.

Smart contract development receives 36,000 ADA ($15,120, 30%) covering validator pattern implementation, testing infrastructure, and security review. Backend API development receives 24,000 ADA ($10,080, 20%) for REST API construction, database integration, and authentication systems. Frontend dashboard development receives 18,000 ADA ($7,560, 15%) for web interface, wallet integration, and user experience design. Infrastructure costs of 12,000 ADA ($5,040, 10%) cover cloud hosting, monitoring systems, and CI/CD pipelines. Testing and QA receives 12,000 ADA ($5,040, 10%) for integration testing and security testing. Documentation receives 6,000 ADA ($2,520, 5%) for technical documentation, tutorials, and video content. Community and marketing receives 6,000 ADA ($2,520, 5%) for outreach, partnerships, and event participation. Project management receives 6,000 ADA ($2,520, 5%) for coordination, reporting, and administration.

Third-party costs included within these allocations comprise Blockfrost API production tier at approximately $50/month ($600/year), AWS cloud hosting at approximately $200/month ($2,400/year), and domain registration with SSL certificates at approximately $100/year.

Our Vietnam-based team operates at competitive rates of $25-35/hour for senior blockchain developers, significantly below US/EU market rates of $100-150/hour for equivalent expertise. This regional advantage enables delivery of enterprise-quality infrastructure at approximately 30% of Western market costs.

### Value for Money

This proposal represents excellent value for the Cardano treasury through multiple dimensions.

The regional cost advantage provides equivalent technical output at substantially lower cost than Western alternatives. Our senior blockchain developers command $25-35/hour rates compared to $100-150/hour in US and EU markets, delivering the same quality infrastructure at roughly one-third the cost.

Compared to alternatives, custom dynamic NFT development costs $50,000+ per project for one-time use. NMKR charges 3% plus 2 ADA per mint but offers no update management. Proteus provides reusable infrastructure serving unlimited projects for a one-time $50,400 investment.

The ecosystem ROI extends far beyond direct deliverables. If our platform enables 50 projects that would otherwise spend $20,000 each on custom development, the ecosystem saves over $1,000,000 in redundant infrastructure work. Open-source validators become permanent community assets benefiting unlimited future projects.

Budget efficiency allocates 75% to direct development activities (smart contracts, API, dashboard), 10% to essential infrastructure and testing, 10% to documentation and community engagement ensuring adoption, and only 5% to project management overhead.

Our team's track record includes previous Catalyst deliveries completed on time and within budget. Operating stake pools since 2018 demonstrates long-term Cardano commitment. We have no history of abandoned projects.

Sustainability planning ensures the platform serves the community beyond the funding period. Open-source release guarantees permanent availability. The platform design enables community ownership and maintenance. Potential future revenue through premium API tiers and enterprise features can fund ongoing operations without requiring core functionality to be paywalled.

---

## SUBMISSION CHECKLIST

- [x] Title under 60 characters (54)
- [x] Problem statement under 200 characters (195)
- [x] Solution overview under 200 characters (196)
- [x] Budget within category range: 120,000 ADA (15k-200k range)
- [x] Timeline within limits: 12 months (2-12 range)
- [x] 4 milestones per requirement for 75k-150k ADA
- [x] Team profiles with contact information
- [x] Budget breakdown itemized by category
- [x] Supporting documentation links provided
- [x] Dependencies identified and assessed
- [x] Innovation clearly differentiated
- [x] MVP/prototype described with validation
- [x] Success metrics defined with measurement approach
- [x] Impact measurement plan with quantitative targets
- [x] Feasibility validated through team credentials and technical approach
- [x] Value for money justified with comparisons
