# Next Steps: Proteus Catalyst Proposal
Date: 2025-11-26

## Readiness Status: READY WITH PREPARATION

Ideation and research complete. Proposal writing can begin after addressing preparation items below.

---

## Before Writing Proposal

### 1. Team Documentation (Required by Fund15)
- [ ] Gather LinkedIn profiles for all team members
- [ ] Compile portfolio/GitHub links demonstrating Cardano experience
- [ ] Identify specific roles and responsibilities
- [ ] Verify all members are compliant with prior Catalyst projects (if any)

### 2. Prototype Evidence
- [ ] Prepare testnet deployment or video walkthrough
- [ ] Screenshots of current functionality
- [ ] GitHub repository (if public) or private demo access plan

### 3. Sustainability Plan
- [ ] Define post-funding revenue model
  - API subscription tiers?
  - Transaction fees?
  - Enterprise licensing?
- [ ] Outline long-term maintenance strategy

### 4. Scope Confirmation
- [ ] Confirm 150,000 ADA budget target
- [ ] Prioritize features for MVP vs future phases
- [ ] Accept scope constraints within budget

---

## Proposal Writing Checklist

Use `/catalyst:write proteus` command after completing above items.

### Required Sections
- [ ] Title (≤60 chars): "Proteus: Dynamic NFT Platform for Cardano"
- [ ] Problem Statement (≤200 chars)
- [ ] Solution Overview (≤200 chars)
- [ ] Detailed Solution (≤10,000 chars)
- [ ] Impact Description (≤10,000 chars)
- [ ] Capability & Feasibility (≤10,000 chars)
- [ ] Milestones (5 total for 150k budget)
- [ ] Team & Resources
- [ ] Budget Breakdown (USD → ADA)
- [ ] Value for Money justification

### Campaign-Specific Questions
- [ ] Innovation compared to market
- [ ] Prototype/MVP description and access
- [ ] Realistic success metrics with on-chain data

---

## Suggested Milestones Structure

For 150,000 ADA budget (requires 5 milestones including close-out):

| # | Title | Deliverables | Month | ADA |
|---|-------|--------------|-------|-----|
| 1 | Smart Contracts | Aiken contracts, unit tests, testnet deploy | 3 | 35,000 |
| 2 | Core API | REST endpoints, basic docs, staging deploy | 5 | 30,000 |
| 3 | Dashboard MVP | UI for collection mgmt, wallet connect, testnet | 7 | 35,000 |
| 4 | Mainnet Launch | SDK, full docs, mainnet deploy, audit report | 10 | 35,000 |
| 5 | Close-out | Report, video, metrics, lessons learned | 12 | 15,000 |

---

## Questions to Ask User

Before writing proposal, clarify:

1. **Team Details**
   - Who are the core team members?
   - What are their verifiable credentials?

2. **Prototype Status**
   - What exactly does current prototype demonstrate?
   - Is it publicly accessible?

3. **Revenue Model**
   - What's the plan for post-funding sustainability?

4. **Open Source**
   - Will contracts and/or SDK be open-source?
   - Under what license?

5. **Partnerships**
   - Any existing relationships with Cardano projects?
   - Wallet integrations discussed?

---

## To Write Proposal

Run: `/catalyst:write proteus`

This will generate full proposal using:
- `ideation-summary.md`
- `research/*.md` files
- Fund15 guidelines
- Scoring criteria optimization
