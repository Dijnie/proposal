# Reference Analysis: Hydra Minecraft (Fund14)

**Date:** 2025-11-26
**Source:** https://projectcatalyst.io/funds/14/cardano-use-cases-concepts/hydra-minecraft

---

## Proposal Overview

| Field | Value |
|-------|-------|
| Title | Hydra Minecraft |
| Fund | 14 |
| Category | Cardano Use Cases: Concepts |
| Budget | ₳38,000 |
| Duration | 4 months |
| Status | Onboarding (Funded) |
| Team | Adam Valach (Anastasia Labs) |

---

## Key Success Factors

### 1. Builds on Proven Concept
- References "Doom on Hydra" success
- Extends proven tech to new platform
- Demonstrates iteration, not reinvention

### 2. Focused Scope
- **Included:** Block placement/destruction only
- **Excluded:** Explosions, mob interactions, complex features
- Clear boundaries reduce risk

### 3. Strong Technical Credentials
- Developer from Anastasia Labs
- Prior work: WingRiders, IOG, Midnight Foundation
- Plutus/Plutarch expertise + Hydra testing experience

### 4. Modest Budget, High Impact
- Only ₳38,000 for full demo
- 4-month timeline realistic
- Cost-effective for awareness campaign

### 5. Clear Technical Architecture
```
Minecraft Server (Java Plugin)
    └── Event Listener (block place/destroy)
        └── Hydra Transaction Submission
            └── WebSocket Sync
                └── Other Minecraft Servers
```

### 6. Open Source Commitment
- MIT License
- GitHub: CardanoProphet/hydra-minecraft
- Enables ecosystem learning

---

## Success Metrics Comparison

| Metric | Hydra Minecraft | Polyhydra (Proposed) |
|--------|-----------------|---------------------|
| Unique Players | 30+ | 2,500+ wallets |
| Transactions | 100,000s+ | 500,000+ |
| Timeline | 4 months | 8-10 months |
| Budget | ₳38,000 | ₳120,000-150,000 |
| Scope | Demo/Concept | Production Platform |

---

## Milestone Structure Analysis

| MS | Deliverable | % Budget | Duration |
|----|-------------|----------|----------|
| 1 | Environment Setup | 30% | Month 1 |
| 2 | Hydra Integration | 30% | Month 2 |
| 3 | Server Sync | 26% | Month 3 |
| 4 | Docs + Video | 15% | Month 4 |

**Pattern:** Front-loaded development, lighter close-out

---

## Lessons for Polyhydra

### DO:
1. **Reference precedent** - Cite Hydra Doom, Hydra Minecraft as proof
2. **Scope tightly** - Start with single simple game
3. **Show credentials** - Team expertise matters
4. **Open source** - MIT license for ecosystem value
5. **Quantify metrics** - Player counts, Tx volumes
6. **Docker-compose** - Easy local testing/demo

### DON'T:
1. **Over-scope** - Exclude complex features initially
2. **Vague deliverables** - Each milestone needs demo/artifact
3. **Unrealistic timeline** - 4 months for demo reasonable
4. **Skip close-out** - Budget for docs/video

---

## Technical Patterns to Adopt

### Hydra Integration Pattern
```
Game Event → Plugin/SDK → Hydra Tx Submission → Broadcast
                              ↓
                        WebSocket Sync → Other Clients
```

### Docker Setup
```yaml
services:
  - cardano-node
  - hydra-node
  - game-server-1
  - game-server-2
```

### Transaction Flow
1. Game event captured (block, action, etc.)
2. Serialize to Cardano transaction
3. Submit to Hydra head
4. Retrieve from Hydra
5. Propagate to all connected clients
6. Replay capability for new joiners

---

## Budget Comparison

### Hydra Minecraft (Concept Demo)
| Category | ADA |
|----------|-----|
| Development | 32,300 |
| Documentation | 5,700 |
| **Total** | **38,000** |

### Polyhydra (Production Platform)
| Category | ADA |
|----------|-----|
| Development | 90,000 |
| Infrastructure | 15,000 |
| Design | 15,000 |
| Testing/Audit | 15,000 |
| Marketing | 10,000 |
| Contingency | 5,000 |
| **Total** | **150,000** |

**Ratio:** Polyhydra ~4x budget for production vs demo scope

---

## Revised Polyhydra Approach

Based on Hydra Minecraft learnings:

### Option A: Concept Demo (Low Budget)
- Budget: ₳40,000-60,000
- Timeline: 4-5 months
- Scope: Single simple game (e.g., dice, RPS)
- Goal: Prove Discord + Hydra integration
- Category: Cardano Use Cases: Concepts (if exists in F15)

### Option B: Production MVP (Medium Budget)
- Budget: ₳100,000-120,000
- Timeline: 6-8 months
- Scope: 2-3 casual games on Discord
- Goal: Live platform with users
- Category: Cardano Use Cases: Prototype & Launch

### Option C: Full Platform (Higher Budget)
- Budget: ₳150,000-200,000
- Timeline: 10-12 months
- Scope: Platform + SDK for developers
- Goal: Ecosystem infrastructure
- Category: Cardano Use Cases: Prototype & Launch

**Recommendation:** Start with Option B (match Hydra Minecraft's focused approach but for production)

---

## Updated Success Metrics

Taking cues from Hydra Minecraft's realistic targets:

| Phase | Metric | Target |
|-------|--------|--------|
| Demo (Month 3) | Test Players | 50+ |
| Beta (Month 6) | Unique Wallets | 500+ |
| Launch (Month 8) | Discord Installs | 2,500+ |
| Growth (Month 12) | MAU | 5,000+ |

---

## Unresolved Questions

1. Should Polyhydra start as "Concepts" category like Hydra Minecraft?
2. Can we collaborate with Adam Valach / Anastasia Labs?
3. What's the replication cost for Hydra Minecraft patterns?
