# Hydra C SDK - Fund15 Proposal Draft v1

**Category:** Cardano Use Cases – Prototype & Launch
**Budget:** ₳95,700 ADA (~$40,194 USD at 1 ADA = $0.42)
**Duration:** 8 months

---

## SETUP

### Title (60 chars max)
**Hydra C – A Lightweight SDK for Interacting with Hydra Heads**
*(57 characters) ✅*

### Proposer
- **Applicant:** Vu Le Quang
- **Type:** Entity (Not Incorporated)

---

## SUMMARY

### Budget
**₳95,700 ADA** (~$40,194 USD)

### Duration
**8 months**

### Problem Statement (200 chars max)
**Current (197 chars):**
> Developers in IoT, gaming, and C-based apps struggle to leverage Cardano's Layer-2 due to complex Hydra protocols, lack of lightweight SDK, and limited end-to-end examples for fast adoption.

✅ Good - Clear problem, target audience identified

### Solution Overview (200 chars max)
**Current (196 chars):**
> Hydra C SDK provides a lightweight, cross-platform C library with reliable networking, high-level APIs, state management, and transaction tools, enabling fast, secure Layer-2 Cardano apps.

✅ Good - Active voice, specific deliverables

### Supporting Links
- https://github.com/independenceee/hydra-c

### Dependencies
**No dependencies**

All third-party libraries used are open-source with permissive licenses:
- libwebsockets (MIT/LGPL)
- cJSON (MIT)
- OpenSSL (Apache 2.0)

### Open Source
- **License:** MIT
- **Repository:** GitHub (public)
- **IP Status:** No proprietary restrictions

---

## CAMPAIGN CATEGORY QUESTIONS

### Innovation (What makes this unique?)

Hydra C is the **first lightweight, cross-platform C SDK** for interacting with Hydra Heads on Cardano. Key innovations:

**Gap in Market:**
- Current Hydra SDKs: Haskell (core), TypeScript (Mesh.js, @hydrawallet)
- No C library exists for Hydra protocol interaction
- C developers, IoT, and gaming have no viable option

**Technical Innovation:**
- Reliable networking: WebSocket client with auto-reconnection, heartbeat, exponential backoff
- Full protocol support: Message encoding/decoding with schema validation, event callbacks, rollback handling
- Layer-2 tools: Transaction builder, UTxO query API, automated retry logic
- Developer resources: Prebuilt cross-platform binaries, demos, end-to-end scripts

**Differentiation from Funded Projects:**
- Mesh Hydra Tools (Fund13, ₳200K): TypeScript only, browser-focused
- Hydra Hexcore (Fund13, ₳95K): Deployment tool, not SDK
- Hydra C: Pure C, IoT-optimized, embeddable

### Prototype/MVP Description

The Hydra C MVP demonstrates the complete Hydra Head lifecycle:

**Core Modules:**
1. HydraWS - WebSocket connectivity with reconnection/heartbeat
2. HydraJSON - Protocol message encoding/decoding
3. HydraState - Head lifecycle state machine
4. HydraTxBuilder - L2 transaction construction
5. Event Callbacks - Async event handling

**Access Points:**
- GitHub: https://github.com/independenceee/hydra-c
- Prebuilt binaries: Linux, macOS, Windows
- Demo scripts: Full connect→commit→tx→fanout flow

**Community Testing:**
- Testable on Cardano testnet
- Transaction building experiments
- Event callback observation
- Rollback scenario simulation

### Success Metrics (On-chain)

**Quantitative Metrics:**

| Metric | Target (6 months post-launch) | Measurement |
|--------|-------------------------------|-------------|
| GitHub stars | 50+ | GitHub API |
| Repository forks | 20+ | GitHub API |
| Active developers | 50-100 | Clone/fork analytics |
| Testnet transactions | 500+/month | On-chain monitoring |
| Demo completions | 200+ | Tutorial analytics |

**On-Chain Metrics:**
- Successful Hydra Head commits via SDK
- Layer-2 transactions processed
- Fanout events completed
- Head lifecycle completions

**Validation Approach:**
- GitHub Insights for adoption tracking
- Testnet transaction monitoring via cardanoscan
- Community feedback via GitHub issues/discussions

---

## PROJECT & SOLUTION (10,000 chars max)

### Current Problem

