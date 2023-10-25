console.log('Promises - Exercises')

// Aufgabe 1: Erstelle eine Funktion, die ein Promise zurückgibt.
// Die Funktion soll eine Zahl entgegen nehmen.
// Diese Zahl stellt die Zeit in Sekunden dar, die vergehen soll, bis das Promise erfüllt wird.
// Das Promise soll dabei einen String zurückgeben, der ein zufälliges Passwort enthält.
const generatePassword = () => {
    const strCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let strPassword = ''
    for (let i = 0; i < 8; i++) {
        strPassword += strCharacters.charAt(Math.floor(Math.random() * strCharacters.length))
    }
    return strPassword
}

const generatePasswordPromise = (seconds) => new Promise((resolve) => {
    setTimeout(() => {
        resolve(generatePassword())
    }, seconds * 1000)
})

generatePasswordPromise(4)
    .then((data) => console.log('Aufgabe 1 (4 Sekunden): ', data))

// Aufgabe 2: Erstelle eine Funktion, die ein Promise zurückgibt.
// Die Funktion soll einen String entgegen nehmen.
// Wenn der String ein valides Passwort ist, soll das Promise erfüllt werden.
// Passwortvorgaben: Mindestens 8 Zeichen, mindestens ein Großbuchstabe,
// mindestens eine Zahl, mindestens ein Kleinbuchstabe

const validatePassword = (pass) => new Promise((resolve, reject) => {
    if (pass.length < 8) reject('Password too short')
    if (!/[A-Z]/.test(pass)) reject('Password needs at least one uppercase letter')
    if (!/[a-z]/.test(pass)) reject('Password needs at least one lowercase letter')
    if (!/[0-9]/.test(pass)) reject('Password needs at least one number')
    resolve('Password is valid')
})

validatePassword('1234567')
    .then((data) => console.log('Aufgabe 2 (1234567): ', data))
    .catch((error) => console.log('Aufgabe 2 (1234567): ', error))
validatePassword('12345678')
    .then((data) => console.log('Aufgabe 2 (12345678): ', data))
    .catch((error) => console.log('Aufgabe 2 (12345678): ', error))
validatePassword('12345678a')
    .then((data) => console.log('Aufgabe 2 (12345678a): ', data))
    .catch((error) => console.log('Aufgabe 2 (12345678a): ', error))
validatePassword('12345678aA')
    .then((data) => console.log('Aufgabe 2 (12345678aA): ', data))
    .catch((error) => console.log('Aufgabe 2 (12345678aA): ', error))


// Aufgabe 3: Lass beide Promises parallel laufen und gib die Ergebnisse in der Konsole aus.

const task3 = async () => {
    try {
        const res = await Promise.all([
            generatePasswordPromise(2),
            validatePassword('12345678aA')
        ])
        console.log('Aufgabe 3 (12345678aA): ', res, 'resolved after 2 seconds')
    } catch (e) {
        console.error(e)
    }
}
task3()

// Aufgabe 4: Lass beide Promises nacheinander laufen
// Übergebe das Zufallspasswort von Aufgabe 1 an die Funktion von Aufgabe 2 und lass es so überprüfen.

const task4 = async () => {
    try {
        const pass = await generatePasswordPromise(2)
        const isValid = await validatePassword(pass)
        console.log(`Aufgabe 4 (${pass}): `, isValid)
    } catch (e) {
        console.error('Aufgabe 4, error:', e)
    }
}

task4()
