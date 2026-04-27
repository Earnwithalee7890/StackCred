# StackCred Development Guide

This guide provides detailed information on how to develop, test, and deploy the StackCred protocol.

## Project Philosophy

StackCred is built with a focus on:
1. **Transparency**: All reputation logic is on-chain or verifiable.
2. **Security**: Using Clarity's decidability to prevent common smart contract bugs.
3. **UX**: Premium, responsive frontend built with Next.js and Tailwind.

## Architecture

### Smart Contracts
- `check-in.clar`: Entry point for user activity.
- `operation-control.clar`: Governance and emergency controls.
- `stackcred-token.clar`: SIP-010 compliant governance token.

### Frontend
- Located in `/frontend`.
- Uses `stacks.js` for blockchain interaction.
- Uses `lucide-react` for iconography.
- Components are modular and located in `components/`.

## Local Development

### Contract Development
1. Start a local Stacks node:
   ```bash
   clarinet integrate
   ```
2. Run tests:
   ```bash
   clarinet test
   ```

### Frontend Development
1. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```
2. Run the dev server:
   ```bash
   npm run dev
   ```

## Deployment

### Testnet
1. Update `Clarinet.toml` with your testnet keys.
2. Deploy using Clarinet:
   ```bash
   clarinet deploy --testnet
   ```

### Mainnet
- Ensure all contracts have been audited.
- Follow the multi-sig deployment process described in `GOVERNANCE.md`.

## Contributing

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Commit your changes: `git commit -m "feat: add some feature"`
3. Push to the branch: `git push origin feature/your-feature`
4. Open a Pull Request.
