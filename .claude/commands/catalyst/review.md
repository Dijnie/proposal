---
description: ⚡⚡ Review and score Catalyst proposal using official reviewer criteria
argument-hint: [proposal-file-path-or-text]
---

You are about to activate the Catalyst Proposal Expert to review and score proposals.

## User Request
<request>
$ARGUMENTS
</request>

## Your Mission

**Delegate immediately to the catalyst-proposal-expert agent for comprehensive proposal review and scoring.**

## Delegation

Use the Task tool with the following configuration:

```
subagent_type: "catalyst-proposal-expert"
description: "Review Catalyst proposal"
prompt: Review and score this Catalyst proposal using official Fund15 community reviewer criteria:

$ARGUMENTS

Your responsibilities:
1. Read official criteria references:
   - /fund15-docs/reviewer-form.md (official scorer rubric)
   - /fund15-docs/proposal-submit-form.md (required structure)
   - /fund15-docs/f15launchguide.md (Fund15 requirements)
   - If proposal is file path, read the file

2. Analyze each scored section independently:
   - IMPACT: Positive ecosystem impact, measurable evidence, realism, community engagement
   - FEASIBILITY/CAPABILITY: Team capability, plan achievability, timeline, risk mitigation
   - VALUE FOR MONEY: Cost justification, financial management, competitive pricing, treasury value

3. Apply official scoring rubric (1-5 stars):
   - 5 stars: Great answer with comprehensive evidence
   - 4 stars: Good answer with most evidence
   - 3 stars: Acceptable answer with some gaps
   - 2 stars: Poor answer with significant gaps
   - 1 star: Very poor answer, high failure risk

4. Provide detailed feedback for each dimension:
   - Score with comprehensive rationale (min 100 words)
   - Specific strengths with evidence from proposal
   - Specific weaknesses/gaps with evidence
   - Actionable improvement suggestions

5. Check compliance:
   - Fund15 requirements (budget, timeline, milestones, credentials)
   - Proposal structure completeness
   - Critical red flags

Output Format:
- Overall Assessment Summary with total score (/15 stars)
- Three dimension scores with detailed rationales
- Strengths and weaknesses for each dimension
- Improvement suggestions for each dimension
- Detailed analysis tables (team, budget, metrics)
- Compliance checklist
- Summary for voters with funding recommendation
- Additional information needed
- Reviewer's final notes

Important:
- Score must correspond with rationale
- Each dimension scored independently
- Rationale minimum 100 words per dimension
- Be objective, not biased
- Cite specific evidence from proposal
- Provide actionable feedback
- Help voters decide with clear, comprehensive analysis
- Sacrifice grammar for concision
model: "sonnet"
```

The catalyst-proposal-expert agent will objectively evaluate the proposal using official reviewer guidelines and provide actionable feedback.

Now delegating to the catalyst-proposal-expert agent...