Cardano's Hydra Heads enable high-throughput, low-latency Layer-2 transactions, but practical adoption remains limited due to fragmented, language-specific developer tools.

**Challenges for C Developers:**

1. **Protocol Complexity**
   - Hydra messages (commit, fanout, snapshot, rollback) require precise handling
   - Mismanaging messages leads to failed transactions or incorrect head states
   - No abstraction layer simplifies this for C environments

2. **Lack of C Tooling**
   - Existing SDKs focus on Haskell and TypeScript
   - No ready-to-use C library for Hydra Heads
   - IoT and embedded developers have no viable option

3. **Testing Barriers**
   - No example scripts for Hydra Head workflows
   - No integration testing frameworks in C
   - Experimentation is slow and error-prone

4. **Limited Educational Resources**
   - Documentation scattered across multiple sources
   - Steep learning curve for new developers
   - No end-to-end examples showing complete workflows

**Result:** IoT solutions, C-based applications, and gaming projects cannot leverage Cardano's Layer-2 capabilities.

### Solution

Hydra C SDK provides a lightweight, open-source C library with developer-friendly APIs for Hydra Head interaction.

**Architecture:**

```
┌─────────────────────┐
│    Application      │
└─────────┬───────────┘
          │
┌─────────▼───────────┐
│    HydraClient      │  High-level API
│  connect/commit/tx  │
└─────────┬───────────┘
          │
┌─────────▼───────────┐
│    HydraState       │  State Machine
│  lifecycle/events   │
└─────────┬───────────┘
          │
┌─────────▼───────────┐
│    HydraJSON        │  Protocol Layer
│  encode/decode      │
└─────────┬───────────┘
          │
┌─────────▼───────────┐
│    HydraWS          │  Network Layer
│  websocket/tls      │
└─────────┴───────────┘
```

**Key Features:**

1. **Reliable Network Communication**
   - WebSocket client with automatic reconnection
   - Heartbeat mechanism for connection health
   - Exponential backoff for transient failures
   - TLS support via OpenSSL/mbedTLS

2. **Layer-2 Transaction Tools**
   - Transaction builder for Hydra Heads
   - UTxO query API
   - Automated transaction submission with retry
   - Commit, fanout, and finalization functions

3. **State Management**
   - Hydra Head lifecycle state machine
   - Out-of-order message handling
   - Rollback event processing
   - Full event callback system

4. **Developer Resources**
   - End-to-end demo scripts
   - Prebuilt cross-platform binaries
   - Comprehensive documentation
   - Ready-to-run examples

**Target Users:**
- IoT developers building blockchain-connected devices
- Game developers needing fast L2 transactions
- C/C++ developers working on embedded systems
- Researchers studying Layer-2 protocols

**Why C?**
- Lightweight footprint for resource-constrained devices
- Cross-platform compatibility (Linux, macOS, Windows)
- Easy binding to other languages (Python, Rust, Go)
- Direct integration with game engines and IoT frameworks

### Reason for Building

1. **Accelerate Layer-2 Adoption**
   - Lower barrier for Hydra development
   - Enable rapid prototyping and deployment
   - Increase real-world Cardano L2 usage

2. **Empower Non-Traditional Developers**
   - Bring Hydra to IoT engineers
   - Enable game developers to use L2
   - Support embedded systems integration

3. **Enable Education**
   - Provide practical learning environment
   - Bridge theory and implementation
   - Support researchers and students

4. **Foster Ecosystem Growth**
   - Open-source for community contribution
   - MIT license for maximum flexibility
   - Encourage innovation across sectors

---

## IMPACT

### Positive Impact on Cardano

**1. Accelerating Layer-2 Adoption**
- Opens Hydra to new developer segments (IoT, gaming, embedded)
- Reduces technical barriers for L2 integration
- Increases network activity on Hydra Heads

**2. Supporting Education & Onboarding**
- Demo scripts provide hands-on learning
- Documentation bridges theory and practice
- Lowers learning curve for new developers

**3. Fostering Innovation**
- Open-source enables community contributions
- MIT license allows commercial use
- Cross-sector innovation (gaming, IoT, DeFi)

### Measuring Impact

**Quantitative Metrics:**

