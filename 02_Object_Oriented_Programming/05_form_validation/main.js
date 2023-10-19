class FormField {
    #input

    #message

    #regex

    constructor(element) {
        this.#input = element.children[0]
        this.#message = element.children[1]

        if (this.#input.dataset.regex) {
            this.#regex = new RegExp(this.#input.dataset.regex)
            this.#input.addEventListener('blur', () => {
                this.validate()
            })
        }
    }

    validate () {
        const isValid = !this.#regex || this.#regex.test(this.#input.value)

        if (!isValid) {
            this.#message.innerText = this.#input.dataset.message
        } else {
            this.#message.innerText = ''
        }

        return isValid
    }
}

class Form {
    #element

    #formFields

    #submitButton

    constructor(element) {
        this.#element = element

        this.#formFields =
            [...element.querySelectorAll('.form-field')]
                .map(element => new FormField(element))

        this.#submitButton = element.querySelector('input[type="submit"]')

        this.#submitButton.addEventListener('click', (event) => {
            this.validate(event)
        })

        // const elements = element.querySelectorAll('input:not([type="submit"])')
        // this.#formFields = []
        // for (let i = 0; i < elements.length; i++) {
        //     this.#formFields.push(new FormField(elements[i]))
        // }

        // this.#formFields = []
        // for (let el of elements) {
        //     this.#formFields.push(new FormField(el))
        // }
    }

    validate (event) {
        event.preventDefault()

        const allValid = this.#formFields.every(field => field.validate())
        if (allValid) {
            console.log('Alle Felder valide')
        } else {
            console.log('Irgendwas ist falsch')
        }
    }

}

console.log(document)
const forms = [...document.forms].map(form => new Form(form))

console.log(forms)
