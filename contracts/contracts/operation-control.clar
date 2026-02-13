
;; Operation Control
;; Manages operational flags for the decentralized system with access control

(define-constant contract-owner tx-sender)
(define-constant err-owner-only (err u100))
(define-constant err-not-authorized (err u101))

;; Operational states
(define-data-var system-active bool true)
(define-data-var maintenance-mode bool false)
(define-data-var emergency-shutdown bool false)

;; Read-only functions
(define-read-only (is-system-active)
    (ok (and (var-get system-active) (not (var-get emergency-shutdown))))
)

(define-read-only (is-maintenance-mode)
    (ok (var-get maintenance-mode))
)

(define-read-only (get-owner)
    (ok contract-owner)
)

;; Public functions

(define-public (toggle-system-state)
    (begin
        (asserts! (is-eq tx-sender contract-owner) err-owner-only)
        (var-set system-active (not (var-get system-active)))
        (print {action: "toggle-system-state", caller: tx-sender, new-state: (var-get system-active)})
        (ok (var-get system-active))
    )
)

(define-public (set-maintenance-mode (enabled bool))
    (begin
        (asserts! (is-eq tx-sender contract-owner) err-owner-only)
        (var-set maintenance-mode enabled)
        (print {action: "set-maintenance-mode", caller: tx-sender, enabled: enabled})
        (ok enabled)
    )
)

(define-public (trigger-emergency-shutdown)
    (begin
        (asserts! (is-eq tx-sender contract-owner) err-owner-only)
        (var-set emergency-shutdown true)
        (print {action: "emergency-shutdown", caller: tx-sender})
        (ok true)
    )
)

(define-public (reset-emergency-shutdown)
    (begin
        (asserts! (is-eq tx-sender contract-owner) err-owner-only)
        (var-set emergency-shutdown false)
        (print {action: "reset-emergency-shutdown", caller: tx-sender})
        (ok false)
    )
)
