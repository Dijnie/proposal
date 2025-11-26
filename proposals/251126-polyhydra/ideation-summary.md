# Polyhydra - Ideation Summary

**Date:** 2025-11-26
**Category:** Cardano Use Cases: Prototype & Launch
**Budget:** ₳70,000 (MVP)
**Timeline:** 6 months

---

## Problem Statement (200 chars)

Cardano lacks accessible, provably-fair GameFi with real-time state settlement. Existing games suffer slow transactions, centralized randomness, and no social distribution channels.

## Solution Overview (200 chars)

Polyhydra: Hydra-powered GameFi platform with provably-fair VRF, on-chain state saves, Phaser3 web games, non-custodial UTXO.dev wallet, deployed on web and Discord Activities.

---

## Refined Problem Statement

The Cardano GameFi ecosystem faces critical gaps:

1. **Speed Limitation**: L1 transactions too slow for real-time gaming (20-30 TPS)
2. **Fairness Trust Issues**: No standardized provably-fair randomness for Cardano games
3. **Poor Distribution**: Games isolated from social platforms; Discord has 200M+ monthly gamers
4. **Wallet UX Friction**: Complex wallet connections deter mainstream adoption
5. **State Management**: No framework for saving game state on-chain affordably

---

## Proposed Solution

**Polyhydra** is a next-generation GameFi platform combining:

| Component | Technology | Purpose |
|-----------|------------|---------|
| L2 Scaling | Hydra Protocol | 1000+ TPS per head, instant finality |
| Game Engine | Phaser 3 | Browser-based, Discord-compatible games |
| Wallet | UTXO.dev (CIP-30) | Non-custodial, in-browser key management |
| Randomness | VRF + Commit-Reveal | Provably-fair, on-chain verifiable |
| Distribution | Discord Activities SDK | 200M+ gamer reach, social play |
| State | Hydra Head Settlement | Game state saved on-chain at session end |

---

## Unique Value Proposition

1. **First Hydra-native GameFi on Discord** - No competitor combines these
2. **Provably-Fair by Default** - VRF randomness verifiable on-chain
3. **Zero-Download Gaming** - Web-based, works in Discord iframe
4. **True Non-Custodial** - Users control keys via UTXO.dev
5. **Social-First Distribution** - Leverage Discord's 200M+ monthly active gamers

---

## Target Catalyst Category

**Cardano Use Cases: Prototype & Launch** (15,000 - 200,000 ADA)

**Rationale:**
- Building novel on-chain utility (Hydra GameFi)
- Entrepreneurial team with technical capability
- Prototype-focused scope fits category intent
- Innovation: First Discord Activity on Cardano

---

## Impact Metrics (MVP Scope)

| Metric | Target (6 months) |
|--------|-------------------|
| Discord Activity Installs | 1,000+ |
| Monthly Active Players | 500+ |
| On-chain Game Sessions | 5,000+ |
| Hydra Transactions | 100,000+ |
| Unique Wallets Connected | 300+ |
| Open Source Repos | 2+ (MIT license) |

---

## Feasibility Assessment

### Technical Feasibility: HIGH
- Hydra v1.0 production-ready (Oct 2025)
- Discord Activities SDK mature (March 2024 GA)
- Phaser 3 proven for Discord games
- UTXO.dev tools available for CIP-30

### Team Requirements (MVP - 2 devs)
- Full-stack dev (Hydra/TypeScript/Phaser)
- Game dev (Phaser 3/Discord SDK)
- Part-time: Designer/UX

### Timeline (6 months)
| Month | Phase | Deliverable |
|-------|-------|-------------|
| 1-2 | Architecture | Hydra setup, Docker, tech spec |
| 3-4 | Development | Game + wallet integration |
| 5 | Integration | VRF + Discord Activity |
| 6 | Launch | Production + docs + video |

---

## Key Differentiators

| Polyhydra | Competitors (Cornucopias, etc) |
|-----------|-------------------------------|
| Hydra L2 native | L1 only, slow |
| Discord distribution | Web-only |
| Provably-fair VRF | Centralized RNG |
| Browser-based | Download required |
| CIP-30 in-browser wallet | Extension wallets |

---

## Identified Risks & Mitigations

| Risk | Severity | Mitigation |
|------|----------|------------|
| Hydra complexity | HIGH | Use existing Hydra SDK, reference Hydra Doom |
| Discord policy changes | MEDIUM | Build web fallback first |
| UTXO.dev maturity | MEDIUM | Fallback to standard CIP-30 wallets |
| Player acquisition | MEDIUM | Leverage Discord viral mechanics |
| Token economics | MEDIUM | Start with NFT rewards, no token initially |

---

## Budget Breakdown (₳70,000 MVP)

**Based on Hydra Minecraft pattern (₳38K for 4-month demo)**

| Category | ADA | % |
|----------|-----|---|
| Development (2 devs x 5 months) | 42,000 | 60% |
| Infrastructure (Hydra nodes, hosting) | 8,000 | 11% |
| Design/UX | 6,000 | 9% |
| Testing | 5,000 | 7% |
| Documentation + Video | 5,000 | 7% |
| Marketing/Community | 4,000 | 6% |
| **Total** | **70,000** | 100% |

---

## Milestone Structure (4 milestones for ≤75K ADA)

| MS | Title | Deliverables | Month | ADA |
|----|-------|--------------|-------|-----|
| 1 | Architecture + Hydra Setup | Tech spec, Hydra node running, Docker config | 2 | 17,500 |
| 2 | Game + Wallet Integration | Phaser game, CIP-30/UTXO.dev working | 4 | 21,000 |
| 3 | VRF + Discord Activity | Provably-fair, Discord deployed, beta | 5 | 17,500 |
| 4 | Launch + Close-out | Production launch, docs, video | 6 | 14,000 |

---

## Innovation Highlights

1. **Novel Hydra Use Case**: Extends Hydra Doom/Minecraft proof-of-concepts to production GameFi
2. **Discord-First**: First Cardano app as Discord Activity
3. **Provably-Fair Standard**: Could become reference implementation for Cardano gaming
4. **Social Gaming Infrastructure**: Enables future games to build on platform

---

## Precedent: Funded Hydra Gaming Projects

| Project | Fund | Budget | Status | Learnings |
|---------|------|--------|--------|-----------|
| Hydra Doom | IOG Demo | N/A | Complete | Proved 1M TPS |
| Hydra Minecraft | F14 | ₳38,000 | Funded | Focused scope wins |

**Key Learning from Hydra Minecraft:**
- Modest budget (₳38K) for focused demo
- Clear technical scope (block events only)
- Strong team credentials (Anastasia Labs)
- Open source commitment (MIT)
- Builds on proven precedent

See: `research/reference-hydra-minecraft.md` for detailed analysis

---

## Unresolved Questions

1. UTXO.dev production readiness - need direct team contact
2. Hydra head management for multiple concurrent games
3. Discord monetization compliance with Cardano tokens
4. VRF oracle availability on Cardano (Chainlink alternative?)
5. Cost model for sustained Hydra node operation