| Metric | Measurement Method | Target |
|--------|-------------------|--------|
| GitHub stars | GitHub API | 50+ |
| Repository forks | GitHub API | 20+ |
| Unique clones | GitHub Insights | 100+ |
| Testnet transactions | Cardanoscan | 500+/month |
| Demo completions | Analytics | 200+ |
| GitHub issues | GitHub API | Active engagement |

**Qualitative Metrics:**
- Developer feedback via GitHub discussions
- Community adoption in tutorials/workshops
- Integration case studies (IoT, gaming)
- Educational use in courses/research

### Sharing Outputs

**Public Outputs:**
- Source code on GitHub (MIT license)
- Prebuilt binaries (Linux, macOS, Windows)
- Documentation and API reference
- Demo scripts and examples
- Tutorial guides

**Community Sharing:**
- Cardano developer forums
- Hydra Discord channel
- GitHub discussions
- Technical blog posts
- Workshop materials

---

## CAPABILITY & FEASIBILITY

### Team Skills

**Lead Developer: Vu Le Quang**
- Role: Project Lead, Core Developer
- Experience: Blockchain development, C systems programming
- GitHub: https://github.com/independenceee
- Responsibilities: Architecture, HydraWS, HydraState modules

**[PLACEHOLDER - Additional team members to be added]**

*Note: Team section requires verifiable LinkedIn profiles and past project references for maximum scoring.*

### Technical Expertise

- **Cardano & Hydra:** Deep understanding of Hydra protocol, UTxO model, L2 interactions
- **C Programming:** Networking, memory management, concurrency, low-level protocols
- **Open Source:** Contributions to blockchain projects, community-friendly code
- **Documentation:** Technical writing, API documentation, tutorial creation

### Project Management

- **Structured Planning:** Modules mapped to milestones
- **Timeline Adherence:** 8-month delivery with buffer
- **Risk Management:** Early prototyping, modular development, iterative testing
- **Communication:** Progress reports, milestone updates, stakeholder visibility

### Financial Management

- **Budget Planning:** Allocated to development, testing, documentation
- **Cost Transparency:** Audit records for all expenditures
- **Milestone-Based Release:** Funds tied to deliverables
- **Open Verification:** Public code allows community review

### Feasibility Validation

**Technical Feasibility:**
- Building blocks exist: libwebsockets, cJSON, OpenSSL
- Architecture proven in similar blockchain SDKs
- 8-month timeline realistic for scope

**Validation Methodology:**
- Unit testing per module (≥80% coverage)
- Integration testing on Cardano testnet
- End-to-end demo scripts
- Community feedback loops

---

## MILESTONES

**Budget:** ₳95,700 ADA
**Duration:** 8 months
**Required Milestones:** 5

### Milestone 1: Reliable WebSocket Connection & Hydra Protocol Message Handling

| Field | Details |
|-------|---------|
| **Title** | Reliable WebSocket Connection & Hydra Protocol Message Handling |
| **Outputs** | 1. HydraWS module: robust WebSocket client with automatic reconnection, exponential backoff, and built-in heartbeat (ping/pong). 2. HydraJSON module: full encode/decode + strict schema validation for all Hydra protocol messages. 3. Unified logging system and error code enumeration. 4. Unit test suite (CMocka) with ≥90% coverage. 5. Standalone demo. |
| **Acceptance Criteria** | 1. HydraWS connects to Hydra node and maintains stable connection with auto-reconnect. 2. HydraJSON correctly encodes/decodes all protocol messages (Greeting, PeerConnected, HeadIsInitializing, Commit, NewTx, SnapshotConfirmed, RolledBack, HeadIsClosed). 3. All unit tests pass with ≥90% coverage. 4. Demo successfully connects to testnet Hydra node. |
| **Evidence** | 1. GitHub repository with tagged release v0.1.0. 2. Test coverage report (≥90%). 3. Demo video showing connection to Hydra node. 4. Published API documentation. |
| **Delivery Month** | Month 1 |
| **Cost** | ₳16,500 ADA (17.24%) |

### Milestone 2: High-Level HydraClient API & Event Callback System

