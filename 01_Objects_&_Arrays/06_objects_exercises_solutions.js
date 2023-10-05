console.log('Objects - Exercises')
/**
 * Arbeitet in folgenden Aufgaben mit dem folgenden Objekt.
 * Wir bleiben bei One Piece. Ihr werdet also wohl oder übel etwas über Shōnen Anime lernen.
 */
const strawHatPirates = {
    captain: 'Monkey D. Ruffy',
    ship: 'Flying Lamb',
    crew: [
        'Roronoa Zoro',
        'Nami',
        'Sanji',
        'Tony Chopper',
        'Nico Robin',
        'Franky',
        'Brook',
        'Jinbei',
    ],
}

console.log('StrawHat Pirates', strawHatPirates)

// Aufgabe 1
// Gib den Namen des Kapitäns der Strohhutpiraten aus.
console.log('Aufgabe 1:', strawHatPirates.captain)
// Aufgabe 2
// Die Flying Lamb ist kaputt. Ersetze sie durch die Thousand Sunny.
strawHatPirates.ship = 'Thousand Sunny'
console.log('Aufgabe 2:', strawHatPirates.ship)

// Aufgabe 3
// Gib die Namen der ersten drei Crewmitglieder aus.
console.log('Aufgabe 3:', strawHatPirates.crew.slice(0, 3))

// Aufgabe 4
// Gib die Anzahl der Crewmitglieder aus.
console.log('Aufgabe 4:', strawHatPirates.crew.length)

// Aufgabe 5
// Ein Cremitglied fehlt. Füge es hinzu. (Usopp)
strawHatPirates.crew.push('Usopp')
console.log('Aufgabe 5:', strawHatPirates.crew)

// Aufgabe 6
// Wir brauchen mehr infos über das Schiff. Ersetze 'ship' mit einem Objekt mit den Infos über das Schiff. (name 'Thousand Sunny', maxSpeed 100, cannons 56)
strawHatPirates.ship = {
    name: 'Thousand Sunny',
    maxSpeed: 100,
    cannons: 56,
}

console.log('Aufgabe 6:', strawHatPirates.ship)
