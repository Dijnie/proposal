# Catalyst Proposal Review

**Proposal**: Polyhydra: OpenSource Monopoly-Style Board Game on Hydra L2
**Category**: Cardano Use Cases: Prototype & Launch
**Requested Amount**: 75,000 ADA (~$31,500)
**Review Date**: 2025-11-26
**Reviewer**: Claude (Simulated Community Reviewer)

## Scoring Summary (1-5 Stars)

| Dimension | Stars | Rating |
|-----------|-------|--------|
| Impact | ⭐⭐⭐⭐☆ (4/5) | HIGH |
| Feasibility | ⭐⭐⭐⭐☆ (4/5) | HIGH |
| Value for Money | ⭐⭐⭐⭐⭐ (5/5) | HIGH |
| **Average** | **4.3/5** | **GOOD** |

---

## Impact Review (4/5 Stars)

**Rating**: GOOD

**Strengths:**

1. **First Hydra Gaming Implementation**: Polyhydra addresses a genuine ecosystem gap—no casual board games exist on Cardano, and no production game uses Hydra. This pioneers L2 gaming validation.

2. **Clear Problem Definition**: The proposal identifies real barriers (high fees, slow confirmations, complex onboarding) with evidence. The $15B+ board game market stat adds market context.

3. **Multiple Impact Vectors**:
   - Hydra ecosystem validation (proof L2 works for real apps)
   - User onboarding pipeline (Discord Activity = invisible Web3)
   - Community engagement tool (DAOs/stake pools can host tournaments)
   - Vietnamese developer showcase (regional ecosystem growth)

4. **On-Chain Verifiable Metrics**: KPIs are blockchain-verifiable: games completed (TXIDs), unique players (wallet addresses), Hydra heads (on-chain open/close TXs). This is excellent accountability.

5. **Open-Source Commitment**: Framework, documentation, and technical guides promised for community reuse.

**Weaknesses:**

1. **User Adoption Projections Unclear**: 200 unique players and 500 games are relatively modest for a 150M+ Discord user target claim. No user acquisition funnel math provided.

2. **Sustainability Gap**: No clear post-funding revenue model. What happens after Month 6? How does the game sustain itself?

3. **Limited Mainnet Usage Evidence**: The proposal focuses on testnet beta (50 testers) before mainnet launch. 200 mainnet users is a low bar given the bold claims about Discord reach.

4. **No Partnerships Confirmed**: Claims access to "3 gaming Discord servers (2,000+ members)" but no names, MOUs, or commitments documented.

**Improvement Recommendations:**

1. Add user acquisition funnel with conversion rates: Discord impression → Discord Activity launch → game completed → repeat player
2. Include post-funding sustainability plan: premium features, sponsorships, or community-maintained model
3. Secure and name at least 1-2 partnership commitments before submission
4. Increase mainnet target to 500+ unique players to match impact claims

---

## Feasibility Review (4/5 Stars)

**Rating**: GOOD

**Strengths:**

1. **Proven Catalyst Track Record**: HTlabs completed Fund 10, 11, 12, and 13 projects successfully. This is strong delivery evidence:
   - Complete Aiken Course (F11)
   - Open Source CIP68 Generator (F12)
   - Study Guide for Marlowe (F10)

2. **Relevant Technical Stack**: Team demonstrates correct technology choices:
   - Phaser 3 (proven game engine)
   - Colyseus (established multiplayer framework)
   - NestJS (scalable backend)
   - Aiken (modern Cardano smart contract language)
   - Hydra (correctly identified as production-ready post v1.0.0)

3. **Live Production Portfolio**: Existing deployed projects validate capability:
   - LMS at lms.cardano2vn.io (live)
   - CIP25 Minting Tool at cardano-tool.vercel.app (live)

4. **Realistic Timeline**: 6 months with 4 milestones is achievable. The overlap of workstreams (frontend/blockchain in parallel) shows understanding of efficient delivery.

5. **Clear Milestone Structure**: Each milestone has specific outputs, acceptance criteria, and evidence requirements. Milestones are not generic.

**Weaknesses:**

1. **Hydra Implementation Experience Unproven**: Team claims to be "among the few teams actively implementing Hydra" but provides no evidence of prior Hydra work. All listed projects are L1.

2. **Game Development Experience Missing**: No prior game development projects listed. Phaser 3 and Colyseus proficiency claimed but not demonstrated.

3. **Team Roles Unclear on Capacity**: 3-person team for 6-month project covering smart contracts, game dev, frontend, backend, and DevOps is aggressive. No part-time/full-time commitment stated.

4. **Risk Assessment Superficial**: Proposal mentions "risks are understood" but doesn't enumerate specific risks (e.g., Hydra SDK bugs, Discord Activity approval, UTXO.dev integration issues) with mitigations.

5. **UTXO.dev Dependency**: Critical dependency on third-party custodial wallet service. No contingency if UTXO.dev changes terms, has downtime, or discontinues service.

**Improvement Recommendations:**