| Field | Details |
|-------|---------|
| **Title** | High-Level HydraClient API & Event Callback System |
| **Outputs** | 1. HydraProvider opaque struct with complete public functions: new, connect, init, commit, new_tx, close, contest, fanout, abort. 2. Full event callback system (function pointers) for all protocol events. 3. Automatic retry logic for transient network/server errors. 4. Console application demonstrating complete Head lifecycle on testnet. |
| **Acceptance Criteria** | 1. HydraProvider API covers all Hydra Head operations. 2. All event callbacks fire correctly (HeadIsOpen, SnapshotConfirmed, TxValid, HeadIsClosed, RolledBack). 3. Retry logic handles transient errors gracefully. 4. Console demo completes full Head lifecycle on testnet. |
| **Evidence** | 1. GitHub release v0.2.0. 2. Integration test results on testnet. 3. Demo video showing full Head lifecycle. 4. Event callback documentation. |
| **Delivery Month** | Month 3 |
| **Cost** | ₳22,800 ADA (23.82%) |

### Milestone 3: Robust State Machine & Out-of-Order / Rollback Message Handling

| Field | Details |
|-------|---------|
| **Title** | Robust State Machine & Out-of-Order / Rollback Message Handling |
| **Outputs** | 1. Full Hydra state machine (Idle → Initializing → Open → Closing → Closed → Finalized). 2. Event processing pipeline handling delayed, reordered, duplicated, and rollback messages. 3. Comprehensive integration test suite simulating 50+ real-world network scenarios. 4. State transition diagram and documentation. |
| **Acceptance Criteria** | 1. State machine correctly tracks all Hydra Head lifecycle states. 2. Pipeline handles out-of-order and rollback messages correctly. 3. All 50+ integration test scenarios pass. 4. State transition diagram complete and accurate. |
| **Evidence** | 1. GitHub release v0.3.0. 2. Integration test results (50+ scenarios). 3. Demo video showing state transitions and rollback handling. 4. Published state machine documentation. |
| **Delivery Month** | Month 5 |
| **Cost** | ₳21,600 ADA (22.57%) |

### Milestone 4: Layer-2 Transaction Builder & UTxO Management

| Field | Details |
|-------|---------|
| **Title** | Layer-2 Transaction Builder & UTxO Management |
| **Outputs** | 1. HydraTxBuilder: construct valid Layer-2 transactions (inputs, outputs, metadata, fees) → CBOR hex output. 2. UTxO query API: fetch_utxos(), fetch_utxos_at_address(), get_head_utxos(). 3. Automatic transaction submission with retry on InvalidTx/ReqSnInvalid. 4. Signing abstraction layer (stub implementation). 5. Three end-to-end demo scripts: commit → multi-tx payment → successful fanout. |
| **Acceptance Criteria** | 1. HydraTxBuilder produces valid CBOR transactions for Hydra Heads. 2. UTxO queries return accurate data. 3. Retry logic handles InvalidTx errors. 4. All three demo scripts execute successfully on testnet. |
| **Evidence** | 1. GitHub release v0.4.0. 2. Testnet transaction logs (commit, multi-tx, fanout). 3. Demo video showing complete payment flow. 4. Performance benchmarks. |
| **Delivery Month** | Month 7 |
| **Cost** | ₳20,700 ADA (21.63%) |

### Milestone 5: Cross-Platform Packaging, Documentation & v1.0.0 Release

| Field | Details |
|-------|---------|
| **Title** | Cross-Platform Packaging, Documentation & v1.0.0 Release |
| **Outputs** | 1. Cross-platform shared/static libraries: Linux (.so), macOS (.dylib), Windows (.dll + .lib). 2. Clean public headers in include/hydra. 3. Examples folder with 4 complete sample applications. 4. Comprehensive documentation: Quick Start, full API reference, Unreal Engine guide, troubleshooting. 5. GitHub Release v1.0.0 with prebuilt binaries. 6. Complete build & usage walkthrough video. 7. Project Close-out Report and Video. |
| **Acceptance Criteria** | 1. Libraries build and run on all three platforms. 2. All 4 example applications compile and run successfully. 3. Documentation covers all APIs and workflows. 4. v1.0.0 release published with binaries. 5. Close-out report and video approved. |
| **Evidence** | 1. GitHub release v1.0.0. 2. Downloadable binaries for Linux, macOS, Windows. 3. Published documentation site. 4. Walkthrough video on YouTube. 5. Close-out video on YouTube/Loom. |
| **Delivery Month** | Month 8 |
| **Cost** | ₳14,100 ADA (14.73%) |

---

## RESOURCES (Team)

### Current Team

