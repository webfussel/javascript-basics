console.log('Asynchronity')

/**
 * Asynchronität ist ein Konzept, das in JavaScript sehr wichtig ist.
 * Wir arbeiten in JavaScript nur auf einem Thread, was bedeutet, dass wir nur eine Sache gleichzeitig tun können.
 * Wenn wir also auf eine Antwort vom Server warten, können wir in der Zwischenzeit nichts anderes tun.
 * Das ist natürlich nicht sehr praktisch, da wir in der Zwischenzeit andere Dinge tun könnten.
 */

// Wir haben schon Promises kennen gelernt, welche uns das asynchrone Arbeiten deutlich erleichtern.
// Aber auch andere Dinge sind asynchron, wie zum Beispiel das Laden von Bildern oder setTimeout.

setTimeout(() => {
    console.log('setTimeout')
}, 1000)
console.log('direkter log')

/**
 * Selbst wenn wir bei setTimeout 0ms angeben, wird der Code erst nach dem direkten log ausgeführt.
 * Woran liegt das?
 * Das liegt daran, dass der Code in der Callback Funktion erst ausgeführt wird, wenn der Stack leer ist.
 * Der Stack ist eine Liste von Funktionen, die ausgeführt werden müssen.
 * Wenn eine Funktion ausgeführt wird, wird sie dem Stack hinzugefügt.
 * Wenn sie fertig ausgeführt wurde, wird sie aus dem Stack entfernt.
 * Wenn der Stack leer ist, wird die nächste Funktion ausgeführt.
 * Das ist ein sehr wichtiges Konzept, das wir uns merken sollten.
*/

// Wir können uns den Stack auch anschauen.
// Dazu verwenden wir die Funktion console.trace()
const trace = () => {
    console.trace('trace')
}

const someFunc = () => {
    trace()
}

someFunc()

// Der Stack ist hier also die Reihenfolge, in der die Funktionen ausgeführt werden, bis wir zum trace kamen.

// JavaScript arbeitet mit einem Event Loop.
// Der Event Loop ist eine Schleife, die immer wieder ausgeführt wird.
// In jeder Iteration wird der Stack überprüft.
// Wenn der Stack leer ist, wird der Event Loop beendet.
// Wenn der Stack nicht leer ist, wird die nächste Funktion ausgeführt.
