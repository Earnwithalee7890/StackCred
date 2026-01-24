# Deploying StackCred to Stacks 🚀

This guide explains how to deploy the `stackcred-nft` smart contract to the Stacks Testnet (or Mainnet).

## Prerequisites
*   [Clarinet](https://github.com/hirosystems/clarinet) installed.
*   A Stacks Wallet (e.g. Leather or Xverse) with some STX for gas fees.
    *   **Testnet Faucet**: [https://explorer.stacks.co/sandbox/faucet?chain=testnet](https://explorer.stacks.co/sandbox/faucet?chain=testnet)

## Step 1: Generate Deployment Plan
Clarinet can automatically calculate costs and generate a plan.

```bash
cd contracts
clarinet integrate --name testnet
```
*Start the local environment to verify everything one last time if you wish.*

## Step 2: Deploy to Testnet
You need your wallet's **Secret Key (Mnemonic)** to deploy. 
**⚠️ CAUTION: Never share your mnemonic. Use a dedicated development wallet if possible.**

1.  **Configure Deployment Key**:
    ```bash
    clarinet requirements add --testnet <YOUR_TESTNET_ADDRESS>
    ```

2.  **Deploy**:
    ```bash
    clarinet deploy --network testnet
    ```
    *Clarinet will ask for your private key mnemonic to sign the transaction.*

## Step 3: Verify Deployment
Once the transaction confirms:
1.  Go to the [Stacks Explorer (Testnet)](https://explorer.stacks.co/?chain=testnet).
2.  Search for your contract address (e.g., `ST...stackcred-nft`).
3.  Verify the source code matches.

## Step 4: Update Frontend
After deployment, update the frontend to point to the **published contract address**.

1.  Open `frontend/components/MintCredential.tsx`.
2.  Update the `contractAddress` variable:
    ```typescript
    // Replace with your real deployed address
    const contractAddress = "ST1..."; 
    ```
3.  Commit and push your changes.
4.  Deploy your frontend (Vercel/Netlify).

---
**Happy Minting!** 🏗️
