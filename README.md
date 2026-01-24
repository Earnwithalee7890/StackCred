# StackCred 🚀
**Verified Credentials on Bitcoin & Stacks**

StackCred is a decentralized application that allows developers to mint their verified skills and achievements as SIP-009 NFTs on the Stacks blockchain.

![StackCred Hero](https://via.placeholder.com/800x400?text=StackCred+Preview)

## 🏆 Talent App Challenge
This project was built for the Stacks Talent App Challenge. It demonstrates:
*   **SIP-009 NFT Standard**: Minting credentials on-chain.
*   **Stacks Connect**: Seamless wallet integration (Xverse/Hiro).
*   **Clarinet**: Smart contract development and testing.
*   **Next.js 14+**: Modern, responsive frontend with SSR optimizations.

## 🛠️ Tech Stack
*   **Blockchain**: Stacks (Clarity)
*   **Frontend**: Next.js, TailwindCSS, Lucide React
*   **Wallet**: Stacks.js
*   **Testing**: Clarinet, Vitest

## 🚀 Getting Started

### Prerequisites
*   Node.js 18+
*   Clarinet (for contract dev)
*   Xverse or Hiro Wallet Extension

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/your-username/stackcred.git
    cd stackcred
    ```

2.  **Install Frontend Dependencies**
    ```bash
    cd frontend
    # Note: Use legacy-peer-deps due to React 19/Stacks compatibility
    npm install --legacy-peer-deps
    ```

3.  **Run Locally**
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) in your browser.

### Smart Contract Development

1.  **Run Stacks Chain (Devnet)**
    ```bash
    cd contracts
    clarinet integrate
    ```

2.  **Run Contract Tests**
    ```bash
    clarinet test
    ```

## 🧪 features

1.  **GitHub Scoring**: Enter your username to see your "Builder Score".
2.  **Eligibility Check**: Only scores > 10 can mint the Credential.
3.  **Minting**: One-click minting of your SIP-009 NFT.
4.  **Leaderboard**: Real-time view of top builders.

## 📄 License
MIT
