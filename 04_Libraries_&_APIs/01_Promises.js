console.log('Promises')

// Dies ist unser Standardobjekt, mit dem wir in diesem Dokument arbeiten werden.
const strawhatPirates = [
    {
        name: 'Monkey D. Luffy',
        position: 'Captain',
        bounty: 150000000
    },
    {
        name: 'Roronoa Zoro',
        position: 'Swordsman',
        bounty: 32000000
    },
    {
        name: 'Nami',
        position: 'Navigator',
        bounty: 66000000
    },
    {
        name: 'Usopp',
        position: 'Sniper',
        bounty: 20000000
    },
    {
        name: 'Sanji',
        position: 'Cook',
        bounty: 77000000
    },
    {
        name: 'Tony Tony Chopper',
        position: 'Doctor',
        bounty: 100
    },
    {
        name: 'Nico Robin',
        position: 'Archaeologist',
        bounty: 130000000
    },
    {
        name: 'Franky',
        position: 'Shipwright',
        bounty: 94000000
    },
    {
        name: 'Brook',
        position: 'Musician',
        bounty: 83000000
    },
    {
        name: 'Jinbe',
        position: 'Helmsman',
        bounty: 438000000
    },
]

/**
 * Promises sind ein Konzept, um asynchrone Operationen zu handhaben.
 * Sie sind ein Objekt, das einen asynchronen Vorgang repräsentiert, der in der Zukunft abgeschlossen wird.
 * Ein Promise kann in einem der drei Zustände sein:
 * - pending: Der initiale Zustand, bevor der Promise abgeschlossen oder abgelehnt wird.
 * - fulfilled: Der Vorgang wurde erfolgreich abgeschlossen.
 * - rejected: Der Vorgang wurde mit einem Fehler abgebrochen.
 */

// Wir simulieren eine Verbindung zu einem Server.
// Es dauert mindestens 1 Sekunde, bis wir die Antwort erhalten.
// Wir erstellen zwei Objekte: Eines geht gut, eines geht schief.
const strawhatPiratesPromiseResolves = new Promise((resolve) => {
    // Hier wird ein asynchroner Vorgang simuliert, der in der Zukunft abgeschlossen wird.
    setTimeout(() => {
        resolve(strawhatPirates)
    }, 1000)
})

const strawhatPiratesPromiseRejects = new Promise((resolve, reject) => {
    // Hier wird ein asynchroner Vorgang simuliert, der in der Zukunft abgeschlossen wird.
    setTimeout(() => {
        reject('omg something went wrong')
    }, 1000)
})

// Wir sehen, dass folgende Ausgaben den Status pending haben, was bedeutet, dass der Vorgang noch nicht abgeschlossen wurde.
console.log('strawhatPiratesPromiseResolves:', strawhatPiratesPromiseResolves)
console.log('strawhatPiratesPromiseRejects:', strawhatPiratesPromiseRejects)

// Wir können nun auf den Vorgang warten, bis er abgeschlossen wurde.
// Dazu verwenden wir die Methode then()
strawhatPiratesPromiseResolves.then((data) => {
    // Wenn der Vorgang erfolgreich abgeschlossen wurde, wird diese Funktion ausgeführt.
    console.log('strawhatPiratesPromiseResolves:', data)
})

// Falls der Vorgang fehlschlägt, können wir das mit der Methode catch() abfangen.
strawhatPiratesPromiseRejects.catch((error) => {
    // Wenn der Vorgang fehlschlägt, wird diese Funktion ausgeführt.
    console.log('strawhatPiratesPromiseRejects:', error)
})

// Da wir nicht wissen, wann der Vorgang abgeschlossen wird, können wir nicht sicher sein, in welcher Reihenfolge die Ausgaben erscheinen.
// Da wir auch nicht wissen, ob alles gut geht oder nicht, können wir then und catch auch verbinden.

const strawhatPiratesPromiseRandomlyFails = new Promise((resolve, reject) => {
    // Hier wird ein asynchroner Vorgang simuliert, der in der Zukunft abgeschlossen wird.
    setTimeout(() => {
        if (Math.random() > 0.5) {
            resolve(strawhatPirates)
        } else {
            reject('omg something went wrong')
        }
    }, 1000)
})

strawhatPiratesPromiseRandomlyFails.then((data) => {
    // Wenn der Vorgang erfolgreich abgeschlossen wurde, wird diese Funktion ausgeführt.
    console.log('strawhatPiratesPromiseRandomlyFails:', data)
}).catch((error) => {
    // Wenn der Vorgang fehlschlägt, wird diese Funktion ausgeführt.
    console.log('strawhatPiratesPromiseRandomlyFails:', error)
})
