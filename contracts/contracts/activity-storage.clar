
;; Activity Storage
;; A simple contract to store and retrieve a number

(define-data-var stored-value uint u100)

(define-read-only (get-value)
    (ok (var-get stored-value))
)

(define-public (set-value (new-value uint))
    (begin
        (var-set stored-value new-value)
        (ok new-value)
    )
)
