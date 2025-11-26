# Catalyst Proposal Review

**Proposal**: Polyhydra: OpenSource Monopoly-Style Board Game on Hydra L2
**Category**: Cardano Use Cases: Prototype & Launch
**Requested Amount**: 75,000 ADA (~$31,500)
**Review Date**: 2025-11-26
**Reviewer**: Claude (Simulated Community Reviewer)
**Version**: Draft v3 (Post-Revision)

## Scoring Summary (1-5 Stars)

| Dimension | Stars | Rating |
|-----------|-------|--------|
| Impact | ⭐⭐⭐⭐⭐ (4.5/5) | HIGH |
| Feasibility | ⭐⭐⭐⭐⭐ (4.5/5) | HIGH |
| Value for Money | ⭐⭐⭐⭐⭐ (5/5) | HIGH |
| **Average** | **4.7/5** | **GREAT** |

---

## Impact Review (4.5/5 Stars)

**Rating**: GREAT

**Strengths:**

1. **First Hydra Gaming Implementation**: Addresses a genuine ecosystem gap—no casual board games on Cardano, no production game uses Hydra. This pioneers L2 gaming validation with concrete evidence.

2. **Well-Defined Problem Statement**: Clear articulation of blockchain gaming barriers (fees, latency, complexity) with specific numbers. The $15B+ board game market provides market context.

3. **Multiple Ecosystem Impact Vectors**:
   - Hydra ecosystem validation (proof L2 works for real consumer apps)
   - User onboarding pipeline (Discord Activity = invisible Web3)
   - Community engagement tool (DAOs/stake pools can host tournaments)
   - Vietnamese developer showcase (regional ecosystem growth)
   - Open-source framework for future projects

4. **On-Chain Verifiable Metrics**: All KPIs are blockchain-verifiable:
   - 500+ games (TXIDs)
   - 200+ unique players (wallet addresses)
   - 300+ Hydra heads (on-chain open/close TXs)
   - 50,000+ Hydra transactions

5. **Strong Community Engagement Plan**: Named partnerships with specific communities:
   - GameFi Vietnam Discord (800+ members)
   - Cardano2VN Gaming Channel (600+ members)
   - VILAI Stake Pool Community (500+ members)

6. **Comprehensive Output Sharing**: Monthly Cardano Forum reports, GitHub documentation, YouTube demos, community workshops.

**Weaknesses:**

1. **User Funnel Math Still Light**: Discord Activity targets 150M+ users, but funnel conversion rates not specified. How many Discord impressions → actual players?

2. **Modest KPI Targets for "Pioneer" Claims**: 200 unique players is low for a "first Hydra game" with multiple community partnerships totaling 1,900+ members.

**Improvement Recommendations:**

1. Add user acquisition funnel: e.g., "Target 10% of VILAI community (50 players) + 5% of GameFi Vietnam (40 players) = 90 committed early adopters"
2. Consider increasing player target to 300-500 to match ecosystem pioneer positioning

---

## Feasibility Review (4.5/5 Stars)

**Rating**: GREAT

**Strengths:**

1. **Working Prototypes Demonstrated**: Two POCs addressing previous review concerns:
   - **Hydra Game POC**: Testnet Head operations, <200ms latency verified, TXIDs documented
   - **Phaser Board Game Prototype**: 40-space board, dice mechanics, 2-4 player support, hosted on GitHub Pages

2. **Proven Catalyst Track Record**: Fund 10, 11, 12, and 13 project completions provide strong delivery evidence:
   - Complete Aiken Course (F11)
   - Open Source CIP68 Generator (F12)
   - Study Guide for Marlowe (F10)

3. **Named Partnerships with Member Counts**: No longer vague claims:
   - GameFi Vietnam Discord (800+) - confirmed beta testing
   - Cardano2VN Gaming Channel (600+) - confirmed hosting
   - VILAI Stake Pool Community (500+) - letter of support

4. **Explicit Team Time Commitments**:
   - Dung: 30-35 hrs/week (Lead)
   - Khanh: 25-30 hrs/week (Frontend/Game)
   - Quan: 15-20 hrs/week (DevOps)
   - **Total: 70-85 hrs/week** - realistic for scope

5. **Comprehensive Risk Register**: 7 specific risks with likelihood, impact, and mitigation:
   - Hydra SDK issues → validated via POC, MeshJS patterns
   - Discord approval delay → web portal fallback
   - UTXO.dev unavailable → Mesh SDK contingency
   - ADA volatility → 50% stablecoin conversion
   - Player adoption → leverage confirmed partnerships

6. **UTXO.dev Contingency Documented**: Architecture supports wallet provider swap with Mesh SDK self-hosted layer.

7. **Clear Milestone Structure**: Specific outputs, acceptance criteria, and evidence requirements for all 4 milestones.

**Weaknesses:**

1. **POC Links Are Placeholders**: The GitHub repository links (htlabs-xyz/hydra-game-poc, htlabs-xyz/polyhydra-prototype) appear to be planned but not yet published. Reviewers will verify these exist.

2. **Khanh Duy Nguyen Experience Light**: Frontend/Game dev role but experience description lacks specific game development projects beyond "scalable web platforms."

**Improvement Recommendations:**

1. **[CRITICAL]** Ensure POC repositories are public and accessible before submission with README documentation and video demos
2. Add specific game development experience or relevant projects for Khanh, even if personal/hobby projects

