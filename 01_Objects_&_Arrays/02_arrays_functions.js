console.log('Arrays - Functions')
/**
 * Natürlich bringt es einem häufig nicht viel einfach Variablen zu haben, welche mehrere Werte beinhalten.
 * Man muss damit auch irgendwie arbeiten können. Dafür stellen uns Arrays verschiedene Methoden zur Verfügung.
 * Hier erstellen wir ein Array mit dem wir in diesem File arbeiten werden.
 */
const exampleArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]

/**
 * Das Array verändern
 * Arrays stellen uns Methoden bereit, mit denen wir Einträge hinzufügen, entfernen oder verändern können.
 */
exampleArray.push(10) // Fügt einen Wert am Ende des Arrays hinzu
console.log('exampleArray', 'after push', exampleArray)
exampleArray.pop() // Entfernt den letzten Wert des Arrays und gibt ihn zurück
console.log('exampleArray', 'after pop', exampleArray)
exampleArray.unshift(0) // Fügt einen Wert am Anfang des Arrays hinzu
console.log('exampleArray', 'after unshift', exampleArray)
exampleArray.shift() // Entfernt den ersten Wert des Arrays und gibt ihn zurück
console.log('exampleArray', 'after shift', exampleArray)
exampleArray.splice(2, 1) // Entfernt einen Wert an einer bestimmten Position und gibt ihn zurück
console.log('exampleArray', 'after splice', exampleArray)
exampleArray.splice(2, 0, 3) // Fügt einen Wert an einer bestimmten Position hinzu
console.log('exampleArray', 'after splice', exampleArray)

// WICHTIG: Diese Methoden verändern das Array direkt. (Mutable)

/**
 * Iteration
 * Iteration bedeutet, dass wir über alle Werte eines Arrays iterieren (also nacheinander auf jeden Wert zugreifen).
 * Dafür gibt es verschiedene Möglichkeiten.
 */

// Schleife
for (let i = 0; i < exampleArray.length; i++) {
    console.log('Schleife (klassisch)', exampleArray[i])
}

for (const value of exampleArray) {
    console.log('Schleife (for-of)', value)
}

// forEach
exampleArray.forEach((value) => {
    console.log('forEach', value)
})

/**
 * Ausschließlich die Werte nacheinander auslesen ist aber vielleicht nicht gerade das Gelbe vom Ei.
 * Meistens will man ja irgendwas mit diesen Werten machen. Auch hierfür stellen uns Arrays verschiedene Methoden zur Verfügung.
 * WICHTIG: Diese Methoden verändern das Array nicht direkt. (Immutable)
 */

// filter
// Filtert alle Werte aus dem Array, für welche der Rückgabewert des Callbacks false ist.
// Wichtig: Hierbei wird das alte Array nicht verändert, sondern ein neues Array mit den gefilterten Werten zurückgegeben.
const filteredArray = exampleArray.filter((value) => value % 2 === 0)

console.log('filteredArray', filteredArray)
// FRAGE: Welche Werte werden hier im filteredArray landen?

// map
// Wandelt Werte des Arrays um und gibt ein neues Array mit den umgewandelten Werten zurück.
const mappedArray = exampleArray.map((value) => value * 2)

console.log('mappedArray', mappedArray)
// FRAGE: Welche Werte werden hier im mappedArray landen?

// reduce
// Reduziert das Array auf einen einzelnen Wert. Die komplizierteste und auch mächtigste Array Methode.
const sum = exampleArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0)

console.log('sum', sum)

// find
// Findet den ersten Wert im Array, für welchen der Rückgabewert des Callbacks true ist.
const firstEvenNumber = exampleArray.find((value) => value % 2 === 0)

console.log('firstEvenNumber', firstEvenNumber)

// some
// Gibt true zurück, wenn der Rückgabewert des Callbacks für mindestens einen Wert im Array true ist.
const hasEvenNumber = exampleArray.some((value) => value % 2 === 0)

console.log('hasEvenNumber', hasEvenNumber)

// every
// Gibt true zurück, wenn der Rückgabewert des Callbacks für alle Werte im Array true ist.
const allEvenNumbers = exampleArray.every((value) => value % 2 === 0)

console.log('allEvenNumbers', allEvenNumbers)

// includes
// Gibt true zurück, wenn der Wert im Array enthalten ist.
const includesNumber = exampleArray.includes(5)

console.log('includesNumber', includesNumber)

// indexOf
// Gibt den Index des ersten Vorkommens des Werts im Array zurück. Gibt -1 zurück, wenn der Wert nicht im Array enthalten ist.
const indexOfNumber = exampleArray.indexOf(5)

console.log('indexOfNumber', indexOfNumber)

// lastIndexOf
// Gibt den Index des letzten Vorkommens des Werts im Array zurück. Gibt -1 zurück, wenn der Wert nicht im Array enthalten ist.
const lastIndexOfNumber = exampleArray.lastIndexOf(5)

console.log('lastIndexOfNumber', lastIndexOfNumber)

// join
// Gibt einen String zurück, in welchem alle Werte des Arrays mit dem übergebenen Separator getrennt sind.
const joinedArray = exampleArray.join(' - ')

console.log('joinedArray', joinedArray)

// concat
// Gibt ein neues Array zurück, welches alle Werte des Arrays und alle Werte der übergebenen Arrays enthält.
const concatenatedArray = exampleArray.concat([10, 11, 12])

console.log('concatenatedArray', concatenatedArray)

// slice
// Gibt ein neues Array zurück, welches nur die Werte des Arrays zwischen den übergebenen Indizes enthält.
const slicedArray = exampleArray.slice(2, 5)

console.log('slicedArray', slicedArray)

/**
 * AUSREIßER
 * Es gibt auch noch einige Methoden, die den obigen ähneln aber das vorhandene Array verändern.
 * Da dies inkonsequent in der allgemeinen Implementierung ist, gibt es bald Alternativen, welche ich euch hier auch kurz zeigen werde.
 */

// sort
// Sortiert das Array. Die Sortierung kann über einen optionalen Callback beeinflusst werden.
// ACHTUNG! Ohne sogenannten Comparator (die Callback Funktion) wird das Array alphabetisch sortiert.
// Das bedeutet bei [1, 2, 10] wird 10 vor 2 sortiert, da sie mit einer 1 beginnt => [1, 10, 2]

// Wir legen eine Kopie unseres Arrays an, damit wir das Original nicht verändern.
const exampleArrayCopyForSort = [...exampleArray]
exampleArrayCopyForSort.sort((a, b) => a - b)

console.log('exampleArrayCopyForSort', exampleArrayCopyForSort)

// ALTERNATIVE
// toSorted
// Gibt ein neues Array zurück, welches sortiert ist. Die Sortierung kann über einen optionalen Callback beeinflusst werden.
// Diese Methode ist noch nicht im Standard enthalten, wird aber bald kommen.
const sortedArray = exampleArray.toSorted((a, b) => a - b)

console.log('sortedArray', sortedArray)

// reverse
// Dreht die Reihenfolge der Werte im Array um.

// Wir legen eine Kopie unseres Arrays an, damit wir das Original nicht verändern.
const exampleArrayCopyForReverse = [...exampleArray]
exampleArrayCopyForReverse.reverse()

console.log('exampleArrayCopyForReverse', exampleArrayCopyForReverse)

// ALTERNATIVE
// toReversed
// Gibt ein neues Array zurück, welches die Reihenfolge der Werte im Array umgedreht hat.
// Diese Methode ist noch nicht im Standard enthalten, wird aber bald kommen.
const reversedArray = exampleArray.toReversed()

console.log('reversedArray', reversedArray)
