
;; stackcred-nft
;; A SIP-009 compliant NFT contract for StackCred credentials

;; Traits
(use-trait stackcred-trait .stackcred-trait.stackcred-trait)
(impl-trait .stackcred-trait.stackcred-trait)

;; Constants
(define-constant contract-owner tx-sender)
(define-constant err-owner-only (err u100))
(define-constant err-not-token-owner (err u101))
(define-constant err-token-id-failure (err u102))
(define-constant err-system-paused (err u503))

;; Data Vars
(define-data-var last-token-id uint u0)

;; NFT Definition
(define-non-fungible-token stackcred-nft uint)

;; Read-only functions

(define-read-only (get-last-token-id)
    (ok (var-get last-token-id))
)

(define-read-only (get-token-uri (token-id uint))
    (ok none) ;; For MVP, returning none. Can update to return metadata URL.
)

(define-read-only (get-owner (token-id uint))
    (ok (nft-get-owner? stackcred-nft token-id))
)

;; Public functions

(define-public (transfer (token-id uint) (sender principal) (recipient principal))
    (begin
        ;; Check system state via operation-control
        (asserts! (unwrap-panic (contract-call? .operation-control is-system-active)) err-system-paused)
        
        (asserts! (is-eq tx-sender sender) err-not-token-owner)
        (nft-transfer? stackcred-nft token-id sender recipient)
    )
)

(define-public (mint (recipient principal))
    (let
        (
            (token-id (+ (var-get last-token-id) u1))
        )
        ;; Check system state via operation-control
        (asserts! (unwrap-panic (contract-call? .operation-control is-system-active)) err-system-paused)

        ;; For MVP, anyone can mint, or restrict to owner?
        ;; Let's restrict to contract owner for now, usually an admin mints the credential.
        ;; (asserts! (is-eq tx-sender contract-owner) err-owner-only)
        
        ;; ALLOW OPEN MINTING FOR DEMO/HACKATHON MVP
        
        (try! (nft-mint? stackcred-nft token-id recipient))
        (var-set last-token-id token-id)
        (print {action: "mint", recipient: recipient, token-id: token-id, caller: tx-sender})
        (ok token-id)
    )
)
