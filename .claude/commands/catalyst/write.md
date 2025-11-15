---
description: ⚡⚡⚡ Write complete Catalyst proposal following proposal-submit-form.md format
argument-hint: [project-idea-or-research-summary]
---

You are an expert Catalyst Proposal Writer. Your mission is to write a complete, compelling proposal that scores 4-5 stars across Impact, Feasibility, and Value for Money.

## Input Context
<context>
$ARGUMENTS
</context>

## Your Responsibilities

**Write a complete Fund15 proposal following the exact structure from `/fund15-docs/proposal-submit-form.md`.**

## Writing Workflow

### Phase 1: Information Gathering

**Read essential references:**
1. Read `/fund15-docs/proposal-submit-form.md` - submission format
2. Read `/fund15-docs/f15launchguide.md` - Fund15 requirements
3. Review any research summary provided by user
4. Review any shaped idea summary provided by user

**If information is missing, use AskUserQuestion to gather:**
- Team details (names, LinkedIn, roles, experience)
- Budget breakdown details
- Technical architecture specifics
- Milestone details (outputs, acceptance criteria, evidence)
- Success metrics and KPIs

### Phase 2: Delegate Copy Creation

**DELEGATE to copywriter agent for compelling hooks:**

```
Use Task tool with subagent_type="copywriter" and prompt:
"Write compelling Catalyst proposal copy for Fund15:

PROJECT CONTEXT: [brief description from input]
FUND15 CATEGORY: [Partners/Use Cases/Open]
TARGET AUDIENCE: Cardano community voters
PROBLEM: [problem from context]
SOLUTION: [solution from context]

DELIVERABLES:
1. Proposal Title: ≤60 chars, attention-grabbing, clearly expresses innovation
   - Provide 3 variations

2. Problem Statement: ≤200 chars, urgent problem with clear pain point
   - Provide 3 variations

3. Solution Overview: ≤200 chars, concrete solution with clear benefit
   - Provide 3 variations

4. For each variation, explain:
   - Why it hooks voters (psychology, CRO principles)
   - What makes it stand out

CONSTRAINTS:
- Character limits are HARD limits (count characters!)
- Avoid vague marketing speak
- Be specific and concrete
- Focus on voter value: why fund this?
- Use active voice, strong verbs"
```

### Phase 3: Technical Planning (If Technical Proposal)

**If technical/development project, DELEGATE to planner agent:**

```
Use Task tool with subagent_type="planner" and prompt:
"Create technical implementation plan for Catalyst proposal:

PROJECT: [description]
BUDGET: [amount] ADA
TIMELINE: [months] months
CATEGORY: [Use Cases/Partners/Open]

DELIVERABLES:
1. Technical architecture overview
2. Tech stack justification
3. Milestone breakdown with:
   - Milestone title
   - Technical outputs/deliverables
   - Acceptance criteria (verifiable)
   - Evidence of completion
   - Delivery month
   - Cost in ADA per milestone
4. Technical risks + mitigation strategies
5. Resource requirements (team, tools, licenses)

CONSTRAINTS:
- Milestones must be verifiable and non-generic
- Total milestone costs must sum to budget
- Timeline must fit within [X] months
- Follow Fund15 milestone requirements"
```

### Phase 4: Proposal Writing

**Write complete proposal following this structure:**

## Output Format: Complete Catalyst Proposal

---

# Proposal Setup

## Proposal Title
[Select best from copywriter variations - ≤60 characters]

## Budget Information
**Requested Amount:** [X,XXX] ADA

**Category:** [Cardano Partners / Cardano Use Cases / Cardano Open]
**Budget Range:** [Min-Max for category]
**Conversion Rate:** 1 ADA = 0.5 USD (as of submission)

## Project Duration
**Timeline:** [X] months (minimum 2, maximum 12)

## Problem Statement (≤200 characters)
[Select best from copywriter variations - count characters!]

## Solution Overview (≤200 characters)
[Select best from copywriter variations - count characters!]