**Vu Le Quang - Project Lead & Core Developer**
- **Role:** Architecture, core module development (HydraWS, HydraState)
- **GitHub:** https://github.com/independenceee
- **LinkedIn:** [PLACEHOLDER - Add LinkedIn URL]
- **Experience:**
  - Blockchain development experience
  - C systems programming
  - Open-source contributions

**[PLACEHOLDER - Team Member 2]**
- **Role:** HydraJSON, HydraTxBuilder development
- **GitHub:** [Add URL]
- **LinkedIn:** [Add URL]
- **Experience:** [Add relevant experience]

**[PLACEHOLDER - Team Member 3]**
- **Role:** Testing, documentation, community engagement
- **GitHub:** [Add URL]
- **LinkedIn:** [Add URL]
- **Experience:** [Add relevant experience]

### Skills Required (if recruiting)
- C programming with networking experience
- Familiarity with WebSocket protocols
- Blockchain/Cardano knowledge preferred
- Technical writing skills

### Community Engagement
- Active in Cardano developer Discord
- Engaged with Hydra working group
- Connected with cardano-c maintainers

---

## BUDGET & COSTS

**Total Request:** ₳95,700 ADA (~$40,194 USD at $0.42/ADA)

### Milestone Cost Breakdown

| Milestone | ADA | % | Description |
|-----------|-----|---|-------------|
| **MS1** | ₳16,500 | 17.24% | WebSocket Connection & Protocol Handling |
| **MS2** | ₳22,800 | 23.82% | HydraClient API & Event Callbacks |
| **MS3** | ₳21,600 | 22.57% | State Machine & Rollback Handling |
| **MS4** | ₳20,700 | 21.63% | Transaction Builder & UTxO Management |
| **MS5** | ₳14,100 | 14.73% | Cross-Platform Packaging & v1.0.0 Release |
| **Total** | **₳95,700** | **100%** | |

### Development Rate
- **Rate:** ₳60/hour (~$25/hr at $0.42/ADA)

### MS1 Detail (Month 1) - ₳16,500

| Task | Hours | People | Cost (ADA) |
|------|-------|--------|------------|
| HydraWS module | 55 | 1 | ₳3,300 |
| HydraJSON module | 45 | 1 | ₳2,700 |
| Logging system | 35 | 1 | ₳2,100 |
| Unit tests (CMocka) | 40 | 2 | ₳4,800 |
| Demo | 30 | 1 | ₳1,800 |
| PM | 30 | 1 | ₳1,800 |

### MS2 Detail (Months 2-3) - ₳22,800

| Task | Hours | People | Cost (ADA) |
|------|-------|--------|------------|
| HydraProvider struct | 80 | 2 | ₳9,600 |
| Event callbacks | 80 | 1 | ₳4,800 |
| Retry logic | 50 | 1 | ₳3,000 |
| Console demo | 60 | 1 | ₳3,600 |
| PM | 30 | 1 | ₳1,800 |

### MS3 Detail (Months 4-5) - ₳21,600

| Task | Hours | People | Cost (ADA) |
|------|-------|--------|------------|
| State machine | 80 | 2 | ₳9,600 |
| Event pipeline | 60 | 1 | ₳3,600 |
| Integration tests (50+) | 50 | 1 | ₳3,000 |
| Documentation | 60 | 1 | ₳3,600 |
| PM | 30 | 1 | ₳1,800 |

### MS4 Detail (Months 6-7) - ₳20,700

| Task | Hours | People | Cost (ADA) |
|------|-------|--------|------------|
| HydraTxBuilder | 75 | 2 | ₳9,000 |
| UTxO query API | 45 | 1 | ₳2,700 |
| Auto submit/retry | 40 | 1 | ₳2,400 |
| Signing layer | 35 | 1 | ₳2,100 |
| Demo scripts (3) | 50 | 1 | ₳3,000 |
| PM | 25 | 1 | ₳1,500 |

### MS5 Detail (Month 8) - ₳14,100

| Task | Hours | People | Cost (ADA) |
|------|-------|--------|------------|
| Cross-platform libs | 25 | 1 | ₳1,500 |
| Public headers | 22 | 1 | ₳1,320 |
| Examples (4) | 35 | 1 | ₳2,100 |
| Documentation | 45 | 1 | ₳2,700 |
| GitHub Release | 28 | 1 | ₳1,680 |
| Walkthrough video | 35 | 1 | ₳2,100 |
| Close-out | 20 | 1 | ₳1,200 |
| PM | 25 | 1 | ₳1,500 |

