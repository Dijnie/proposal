
## 1) The Problem We Solve
Game-Fi on Cardano is limited in terms of user experience because most interactions must occur on L1 (speed/cost), leading to products primarily revolving around minting/receiving NFTs or tokens. Hydra has emerged to resolve this performance bottleneck, yet it still lacks successful, community-scale products to demonstrate its value and drive Web2 users toward Cardano.

## 2) Proposed Solution
We are building a Discord Activity board game in a "Monopoly" style that runs on Hydra. This aims to provide an experience as smooth as Web2 (fast turns, low latency) while remaining as transparent and verifiable as Web3:
* Gameplay turns are processed off-chain within the Hydra Head;
* Final results are settled on-chain when the game concludes;
* Provably Fair (PF) mechanism for dice rolls/events, preventing cheating;
* On-chain reward mechanism (prizes/tournaments).

## 3) Why This Approach
* **Fits the turn-based nature:** Hydra allows for continuous state updates with near-zero cost within the Head, only writing to L1 when the final outcome needs to be settled.
* **Reduced friction via Discord:** Players are where they already spend their daily time; no wallet connection is needed for every turn.
* **Trust & Fairness:** PF + on-chain history assures players that cheating is impossible.

## 4) Detailed Description
* **Experience:** Players open the Activity in a voice channel, create/join a 2–6 player room, play turn-by-turn (buy/rent/sell assets, event cards...), with an intuitive UI and smooth animations. When the game ends, the system closes the Head and records the match transcript (txID, state hash, metadata) onto L1; the leaderboard updates instantly.
* **PF Technique:** A commit-reveal model for server\_nonce and client\_nonce combined with an on-chain anchor; HMAC/SHA256 is used to generate random numbers that can be self-verified from the public data in the match transcript.
* **Architecture:**
    * Frontend (Discord Activity – React/TS): Board UI, state synchronization via events.
    * Orchestrator (Node.js): Executes rules, PF, and coordinates opening/closing the hydra-head per-match.
    * Hydra + Cardano: Opens a Head when a table is created, executes the state machine within the Head, close $\to$ fan-out to record results on L1.
    * Reliability: Pause/resume, reconnect, light snapshots for recovery when a player disconnects.

## 5) Who Will Participate & Benefit
* **Groups/Small teams (2–4 people) on Discord:** Play together turn-by-turn, experiencing Web2-like smoothness but with Web3 transparency, anti-cheating (Provably Fair), and an on-chain record after every game.
* **Web3 Newcomers:** Access Cardano through a familiar game, without needing wallet interactions for every turn; only connect the wallet when receiving rewards/post-match NFTs.
* **Cardano Ecosystem:** Increased visibility and on-chain activity due to a new stream of users from Discord.

## 6) How to Prove Impact
We will publish a data dashboard and periodic reports on:
* **Adoption:** Number of installed servers, MAU/WAU/DAU, games/week, retention rate.
* **Hydra metrics:** Number of Heads opened/closed, median duration, error rate $<1\%$.
* **On-chain:** $\%$ of games with a transcript (txID), median fee/game, number of transcript NFTs.
* **Web2 $\to$ Web3 Funnel:** $\%$ of players connecting wallets to receive rewards/NFTs.
All txIDs will be publicly listed for the community to self-verify.

## 7) Uniqueness and Why It is Important for Cardano
* **Dual Experience:** Fast like Web2, transparent like Web3.
* **Proving Hydra "in the field":** Real data from thousands of matches, reducing doubts about performance/cost.
* **Opening the Door to New Users:** Bringing Cardano to the massive Discord community, increasing visibility and on-chain activity.

## 9) Risks & Mitigation Strategies
* **Discord policy changes:** Adhere closely to guidelines, prepare a web fallback version to continue community testing if needed.
* **Hydra stability/multi-player synchronization:** Early stress-testing, autoscale, snapshots; a resume process for abnormal Head closures.
* **L1 fee volatility/congestion:** Allow for delayed settlement and batching outside of peak hours.
* **Wallet onboarding:** Only require a wallet connection for receiving rewards/NFTs; provide concise instructions within the Activity.

## 10) Sustainability & Scalability
* **Optional Monetization:** Cosmetics/IAPs within Discord (not pay-to-win), pro server packages (branding/tournaments).
* **Partnerships & Sponsorships:** Collaborate with large servers/guilds, and sponsors within the Cardano ecosystem to scale up tournament size.
* **Upgrade Roadmap:** Add extended maps/rules, tournament mode, team mode, real-time events.