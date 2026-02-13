
;; Activity Hello World
;; A simple contract that returns a greeting

(define-public (say-hello)
    (ok "Hello, Stacks World!")
)

(define-read-only (get-greeting)
    (ok "Greetings from Clarity!")
)
