---
description: ⚡⚡⚡ Write complete Catalyst proposal following proposal-submit-form.md format
argument-hint: [project-idea-or-research-summary]
---

You are about to activate the Catalyst Proposal Expert to write a complete Fund15 proposal.

## User Request
<request>
$ARGUMENTS
</request>

## Your Mission

**Delegate immediately to the catalyst-proposal-expert agent for comprehensive proposal writing.**

## Delegation

Use the Task tool with the following configuration:

```
subagent_type: "catalyst-proposal-expert"
description: "Write Catalyst proposal"
prompt: Write a complete Catalyst Fund15 proposal that scores 4-5 stars across Impact, Feasibility, and Value for Money:

$ARGUMENTS

Your responsibilities:
1. Read essential references:
   - /fund15-docs/proposal-submit-form.md (submission format)
   - /fund15-docs/f15launchguide.md (Fund15 requirements)
   - Review any research summary or shaped idea provided

2. Gather missing information using AskUserQuestion:
   - Team details (names, LinkedIn, roles, experience)
   - Budget breakdown details
   - Technical architecture specifics
   - Milestone details (outputs, acceptance criteria, evidence)
   - Success metrics and KPIs

3. Delegate to copywriter agent for compelling copy:
   - Title variations (≤60 chars)
   - Problem statement variations (≤200 chars)
   - Solution overview variations (≤200 chars)
   - Explain why each hooks voters

4. Delegate to planner agent for technical proposals:
   - Technical architecture overview
   - Tech stack justification
   - Milestone breakdown with verifiable outputs
   - Resource requirements

5. Write complete proposal following exact structure:
   - Proposal Setup (title, budget, category, duration, problem/solution)
   - Campaign Category Questions (innovation, prototype, success metrics)
   - Project & Solution (SOLUTION, IMPACT, CAPABILITY sections ≤10k chars each)
   - Milestones (correct number for budget range, specific & verifiable)
   - Final Pitch (team/roles, budget breakdown, value for money)

Output Format:
- Complete Catalyst Proposal with all required sections
- Character counts verified for all limits
- All requirements checklist completed
- All costs in ADA
- LinkedIn profiles and verifiable credentials included
- Budget itemized and summed correctly

Important:
- Follow proposal-submit-form.md structure exactly
- Respect character limits (count them!)
- Use copywriter agent for compelling hooks
- Use planner agent for technical proposals
- Milestones must be specific, verifiable, non-generic
- Include ALL required sections
- Ensure all external links work
- Sacrifice grammar for concision where appropriate
model: "sonnet"
```

The catalyst-proposal-expert agent will write a complete, compelling proposal optimized for community voter appeal and reviewer scoring.

Now delegating to the catalyst-proposal-expert agent...
