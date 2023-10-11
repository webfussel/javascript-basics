console.log('Functions - Properties, Callbacks & this')

/**
 * ALLES in JavaScript ist ein Objekt.
 * Auch Funktionen.
 * Funktionen sind Objekte, die Code ausführen können.
 * Sie können auch als Parameter übergeben, als Rückagabewerte definiert und in Variablen gespeichert werden.
 */

const iAmAFunction = () => {
    console.log('I am a function')
}

// Wir können Funktionen als Parameter übergeben.
const iAmAHigherOrderFunction = (fn) => {
    console.log('I am a higher order function')
    fn()
}

iAmAHigherOrderFunction(iAmAFunction)

// Wir können Funktionen als Rückgabewerte definieren.
const iAmAHigherOrderFunction2 = () => {
    console.log('I am a higher order function')
    return () => {
        console.log('I am a return value. And also a function.')
    }
}

const returnValue = iAmAHigherOrderFunction2()
returnValue()

/**
 * Da Funktionen Objekte sind, können wir ihnen auch Eigenschaften zuweisen.
 * Wir können ihnen sogar Eigenschaften zuweisen, die Funktionen sind.
 * Diese Funktionen können dann auf die Eigenschaften der Funktion zugreifen.
 */

const iAmAFunctionWithProperties = () => {
    console.log('I am a function with properties')
}

iAmAFunctionWithProperties.property = 'I am a property'
iAmAFunctionWithProperties.propertyFunction = () => {
    console.log('I am a property function')
    console.log('I can access the property of the function:', iAmAFunctionWithProperties.property)
}

iAmAFunctionWithProperties()
console.log(iAmAFunctionWithProperties.property)
iAmAFunctionWithProperties.propertyFunction()

/**
 * Funktionen können auch teil von Objekten sein.
 * Hier gibt es mehrere schreibweisen.
 */
const functionContainer = {
    name: 'I AM A BANANA',
    arrowFunction: (param1, param2) => {
        console.log('I am an arrow function', this.name, param1, param2)
    },
    functionDeclaration: function (param1, param2) {
        console.log('I am a function declaration', this.name, param1, param2)
    },
    betterFunctionDeclaration(param1, param2) {
        console.log('I am a better function declaration', this.name, param1, param2)
    }
}

functionContainer.arrowFunction('Parameter1', 'Parameter2')
functionContainer.functionDeclaration('Parameter1', 'Parameter2')
functionContainer.betterFunctionDeclaration('Parameter1', 'Parameter2')

// HAHA, ABER!!!
const arrowFunction = functionContainer.arrowFunction
const functionDeclaration = functionContainer.functionDeclaration
const betterFunctionDeclaration = functionContainer.betterFunctionDeclaration

arrowFunction('Parameter1', 'Parameter2')
functionDeclaration('Parameter1', 'Parameter2')
betterFunctionDeclaration('Parameter1', 'Parameter2')

/**
 * Was ist hier passiert?
 * Die Funktionen haben ihre Eigenschaften verloren.
 * Das liegt daran, dass die Funktionen ihre Eigenschaften über das 'this' Keyword ansprechen.
 * Das 'this' Keyword ist ein Zeiger auf das Objekt, in dem die Funktion definiert ist.
 * Wenn wir die Funktionen aus dem Objekt nehmen, verlieren sie ihren Zeiger.
 * Das 'this' Keyword zeigt dann auf das globale Objekt, also das window (im Browser).
 * In NodeJS geht der Zeiger einfach verloren und wir bekommen undefined.
 */

// bind
// Wir können das 'this' Keyword aber auch manuell setzen.
// Dafür gibt es die Funktion 'bind'.
// Diese Funktion gibt eine neue Funktion zurück, die das 'this' Keyword auf das erste Argument setzt.
// Wir können also die Funktionen nehmen und ihnen das Objekt als 'this' übergeben.
const arrowFunctionWithThis = arrowFunction.bind(functionContainer)
const functionDeclarationWithThis = functionDeclaration.bind(functionContainer)
const betterFunctionDeclarationWithThis = betterFunctionDeclaration.bind(functionContainer)

arrowFunctionWithThis('Parameter1', 'Parameter2')
functionDeclarationWithThis('Parameter1', 'Parameter2')
betterFunctionDeclarationWithThis('Parameter1', 'Parameter2')

// Was hier auffällt: Die Arrow Function hat immer noch kein 'this'.
// Das liegt daran, dass Arrow Functions allgemein kein 'this' kennen.
// Sie haben immer das 'this' des umgebenden Kontextes.
// Auf NodeJS ist es in diesem Falle ein leeres Objekt.
// Im Browser ist es das window.

// call
// Wir können das 'this' Keyword auch direkt setzen, indem wir die Funktion aufrufen.
// Dafür gibt es die Funktion 'call'.
// Diese Funktion ruft die Funktion direkt auf und setzt das 'this' Keyword auf das erste Argument.
// Wir können also die Funktionen nehmen und ihnen das Objekt als 'this' übergeben.
arrowFunction.call(functionContainer, 'Parameter1', 'Parameter2')
functionDeclaration.call(functionContainer, 'Parameter1', 'Parameter2')
betterFunctionDeclaration.call(functionContainer, 'Parameter1', 'Parameter2')

// apply
// Wir können das 'this' Keyword auch direkt setzen, indem wir die Funktion aufrufen.
// Dafür gibt es die Funktion 'apply'.
// Diese Funktion ruft die Funktion direkt auf und setzt das 'this' Keyword auf das erste Argument.
// Der Unterschied zu call ist, dass apply ein Array als zweites Argument erwartet.
arrowFunction.apply(functionContainer, ['Parameter1', 'Parameter2'])
functionDeclaration.apply(functionContainer, ['Parameter1', 'Parameter2'])
betterFunctionDeclaration.apply(functionContainer, ['Parameter1', 'Parameter2'])

/**
 * Wenn ihr sauberen Code schreibt, dann braucht ihr diese Funktionen meistens nicht.
 * Sie lassen sich durch gute Strukturierung vermeiden.
 * Aber manchmal sind sie einfach praktisch, vor allem wenn ihr alten Code anfassen müsst.
 * Dann könnt ihr sie nutzen, um das 'this' Keyword zu setzen.
 */
