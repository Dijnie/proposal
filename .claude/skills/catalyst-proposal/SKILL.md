---
name: catalyst-proposal
description: Research, write, and optimize Project Catalyst proposals for Cardano Fund15 funding. Use when writing Catalyst proposals, researching Cardano ecosystem gaps, analyzing proposal scoring criteria, validating idea feasibility, creating milestones/budgets, or reviewing proposals for Impact/Feasibility/Value for Money optimization. Activates for tasks involving decentralized funding, Catalyst categories (Partners/Use Cases/Open), or proposal scoring.
---

# Catalyst Proposal Skill

Research and write high-scoring Project Catalyst proposals for Cardano Fund15.

## Quick Start

| Task | Command/Agent |
|------|---------------|
| Brainstorm + Research | `/catalyst:ideate [idea]` |
| Write Proposal | `/catalyst:write [name]` |
| Review & Score | `/catalyst:review [path]` |
| Complex Full Proposal | `Task(catalyst-proposal-expert)` agent |

## Workflow Decision Tree

```
User has idea → /catalyst:ideate [idea]
              → Creates: proposals/YYMMDD-name/ideation-summary.md + research/
              ↓
Research done → /catalyst:write [name]
              → Creates: proposal-draft-v1.md → proposal-final.md
              ↓
Draft ready → /catalyst:review [proposal-path]
            → Creates: proposals/reviews/YYMMDD-name-review.md
            ↓
Score <80 → Iterate (write → review) until ready
         ↓
Submit via Catalyst App
```

## Fund15 Quick Reference

| Category | Budget Range | Focus |
|----------|-------------|-------|
| Cardano Partners | 250k-750k ADA | Tier-1 enterprise R&D pilots |
| Cardano Use Cases | 15k-200k ADA | On-chain prototypes/MVPs |
| Cardano Open | 15k-60k ADA | Non-technical ecosystem growth |

**Key Requirements:**
- Max 2 proposals per participant
- Verifiable LinkedIn/portfolio for all team members
- Problem/Solution summaries: 200 chars max
- Detailed sections: 10,000 chars max
- Timeline: 2-12 months

## Scoring Optimization

See: `references/scoring-criteria.md`

| Criterion | Weight | Key Focus |
|-----------|--------|-----------|
| Impact | ~35% | Ecosystem benefit, measurable KPIs |
| Feasibility | ~35% | Team capability, realistic timeline |
| Value for Money | ~30% | Justified budget, ROI evidence |

## Resources

### references/
- `fund15-guidelines.md` - Category details, requirements, character limits
- `proposal-structure.md` - Section-by-section proposal template
- `scoring-criteria.md` - Detailed scoring rubrics for reviewers
- `workflow.md` - Complete ideation → writing → review workflow
- `milestones.md` - Milestone structuring and budget allocation

### Fund15 Documentation
- Launch Guide: `fund15-docs/f15launchguide.md`
- Submission Form: `fund15-docs/proposal-submit-form.md`
- Reviewer Rubric: `fund15-docs/reviewer-form.md`

## Output Directory Structure

```
proposals/YYMMDD-proposal-name/
├── ideation-summary.md
├── research/
│   ├── competitive-analysis.md
│   ├── ecosystem-gap-analysis.md
│   └── research-summary.md
├── proposal-draft-v1.md
├── proposal-final.md
├── supporting-materials/
└── submission-checklist.md
```
