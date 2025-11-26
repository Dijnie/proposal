# Polyhydra - Ideation Summary
**Date:** 2025-11-26 | **Status:** Ready for Proposal Writing

---

## Project Overview

**Name:** Polyhydra
**Tagline:** Monopoly-style board game powered by Hydra, playable directly in Discord

---

## Refined Problem Statement

GameFi on Cardano is limited because:
1. L1 transaction speed/cost makes real-time gaming impractical
2. Hydra has no consumer-facing products to prove its value
3. Web2 users face high friction (wallet setup, gas fees) before playing
4. No social/casual gaming experiences to drive organic Cardano adoption

**200-char version:**
Cardano GameFi lacks fast, social games. Hydra can solve speed but has no consumer apps. Web2 users can't play without complex wallet setup first.

---

## Proposed Solution

A Discord Activity board game in Monopoly style running on Hydra:
- **Fast gameplay:** Turns processed off-chain in Hydra Head (near-instant)
- **Transparent results:** Final outcomes settled on-chain with full transcript
- **Provably Fair:** Commit-reveal VRF for dice rolls (verifiable, no cheating)
- **Zero friction start:** Play directly in Discord; wallet only for rewards

**200-char version:**
We build a Monopoly-style Discord game on Hydra. Fast turns via state channels, provably fair dice, on-chain settlement. Play first, wallet later.

---

## Unique Value Proposition

| Feature | Traditional GameFi | Polyhydra |
|---------|-------------------|-----------|
| Speed | Slow (L1 blocks) | Instant (Hydra) |
| Entry barrier | Wallet required | Play immediately |
| Fairness proof | Trust server | Verifiable on-chain |
| Social context | Separate dApp | Inside Discord |
| Cost per game | 1-2+ ADA | ~0.17 ADA |

**Key differentiator:** First Hydra-powered consumer game with Discord-native experience.

---

## Target Catalyst Category

**Cardano Use Cases: Prototype & Launch**
- Range: 15,000 - 200,000 ADA
- Budget: 6,000,000 ADA pool

**Rationale:**
- Building novel on-chain utility (Hydra gaming)
- Team has engineering capability
- MVP/prototype scope fits category
- Not enterprise-tier (not Cardano Partners)

---

## Budget Assessment

**Requested:** 75,000 ADA (~$31,500 USD at 0.42)

| Category | Allocation | USD |
|----------|------------|-----|
| Development (3 devs × 6mo) | 55,000 ADA | $23,100 |
| Infrastructure (Hydra nodes, servers) | 8,000 ADA | $3,360 |
| Design & UI/UX | 5,000 ADA | $2,100 |
| Testing & QA | 4,000 ADA | $1,680 |
| Documentation & Marketing | 3,000 ADA | $1,260 |
| **Total** | **75,000 ADA** | **$31,500** |

**Justification:** Competitive hourly rate for Vietnam-based team (~$15-20/hr); infrastructure costs aligned with Hydra node requirements.

---

## Preliminary Impact Metrics

### Adoption KPIs
- **Month 3:** 50+ beta testers, 500+ games played
- **Month 6:** 500+ MAU, 5,000+ games played, 10+ Discord servers
- **Post-funding:** 2,000+ MAU target

### Technical KPIs
- Hydra Heads opened/closed: 1,000+
- Average game cost: <0.1 ADA
- Turn latency: <200ms
- Game completion rate: >95%

### Ecosystem KPIs
- Web2 → Web3 funnel: 20%+ wallet connection rate
- On-chain transcripts: 100% games recorded
- Open source components: Hydra game SDK released

---

## Feasibility Assessment

### Team Capability: ★★★★★

| Member | Role | Strength |
|--------|------|----------|
| Phung Tien Dung | Lead Dev | Aiken + Hydra expert, 5+ Catalyst projects |
| Khanh Duy Nguyen | Frontend | React/TS, Discord integration |
| Le Anh Quan | DevOps | AWS, Hydra node operations |

**Track record:** Fund 10, 11, 12, 13 projects delivered successfully.

### Technical Feasibility: ★★★★★

- Hydra 1.0.0 mainnet-ready (Oct 2025)
- Hydra Doom proved 86M+ transactions
- Team has Aiken + Hydra expertise
- UTXO.dev available for wallet abstraction

### Timeline Feasibility: ★★★★☆

| Phase | Duration | Deliverables |
|-------|----------|--------------|
| M1-2 | Architecture | Hydra setup, game logic design |
| M3-4 | Development | UI, multiplayer, wallet integration |
| M5 | Testing | Beta launch, 50+ testers |
| M6 | Production | Mainnet launch, documentation |

**Risk:** 6 months ambitious for full production; may ship as "early access".

---

## Key Differentiators

1. **First Hydra consumer game** - validates technology for ecosystem
2. **Discord-native** - no separate app, play where users already are
3. **Provably Fair** - commit-reveal scheme, verifiable on-chain
4. **Social gaming** - friends play together in voice channels
5. **Experienced team** - 5+ Catalyst projects delivered

---

## Risk Analysis

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| Discord policy change | Low | High | Web fallback planned |
| Hydra instability | Medium | High | Stress testing, snapshots |
| Low adoption | Medium | Medium | Leverage existing communities |
| L1 congestion | Low | Low | Batch settlement off-peak |
| Team availability | Low | Medium | Clear role allocation |

---

## Competitive Analysis Summary

| Competitor | Gap vs Polyhydra |
|------------|------------------|
| Cornucopias | Complex MMORPG, high commitment |
| Paima games | Not Discord-native, not Hydra |
| Moonpoly | Not on Cardano |
| The Monopolist | Separate dApp, wallet required |

**Conclusion:** No direct competitor on Cardano for Hydra-powered Discord gaming.

---

## Scoring Prediction

| Criteria | Expected | Confidence |
|----------|----------|------------|
| **Impact** | ★★★★☆ (4/5) | High - validates Hydra, expands reach |
| **Feasibility** | ★★★★★ (5/5) | High - proven team, clear tech |
| **Value for Money** | ★★★★☆ (4/5) | High - competitive budget |

---

## Next Steps

### Immediate Actions
- [ ] Finalize budget breakdown by milestone
- [ ] Create wireframes/mockups for proposal
- [ ] Confirm UTXO.dev Discord iframe compatibility
- [ ] Draft milestone schedule with acceptance criteria

### Before Proposal Submission
- [ ] Record 2-min explainer video
- [ ] Prepare technical architecture diagram
- [ ] Collect team LinkedIn/GitHub links
- [ ] Review against Fund15 checklist

---

## Conclusion

**Polyhydra is ready for proposal writing.**

Strong positioning:
- Addresses critical ecosystem gaps
- Proven team with Catalyst track record
- Clear technical path using mature components
- Differentiated from all competitors

**Recommendation:** Proceed to `/catalyst:write` command to draft full proposal.
