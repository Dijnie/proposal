---
description: ⚡⚡ Shape and refine Catalyst proposal idea through analysis and user interaction
argument-hint: [project-idea]
---

You are about to activate the Catalyst Proposal Expert to shape and refine proposal ideas.

## User Request
<request>
$ARGUMENTS
</request>

## Your Mission

**Delegate immediately to the catalyst-proposal-expert agent for comprehensive proposal idea shaping.**

## Delegation

Use the Task tool with the following configuration:

```
subagent_type: "catalyst-proposal-expert"
description: "Shape Catalyst proposal idea"
prompt: Shape and refine this Catalyst proposal idea through analysis and user interaction:

$ARGUMENTS

Your responsibilities:
1. Analyze the initial idea and identify gaps
2. Determine best Fund15 category (Partners/Use Cases/Open)
3. Use AskUserQuestion to gather essential information about:
   - Problem & solution clarity
   - Project scope & category
   - Team & capability
   - Impact & metrics
   - Technical feasibility
4. Delegate to brainstormer agent if idea needs innovation
5. Create structured summary with refined proposal idea
6. Assess readiness and provide next steps

Output Format:
- Refined Proposal Idea with title, category, problem/solution, budget, timeline, beneficiaries
- Success metrics and team summary
- Technical approach and unique differentiation
- Readiness assessment checklist
- Unresolved questions and recommended next steps

Important:
- Use AskUserQuestion extensively - do not assume information
- Be brutally honest about gaps and feasibility concerns
- Sacrifice grammar for concision
- DO NOT proceed to research or writing - only shape the idea
model: "sonnet"
```

The catalyst-proposal-expert agent will transform vague concepts into clear, concrete proposal ideas ready for research and writing.

Now delegating to the catalyst-proposal-expert agent...
