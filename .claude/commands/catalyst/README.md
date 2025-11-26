# Catalyst Proposal Workflow Commands

This directory contains specialized slash commands for creating Project Catalyst proposals following the Fund15 submission process.

## Available Commands

### `/catalyst:ideate [idea-or-question]` ⚡⚡⚡
**Purpose**: Brainstorm AND research - refine ideas with evidence-based validation
**Output**: Complete ideation package in `./proposals/YYMMDD-proposal-name/`

**Use when:**
- You have a rough idea for Cardano ecosystem
- Need to validate idea feasibility with research
- Want category alignment + competitive analysis
- Require evidence-based feasibility assessment
- Need to build foundation before writing proposal

**What it does:**
1. Brainstorms idea through critical questioning
2. Deploys researcher agents for validation
3. Analyzes ecosystem gaps and competition
4. Validates technical feasibility
5. Produces ideation summary + research reports

**Example:**
```bash
/catalyst:ideate CIP-68 metadata standard implementation for NFT projects
```

---

### `/catalyst:write [proposal-name-or-instructions]` ⚡⚡⚡⚡
**Purpose**: Write complete Fund15 proposal optimized for scoring
**Output**: Full proposal in `./proposals/YYMMDD-proposal-name/`

**Use when:**
- Ready to draft complete proposal
- Have completed brainstorm and research
- Need proposal optimized for Impact/Feasibility/VfM
- Creating milestone and budget sections
- Preparing for submission

**Example:**
```bash
/catalyst:write CIP-68 Reference Implementation Library
```

---

### `/catalyst:review [proposal-file-path]` ⚡⚡⚡
**Purpose**: Expert review simulation with scoring and feedback
**Output**: Review report in `./proposals/reviews/`

**Use when:**
- Proposal draft is complete
- Need objective scoring assessment
- Want to identify weaknesses before submission
- Require specific improvement recommendations
- Preparing for community reviewer scrutiny

**Example:**
```bash
/catalyst:review ./proposals/251118-cip68-library/proposal-final.md
```

---

## Workflow Sequence

```
1. Ideate → Brainstorm + Research (combined)
         ↓
2. Write → Draft complete proposal
         ↓
3. Review → Score and improve
         ↓
4. Iterate (Write → Review) until ready
         ↓
5. Submit to Project Catalyst
```

## Directory Structure

```
proposals/
├── YYMMDD-proposal-name/
│   ├── ideation-summary.md
│   ├── research/
│   │   ├── competitive-analysis.md
│   │   ├── ecosystem-gap-analysis.md
│   │   ├── technical-feasibility.md
│   │   ├── impact-metrics-research.md
│   │   └── research-summary.md
│   ├── next-steps.md
│   ├── proposal-draft-v1.md
│   ├── proposal-final.md
│   ├── supporting-materials/
│   └── submission-checklist.md
└── reviews/
    └── YYMMDD-proposal-name-review.md
```

## Key References

- Fund15 Launch Guide: `./fund15-docs/f15launchguide.md`
- Submission Form: `./fund15-docs/proposal-submit-form.md`
- Reviewer Rubric: `./fund15-docs/reviewer-form.md`

## Scoring Optimization

Each command optimizes for Fund15 scoring criteria (1-5 Stars per criterion):
- **Impact** (4-5 Stars = HIGH): Ecosystem benefit, measurable evidence, realistic outcomes
- **Feasibility** (4-5 Stars = HIGH): Team experience/capacity/skills, clear plan, risks addressed
- **Value for Money** (4-5 Stars = HIGH): Budget justified, fund management capability, specific milestones

## Tips for Success

1. **Start with ideate** - Combines brainstorm + research in one step
2. **Let research validate** - Evidence-based proposals score higher
3. **Be specific** - Vague claims lose points
4. **Prove capability** - Show track record and prior work
5. **Review ruthlessly** - Use review command multiple times
6. **Iterate** - First drafts rarely score well

---

**Created for Fund15 | Optimized for Impact, Feasibility, Value for Money**