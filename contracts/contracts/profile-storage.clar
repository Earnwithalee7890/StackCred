
;; Profile Storage
;; Stores simplified user profile data on-chain with access control

(define-constant contract-owner tx-sender)
(define-constant err-owner-only (err u100))

(define-data-var profile-score uint u100)

(define-read-only (get-score)
    (ok (var-get profile-score))
)

(define-public (update-score (new-score uint))
    (begin
        (asserts! (is-eq tx-sender contract-owner) err-owner-only)
        (var-set profile-score new-score)
        (ok new-score)
    )
)
