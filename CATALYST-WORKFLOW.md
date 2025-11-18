# Project Catalyst Proposal Workflow

Quick reference for using Catalyst slash commands in this repository.

## 🚀 Quick Start Commands

### 1️⃣ Ideate (Brainstorm + Research)
```bash
/catalyst:ideate [your idea or question]
```
Refine ideas + validate with research in one step. Outputs ideation summary + research reports.

**What happens:**
- Critical questioning to refine idea
- Parallel researcher agents validate feasibility
- Competitive analysis + ecosystem gap analysis
- Technical feasibility assessment
- Evidence-based recommendations

**Example:**
```bash
/catalyst:ideate CIP-68 reference implementation for better NFT metadata
```

---

### 2️⃣ Write Complete Proposal
```bash
/catalyst:write [proposal name or detailed instructions]
```
Draft Fund15-optimized proposal with all required sections.

**Example:**
```bash
/catalyst:write CIP-68 Reference Library Proposal
```

---

### 3️⃣ Review & Score
```bash
/catalyst:review [path to proposal file]
```
Get expert review with Impact/Feasibility/VfM scoring.

**Example:**
```bash
/catalyst:review ./proposals/251118-cip68/proposal-final.md
```

---

## 📊 Scoring Breakdown

| Criterion | Points | Focus |
|-----------|--------|-------|
| **Impact** | 35 | Ecosystem benefit, measurable KPIs |
| **Feasibility** | 35 | Team track record, realistic timeline |
| **Value for Money** | 30 | Budget justification, ROI |
| **Total** | **100** | — |

---

## 📁 Output Structure

```
proposals/
├── 251118-cip68-library/
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
│   └── submission-checklist.md
└── reviews/
    └── 251118-cip68-review.md
```

---

## 🎯 Recommended Workflow

```
Ideate (Brainstorm+Research) → Write → Review → Iterate → Submit
         (4-6h)                 (6h)     (1h)     (2-4h)    ✓
```

### Iteration Loop:
```
Write draft → Review → Fix issues → Review again → Repeat until score >80
```

---

## 📚 Required Reading

Before using commands, review:
- `./fund15-docs/f15launchguide.md` - Fund15 overview
- `./fund15-docs/proposal-submit-form.md` - Submission requirements
- `./fund15-docs/reviewer-form.md` - How reviewers score

---

## 💡 Pro Tips

1. **Start with ideate** - Combines brainstorm + research, saves time
2. **Let researchers validate** - Evidence beats opinions
3. **Character limits matter** - Practice extreme concision
4. **Show, don't tell** - Links to GitHub, demos, prototypes
5. **Budget realistically** - Compare to similar funded proposals
6. **Review early & often** - Get feedback before you're "done"

---

## ⚠️ Common Mistakes to Avoid

❌ Vague impact claims ("will help many users")
✅ Specific metrics ("500+ NFT projects, 10K+ users in 6mo")

❌ No team credentials shown
✅ LinkedIn, GitHub, past project links

❌ Unrealistic timelines
✅ Padded timelines with risk buffers

❌ Budget without justification
✅ Itemized with market rate comparisons

❌ Generic solution description
✅ Technical architecture details

---

## 🔗 External Resources

- [Project Catalyst](https://projectcatalyst.io)
- [Catalyst Docs](https://docs.projectcatalyst.io)
- [Fund15 Categories](https://projectcatalyst.io/funds/15)
- [IdeaScale](https://cardano.ideascale.com)

---

**Command Help:** See `.claude/commands/catalyst/README.md` for detailed docs

**Questions?** Each command has built-in guidance and research capabilities.
