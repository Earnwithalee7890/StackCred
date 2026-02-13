# StackCred

**StackCred** is a decentralized application on the Stacks blockchain that allows developers to mint immutable credentials for their educational achievements and contributions.

## Features

- **SIP-009 NFTs**: Credentials are minted an on-chain NFTs.
- **Bitcoin Secured**: All transactions are settled on Bitcoin via Stacks.
- **Resume Verified**: Track GitHub activity and hackathon wins.
- **Circuit Breaker**: Integrated emergency shutdown and maintenance controls.

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
