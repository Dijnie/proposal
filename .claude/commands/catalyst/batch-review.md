---
description: ⚡⚡⚡ Batch fetch and review proposals from Catalyst API
argument-hint: [start_id] [end_id]
---

You are a Catalyst Proposal Batch Reviewer that fetches proposals from the Catalyst API and reviews them sequentially.

## Your Mission
<task>Batch fetch and review proposals from ID $ARGUMENTS</task>

## Workflow

For each proposal ID in the range:

### Step 1: Fetch Proposal JSON
```bash
curl -s "https://reviews.projectcatalyst.io/api/reviews/proposals/<ID>/" -o ./proposals/<ID>.json
```

### Step 2: Validate JSON
- Check if file was created successfully
- Check if JSON is valid
- If invalid or empty, skip this proposal and log the error

### Step 3: Review Proposal
After fetching, review the proposal using the same framework as `/catalyst:review`:

**Scoring Criteria (1-5 Stars each):**
1. **Impact** - Ecosystem benefit, problem significance, measurable outcomes
2. **Feasibility** - Team capability, timeline realism, risk mitigation
3. **Value for Money** - Budget justification, cost efficiency, milestone clarity

### Step 4: Save Review
Save review to `./proposals/reviews/<ID>.md` with the following format:

```markdown
# Catalyst Proposal Review - <ID>

**Proposal**: [Title]
**Category**: [Category]
**Requested Amount**: [ADA amount]
**Review Date**: [Date]

## Scoring Summary (1-5 Stars)

| Dimension | Stars | Rating |
|-----------|-------|--------|
| Impact | ⭐⭐⭐⭐☆ (X/5) | [LOW/MEDIUM/HIGH] |
| Feasibility | ⭐⭐⭐⭐☆ (X/5) | [LOW/MEDIUM/HIGH] |
| Value for Money | ⭐⭐⭐⭐☆ (X/5) | [LOW/MEDIUM/HIGH] |
| **Average** | **X/5** | **[Overall Rating]** |

## Impact Review (X/5 Stars)
**Rating**: [VERY POOR / POOR / ACCEPTABLE / GOOD / GREAT]
**Strengths:** [Bullet points]
**Weaknesses:** [Bullet points]

## Feasibility Review (X/5 Stars)
**Rating**: [VERY POOR / POOR / ACCEPTABLE / GOOD / GREAT]
**Strengths:** [Bullet points]
**Weaknesses:** [Bullet points]

## Value for Money Review (X/5 Stars)
**Rating**: [VERY POOR / POOR / ACCEPTABLE / GOOD / GREAT]
**Strengths:** [Bullet points]
**Weaknesses:** [Bullet points]

## Overall Assessment
[2-3 paragraph summary]
```

## Execution Instructions

1. Parse the start and end IDs from arguments (format: "start end" e.g., "1670 1690")
2. Create progress tracking todo list
3. For each ID in range:
   - Fetch proposal JSON using curl
   - Read and validate JSON
   - Perform comprehensive review
   - Save review to markdown file
   - Update progress
4. Generate summary report at the end

## Progress Tracking

Use TodoWrite to track:
- [ ] Fetching proposal {ID}
- [ ] Reviewing proposal {ID}
- [ ] Saving review for {ID}

## Error Handling

- If API returns error, log and continue to next ID
- If JSON is invalid, log and continue
- If proposal doesn't exist, log and continue

**IMPORTANT:** Process all proposals sequentially
**IMPORTANT:** Save each review immediately after completion
**IMPORTANT:** Report summary at the end with success/failure counts
