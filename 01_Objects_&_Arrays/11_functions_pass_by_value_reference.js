console.log('Functions - Pass by Value & Reference')

let i = 0
/**
 * Wenn wir mit Funktionen arbeiten, müssen wir uns mit dem Thema "Pass by Value & Reference" auseinandersetzen.
 * Wir haben bereits gelernt, dass es in JavaScript zwei grundlegende Arten von Objekten gibt:
 * Primitive Datentypen und komplexe Datentypen.
 * Primitive Datentypen sind: number, string, boolean, null, undefined, symbol
 * Komplexe Datentypen sind: object, array, function
 *
 * Wenn wir diese Daten an Funktionen übergeben hat das einige Implikationen.
 */

function changePrimitiveData(data) {
    data = 'I am changed'
}

function changeComplexData(data) {
    data.name = 'I am changed'
}

let primitiveData = 'I am not changed'
let complexData = {
    name: 'I am not changed'
}

changePrimitiveData(primitiveData)
changeComplexData(complexData)

console.log('primitiveData', primitiveData)
console.log('complexData', complexData)

/**
 * Warum passiert das?
 * Primitive Datentypen werden als Wert übergeben.
 * Das bedeutet, dass die Funktion eine Kopie des Wertes bekommt.
 * Wenn wir den Wert in der Funktion ändern, ändern wir nur die Kopie.
 * Die Variable außerhalb der Funktion bleibt unverändert.
 *
 * Komplexe Datentypen werden als Referenz übergeben.
 * Das bedeutet, dass die Funktion eine Referenz auf das Objekt bekommt.
 * Eine Referenz ist dabei nur ein Zeiger auf einen bestimmten Punkt im Speicher, wo das Objekt liegt.
 * Wenn wir das Objekt in der Funktion ändern, ändern wir das Objekt selbst.
 * Die Variable außerhalb der Funktion zeigt auf das gleiche Objekt.
 */

console.log('Functions - Pure and Impure Functions')

/**
 * Eine Funktion ist dann eine "Pure Function", wenn sie keine Seiteneffekte hat.
 * Das bedeutet, dass sie keine Variablen außerhalb der Funktion verändert.
 * Sie verändert nur die Daten, die ihr übergeben werden.
 * Sie gibt auch immer einen Wert zurück.
 * Dadurch wird sie immer den selben Wert für den selben Input liefern.
 */

function pureFunction(data) {
    return data + ' - I am pure'
}

const add = (a, b) => a + b

function impureFunction(data) {
    return data + ` - I am impure ${i++}`
}

console.log('pureFunction', pureFunction('Hello'))
console.log('pureFunction', pureFunction('Hello'))
console.log('pureFunction', pureFunction('Hello'))

console.log('impureFunction', impureFunction('Hello'))
console.log('impureFunction', impureFunction('Hello'))
console.log('impureFunction', impureFunction('Hello'))

/**
 * Warum ist das wichtig?
 * Wenn wir eine Funktion haben, die immer den selben Wert für den selben Input liefert,
 * können wir sie überall einsetzen, wo wir diesen Wert brauchen.
 * Wir können sie auch in anderen Funktionen einsetzen.
 * Dies ist vor allem wichtig, wenn man funktional entwickelt.
 * Also gerade bei Frameworks wie React oder Vue.
 */
