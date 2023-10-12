console.log('Array - Objects - Functions - Exercise')

/**
 * Herzlichen Glückwunsch!
 * Ihr wisst nun so ziemlich alles grundlegende zu Funktionen, Arrays und Objekten.
 * Mit diesem Wissen solltet ihr in der Lage sein eure eigene Implementierung eines Arrays zu schreiben.
 * Nachfolgend noch die wichtigen Grundlagen, die euch dabei helfen:
 * - Arrays sind Objekte, aber haben eine Zahl als Index
 * - Objekte sind Sammlungen von Schlüssel-Wert-Paaren
 * - Die Schlüssel von Objekten müssen nicht immer Strings sein
 * - Methoden sind Funktionen, die auf Objekten definiert sind
 * - Methoden haben Zugriff auf das Objekt über das 'this' Keyword
 */

// Aufgabe: Schreibe deine eigene Implementierung eines Arrays
// Dein Objekt darf kein Feld haben, das ein Array repräsentiert

// Aufgabe 1: Implementiere die Methoden 'push' und 'pop'
// Aufgabe 2: Implementiere die Methoden 'unshift' und 'shift'
// Aufgabe 3: Implementiere die Methoden 'map' und 'filter'
// Aufgabe 4: Die Übergabeparameter für MyArray sollen das Array vorbefüllen

// Viel Erfolg!
function MyArray (...args) {
    args.forEach((element, index) => {
        this[index] = element
    })

    this.length = args.length

    this.push = function (element) {
        this[this.length] = element
        this.length++
    }

    this.pop = function () {
        const element = this[this.length - 1]
        delete this[this.length - 1]
        this.length--
        return element
    }

    this.unshift = function (element) {
        for (let i = this.length; i > 0; i--) {
            this[i] = this[i - 1]
        }
        this[0] = element
        this.length++
    }

    this.shift = function () {
        const element = this[0]
        for (let i = 0; i < this.length; i++) {
            this[i] = this[i + 1]
        }
        delete this[this.length - 1]
        this.length--
        return element
    }

    this.map = function (cb) {
        if (typeof cb !== 'function') throw new Error('No callback function provided')

        const newArray = new MyArray()
        for (let i = 0; i < this.length; i++) {
            newArray.push(cb(this[i], i, this))
        }
        return newArray
    }

    this.filter = function (cb) {
        if (typeof cb !== 'function') throw new Error('No callback function provided')

        const newArray = new MyArray()
        for (let i = 0; i < this.length; i++) {
            if (cb(this[i], i, this)) {
                newArray.push(this[i])
            }
        }
        return newArray
    }
}


// Tests
const myArray = new MyArray(1, 2, 3, 4, 5)
console.log('length works correctly', myArray.length === 5)
myArray.push(6)
console.log('push works correctly', myArray.length === 6)
console.log('push works correctly', myArray[5] === 6)
const pop = myArray.pop()
console.log('pop works correctly', myArray.length === 5)
console.log('pop works correctly', pop === 6)
myArray.unshift(0)
console.log('unshift works correctly', myArray.length === 6)
console.log('unshift works correctly', myArray[0] === 0)
const shift = myArray.shift()
console.log('shift works correctly', myArray.length === 5)
console.log('shift works correctly', shift === 0)
const mappedArray = myArray.map((value) => value * 2)
console.log('map works correctly', mappedArray.length === 5)
console.log('map works correctly', mappedArray[0] === 2, mappedArray[1] === 4, mappedArray[2] === 6, mappedArray[3] === 8, mappedArray[4] === 10)
const filteredArray = myArray.filter((value) => value % 2 === 0)
console.log('filter works correctly', filteredArray.length === 2)
console.log('filter works correctly', filteredArray[0] === 2, filteredArray[1] === 4)
console.log('myArray is unchanged', myArray.length === 5)
console.log('myArray is unchanged', myArray[0] === 1, myArray[1] === 2, myArray[2] === 3, myArray[3] === 4, myArray[4] === 5)
