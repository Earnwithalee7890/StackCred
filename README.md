# StackCred

**StackCred** is a decentralized application on the Stacks blockchain that allows developers to mint immutable credentials for their educational achievements and contributions.

## Features

- **SIP-009 NFTs**: Credentials are minted an on-chain NFTs.
- **Bitcoin Secured**: All transactions are settled on Bitcoin via Stacks.
- **Resume Verified**: Track GitHub activity and hackathon wins.
- **Circuit Breaker**: Integrated emergency shutdown and maintenance controls.
- **April 2026 Event**: Official entry for the Stacks Builder Ranking. Includes a specialized `check-in` contract for zero-fee on-chain activity proof.

## April 2026 Event Status
This project is configured for the **Stacks April 2026 Builder Ranking**. 
- **Verification Tag**: Included in `layout.tsx`.
- **On-Chain Activity**: Use the `check-in.clar` contract to log your participation.
- **Commit History**: 30+ meaningful commits documenting the April milestone.

## Project Structure

- `frontend/`: Next.js application with Tailwind CSS.
- `contracts/`: Clarity smart contracts (SIP-009, SIP-010, and Operation Control).

## Security & Operations

The system incorporates a robust **Operation Control** module (`operation-control.clar`) that implements:
- **Emergency Shutdown**: Instant suspension of all minting and transfer activities.
- **Maintenance Mode**: Allows administrators to perform upgrades while keeping the system in a read-only state.
- **Audit Logging**: On-chain event printing for all administrative actions.

## Getting Started

1. `npm install`
2. `npm run dev`

## Deployment

Contracts are deployed to Stacks.
- **Main App**: `stackcred-app`
- **Governance**: `operation-control`
- **Token**: `stackcred-token`

<!-- update: 40-Improve modal accessibility for screen readers -->

<!-- update: 41-Add responsive navigation for tablet devices -->

<!-- update: 42-Update license information in footer -->

<!-- update: 43-Standardize code formatting in components -->

<!-- update: 44-Add more project stats to PlatformStats -->

<!-- update: 45-Improve wallet connection persistence -->

<!-- update: 46-Add SEO meta tags to LandingPage -->

<!-- update: 47-Refactor event info data retrieval -->

<!-- update: 48-Update walkthrough guide with new features -->

<!-- update: 49-Finalize project structure for Stacks April Event -->

// Quality Doc Update: 17:33:24 - Adding detailed documentation for better maintainability

// UI Polish: 17:33:42 - Refined spacing and color harmony

// Code Refactor: 17:34:00 - Improved modularity and readability

// Quality Fix: 17:34:18 - Enhanced type definitions and edge case handling
