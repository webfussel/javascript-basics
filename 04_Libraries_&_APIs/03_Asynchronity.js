console.log('Asynchronity')

/**
 * Asynchronität ist ein Konzept, das in JavaScript sehr wichtig ist.
 * Wir arbeiten in JavaScript nur auf einem Thread, was bedeutet, dass wir nur eine Sache gleichzeitig tun können.
 * Wenn wir also auf eine Antwort vom Server warten, können wir in der Zwischenzeit nichts anderes tun.
 * Das ist natürlich nicht sehr praktisch, da wir in der Zwischenzeit andere Dinge tun könnten.
 */

// Wir haben schon Promises kennen gelernt, welche uns das asynchrone Arbeiten deutlich erleichtern.
// Aber auch andere Dinge sind asynchron, wie zum Beispiel das Laden von Bildern oder setTimeout.


// In folgendem Beispiel sind die Ausführungszeiten von setTimeout und Promise.resolve() quasi sofort und gleichzeitig.
// Dennoch wird der Callback von setTimeout erst nach dem Callback von Promise.resolve() ausgeführt, obwohl er zuerst aufgerufen wurde.
const cb3 = () => 3
const cb2 = () => cb3()
const cb1 = () => cb2()

const promiseTimeout = () => new Promise((resolve) => {
    setTimeout(() => resolve('Promise Timeout'))
})

console.log('Start') // <-- Kommt direkt auf den Stack
promiseTimeout().then((data) => console.log(data)) // <-- Kommt in die Microtask Queue, aber nach Promise ohne Timeout
setTimeout(() => console.log('Timeout')) // <-- Kommt in die Callback Queue (aka Macrotask Queue)
Promise.resolve().then(() => console.log('Promise')) // <-- Kommt in die Microtask Queue

console.log('Callbacks', cb1()) // <-- Kommt direkt auf den Stack
console.log('End') // <-- Kommt direkt auf den Stack

/**
 * Wichtig daran ist, dass die Reihenfolge der Ausgabe nicht der Reihenfolge der Aufrufe entspricht.
 * Folgende Reihenfolge ist grob zu beachten:
 *
 * 1. Der Stack wird abgearbeitet.
 * 2. Die Microtask Queue wird abgearbeitet, bis sie leer ist.
 *    2.1 Theoretisch kann sich diese Microtask Queue wieder füllen, während sie abgearbeitet wird.
 * 3. Es wird ein Task aus der Callback Queue ausgeführt.
 * 4. Zurück zu 1.
 */

/**
 * In JavaScript gibt es mehrere Arten von Macrotasks und Microtasks.
 * Auch diese haben eine Reihenfolge, wie sie in der Runtime abgearbeitet werden.
 * Da dies allerdings nicht konsistent ist, sollten wir uns darauf nicht verlassen.
 * Sie wäre sowieso nur ein kleiner Teil des gesamten Bildes.
 */