1. Add evidence of Hydra experimentation: even a simple testnet demo or prototype Hydra Head operation
2. Build and share a minimal Phaser 3 game prototype (even non-blockchain) to demonstrate game dev capability
3. Specify team member time allocations (full-time, hours/week)
4. Add risk register table with specific risks, likelihood, impact, and mitigations
5. Document UTXO.dev contingency plan or backup wallet integration path

---

## Value for Money Review (5/5 Stars)

**Rating**: GREAT

**Strengths:**

1. **Competitive Budget**: 75,000 ADA for complete Hydra-integrated game is well below typical gaming proposals (100K-200K). This represents 40-60% cost efficiency.

2. **Detailed Budget Breakdown**: Clear itemization with percentages:
   - Smart Contract Dev: 24%
   - Game Development: 29%
   - Frontend & Integration: 20%
   - Infrastructure: 11%
   - Testing & QA: 7%
   - Documentation: 5%
   - Contingency: 4%

3. **Labor Rate Justification**: Vietnam-based team with documented competitive rates ($30-40/hr senior vs $100+ US/EU). Source cited (TopDev Vietnam 2024).

4. **Third-Party Costs Transparent**: Discord (free), UTXO.dev (free tier), hosting (~$200/month) explicitly stated.

5. **Cost-Per-Outcome Analysis**: Excellent value metrics provided:
   - 375 ADA per unique player
   - 150 ADA per game session
   - 1.5 ADA per Hydra transaction

6. **Milestone-Based Disbursement**: Funds released on verified deliverables, not time. This protects treasury.

7. **Open-Source ROI**: Community gets reusable framework, documentation, and reference implementation—multiplied value beyond the project itself.

**Weaknesses:**

1. **Contingency May Be Low**: 4% contingency (3,000 ADA) is minimal for a project with Hydra integration complexity. 10-15% would be safer.

2. **No Buffer for ADA Price Volatility**: Budget assumes $0.42/ADA. If ADA drops significantly, USD-denominated costs may squeeze delivery.

**Improvement Recommendations:**

1. Consider increasing contingency to 10% (7,500 ADA) by adjusting other line items
2. Add note on how team handles ADA price volatility (e.g., convert portion to stablecoins at milestone receipt)

---

## Critical Issues

- [ ] **No Hydra POC**: Team claims Hydra expertise but shows no evidence of prior Hydra work. A simple testnet demo before submission would significantly strengthen credibility.

- [ ] **Game Dev Experience Gap**: No prior games in portfolio. Prototype needed to prove Phaser 3/Colyseus capability.

- [ ] **Sustainability Model Missing**: No explanation of how project survives post-funding. This is a common reviewer concern.

- [ ] **Partnership Claims Unverified**: "Access to 3 gaming Discord servers" needs names or letters of support.

- [ ] **UTXO.dev Single Point of Failure**: Critical dependency without backup plan documented.

---

## Overall Assessment

**Would I fund this proposal? YES, with conditions.**

Polyhydra represents a well-structured proposal addressing a genuine ecosystem gap. The team has proven Catalyst delivery capability through multiple completed projects, and the budget is notably efficient for the scope. The technical architecture is sound—Hydra is indeed production-ready (v1.0.0) and well-suited for turn-based gaming.

However, the proposal has a credibility gap between claims and evidence. The team positions themselves as Hydra pioneers but shows no prior Hydra work. They claim game development proficiency but have no games in their portfolio. These gaps don't mean the team can't deliver—their completed Catalyst projects suggest otherwise—but they create unnecessary reviewer doubt.

**Single biggest improvement needed:** Create a minimal proof-of-concept demonstrating Hydra Head operations and basic Phaser 3 game mechanics. Even a 5-minute video showing "we opened a Hydra Head on testnet and moved dice roll state through it" would transform reviewer confidence.

The value proposition is compelling: first Hydra game, first Cardano board game, Discord Activity integration for mass onboarding, open-source framework for ecosystem. At 75,000 ADA, the cost-to-impact ratio is excellent. If the team addresses the evidence gaps before submission, this proposal should score well with community reviewers.

---

## Recommended Actions

1. **[CRITICAL]** Create and demo a Hydra Head POC on Preview testnet before submission. Show open/commit/close lifecycle.

2. **[CRITICAL]** Build minimal Phaser 3 game prototype (can be non-blockchain) demonstrating dice, movement, and basic UI. Host on GitHub Pages.

3. **[HIGH]** Add post-funding sustainability section: Will game be community-maintained? Premium features planned? Partnership revenue?

4. **[HIGH]** Document risk register with 5-7 specific risks and mitigation strategies.

5. **[HIGH]** Secure at least one named partnership or letter of support from a Discord gaming community.

6. **[MEDIUM]** Increase contingency budget to 10% for safety margin.

7. **[MEDIUM]** Specify team time commitments (full-time, part-time, hours/week).

8. **[LOW]** Add user acquisition funnel with projected conversion rates.

9. **[LOW]** Document UTXO.dev contingency or backup wallet integration approach.
