# Catalyst Proposal Review

**Proposal**: Proteus: Dynamic NFT Platform for Cardano
**Category**: Cardano Use Cases: Prototype & Launch
**Requested Amount**: 150,000 ADA (~$63,000 USD)
**Review Date**: 2025-11-26
**Reviewer**: Claude (Simulated Community Reviewer)

---

## Scoring Summary

| Dimension | Score | Max | Stars |
|-----------|-------|-----|-------|
| Impact | 30 | 35 | ⭐⭐⭐⭐ (4/5) |
| Feasibility | 32 | 35 | ⭐⭐⭐⭐⭐ (4.5/5) |
| Value for Money | 26 | 30 | ⭐⭐⭐⭐ (4/5) |
| **Total** | **88** | **100** | **HIGH** |

**Verdict**: FUNDABLE - Strong proposal with minor improvements needed

---

## Impact Review (30/35) ⭐⭐⭐⭐

### Strengths

1. **Clear ecosystem gap identified**: CIP-68 exists but no user-friendly tooling - well-researched problem statement with data (47.9% NFT ecosystem share).

2. **Measurable on-chain metrics**: All KPIs verifiable via blockchain:
   - 50+ collections
   - 5,000+ NFTs minted
   - 1,000+ metadata updates
   - 30+ registered developers

3. **Broad beneficiary range**: Serves creators (no-code), developers (API), businesses (templates) - not just one narrow audience.

4. **Open-source commitment**: MIT license ensures community benefit beyond project team.

5. **Competitive analysis provided**: Clear differentiation from NMKR, jpg.store, and cross-chain comparison to Metaplex.

### Weaknesses

1. **User adoption projections lack validation**: 50+ collections by Month 10 is stated but no evidence of demand (waitlist, LOIs, community interest surveys).

2. **"First CIP-68 management platform" claim unverified**: No citation that competitors definitively lack this. NMKR claims CIP-68 support since 2024.

3. **Impact metrics are activity-based, not outcome-based**: Counting NFTs minted is easier than measuring actual value created (revenue, users retained, games launched).

4. **Vietnamese market focus unclear**: Team is Vietnam-based (Cardano2VN) - is this primarily serving Vietnamese community or global? Not clarified.

### Improvement Recommendations

1. **Add demand validation**: Include testimonials, LOIs, or survey data from potential users who want this tool.

2. **Clarify competitive differentiation vs NMKR CIP-68**: Be specific about what NMKR can't do that Proteus will do.

3. **Add outcome metrics**: e.g., "X games launched using Proteus", "Y USD value of loyalty programs", "Z% reduction in development time vs custom builds".

4. **Clarify target market**: Global or Vietnam-focused? Both are valid but should be stated.

---

## Feasibility Review (32/35) ⭐⭐⭐⭐⭐

### Strengths

1. **Exceptional team credentials**:
   - 2 Plutus Pioneer Program graduates (Tien, Hieu)
   - 2 Stake Pool Operators (VILAI, HADA)
   - Cardano Ambassador (Tien)
   - Previously funded Catalyst proposer (Tien)
   - FPT Software enterprise experience (Quan)
   - 5 members covering all required skills

2. **Working prototype exists**: http://cip68.cardano2vn.io/ with GitHub repo is strong de-risking evidence.

3. **Realistic timeline**: 10 months with buffer. Milestones are well-spaced (M3, M5, M7, M9, M10).

4. **Technical stack is proven**: Aiken, Blockfrost, React, PostgreSQL - no exotic dependencies.

5. **Risk mitigation addressed**: Smart contract audit, beta program, modular development all mentioned.

6. **Fund management plan**: Multi-sig wallet, public expense tracking, milestone-based release.

### Weaknesses

1. **LinkedIn profiles not linked directly**: Fund15 requires verifiable LinkedIn for all team members. Only Le Anh Quan has LinkedIn listed.

2. **Two Project Managers listed**: Both Tien and Dung have "Project Manager" role - potential confusion on decision authority.

3. **Time commitment percentages not specified**: How much time is each member dedicating? Are they working on other projects?

4. **Audit firm not specified**: "$5,000-7,000" for audit is low - reputable Cardano auditors (Anastasia, MLabs, Certik) typically charge more. May need to clarify scope.

5. **Beta partner list not provided**: "10+ partners" claimed but no names or LOIs shown.

### Improvement Recommendations

1. **Add LinkedIn URLs for all 5 team members** - this is a Fund15 requirement that could cause rejection.

2. **Clarify PM roles**: Designate one primary PM or explain how dual-PM structure works.

3. **Add time commitment**: e.g., "Tien: 60%, Dung: 80%, Hieu: 50%..."

4. **Name audit firms being considered**: Shows due diligence on security.

5. **List 3-5 beta partners by name**: Even "in discussions with X, Y, Z" is better than generic "10+ partners".

---

## Value for Money Review (26/30) ⭐⭐⭐⭐

### Strengths

1. **Budget is itemized and justified**:
   - Clear breakdown by category (Smart Contracts 27%, Backend 23%, Frontend 20%, etc.)
   - USD conversion provided ($63,000 total)
   - Competitive hourly rates cited ($40-60/hr)

