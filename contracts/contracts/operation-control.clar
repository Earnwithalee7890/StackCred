
;; Operation Control
;; Manages operational flags for the decentralized system with access control

(define-constant contract-owner tx-sender)
(define-constant err-owner-only (err u100))

(define-data-var system-active bool true)

(define-read-only (is-system-active)
    (ok (var-get system-active))
)

(define-read-only (get-owner)
    (ok contract-owner)
)

(define-public (toggle-system-state)
    (begin
        (asserts! (is-eq tx-sender contract-owner) err-owner-only)
        (var-set system-active (not (var-get system-active)))
        (ok (var-get system-active))
    )
)
