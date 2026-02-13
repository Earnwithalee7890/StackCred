
;; Activity Math
;; A simple contract to perform basic calculations

(define-public (add (a uint) (b uint))
    (ok (+ a b))
)

(define-public (double (a uint))
    (ok (* a u2))
)

(define-read-only (square (a uint))
    (ok (* a a))
)
