console.log('Classes - Basics')

/**
 * Klassen sind eine Art Bauplan für Objekte.
 * Sie beschreiben, welche Eigenschaften und Methoden ein Objekt haben kann.
 * Zuvor hatten wir bereits die Objekte, die wir mit {} erstellt haben und einen sogenannten Konstruktor, der einfach nur eine Funktion war.
 */

class Person {
    name

    constructor(name) {
        this.name = name
    }

    greet() {
        console.log(`Hello, my name is ${this.name}.`)
    }
}

const person = new Person('Monkey D. Luffy')
person.greet()
console.log(person.name)

/**
 * Das sieht schon sehr ähnlich zu dem Konstruktor aus, den wir vorher hatten.
 * Der Unterschied ist, dass wir hier nicht mehr die Funktionen in den Konstruktor schreiben müssen.
 * Wir können sie einfach außerhalb definieren.
 * Der Konstruktor in Klassen ist immer der Funktion mit dem Namen "constructor".
 * Hier könnt ihr Initialwerte für eure Eigenschaften setzen.
 * Methoden könnt ihr dann einfach darunter definieren.
 */

/**
 * Daten in einer Klasse können sowohl public als auch private sein.
 * Public bedeutet, dass man die Daten auf einer Instanz von außen lesen und schreiben kann.
 * Private bedeutet, dass sie nur innerhalb der Klasse zur Verfügung stehen.
 * Um private Felder und Methoden zu definieren, schreibt ihr einfach ein # vor den Namen.
 */

const createDNASequence = (length) => {
    let dnaSequence = ''
    for(let i = 0; i < length; i++) {
        dnaSequence += 'ATCG'[Math.floor(Math.random() * 4)]
    }
    return dnaSequence
}

class Person2 {
    name

    #dnaSequence

    constructor(name) {
        this.name = name
        this.#dnaSequence = createDNASequence(10)
    }

    greet () {
        console.log(`Hello, my name is ${this.name}.`)
        console.log(`My DNA sequence is ${this.#dnaSequence}.`)
    }
}

const person2 = new Person2('Monkey D. Luffy')
person2.greet()
console.log(person2.name)
// console.log(person2.#dnaSequence) // <-- Fehler!

/**
 * Wie ihr seht, können wir die Eigenschaft name ganz normal lesen.
 * Die Eigenschaft dnaSequence ist jedoch private und kann nur innerhalb der Klasse gelesen werden.
 * Versucht ihr, sie von außen zu lesen, bekommt ihr einen Fehler.
 * Das ist sehr praktisch, wenn ihr nicht wollt, dass jemand von außen auf eure Daten zugreifen kann.
 * Dies nennt man Datenkapselung.
 */

/**
 * Wenn ihr für Variablen nur entweder das schreiben oder das auslesen erlauben wollt, könnt ihr auch Getter und Setter verwenden.
 * Diese verwendet man meist in Verbindung mit privaten Variablen und ermöglichen euch gewisse Schutzmechanismen.
 */

class Person3 {
    #name

    #age

    #dnaSequence

    constructor(name) {
        this.#name = name
        this.#dnaSequence = createDNASequence(10)
    }

    get name() {
        return this.#name
    }

    set name(name) {
        if (!name) {
            console.error('Name must not be empty!')
            return
        }
        this.#name = name
    }

    get age() {
        return this.#age
    }

    set age(age) {
        if (age < 0) {
            this.#age = 0
            return
        }

        if (age > 150) {
            this.#age = 150
            return
        }
        this.#age = age
    }

    get dnaSequence() {
        return this.#dnaSequence
    }

    greet () {
        console.log(`Hello, my name is ${this.#name}.`)
        console.log(`My DNA sequence is ${this.#dnaSequence}.`)
    }
}

console.log('Person3')
const person3 = new Person3('Monkey D. Luffy')
person3.greet()
console.log(person3.name)
console.log(person3.dnaSequence)
person3.name = 'Ruffy'
console.log(person3.name)
person3.name = ''
console.log(person3.name)
person3.age = -123
console.log(person3.age)
person3.age = 123
console.log(person3.age)
person3.age = 24231
console.log(person3.age)

/**
 * Getter und Setter nutzen wir hier wie ganz normale Felder, obwohl sie in der Klasse wie Funktionen aussehen.
 * Intern arbeitet JavaScript übrigens auch genau so: Für jede Variable die ihr erstellt gibt es automatisch getter und setter.
 * Diese sind jedoch nicht sichtbar und können erstmal nicht verändert werden.
 */