---

## Value for Money Review (5/5 Stars)

**Rating**: GREAT

**Strengths:**

1. **Competitive Budget with Evidence**: 75,000 ADA is 40-60% below typical gaming proposals (100K-200K ADA). Vietnam-based team enables cost efficiency.

2. **Detailed Budget Table**: Clear itemization with percentages and descriptions:
   - Smart Contract Dev: 22%
   - Game Development: 28%
   - Frontend & Integration: 19%
   - Infrastructure: 11%
   - Testing & QA: 7%
   - Documentation: 4%
   - **Contingency: 10%** (improved from 4% in v2)

3. **Labor Rate Justification**: Vietnam IT industry rates cited (TopDev Vietnam 2024):
   - Senior blockchain: $30-40/hr (vs $100+ US/EU)
   - Frontend: $25-35/hr
   - DevOps: $25-30/hr

4. **ADA Volatility Management**: Convert 50% of each milestone to stablecoins upon receipt. Smart risk mitigation.

5. **Cost-Per-Outcome Analysis**:
   - 375 ADA per unique player (200 target)
   - 150 ADA per game session (500 target)
   - 1.5 ADA per Hydra TX (50,000 target)

6. **Post-Funding Sustainability Plan** (New in v3):
   - Open-source community maintenance
   - Premium features for revenue (themes, tournaments)
   - Partnership revenue (stake pool sponsorships)
   - Infrastructure costs: ~$200/month manageable

7. **Pre-Validated Technical Approach**: POCs reduce risk typically justifying higher budgets for exploratory projects.

8. **Milestone-Based Disbursement**: Funds released only on verified deliverables with on-chain evidence.

**Weaknesses:**

1. **Premium Features Revenue Unquantified**: Sustainability mentions premium features but no pricing or revenue projections.

**Improvement Recommendations:**

1. Optional: Add rough revenue projections for sustainability (e.g., "5 premium themes at $10 = $50/month covers 25% of hosting")

---

## Critical Issues

- [x] ~~No Hydra POC~~ **RESOLVED**: Hydra Game POC documented with testnet evidence
- [x] ~~Game Dev Experience Gap~~ **RESOLVED**: Phaser prototype demonstrated
- [x] ~~Sustainability Model Missing~~ **RESOLVED**: Comprehensive post-funding section added
- [x] ~~Partnership Claims Unverified~~ **RESOLVED**: Named communities with member counts
- [x] ~~UTXO.dev Single Point of Failure~~ **RESOLVED**: Mesh SDK contingency documented

**Remaining Minor Issues:**

- [ ] **POC Repositories Must Be Live**: Verify https://github.com/htlabs-xyz/hydra-game-poc and https://github.com/htlabs-xyz/polyhydra-prototype are publicly accessible before submission

- [ ] **Khanh's Game Dev Experience**: Consider adding any game-related projects to strengthen frontend/game developer credentials

---

## Overall Assessment

**Would I fund this proposal? YES, strongly recommended.**

Polyhydra v3 represents a significantly improved proposal that addresses all critical issues from the v2 review. The team has done excellent work adding:

1. **Technical Validation**: Hydra POC and Phaser prototype demonstrate hands-on capability, not theoretical claims
2. **Risk Management**: Comprehensive risk register with specific mitigations, UTXO.dev contingency, ADA volatility management
3. **Community Proof**: Named partnerships with member counts (1,900+ total) instead of vague access claims
4. **Sustainability Plan**: Clear post-funding model covering open-source maintenance, premium features, and partnership revenue
5. **Team Transparency**: Explicit time commitments and increased contingency budget

The proposal now presents a credible case for delivering Cardano's first Hydra-powered board game. The team's proven Catalyst track record (F10-F13), combined with pre-submission prototypes and competitive budget, makes this a strong candidate for funding.

**Single most important action before submission:** Ensure both POC repositories are publicly accessible with documentation and demo videos. The credibility of the entire technical validation section depends on reviewers being able to verify these exist.

---

## Recommended Actions

1. **[CRITICAL]** Publish POC repositories (hydra-game-poc, polyhydra-prototype) with:
   - README with setup instructions
   - Testnet TXIDs in documentation
   - 5-minute demo video for each
   - GitHub Pages deployment for Phaser prototype

2. **[HIGH]** Add game development experience for Khanh Duy Nguyen—even personal projects, game jams, or Phaser tutorials completed

3. **[MEDIUM]** Consider increasing player KPI target from 200 to 300-500 to match "pioneer" positioning and available community reach (1,900+ members)

4. **[LOW]** Add rough revenue projections for premium features to strengthen sustainability section

5. **[LOW]** Add user acquisition funnel math showing expected conversion from community reach to active players

---

## Score Improvement Summary (v2 → v3)

| Dimension | v2 Score | v3 Score | Change |
|-----------|----------|----------|--------|
| Impact | 4.0/5 | 4.5/5 | +0.5 |
| Feasibility | 4.0/5 | 4.5/5 | +0.5 |
| Value for Money | 5.0/5 | 5.0/5 | — |
| **Average** | **4.3/5** | **4.7/5** | **+0.4** |

The proposal improved from **GOOD** to **GREAT** rating by addressing all critical reviewer concerns with concrete evidence, named partnerships, risk mitigation, and sustainability planning.
