console.log('Objects & Arrays - Exercises')

const warLordsOfTheSea = [
    {
        name: 'Mihawk Dulacre Falkenauge',
        description: 'Greates Swordsman in the World',
        exBounty: 'unkown',
        devilFruit: 'unkown',
    },
    {
        name: 'Jimbei',
        description: 'Knight of the Sea',
        exBounty: 'unkown',
        devilFruit: 'unkown',
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

// Aufgabe 2:
// Erstelle eine Funktion, die ein Array von Objekten entgegennimmt und die Namen der Personen ausgibt, die eine Teufelsfrucht besitzen.

// Aufgabe 3:
// Filtere alle Personen aus, die keine Teufelsfrucht haben, sodass nur noch Personen mit Teufelsfrucht im Array neuen sind.

// Aufgabe 4:
// Sortiere das Array nach der Höhe des Kopfgelds, absteigend.

// Aufgabe 5:
// Das Array ist zu unleserlich. Die Weltregierung braucht eine simple übersicht mit dem Namen der Person und der Höhe des Kopfgelds.
// Wenn das Kopfgeld unbekannt ist, soll es durch 0 ersetzt werden.
// Beispiel:
// {
//     'Mihawk Dulacre Falkenauge': 0,
//     'Jimbei': 0,
//     'Don Quichotte de Flamingo': 340_000_000,
//     ...
// }
// Das Objekt soll programmatisch erstellt werden. NICHT PER HAND!

// Aufgabe 6:
// Vier Samurai wurden entweder entfernt, getötet oder sind ausgetreten.
// Lösche Doflamingo, Gecko Moria, Jimbei und Blackbeard.
// (Verändere das vorhandene Array. Erstelle kein neues.)


// Aufgabe 7:
// Vor ihrer Auflösung bestanden die Samurai noch aus 5 Mitgliedern.
// Mihawk, Kuma und Hancock waren schon dabei.
// Füge Buggy und Edward Weevil ans Ende des Arrays hinzu.
// Nutze dafür NICHT die push- oder unshift-Methoden.
// Erstelle eine neue Variable 'lastKnownWarlords' und weise ihr das neue Array zu.
// Buggy | 'The Clown' | 15_000_000 | Bara Bara Fruit
// Edward Weevil | 'Whitebeard Jr.' | 480_000_000 | unknown

// Aufgabe 8:
// Sortiere das Array noch einmal, diesmal nach dem Namen, alphabetisch.
// Ziehe dann den ersten und den letzten Eintrag aus dem Array.
// Gib die Namen der beiden Personen aus.
// Nutze nicht die pop- oder shift-Methoden und auch nicht den direkten Zugriff auf das Array per Index.
