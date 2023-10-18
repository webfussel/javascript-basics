console.log('Static Fields and Methods')
/**
 * Bisher haben wir nur auf sogenannte Instanz-Felder und -Methoden zugegriffen.
 * Dies sind Objekte, die existieren, sobald wir eine Instanz einer Klasse mit dem new Keyword erstellen.
 * Wir können allerdings auch Felder und Methoden auf der Klasse selbst definieren, die sich dann auf alle Instanzen beziehen.
 */

class Person {
    static numberOfPeople = 0

    #name

    #dnaSequence

    constructor(name) {
        this.#name = name
        this.#createDNASequence(10)
        Person.numberOfPeople++
    }

    greet () {
        console.log(`Hello, my name is ${this.name}.`)
        console.log(`My DNA sequence is ${this.#dnaSequence}.`)
    }

    #createDNASequence = (length) => {
        let dnaSequence = ''
        for(let i = 0; i < length; i++) {
            dnaSequence += 'ATCG'[Math.floor(Math.random() * 4)]
        }
        this.#dnaSequence = dnaSequence
    }
}

console.log('Person - Number of People: ', Person.numberOfPeople)
const person = new Person('Monkey D. Luffy')
console.log('Person - Number of People: ', Person.numberOfPeople)
const person2 = new Person('Roronoa Zoro')
console.log('Person - Number of People: ', Person.numberOfPeople)
Person.numberOfPeople = 123 // Ist natürlich Blödsinn, aber es funktioniert.
console.log('Person - Number of People: ', Person.numberOfPeople)

/**
 * Statische Felder können euch dabei helfen allgemeine Metadaten über die Klasse zu halten.
 * In diesem Beispiel zähle ich einfach wie viele Instanzen der Klasse Person bisher schon erstellt wurden.
 * Das könnte zum Beispiel nützlich sein, falls ihr in einem Spiel tracken wollt, wie viele Personen sich in eurer Welt befinden.
 */

/**
 * Auch Methoden können statisch sein, so wie auch Getter und Setter.
 */

class Person2 {
    static #numberOfPeople = 0

    #name

    #dnaSequence

    constructor(name) {
        this.#name = name
        this.#createDNASequence(10)
        Person2.#numberOfPeople++
    }

    #createDNASequence = (length) => {
        let dnaSequence = ''
        for(let i = 0; i < length; i++) {
            dnaSequence += 'ATCG'[Math.floor(Math.random() * 4)]
        }
        this.#dnaSequence = dnaSequence
    }

    static get numberOfPeople() {
        return Person2.#numberOfPeople
    }

    get name() {
        return this.#name
    }

    get dnaSequence() {
        return this.#dnaSequence
    }
}

console.log('Person2 - Number of People: ', Person2.numberOfPeople)
const person3 = new Person2('Monkey D. Luffy')
console.log('Person2 - Number of People: ', Person2.numberOfPeople)
const person4 = new Person2('Roronoa Zoro')
console.log('Person2 - Number of People: ', Person2.numberOfPeople)
// Person2.numberOfPeople = 123 // <-- Das geht nun nicht mehr, da wir keinen setter definiert haben

/**
 * Abschließend sei gesagt, dass es grundsätzlich zwei Arten von Feldern und Methoden gibt:
 * - Instanz-Felder und -Methoden, die man nur aufrufen kann, sobald man das new Keyword genutzt hat
 * - Klassen-Felder und -Methoden, die man immer abrufen kann und die sich über alle Instanzen geteilt werden
 */
