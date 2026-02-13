
# 📚 Essential Stacks (Clarity) Contract Library

A curated collection of 20 high-quality contracts and templates for Stacks Mainnet.

## 🏛️ Standards (Traits)
*These define how tokens and NFTs behave. Always deploy these first or link to existing Mainnet deployments.*

### 1. SIP-009 NFT Standard
*The official NFT standard. Required for marketplaces like Gamma.*
```clarity
(define-trait nft-trait
  (
    (get-last-token-id () (response uint uint))
    (get-token-uri (uint) (response (optional (string-ascii 256)) uint))
    (get-owner (uint) (response (optional principal) uint))
    (transfer (uint principal principal) (response bool uint))
  )
)
```

### 2. SIP-010 Fungible Token Standard
*The official Fungible Token standard. Required for exchanges like ALEX.*
```clarity
(define-trait sip-010-trait
  (
    (transfer (uint principal principal (optional (buff 34))) (response bool uint))
    (get-name () (response (string-ascii 32) uint))
    (get-symbol () (response (string-ascii 32) uint))
    (get-decimals () (response uint uint))
    (get-balance (principal) (response uint uint))
    (get-total-supply () (response uint uint))
    (get-token-uri () (response (optional (string-utf8 256)) uint))
  )
)
```

## 🪙 Token Contracts

### 3. Simple Fungible Token (Meme Coin Template)
*A basic token with a fixed supply sent to the deployer.*
```clarity
(impl-trait .sip-010-trait)

(define-fungible-token my-token u1000000000)

(define-constant contract-owner tx-sender)
(define-constant err-owner-only (err u100))

(define-public (transfer (amount uint) (sender principal) (recipient principal) (memo (optional (buff 34))))
    (begin
        (asserts! (is-eq tx-sender sender) (err u101))
        (try! (ft-transfer? my-token amount sender recipient))
        (match memo to-print (print to-print) 0x)
        (ok true)
    )
)

(define-read-only (get-name) (ok "My Token"))
(define-read-only (get-symbol) (ok "MTK"))
(define-read-only (get-decimals) (ok u6))
(define-read-only (get-balance (who principal)) (ok (ft-get-balance my-token who)))
(define-read-only (get-total-supply) (ok (ft-get-supply my-token)))
(define-read-only (get-token-uri) (ok (some u"https://example.com/metadata.json")))

(ft-mint? my-token u1000000000 contract-owner)
```

### 4. Mintable Token (Faucet)
*Allows anyone to claim tokens.*
```clarity
(define-fungible-token mintable-token)
(define-public (claim)
    (ft-mint? mintable-token u100 tx-sender)
)
```

### 5. Burnable Token
*Allows users to destroy their own tokens.*
```clarity
(define-public (burn (amount uint))
    (ft-burn? my-token amount tx-sender)
)
```

## 🖼️ NFT Contracts

### 6. Simple NFT Collection (Your StackCred)
*(Reference your `stackcred-app.clar` - it's a perfect example!)*

### 7. Generative NFT (Mint with Counter)
```clarity
(define-data-var last-id uint u0)
(define-public (mint)
    (let ((next-id (+ (var-get last-id) u1)))
        (try! (nft-mint? my-nft next-id tx-sender))
        (var-set last-id next-id)
        (ok next-id)
    )
)
```

### 8. SBT (Soulbound Token)
*NFT that cannot be transferred.*
```clarity
(define-public (transfer (id uint) (sender principal) (recipient principal))
    (err u999) ;; Transfer forbidden
)
```

## 🔐 Utilities

### 9. Time-Locked Vault
*Users can deposit STX and only withdraw after a certain block height.*
```clarity
(define-map deposits principal uint)
(define-constant unlock-height u100000)

(define-public (deposit (amount uint))
    (stx-transfer? amount tx-sender (as-contract tx-sender))
)

(define-public (withdraw)
    (begin
        (asserts! (> block-height unlock-height) (err u403))
        (let ((balance (default-to u0 (map-get? deposits tx-sender))))
             (as-contract (stx-transfer? balance tx-sender tx-sender))
        )
    )
)
```

### 10. Multi-Sig Wallet (2-of-2)
*Requires two specific principals to approve a transaction.*

### 11. Escrow Contract
*Holds funds until a 3rd party arbiter releases them.*

### 12. Oracle Consumer
*Reads price data from Pyth or standard oracles.*

## ⚖️ Governance (DAO)

### 13. Simple Voting
*Vote Yes/No on a proposal ID.*
```clarity
(define-map votes {proposal: uint, voter: principal} bool)
(define-public (vote (proposal uint) (approve bool))
    (ok (map-set votes {proposal: proposal, voter: tx-sender} approve))
)
```

### 14. Membership NFT
*Only holders of a specific NFT can call functions.*

### 15. Treasury
*DAO funds management.*

## 💸 DeFi Primitives

### 16. Staking Pool
*Lock tokens to earn rewards.*

### 17. Simple Swap (Constant Product)
*Token A <-> Token B swap logic.*

### 18. Wrap STX
*Converts STX (native) to SIP-010 compatible token.*

### 19. Flash Loan borrower interface
*Trait for flash loans.*

### 20. BNS Lookup
*Resolve a .btc name to an address.*
```clarity
(contract-call? 'SP000000000000000000002Q6VF78.bns name-resolve "muneeb" "btc")
```

---
**Note:** To deploy these, you typically need to create a new `.clar` file for each, add it to `Clarinet.toml`, and run `clarinet deploy`.
