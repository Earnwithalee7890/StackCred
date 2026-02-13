
;; stackcred-token
;; A SIP-010 compliant fungible token for StackCred ecosystem

;; Constants
(define-constant contract-owner tx-sender)
(define-constant err-owner-only (err u100))
(define-constant err-not-authorized (err u101))
(define-constant err-system-paused (err u503))

;; Token Definition
(define-fungible-token stackcred-token u1000000000000) ;; 1M tokens with 6 decimals

;; Public functions

(define-public (transfer (amount uint) (sender principal) (recipient principal) (memo (optional (buff 34))))
    (begin
        ;; Check system state via operation-control
        (asserts! (unwrap-panic (contract-call? .operation-control is-system-active)) err-system-paused)
        
        (asserts! (is-eq tx-sender sender) err-not-authorized)
        (try! (ft-transfer? stackcred-token amount sender recipient))
        (match memo to-print (print to-print) 0x)
        (ok true)
    )
)

;; Read-only functions

(define-read-only (get-name) (ok "StackCred Token"))
(define-read-only (get-symbol) (ok "SCRD"))
(define-read-only (get-decimals) (ok u6))
(define-read-only (get-balance (who principal)) (ok (ft-get-balance stackcred-token who)))
(define-read-only (get-total-supply) (ok (ft-get-supply stackcred-token)))
(define-read-only (get-token-uri) (ok (some u"https://stackcred.xyz/metadata/token.json")))

;; Initialization
(begin
    (print "StackCred Token Initialized")
    (ft-mint? stackcred-token u1000000000000 contract-owner)
)