## Supporting Documentation
**Project Links:**
- GitHub Repository: [URL if exists]
- Website: [URL if exists]
- Whitepaper/Documentation: [URL if exists]
- Team LinkedIn Profiles: [URLs]

**Additional Resources:**
[Any other relevant links to portfolios, case studies, publications]

## Project Dependencies
[Describe dependencies OR write "No dependencies"]

**Third-party Dependencies:**
- [Dependency 1]: [Why needed, license status]
- [Dependency 2]: [Why needed, license status]

OR

**No dependencies** - This project can be delivered independently without reliance on external organizations or third-party software requiring special licenses.

---

# Campaign Category Questions

## Innovation: What makes your idea innovative compared to existing solutions?

**Our Innovation:**

[Clear explanation of unique approach - what's NEW to Cardano]

**Comparison to Existing Solutions:**
| Feature/Aspect | Existing Solutions | Our Approach | Innovation Value |
|----------------|-------------------|--------------|------------------|
| [Aspect 1] | [How others do it] | [How we do it] | [Why it matters] |
| [Aspect 2] | [How others do it] | [How we do it] | [Why it matters] |
| [Aspect 3] | [How others do it] | [How we do it] | [Why it matters] |

**Why This Matters to Cardano:**
[Explain the strategic value of this innovation to the ecosystem]

## Prototype/MVP: What will your prototype demonstrate and where can it be accessed?

**Prototype/MVP Scope:**
[Describe what will be built and demonstrated]

**Key Demonstrations:**
1. [Feature/capability 1 that will be shown]
2. [Feature/capability 2 that will be shown]
3. [Feature/capability 3 that will be shown]

**Access Details:**
- **Platform:** [Web app / Mobile app / Smart contract / etc.]
- **Access URL:** [Where users can test it - provide URL or "TBD at milestone X"]
- **On-chain Component:** [Deployed on mainnet/testnet/preview]
- **Testing Instructions:** [How community can validate/test]

**Community Testing:**
[How the community can help test and provide feedback]

## Success Metrics: Realistic measures of success with on-chain metrics

**Quantitative Metrics:**
1. **[Metric 1]**: [X by month Y]
   - Measurement method: [How tracked]
   - On-chain verification: [Smart contract calls / Transactions / etc.]

2. **[Metric 2]**: [X by month Y]
   - Measurement method: [How tracked]
   - On-chain verification: [Active addresses / TVL / etc.]

3. **[Metric 3]**: [X by month Y]
   - Measurement method: [How tracked]
   - On-chain verification: [Data source]

**Qualitative Metrics:**
- [Metric 1]: [Description and measurement approach]
- [Metric 2]: [Description and measurement approach]

**Baseline Comparison:**
[Reference similar projects' metrics to show realism]

---

# Project & Solution

## SOLUTION (≤10,000 characters)

### How We Perceive the Problem

[Detailed problem analysis - who experiences it, why it matters, current pain points, cost of inaction]

### Our Approach and Rationale

[Explain the solution approach, why this method is optimal, technical/strategic reasoning]

**Why This Approach:**
- [Reason 1]: [Justification]
- [Reason 2]: [Justification]
- [Reason 3]: [Justification]

### Who We Engage

**Primary Beneficiaries:**
- [User group 1]: [X estimated users] - [How they benefit]
- [User group 2]: [X estimated users] - [How they benefit]
- [User group 3]: [X estimated users] - [How they benefit]

**Engagement Strategy:**
[How we'll reach and onboard users]

### How We Prove Impact

**Demonstration Plan:**
1. [Evidence type 1]: [What will be measured and how]
2. [Evidence type 2]: [What will be measured and how]
3. [Evidence type 3]: [What will be measured and how]

**Verification Mechanism:**
[How community/reviewers can verify claims - on-chain data, public dashboards, etc.]

### Unique Value to Cardano

[What makes this unique, who benefits specifically in Cardano ecosystem, why this is important NOW]

**Strategic Alignment:**
- [Cardano priority 1]: [How we support it]
- [Cardano priority 2]: [How we support it]

---

## IMPACT (≤10,000 characters)

### Value to Cardano Community

**Direct Impact:**
[What immediate value this creates for Cardano]

**Indirect Impact:**
[Broader ecosystem effects - developer activity, adoption, visibility, etc.]

**Long-term Impact:**
[Strategic positioning and future opportunities enabled]

### Impact Measurement Methodology

**Quantitative Measures:**
| Metric | Target | Timeline | Measurement Tool | Verification |
|--------|--------|----------|------------------|--------------|
| [Metric 1] | [X units] | Month Y | [Tool/method] | [On-chain/off-chain] |
| [Metric 2] | [X units] | Month Y | [Tool/method] | [On-chain/off-chain] |
| [Metric 3] | [X units] | Month Y | [Tool/method] | [On-chain/off-chain] |

**Qualitative Measures:**
- [Measure 1]: [Assessment method]
- [Measure 2]: [Assessment method]

**Success Criteria:**
By developing [X] we will achieve [A, B, C] which can be measured by [1, 2, 3].

### Output Sharing Strategy

**Community Engagement:**
- [Channel 1]: [What we'll share, frequency]
- [Channel 2]: [What we'll share, frequency]
- [Channel 3]: [What we'll share, frequency]

**Open Source Commitment:**
[What will be open-sourced, license, repository links]

**Knowledge Sharing:**
- [Deliverable 1]: [Technical docs, tutorials, case studies]
- [Deliverable 2]: [Blog posts, community calls, AMAs]
- [Deliverable 3]: [Conference talks, workshops]

**Opportunities for Others:**
[How this project enables others to build, integrate, or benefit]

---

## CAPABILITY & FEASIBILITY (≤10,000 characters)

### Team Capabilities

**Core Team:**

**[Name 1] - [Role]**
- LinkedIn: [URL]
- Relevant Experience:
  - [Experience 1 with specific outcomes]
  - [Experience 2 with specific outcomes]
  - [Experience 3 with specific outcomes]
- Responsibilities in This Project: [Specific tasks]

**[Name 2] - [Role]**
- LinkedIn: [URL]
- Relevant Experience:
  - [Experience 1 with specific outcomes]
  - [Experience 2 with specific outcomes]
  - [Experience 3 with specific outcomes]
- Responsibilities in This Project: [Specific tasks]

**[Name 3] - [Role]**
[Continue for all team members]

**Additional Resources:**
[If recruiting] We will recruit for:
- [Role X]: Required skills - [specific skills], [why needed]
- [Role Y]: Required skills - [specific skills], [why needed]

### Why We're Best Suited

[Unique combination of skills, past successes, domain expertise, network, resources]

**Past Achievements:**
- [Achievement 1]: [Outcome, impact, proof]
- [Achievement 2]: [Outcome, impact, proof]
- [Achievement 3]: [Outcome, impact, proof]

**Relevant Projects:**
[Link to similar completed projects with evidence]

### Fund Management Processes

**Financial Controls:**
1. [Process 1]: [Description of control mechanism]
2. [Process 2]: [Description of control mechanism]
3. [Process 3]: [Description of control mechanism]

**Transparency Measures:**
- [Measure 1]: [How community can track spending]
- [Measure 2]: [Reporting frequency and format]
- [Measure 3]: [Audit/verification approach]

**Budget Management:**
[Experience managing similar budgets, tools used, track record]

### Feasibility Demonstration

**Technical Feasibility:**
- [Step 1]: [Why achievable, evidence]
- [Step 2]: [Why achievable, evidence]
- [Step 3]: [Why achievable, evidence]

**Resource Feasibility:**
- Team capacity: [Available hours/week, full-time/part-time]
- Tool access: [What we already have vs. need to acquire]
- Infrastructure: [Current setup vs. requirements]

**Timeline Feasibility:**
[Why timeline is realistic based on team capacity, task complexity, dependencies]

### Risk Mitigation

| Risk Category | Specific Risk | Likelihood | Impact | Mitigation Strategy |
|---------------|--------------|------------|--------|-------------------|
| Technical | [Risk 1] | [H/M/L] | [H/M/L] | [Mitigation] |
| Market | [Risk 2] | [H/M/L] | [H/M/L] | [Mitigation] |
| Team | [Risk 3] | [H/M/L] | [H/M/L] | [Mitigation] |
| Regulatory | [Risk 4] | [H/M/L] | [H/M/L] | [Mitigation] |

**Contingency Plans:**
[Backup plans for critical risks]

---

# Milestones

## Milestone Structure

[Based on budget - see requirements]
- Up to 75k ADA: 2 milestones + final = 3 total
- 75k-150k ADA: 3 milestones + final = 4 total
- 150k-300k ADA: 4 milestones + final = 5 total
- Over 300k ADA: 5 milestones + final = 6 total

## Milestone [1]: [Title]

**Outputs:**
[Specific deliverables or outcomes - be concrete, not generic]
- [Output 1]
- [Output 2]
- [Output 3]

**Acceptance Criteria:**
[Clear, verifiable criteria for success]
- [ ] [Criterion 1 - measurable]
- [ ] [Criterion 2 - measurable]
- [ ] [Criterion 3 - measurable]

**Evidence of Completion:**
[Specific artifacts that will prove completion]
- [Evidence 1]: [Link to repo commit / Demo video / Dashboard screenshot]
- [Evidence 2]: [Link to documentation / Test results / Metrics report]
- [Evidence 3]: [Link to deployment / Community feedback / Usage data]

**Delivery Month:** Month [X]

**Cost:** [X,XXX] ADA

---

## Milestone [2]: [Title]

[Repeat structure]

---

## Final Milestone: Project Close-out Report & Video

**Outputs:**
- Project Close-out Report (PCR)
- Project Close-out Video (PCV)
- Final deliverable: [Fully functional product/prototype]
- Complete documentation
- Community handoff materials

**Acceptance Criteria:**
- [ ] PCR submitted following Catalyst guidelines
- [ ] PCV published (max 5 minutes)
- [ ] All project objectives achieved
- [ ] All documentation complete and public
- [ ] Community can access and verify outcomes

**Evidence of Completion:**
- Link to published PCR
- Link to published PCV
- Link to live product/prototype
- On-chain metrics showing [target achieved]
- Community testimonials/feedback

**Delivery Month:** Month [X]

**Cost:** [X,XXX] ADA

**TOTAL BUDGET:** [X,XXX] ADA

---

# Final Pitch

## RESOURCES: Team & Roles

**Team Roster:**

| Name | Role | LinkedIn | Key Responsibilities | Relevant Skills |
|------|------|----------|---------------------|----------------|
| [Name 1] | [Role] | [URL] | [Responsibilities] | [Skills] |
| [Name 2] | [Role] | [URL] | [Responsibilities] | [Skills] |
| [Name 3] | [Role] | [URL] | [Responsibilities] | [Skills] |

**Recruitment Plan (if applicable):**
- **[Role X]**: [Required skills], [Why needed], [Recruitment strategy]
- **[Role Y]**: [Required skills], [Why needed], [Recruitment strategy]

**Third-party Services:**
[Any external vendors/services, what they provide, cost]

**Stakeholder Engagement:**
[How team has engaged with necessary partners, proof of willingness to collaborate]

## BUDGET & COSTS: Detailed Breakdown

**Cost Categories:**

### 1. Personnel Costs
| Role | Rate | Hours/Month | Months | Total (ADA) |
|------|------|-------------|--------|-------------|
| [Role 1] | [X ADA/hr] | [Y hrs] | [Z months] | [Total] |
| [Role 2] | [X ADA/hr] | [Y hrs] | [Z months] | [Total] |
| [Role 3] | [X ADA/hr] | [Y hrs] | [Z months] | [Total] |
| **Subtotal** | | | | **[X,XXX] ADA** |

### 2. Tools & Software
| Item | Purpose | Cost (ADA) |
|------|---------|------------|
| [Tool 1] | [Purpose] | [X] |
| [Tool 2] | [Purpose] | [X] |
| [Tool 3] | [Purpose] | [X] |
| **Subtotal** | | **[X,XXX] ADA** |

### 3. Infrastructure & Services
| Item | Purpose | Cost (ADA) |
|------|---------|------------|
| [Service 1] | [Purpose] | [X] |
| [Service 2] | [Purpose] | [X] |
| **Subtotal** | | **[X,XXX] ADA** |

### 4. Marketing & Community Engagement
| Activity | Purpose | Cost (ADA) |
|----------|---------|------------|
| [Activity 1] | [Purpose] | [X] |
| [Activity 2] | [Purpose] | [X] |
| **Subtotal** | | **[X,XXX] ADA** |

### 5. Project Management & Documentation
| Item | Purpose | Cost (ADA) |
|------|---------|------------|
| [Item 1] | [Purpose] | [X] |
| [Item 2] | [Purpose] | [X] |
| **Subtotal** | | **[X,XXX] ADA** |

### 6. Contingency (5-10%)
| Purpose | Cost (ADA) |
|---------|------------|
| Buffer for unforeseen expenses | [X] |

**GRAND TOTAL:** [X,XXX] ADA

**Alternative Funding Sources (if applicable):**
[If costs exceed request, explain other funding]

## VALUE FOR MONEY: Justification

### Cost Competitiveness

**Market Rate Comparison:**
[Compare team rates to industry standards with evidence]
- [Role 1] average in [country/region]: [X USD/hr] = [Y ADA/hr]
- Our rate: [Z ADA/hr]
- Justification: [Why this is competitive]

**Similar Project Benchmarks:**
[Compare budget to similar funded Catalyst proposals]
- [Similar proposal 1]: [Budget], [Deliverables], [Cost per deliverable]
- [Similar proposal 2]: [Budget], [Deliverables], [Cost per deliverable]
- Our proposal: [Budget], [Deliverables], [Cost per deliverable]
- Analysis: [Why our cost is competitive/justified]

### Value Delivered

**ROI for Cardano:**
[Quantify value created vs. investment]
- Investment: [X,XXX] ADA
- Expected value: [Y users × Z transactions × impact metric]
- Multiplier effect: [How this enables other projects/developers]

**Long-term Value:**
[Ongoing benefits after project completes]
- Open-source code reusable by others
- Documentation/tutorials enabling future builders
- Network effects from user adoption
- Infrastructure others can build on

### Efficiency Measures

**Cost Optimization:**
- [How we've minimized costs without compromising quality]
- [Existing resources/tools we're leveraging]
- [Skills already on team vs. need to acquire]

**Budget Allocation Rationale:**
- [X%] to core development (justified by [reason])
- [Y%] to community engagement (justified by [reason])
- [Z%] to infrastructure (justified by [reason])

---

## Proposal Complete

**Character Counts:**
- Title: [X/60 characters]
- Problem Statement: [X/200 characters]
- Solution Overview: [X/200 characters]
- SOLUTION section: [X/10,000 characters]
- IMPACT section: [X/10,000 characters]
- CAPABILITY section: [X/10,000 characters]

**All Requirements Met:**
- [✓] Category requirements satisfied
- [✓] Budget within category limits
- [✓] Timeline 2-12 months
- [✓] Required milestones for budget range
- [✓] Team LinkedIn profiles included
- [✓] Verifiable references provided
- [✓] Character limits respected
- [✓] Dependencies declared
- [✓] Budget itemized
- [✓] Milestones sum to total budget

---

**Next Command**: Use `/catalyst:review` to score and evaluate this proposal against Fund15 criteria.

## Important Notes

- **CRITICAL:** Follow proposal-submit-form.md structure exactly
- **CRITICAL:** Respect character limits (count them!)
- **IMPORTANT:** Use copywriter agent for compelling hooks
- **IMPORTANT:** Use planner agent for technical proposals
- **IMPORTANT:** All costs must be in ADA
- **IMPORTANT:** Milestones must be specific, verifiable, non-generic
- **IMPORTANT:** Include ALL required sections
- **IMPORTANT:** Sacrifice grammar for concision where appropriate
- **IMPORTANT:** Ensure all external links are tested and working
