# Hydra Gaming Research - Polyhydra Proposal (Fund 15)

Research documents for Hydra technology application to gaming on Cardano.

## Files

### hydra-technical.md
**Status:** Complete (151 lines)

Concise technical research report covering:
1. **Current Hydra Development Status** - Hydra Node 1.0.0 (Oct 2025), 8-participant max, mainnet deployment ready
2. **Gaming Implementations** - Hydra Doom proof (86M transactions, 5,662 concurrent games), Hydra Poker examples
3. **Technical Limitations** - 8-participant ceiling, determinism requirement, no dynamic membership (current version)
4. **Provably Fair Pattern** - Commit-reveal scheme for randomness; no external oracle needed for Hydra games
5. **State Channel Lifecycle** - Opening (L1 settlement), game play (off-chain), closing (L1 + dispute resolution)
6. **Recommended Architecture** - Discord Activity → Orchestrator → Hydra Node → Cardano L1 stack

**Key Findings:**
- Production-ready (Oct 2025 mainnet support)
- 2-6 players optimal per head; horizontal scaling unlimited
- 100x-1000x cheaper than L1-only (~0.17 ADA per game)
- Snapshot consensus naturally enforces turn order for turn-based games
- Commit-reveal sufficient for fairness (no Chainlink VRF needed)

**Unresolved Questions:**
1. Dynamic membership mid-game?
2. Max game state size before latency degrades?
3. Incentive design for competitive gaming?
4. Head reuse vs. new heads per game?

**Sources:** 9 citations with links to official Hydra docs, IOHK blog, Hydra Doom GitHub, Cardano learning resources.

---

## Research Baseline

This report synthesizes:
- **Hydra 1.0.0 announcement** (Oct 2025) - First mainnet-deployable release
- **Hydra Doom case study** (Aug 2024) - Real-world gaming implementation proof
- **Comprehensive turn-based game research** - Existing detailed analysis covering state machines, recovery patterns, settlement logic
- **Cardano VRF/randomness research** - Provably fair mechanism options for gaming

---

## Usage

For Polyhydra proposal (Fund 15):
1. **Executive context:** Use key findings summary (section 6) for proposal abstracts
2. **Technical validation:** Reference sections 1-5 for feasibility discussions
3. **Architecture design:** Use recommended architecture (section 6) as starting point
4. **Unresolved questions:** Flag for future research phases or implementation planning

For detailed implementation guidance:
→ See `/home/tid/project/fun15/catalyst/proposal/plans/hydra-game-research/reports/251126-hydra-turn-based-games.md`

---

**Research Completed:** 2025-11-26
**Data Currency:** Oct 2025 (Hydra 1.0.0 release)
**Scope:** Gaming applications on Cardano Hydra; turn-based games 2-6 players