2. **Milestone payments align with deliverables**:
   - M1: 40k (contracts) ✓
   - M2: 35k (API) ✓
   - M3: 40k (dashboard+SDK) ✓
   - M4: 25k (mainnet+audit) ✓
   - M5: 10k (close-out) ✓
   - Total: 150k ✓

3. **Open-source multiplier argument**: Valid point that community can reuse/extend code.

4. **Comparison to alternatives**: Notes custom development would cost $100k+ USD.

5. **No salary inflation**: 2-3 FTE over 10 months at $63k is reasonable (~$2,100-3,150/month per FTE).

### Weaknesses

1. **Audit budget may be underestimated**: $6,300 (15k ADA) allocated but professional Cardano audits often $15-30k USD. Either scope is limited or budget is optimistic.

2. **Infrastructure costs seem low**: $400/month ($4,000 total) for 10 months of servers + Blockfrost + monitoring for a production platform is tight.

3. **No marketing/community engagement budget**: For a platform needing adoption, $0 allocated to community building, content, or outreach.

4. **Documentation budget small**: $2,520 (6k ADA) for "full documentation portal" including API docs, user guides, tutorials is minimal.

5. **No contingency buffer**: 100% of budget allocated. What if audit costs more? What if timeline extends?

### Improvement Recommendations

1. **Clarify audit scope**: Is it a full audit or limited review? Name potential auditors.

2. **Consider reallocating**: Reduce one area by 5-10k ADA to add contingency or marketing budget.

3. **Add community/marketing line item**: Even 5k ADA for content creation, Discord/Telegram management.

4. **Justify infrastructure costs**: Explain why $400/month is sufficient for production.

---

## Critical Issues

Must fix before submission:

- [ ] **Add LinkedIn URLs for ALL team members** - Fund15 requirement
- [ ] **Problem Statement is 196 chars, limit is 200** - OK but verify exact count in submission form
- [ ] **Solution Overview is 198 chars, limit is 200** - OK but verify exact count

Should fix for stronger score:

- [ ] Clarify dual Project Manager structure
- [ ] Add demand validation (waitlist, LOIs, testimonials)
- [ ] Name at least 3 beta partners
- [ ] Justify or increase audit budget
- [ ] Add time commitment percentages per team member

---

## Overall Assessment

### Would I Fund This?

**YES** - This is a well-structured proposal addressing a genuine gap in Cardano's NFT infrastructure. The team has exceptional credentials (Plutus Pioneers, SPO operators, Catalyst track record), a working prototype, and a realistic plan.

### Why This Scores Well

The proposal succeeds because it:
1. Solves a real problem (CIP-68 tooling gap) with clear evidence
2. Has a proven team with verifiable credentials
3. Shows existing work (testnet deployment, open-source code)
4. Provides measurable, on-chain verifiable metrics
5. Offers comprehensive deliverables (contracts + API + dashboard + SDK)

### Single Biggest Improvement Needed

**Add LinkedIn profiles for all team members and include 2-3 named beta partners.** These are low-effort additions that significantly increase credibility. Fund15 explicitly requires verifiable team credentials - missing LinkedIn links could trigger rejection during moderation.

### Risk Factors for Reviewers

1. **Audit budget concern**: May need to reduce audit scope or find additional funding
2. **Adoption uncertainty**: Strong build, but will anyone use it? Beta partners would help
3. **Competition response**: If NMKR adds similar features, what's Proteus's moat?

---

## Recommended Actions (Priority Order)

1. **[CRITICAL] Add LinkedIn URLs for all 5 team members**
2. **[HIGH] Name 3-5 beta partners or provide LOIs**
3. **[HIGH] Clarify audit scope and budget**
4. **[MEDIUM] Add outcome-based metrics beyond activity counts**
5. **[MEDIUM] Add 5-10k ADA contingency or marketing budget**
6. **[LOW] Clarify PM structure and time commitments**
7. **[LOW] Add demand validation (waitlist numbers, survey results)**

---

## Score Breakdown Calculation

**Impact (30/35)**
- Problem definition: 7/7 (clear, data-backed)
- Solution fit: 6/7 (good but claims need verification)
- Metrics quality: 6/7 (on-chain verifiable but activity-focused)
- Ecosystem benefit: 6/7 (broad but adoption unvalidated)
- Community engagement plan: 5/7 (open-source yes, but no marketing)

**Feasibility (32/35)**
- Team credentials: 7/7 (exceptional)
- Technical approach: 7/7 (proven stack, prototype exists)
- Timeline realism: 6/7 (good spacing, minor concerns)
- Risk mitigation: 6/7 (addressed but audit budget low)
- Fund management: 6/7 (good plan, multi-sig mentioned)

**Value for Money (26/30)**
- Budget itemization: 6/6 (detailed breakdown)
- Rate justification: 5/6 (competitive but infrastructure tight)
- Milestone alignment: 6/6 (matches deliverables)
- ROI argument: 5/6 (open-source multiplier valid)
- Sustainability: 4/6 (weak post-funding plan)

**Total: 88/100** - Strong proposal, recommended for funding with noted improvements.
