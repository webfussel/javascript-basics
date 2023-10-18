console.log('Static Fields and Methods')
/**
 * Manchmal erstellt man mehrere Klassen und merkt, dass sie sich sehr ähnlich sind.
 * Um hier Komplexität zu vermindern gibt es die Möglichkeit der Vererbung.
 * Vererbung erstellt eine neue Klasse, die alle Eigenschaften und Methoden der Elternklasse hat.
 * Hierzu nutzen wir das extends Keyword.
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

class Pirate extends Person {
    bounty

    constructor(name, bounty) {
        super(name)
        this.bounty = bounty
    }

    greet() {
        super.greet()
        console.log(`My bounty is ${this.bounty}.`)
    }
}

const ruffy = new Pirate('Monkey D. Ruffy', 150_000_000)
ruffy.greet()

/**
 * Die Klasse Pirate erbt von der Klasse Person.
 * Das bedeutet, dass sie alle Eigenschaften und Methoden von Person hat.
 * Wir können diese Eigenschaften und Methoden nutzen, als wären sie in der Klasse Pirate definiert.
 * Mit dem super keyword können wir auf die Eigenschaften und Methoden der Elternklasse zugreifen, wenn wir Funktionen überschreiben.
 * In diesem Fall überschreiben wir sowohl den constructor als auch die greet Methode.
 */

/**
 * Vererbung ist ein sehr mächtiges Werkzeug, das euch helfen kann euren Code zu vereinfachen.
 * Es wird häufig diskutiert, ob Inheritance (Vererbung) oder Composition (Komposition) besser ist.
 * Da Composition in JavaScript nicht so einfach ist, empfehle ich euch Vererbung zu nutzen.
 * Ich selbst bin allerdings absolut kein Fan davon.
 * Im späteren TypeScript Kurs werdet ihr euch auch mit Composition beschäftigen.
 * Kurz gesagt:
 * Bei Vererbung bekommt ihr immer alles von allen Elternklassen mitgeliefert.
 * Bei Composition könnt ihr euch aussuchen, welche Eigenschaften und Methoden ihr nutzen wollt.
 */
