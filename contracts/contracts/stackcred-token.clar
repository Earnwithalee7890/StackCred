
;; Implement the SIP-010 trait
(impl-trait 'SP2F500B8DTRK1EANJQ054BRAB8DDKN6QCMXGNFBT.sip-010-trait)

(define-fungible-token my-token u1000000)

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

;; Mint all tokens to deployer
(ft-mint? my-token u1000000 contract-owner)
