const validateField = (input, message) => {
    const regexRaw = input.dataset.regex
    if (regexRaw) {
        const regex = new RegExp(regexRaw)
        const isValid = regex.test(input.value)

        if (!isValid) {
            message.innerText = input.dataset.message
        } else {
            message.innerText = ''
        }

        return isValid
    } else {
        message.innerText = ''
        return true
    }
}


;[...document.querySelectorAll('.form-field')].forEach(field => {
    const input = field.children[0]
    const message = field.children[1]

    input.addEventListener('blur', () => {
        validateField(input, message)
    })
})

;[...document.querySelectorAll('input[type="submit"]')].forEach(button => {
    button.addEventListener('click', (event) => {
        event.preventDefault()

        const form = button.parentElement
        ;[...form.querySelectorAll('.form-field')].forEach(field => {
            const input = field.children[0]
            const message = field.children[1]
            validateField(input, message)
        })
    })
})
