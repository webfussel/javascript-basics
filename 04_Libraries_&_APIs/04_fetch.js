console.log('Fetch')

/**
 * Fetch ist eine seit ES6 eingebaute Methode, um Daten von einem Server zu holen.
 * Früher mussten wir komplizierte XMLHttpRequests machen, um Daten zu holen, inzwischen haben wir es aber echt leicht.
 *
 * Wir nutzen hier als Beispiel JSONPlaceholder, eine Fake API, die uns Daten liefert.
 */

const getData = async (url) => {
    try {
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
    } catch (e) {
        console.error(e)
    }
}

// Wir holen uns das dritte todo aus der API
// getData('https://jsonplaceholder.typicode.com/todos/3')

// Theoretisch können wir auch alle anderen HTTP Request Methoden verwenden, da wir fetch auch sehr viele Optionen übergeben können
// POST würde laut standard Daten schreiben, bzw auch im Hintergrund an den Server schicken.
// Die anderen HTTP Methoden sind PUT, DELETE, PATCH, HEAD, OPTIONS, TRACE, CONNECT

const postData = async (url, data) => {
    try {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data)
        })
        const res = await response.json()
        console.log(res)
    } catch (e) {
        console.error(e)
    }
}

// Wir schicken ein neues todo an die API
// Als Antwort bekommen wir vom Server die ID des neuen todos
// postData('https://jsonplaceholder.typicode.com/todos', {
//     title: 'new todo',
//     completed: false,
//     userId: 1
// })

// Wenn wir jetzt beides verbinden wollen: Ein Todo anlegen und das Todo dann sofort wieder zurückerzahteln,
// dann würden wir so arbeiten:

const postAndGetData = async (url, data) => {
    try {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data)
        })
        const res = await response.json()
        console.log(res)
        const response2 = await fetch(`${url}/${res.id}`)
        const res2 = await response2.json()
        console.log(res2)
    } catch (e) {
        console.error(e)
    }
}

// Wir erstellen ein Todo und lassen es uns gleich vom Server zurückgeben
// postAndGetData('https://jsonplaceholder.typicode.com/todos', {
//     title: 'Post Data and get it back',
//     completed: true,
//     userId: 1
// })

// ... Eigentlich. Denn die FakeAPI erlaubt natürlich keine Neuanlagen. So wäre zwar die neue ID 201, aber es gibt kein Todo mit der ID 201, da wir
// in Wirklichkeit gar nichts angelegt haben.

// Wir können fetch requests auch abbrechen.
// Dazu erstellen wir einen sogenannten AbortController, der uns einen AbortSignal gibt.
const abortController = new AbortController()
const abortSignal = abortController.signal

const abortMe = async (url) => {
    try {
        const response = await fetch(url, {
            signal: abortSignal
        })
        console.log('Download complete', response)
    } catch (e) {
        console.error('Something went wrong!', e)
    }
}

abortMe('https://fastest.fish/test-files') // <- Das ist einfach eine große website, die wir herunterladen, um dann abzubrechen
setTimeout(() => {
    console.log('ABORTING')
    abortController.abort()
}, 10)
