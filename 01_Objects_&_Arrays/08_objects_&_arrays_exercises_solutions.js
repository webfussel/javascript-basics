console.log('Objects & Arrays - Exercises')

const warLordsOfTheSea = [
    {
        name: 'Mihawk Dulacre Falkenauge',
        description: 'Greates Swordsman in the World',
        exBounty: 'unknown',
        devilFruit: 'unknown',
    },
    {
        name: 'Jimbei',
        description: 'Knight of the Sea',
        exBounty: 'unknown',
        devilFruit: 'unknown',
    },
    {
        name: 'Donquixote Doflamingo',
        description: 'Heavenly Yaksha',
        exBounty: 340_000_000,
        devilFruit: 'Ito Ito Fruit',
    },
    {
        name: 'Bartholomew Kuma',
        description: 'Tyrant',
        exBounty: 296_000_000,
        devilFruit: 'Ursus Ursus Fruit',
    },
    {
        name: 'Gecko Moria',
        description: 'None',
        exBounty: 320_000_000,
        devilFruit: 'Kage Kage Fruit',
    },
    {
        name: 'Marshall D. Teach',
        description: 'Blackbeard',
        exBounty: null,
        devilFruit: 'Yami Yami Fruit',
    },
    {
        name: 'Boa Hancock',
        description: 'Pirate Empress',
        exBounty: 80_000_000,
        devilFruit: 'Mero Mero Fruit',
    }
]

// Aufgabe 1:
// Erstelle eine Funktion, die ein Array von Objekten entgegennimmt und die Namen der Personen ausgibt.
const task1 = arr => arr?.forEach(element => console.log('Aufgabe 1:', element.name))
task1(warLordsOfTheSea)

// Aufgabe 2:
// Erstelle eine Funktion, die ein Array von Objekten entgegennimmt und die Namen der Personen ausgibt, die eine Teufelsfrucht besitzen.
const task2 = arr => arr?.filter(element => element.devilFruit !== 'unknown').forEach(element => console.log('Aufgabe 2:', element.name))
task2(warLordsOfTheSea)

// Aufgabe 3:
// Filtere alle Personen aus, die keine Teufelsfrucht haben, sodass nur noch Personen mit Teufelsfrucht im neuen Array sind.
const task3 = warLordsOfTheSea.filter(element => element.devilFruit !== 'unknown')
console.log('Aufgabe 3:', task3)

// Aufgabe 4:
// Sortiere das Array nach der Höhe des Kopfgelds, absteigend.
const warlordsCopy = [...warLordsOfTheSea]
warlordsCopy.sort((a,b) => {
    const valA = a.exBounty === 'unknown' || a.exBounty === null ? 0 : a.exBounty
    const valB = b.exBounty === 'unknown' || b.exBounty === null ? 0 : b.exBounty

    return valB - valA
})
console.log('Aufgabe 4:', warlordsCopy)

// Aufgabe 5:
// Das Array ist zu unleserlich. Die Weltregierung braucht eine simple übersicht mit dem Namen der Person und der Höhe des Kopfgelds.
// Wenn das Kopfgeld unbekannt oder null ist, soll es durch 0 ersetzt werden.
// Beispiel:
// {
//     'Mihawk Dulacre Falkenauge': 0,
//     'Jimbei': 0,
//     'Donquixotte Donflamingo': 340_000_000,
//     ...
// }
// Das Objekt soll programmatisch erstellt werden. NICHT PER HAND!
const reduce = (result, current) => {
    const key = current.name
    const value = current.exBounty === 'unknown' || current.exBounty === null ? 0 : current.exBounty

    result[key] = value
    return result
}

const task5 = warLordsOfTheSea.reduce(reduce, {})
console.log('Aufgabe 5:', task5)

// Aufgabe 6:
// Vier Samurai wurden entweder entfernt, getötet oder sind ausgetreten.
// Lösche Doflamingo, Gecko Moria, Jimbei und Blackbeard.
// (Verändere das vorhandene Array. Erstelle kein neues.)
warLordsOfTheSea.splice(1, 2)
warLordsOfTheSea.splice(2, 2)
console.log('Aufgabe 6:', warLordsOfTheSea)

// Aufgabe 7:
// Vor ihrer Auflösung bestanden die Samurai noch aus 5 Mitgliedern.
// Mihawk, Kuma und Hancock waren schon dabei.
// Füge Buggy und Edward Weevil ans Ende des Arrays hinzu.
// Nutze dafür NICHT die push- oder unshift-Methoden.
// Erstelle eine neue Variable 'lastKnownWarlords' und weise ihr das neue Array zu.
// Buggy | 'The Clown' | 15_000_000 | Bara Bara Fruit
// Edward Weevil | 'Whitebeard Jr.' | 480_000_000 | unknown
const lastKnownWarlords = [...warLordsOfTheSea, {
    name: 'Buggy',
    description: 'The Clown',
    exBounty: 15_000_000,
    devilFruit: 'Bara Bara Fruit',
}, {
    name: 'Edward Weevil',
    description: 'Whitebeard Jr',
    exBounty: 480_000_000,
    devilFruit: 'unkown',
}]
console.log('Aufgabe 7:', lastKnownWarlords)

// Aufgabe 8:
// Sortiere das Array noch einmal, diesmal nach dem Namen, alphabetisch.
// Ziehe dann den ersten und den letzten Eintrag aus dem Array.
// Gib die Namen der beiden Personen aus.
// Nutze nicht die pop- oder shift-Methoden und auch nicht den direkten Zugriff auf das Array per Index.
lastKnownWarlords.sort((a, b) => {
    const valA = a.name
    const valB = b.name

    if (valA < valB) {
        return -1
    }

    if (valB < valA) {
        return 1
    }

    return 0
})

const [first,,,,last] = lastKnownWarlords

console.log('Aufgabe 8:', first, last)
console.log('Aufgabe 8:', lastKnownWarlords)
