/**
 * Wir können mit ECMAScript 6 Modulen ganz einfach Funktionen, Variablen und Klassen exportieren und importieren.
 * Dazu müssen wir nur das Schlüsselwort export vor die zu exportierende Funktion, Variable oder Klasse schreiben.
 */

// Variablen
// Diese Variablen gibt es natürlich schon in Math von JavaScript, aber das ist ja auch nur ein Beispiel
export const PI = 3.14159265359
export const E = 2.71828182846



// Named Exports => Der Name der exportierten Funktion, Variable oder Klasse muss beim Import angegeben werden
export const add = (a, b) => a + b
export const subtract = (a, b) => a - b

// Default Exports => Der Name der exportierten Funktion, Variable oder Klasse kann beim Import frei gewählt werden
// Es kann pro Datei logischerweise nur einen Default Export geben
export const multiply = (a, b) => a * b

// Klassen sind selbstverständlich auch absolut problemlos exportierbar

export default class Calculator {
    #value

    constructor(initial) {
        this.#value = initial ?? 0
    }

    add(a) {
        this.#value += a
        return this
    }

    subtract(a) {
        this.#value -= a
        return this
    }

    multiply(a) {
        this.#value *= a
        return this
    }

    divide(a) {
        this.#value /= a
        return this
    }

    get value() {
        return this.#value
    }
}

// Wir müssen nicht immer gleich alles sofort exportieren, sondern können auch erst definieren und dann mehrere Dinge auf einmal exportieren

function divide(a, b) {
    return a / b
}

function modulo(a, b) {
    return a % b
}

// ACHTUNG! Mutationen sind auch bei exportierten Objekten möglich!
const mutateMe = {
    a: 1,
    b: 2,
    c: 3,
}

export const logMutateMe = () => console.log(mutateMe)

const mutateMeCopy = {...mutateMe}

export {
    divide,
    modulo,
    mutateMeCopy as mutateMe
}
