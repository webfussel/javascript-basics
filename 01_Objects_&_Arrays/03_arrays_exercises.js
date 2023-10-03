console.log('Arrays - Exercises')
/**
 * Arbeitet in folgenden Aufgaben mit dem folgenden Array.
 * Falls hier jemand kein Anime mag, dann tut es mir nur halb leid.
 * Ich habe erst die Netflix Adapation von One Piece gesehen und fand sie zu gut, um damit jetzt nicht meine Aufgaben zu machen.
 * Die Leute vor euch hatten Pokémon. Könnt selbst entscheiden was ihr besser findet.
 */

const strawHatPirates = [
    'Monkey D. Ruffy',
    'Roronoa Zoro',
    'Nami',
    'Sanji',
    'Tony Chopper',
    'Nico Robin',
    'Franky',
    'Brook',
    'Jinbei',
    'Usopp',
]

console.log(strawHatPirates)

// Aufgabe 1
// Gib den Namen des Kapitäns der Strohhutpiraten aus. (Für alle nicht-weebs: Es ist Ruffy)
console.log('Aufgabe 1:', strawHatPirates[0])

// Aufgabe 2
// Sortiere die Crewmitglieder umgekehrt alphabetisch und gib sie aus.
const task2 = strawHatPirates.toSorted().toReversed()
console.log('Aufgabe 2:', task2)

// Aufgabe 3
// Gib die Namen der ersten drei Crewmitglieder nach dem Sortieren aus.
const task3 = []
for (let i = 0; i < 3; i++) {
    task3.push(task2[i])
}
console.log('Aufgabe 3:', task3)

// Aufgabe 4
// Filtere alle Crewmitglieder aus, die nur einen Namen haben, sodass nur die mit mehreren Namen übrig bleiben.
const task4 = strawHatPirates.filter(element => element.includes(' '))
console.log('Aufgabe 4:', task4)

// Aufgabe 5
// Gib die Namen aller Crewmitglieder aus, die mehr als 8 Buchstaben in ihrem Namen haben.

// Aufgabe 6
// Erstelle programmatisch ein Array, dass die Anzahl der Zeichen in den Namen der Crewmitglieder enthält.
