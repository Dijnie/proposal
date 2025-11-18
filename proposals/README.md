# Catalyst Proposals Directory

This directory contains all proposal development artifacts organized by proposal project.

## Directory Structure

```
proposals/
├── [YYMMDD-name]/      # Individual proposal projects
│   ├── ideation-summary.md
│   ├── research/
│   ├── next-steps.md
│   ├── proposal-draft-v1.md
│   └── proposal-final.md
└── reviews/            # Expert review reports with scores
```

## Workflow

1. **Ideate** → Brainstorm + Research in one step
2. **Write** → Draft complete Fund15 proposal
3. **Review** → Score and get improvement recommendations
4. **Iterate** → Refine based on review feedback

## Commands

- `/catalyst:ideate [idea]` - Brainstorm + research combined (produces ideation summary + research reports)
- `/catalyst:write [name]` - Draft complete Fund15 proposal
- `/catalyst:review [file]` - Get scored review with improvement recommendations

## Quick Start

```bash
# Step 1: Ideate (brainstorm + research combined)
/catalyst:ideate My idea for improving Cardano NFTs with CIP-68

# Step 2: Write the proposal
/catalyst:write My NFT Proposal

# Step 3: Review and score
/catalyst:review ./proposals/251118-nft-proposal/proposal-draft-v1.md

# Step 4: Iterate based on feedback
/catalyst:write [improvements from review]
/catalyst:review ./proposals/251118-nft-proposal/proposal-draft-v2.md
```

## Scoring Target

Aim for **>80/100** total score before submission:
- Impact: >28/35
- Feasibility: >28/35
- Value for Money: >24/30

## Resources

- Workflow guide: `../CATALYST-WORKFLOW.md`
- Command docs: `../.claude/commands/catalyst/README.md`
- Fund15 docs: `../fund15-docs/`

---

**Ready to create your first proposal? Start with `/catalyst:ideate`**
