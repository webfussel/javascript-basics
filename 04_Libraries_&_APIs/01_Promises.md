# JavaScript Promises und Fehlerbehandlung

JavaScript Promises sind ein Konzept, um asynchrone Operationen zu handhaben und sicherzustellen, dass der Code erst dann ausgeführt wird, wenn die Operation abgeschlossen ist, sei es erfolgreich oder mit einem Fehler. Ein Promise repräsentiert eine zukünftige Wertberechnung und kann in einen von drei Zuständen sein: ausstehend (pending), erfüllt (fulfilled), oder abgelehnt (rejected).

## `.then`-Methode

Die `.then`-Methodenaufrufe werden an ein Promise angehängt und akzeptieren eine oder zwei Funktionen. Die erste Funktion wird ausgeführt, wenn das Promise erfolgreich erfüllt wird (resolved), und die zweite Funktion wird ausgeführt, wenn es abgelehnt wird (rejected).

```someAsyncFunction()
  .then(result => {
    // Erfolgreiche Verarbeitung
  })
  .catch(error => {
    // Fehlerbehandlung
  });
```
## `.catch`-Methode

Die `.catch`-Methode wird verwendet, um Fehler in Promises zu behandeln. Sie ist äquivalent zur zweiten Funktion in `.then`, die aufgerufen wird, wenn das Promise abgelehnt wird (rejected).

```someAsyncFunction()
  .then(result => {
    // Erfolgreiche Verarbeitung
  })
  .catch(error => {
    // Fehlerbehandlung
  });
```
## `try...catch`-Anweisung

Die `try...catch`-Anweisung ist ein grundlegendes JavaScript-Konzept, das verwendet wird, um Fehler in synchronem Code abzufangen. In Kombination mit Promises kann es verwendet werden, um Fehler in `.then`-Blöcken zu behandeln.

```try {
  const result = await someAsyncFunction();
  // Erfolgreiche Verarbeitung
} catch (error) {
  // Fehlerbehandlung
}
```
## `async/await`
`async` und `await` sind JavaScript-Schlüsselwörter, die die Verwendung von Promises vereinfachen und asynchronen Code lesbarer machen. Die `async`-Funktion markiert eine Funktion als asynchron, während `await` innerhalb der Funktion verwendet wird, um auf das Ergebnis eines Promises zu warten.

```async function doSomething() {
  try {
    const result = await someAsyncFunction();
    // Erfolgreiche Verarbeitung
  } catch (error) {
    // Fehlerbehandlung
  }
}
```
Mit Promises, `.then`, `.catch`, `try...catch` und `async/await` kannst du asynchrone Operationen in JavaScript effektiv handhaben und Fehlerbehandlung implementieren, um sicherzustellen, dass deine Anwendungen zuverlässig funktionieren, selbst wenn es zu Fehlern kommt.