### Third-Party Costs
- **Software:** None (all open-source libraries)
- **Infrastructure:** Testnet nodes (free via Cardano infrastructure)
- **Services:** None required

---

## VALUE FOR MONEY

### Cost Justification

**1. Comparison to Similar Funded Projects:**

| Project | Fund | Budget | Scope |
|---------|------|--------|-------|
| Mesh Hydra Tools | F13 | ₳200,000 | TypeScript SDK |
| Hydra Hexcore | F13 | ₳95,000 | Deployment tool |
| **Hydra C SDK** | F15 | ₳95,700 | C SDK |

Hydra C requests **52% less** than Mesh Hydra Tools for comparable scope.

**2. Developer Rate Justification:**
- Rate: ₳60/hour (~$25/hr at $0.42/ADA)
- Vietnam average developer rate: $20-40/hour (source: various freelance platforms)
- Blockchain specialist premium justified by niche expertise
- Rate is competitive and cost-effective

**3. Deliverables per Milestone:**

| Milestone | Cost | Value |
|-----------|------|-------|
| MS1 | ₳16,500 | HydraWS + HydraJSON modules, 90% test coverage, demo |
| MS2 | ₳22,800 | HydraProvider API, event callbacks, retry logic, console demo |
| MS3 | ₳21,600 | State machine, rollback handling, 50+ integration tests |
| MS4 | ₳20,700 | TxBuilder, UTxO API, signing layer, 3 e2e demos |
| MS5 | ₳14,100 | Cross-platform binaries, docs, v1.0.0 release, close-out |

**4. Ecosystem Value:**
- **Opens new market:** IoT, gaming, embedded systems
- **First mover:** No competing C SDK exists
- **Reusable:** MIT license enables commercial adoption
- **Educational:** Lowers barrier for new developers

**5. Long-term ROI:**
- SDK maintenance continues post-funding (open-source)
- Community can extend and improve
- Enables derivative projects on Cardano

### Why This Budget is Appropriate

1. **Lean budget:** Maximum value at minimal cost
2. **Competitive rates:** Below market average for blockchain specialists
3. **Milestone accountability:** Funds released against 5 deliverable milestones
4. **No waste:** No marketing/hardware/infrastructure costs
5. **Community leverage:** Open-source multiplies impact

---

## SELF-ASSESSMENT CHECKLIST

| Criterion | Status | Evidence |
|-----------|--------|----------|
| Foundational Work | ✅ | Repository initialized, architecture designed |
| Ecosystem Value | ✅ | Fills gap for C developers, IoT, gaming |
| Builder Credentials | ✅ | GitHub profile, blockchain/C experience |
| Catalyst Standing | ✅ | No previous funded projects to default on |
| Problem/Use Case | ✅ | Clear problem, validated gap |
| Tangible Prototype | ✅ | SDK structure, modular architecture |
| Technical Approach | ✅ | Detailed architecture, proven building blocks |
| Realistic Scope | ✅ | 8 months, 5 milestones, modular delivery |
| Community Engagement | ✅ | Active in Cardano/Hydra communities |
| Budget Compliance | ✅ | Within category limits, itemized breakdown |

---

## AGREEMENTS

### Ongoing Projects
- **Has ongoing Catalyst projects:** No
- **Projects:** None

### Consent
- [ ] Terms and conditions accepted

---

## SUBMISSION NOTES

### Strengths
✅ Clear problem/solution fit
✅ Validated ecosystem gap
✅ Detailed technical approach with 5 milestones
✅ Competitive budget (₳95,700)
✅ Measurable success metrics
✅ Detailed hour/cost breakdown per milestone

### Areas to Strengthen Before Submission
⚠️ Add team member LinkedIn profiles
⚠️ Advance prototype with more commits
⚠️ Demonstrate community engagement with links

### Character Counts
- Title: 57/60 ✅
- Problem: 197/200 ✅
- Solution: 196/200 ✅
- Solution Detail: ~6,500/10,000 ✅
- Impact: ~2,500/10,000 ✅
- Feasibility: ~2,000/10,000 ✅

---

*Draft Version 1.2 - Updated 2025-11-26*
*Budget: ₳95,700 ADA | 5 Milestones | 8 Months*
