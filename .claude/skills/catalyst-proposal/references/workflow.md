# Catalyst Proposal Workflow

## Phase 1: Ideation & Research (30%)

### Step 1: Understand the Idea
Use `/catalyst:ideate [idea]` or ask:
- What problem solving? For whom?
- Proposed solution? What makes it unique?
- Target Fund15 category?
- Budget range?
- Timeline (2-12 months)?

### Step 2: Market Research
Deploy `researcher` subagent:
- Find 3-5 similar projects in web3/Cardano
- Analyze funded proposals from Fund11-14
- Identify ecosystem priorities
- Assess technical feasibility benchmarks
- Competitive landscape summary

### Step 3: Gap Analysis
For vague ideas → use `brainstormer` subagent:
- Refine concept into concrete solution
- Identify unique differentiation
- Explore innovative approaches
- Recommend strongest path

For clear ideas:
- Identify differentiators
- Spot weaknesses
- Determine research needed

## Phase 2: Requirements (20%)

### Step 4: Detailed Gathering
For technical proposals → use `planner` subagent:
- Architecture, dependencies, tech stack
- MVP scope breakdown
- Verifiable acceptance criteria
- Technical risks and mitigation
- Resource estimates

For all proposals → use AskUserQuestion:
- Team: Names, roles, LinkedIn, experience
- Budget: Detailed breakdown
- Impact: Measurable metrics
- Risks: Market, team, regulatory

### Step 5: Validation
- Cross-reference with Fund15 requirements
- Verify self-assessment checklist compliance
- Confirm 2-proposal limit compliance
- Check verifiable references exist

## Phase 3: Writing (40%)

### Step 6: Draft Creation
Use `/catalyst:write [proposal-name]`

Deploy `copywriter` subagent for:
- Title (≤60 chars, attention-grabbing)
- Problem Statement (≤200 chars, urgent pain)
- Solution Overview (≤200 chars, clear benefit)

Write each section per `references/proposal-structure.md`

### Step 7: Scoring Optimization
Optimize per `references/scoring-criteria.md`:
- Impact: Ecosystem benefit, measurable KPIs
- Feasibility: Team evidence, realistic timeline
- Value for Money: Justified budget, competitive rates

## Phase 4: Review (10%)

### Step 8: Quality Checks
Use `/catalyst:review [proposal-path]`

Verify:
- Character limits respected
- All required fields completed
- No contradictions between sections
- Clear, concise, jargon-free language
- All links tested and working
- Milestones sum to total budget
- Self-assessment checklist passed

### Step 9: Iteration
If score < 80:
1. Address critical issues
2. Rewrite weak sections
3. Review again
4. Repeat until ready

## Subagent Strategy

**Parallel** (independent): researcher + copywriter + planner
**Sequential** (dependent): brainstormer → researcher → planner → copywriter

**Output**: `proposals/YYMMDD-name/` with ideation-summary, research/, drafts, checklist
