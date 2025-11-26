# Polyhydra - Next Steps
**Date:** 2025-11-26 | **Status:** Ready for Proposal Writing

---

## Readiness Assessment

| Area | Status | Notes |
|------|--------|-------|
| Problem Definition | ✅ Ready | Clear, validated |
| Solution Design | ✅ Ready | Detailed in solution.md |
| Team | ✅ Ready | Documented in team.md |
| Technical Feasibility | ✅ Ready | Hydra 1.0.0 proven |
| Budget | ⚠️ Needs refinement | Rough estimate, need milestone breakdown |
| Milestones | ⚠️ Needs refinement | Need acceptance criteria |
| Demo/Prototype | ❌ Not started | Design only, no code |

**Overall Readiness: 75%** - Can proceed with proposal writing.

---

## Actions Before Writing Proposal

### High Priority

1. **Finalize Budget Breakdown**
   - Split 75,000 ADA across milestones
   - Align with Fund15 milestone requirements (4 milestones for 75K+)
   - Include buffer for contingencies

2. **Define Milestone Acceptance Criteria**
   - Milestone 1: Architecture complete, Hydra testnet running
   - Milestone 2: Game playable on testnet, 50+ beta games
   - Milestone 3: Mainnet launch, 500+ games
   - Milestone 4: Close-out report + video

3. **Prepare Visual Materials**
   - Architecture diagram (Frontend → Orchestrator → Hydra → L1)
   - Game UI mockup/wireframe
   - User flow diagram (Discord → Play → Wallet → Rewards)

### Medium Priority

4. **Validate Technical Dependencies**
   - Confirm UTXO.dev works in Discord iframe
   - Test Hydra Head lifecycle on preview testnet
   - Verify Colyseus + Hydra integration approach

5. **Collect Team Credentials**
   - Update LinkedIn profiles
   - Prepare project portfolio links
   - Document Catalyst project history

6. **Community Validation**
   - Share concept with Cardano2VN community
   - Get feedback from gaming Discord servers
   - Connect with VILAI/HADA stake pool operators

### Low Priority

7. **Competitive Intelligence**
   - Monitor Paima Studios announcements
   - Track Hydra ecosystem developments
   - Check for new Catalyst gaming proposals

---

## Outstanding Questions

### Technical
1. Does UTXO.dev support Discord Activity iframe environment?
2. Maximum state size per Hydra Head before performance degrades?
3. Can we reuse Hydra Heads across multiple games or need new each time?

### Business
4. Discord developer fees for Activities?
5. Hosting costs for Hydra nodes at scale?
6. Token/reward mechanism for sustainable play-to-earn?

### Proposal-Specific
7. Should we request 75K or 100K ADA? (Buffer consideration)
8. Include web fallback in scope or post-funding roadmap?
9. Single proposal or split into phases?

---

## Research Gaps (Optional Follow-up)

These gaps won't block proposal writing but could strengthen it:

1. **Past Catalyst Gaming Outcomes**
   - Interview previous gaming project winners
   - Get actual retention/revenue metrics

2. **Discord Activities Case Studies**
   - Find Web3 games using Discord Activities
   - Document best practices for integration

3. **Hydra Production Experiences**
   - Connect with Hydra Doom team for insights
   - Learn from Sundae Labs' Hydra implementation

---

## Recommended Proposal Structure

Based on Fund15 form and research findings:

```
1. Title: Polyhydra - Monopoly on Hydra
2. Problem (200 char): L1 limits GameFi; Hydra unproven; Web2 friction
3. Solution (200 char): Discord board game on Hydra; provably fair; play first
4. Budget: 75,000 ADA
5. Timeline: 6 months (4 milestones)
6. Category: Cardano Use Cases: Prototype & Launch

Sections to emphasize:
- Innovation: First Hydra consumer game
- Impact: Web2 onboarding, Hydra validation
- Feasibility: 5+ Catalyst projects delivered
- Team: Full-stack GameFi capability
```

---

## Timeline to Submission

Assuming Fund15 submission deadline:

| Task | Effort | Deadline |
|------|--------|----------|
| Finalize budget & milestones | 2 hours | Day 1 |
| Write proposal draft | 4 hours | Day 2 |
| Create visual materials | 2 hours | Day 2 |
| Internal review | 1 hour | Day 3 |
| Community feedback | 1 day | Day 4 |
| Final edits | 2 hours | Day 5 |
| Submit on Catalyst App | 1 hour | Day 5 |

**Total effort:** ~12 hours over 5 days

---

## Command to Proceed

When ready to write the full proposal:

```
/catalyst:write Polyhydra - Monopoly-style board game on Hydra
```

This will use the research reports and ideation summary to generate a complete Fund15 proposal draft.

---

## Files Reference

```
proposals/251126-polyhydra/
├── ideation-summary.md          # This file
├── next-steps.md                # Action items
└── research/
    ├── hydra-technical.md       # Hydra capabilities
    ├── competitive-analysis.md  # GameFi landscape
    ├── ecosystem-gap-analysis.md # Market opportunity
    └── research-summary.md      # Consolidated findings
```

Existing project files:
- `solution.md` - Detailed solution design
- `feasibility.md` - Team & capability proof
- `team.md` - Team bios
