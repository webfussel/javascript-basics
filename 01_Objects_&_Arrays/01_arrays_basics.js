console.log('Arrays - Basics')
/**
 * Arrays sind Sammlungen von Werten.
 * Im Gegensatz zu primitiven Datentypen kann man hier also mehrere Werte in einer Variable speichern.
 * Da es in JavaScript keine starke typisierung gibt können hier auch Typen gemischt werden: Zahlen, Strings, Booleans. Alles.
 */
const oneValue = 123

const arr = [1]
const severalValues = ['a', 2, 3, 4, 5]
const severalValues2 = [1, '2', 3, '4', 5, true, false, () => {
    return 'asdf'
}]

console.log('oneValue', oneValue)
console.log('severalValues', severalValues)
console.log('severalValues2', severalValues2)

/**
 * Arrays können auch andere Arrays beinhalten.
 */
const nestedArray = [
    1,
    2,
    [3, 4, 5],
    6,
    7
]

console.log('nestedArray', nestedArray)

/**
 * Um auf einzelne Werte zuzugreifen schreibt man den Index in eckigen Klammern hinter den Variablennamen.
 * Wir fangen dabei natürlich an bei 0 zu zählen.
 */
const firstValue = severalValues[0]
const secondValue = severalValues[1]
const thirdValue = severalValues[2]
// etc...

console.log('firstValue', firstValue)
console.log('secondValue', secondValue)
console.log('thirdValue', thirdValue)
