console.log('Functions - Instances')

/**
 * In letzter Zeit war es äußerst nervig Objekte zu erstellen.
 * Wir hatten häufig Arrays mit Inhalten, deren Struktur durchgängig gleich war.
 * Aber um beispielsweise neue Personen zu erstellen, mussten wir immer die alte Struktur kopieren und entsprechend anpassen.
 * Das ist nicht nur nervig, sondern auch fehleranfällig.
 * Um den Abhilfe zu schaffen können wir Funktionen erstellen, die uns Objekte erstellen.
 */

// Vorher:
const luffy = {
    name: 'Monkey D. Luffy',
    devilFruit: 'Gum Gum Fruit',
    position: 'Captain',
}

// Jetzt:
function Person(name, devilFruit, position) {
    this.name = name
    this.devilFruit = devilFruit
    this.position = position
}

const nami = new Person('Nami', null, 'Navigator')
const usopp = new Person('Usopp', null, 'Sniper')
const chopper = new Person('Tony Chopper', 'Human Human Fruit', 'Doctor')

console.log('luffy', luffy)
console.log('nami', nami)
console.log('usopp', usopp)
console.log('chopper', chopper)

/**
 * Was ist hier passiert?
 * Wir haben eine Funktion erstellt, die wir als Konstruktor bezeichnen.
 * Diese Funktion erstellt uns ein Objekt.
 * Wir können diese Funktion mit dem new Keyword aufrufen.
 * Das new Keyword erstellt ein leeres Objekt und setzt das 'this' Keyword auf dieses Objekt.
 * Anschließend wird die Funktion ausgeführt.
 * Die Funktion füllt das Objekt mit den gewünschten Werten.
 * Am Ende wird das Objekt zurückgegeben.
 */

/**
 * Wir können unseren Konstruktoren auch Funktionen hinzufügen.
 * Diese Funktionen werden als Methoden bezeichnet.
 * Wir können diese Methoden dann auf den Objekten aufrufen.
 * Die Methoden haben Zugriff auf das Objekt über das 'this' Keyword.
 */

function PersonWithMethod(name, devilFruit, position) {
    this.name = name
    this.devilFruit = devilFruit
    this.position = position

    this.introduce = function () {
        console.log(`Hello, my name is ${this.name}.`)
        if (this.devilFruit) {
            console.log(`I ate the ${this.devilFruit}.`)
        } else {
            console.log('I don\'t have a devil fruit.')
        }
    }
}

const sanji = new PersonWithMethod('Sanji', null, 'Cook')
sanji.introduce()

/**
 * Später lernen wir eine deutlich bessere Möglichkeit kennen, wie wir Instanzen von Objekten erstellen können.
 * Aber das ist erst in ein paar Lektionen dran. (Falls ihr schon Mal vorlernen wollt: class keyword.
 */
