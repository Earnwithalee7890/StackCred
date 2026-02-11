
;; Audit Log
;; Securely logs system events for compliance with access control

(define-constant contract-owner tx-sender)
(define-constant err-owner-only (err u100))

(define-data-var last-entry (string-ascii 50) "System Init")

(define-read-only (get-last-entry)
    (ok (var-get last-entry))
)

(define-public (log-event (message (string-ascii 50)))
    (begin
        (asserts! (is-eq tx-sender contract-owner) err-owner-only)
        (var-set last-entry message)
        (ok message)
    )
)
