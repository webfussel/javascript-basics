console.log('Objects & Arrays - Advanced')
/**
 * Die meisten Datenstrukturen werden mit einer Mischung aus Arrays und Objekten aufgebaut.
 * Hier ein Beispiel:
 */
const strawHatPirates = {
    captain: {
        name: 'Monkey D. Ruffy',
        devilFruit: 'Gum Gum Fruit',
        age: 19,
    },
    ship: {
        name: 'Thousand Sunny',
        maxSpeed: 100,
        cannons: 56,
    },
    crew: [
        {
            name: 'Roronoa Zoro',
            devilFruit: null,
            age: 21,
        },
        {
            name: 'Nami',
            devilFruit: null,
            age: 20,
        },
        {
            name: 'Sanji',
            devilFruit: null,
            age: 21,
        },
        // ...
    ]
}

console.log('strawHatPirates', strawHatPirates)

/**
 * Es gibt einen wichtigen Operator namens 'spread' bzw 'rest', je nach dem wofür er verwendet wird.
 * Dieser Operator wird mit drei Punkten geschrieben.
 * Er kann verwendet werden, um Arrays und Objekte zu zerlegen und zu erweitern.
 */

// Spread
// Im oberen Beispiel fehlen einige Crewmitglieder.
// Wir können sie mit dem Spread-Operator hinzufügen.
const strawHatPiratesWithMoreMembers = {
    ...strawHatPirates,
    crew: [
        ...strawHatPirates.crew,
        {
            name: 'Tony Chopper',
            devilFruit: 'Human Human Fruit',
            age: 17,
        },
        {
            name: 'Nico Robin',
            devilFruit: 'Flower Flower Fruit',
            age: 30,
        },
    ]
}

console.log('strawHatPiratesWithMoreMembers', strawHatPiratesWithMoreMembers)

// Rest
// Wir können den Spread-Operator auch verwenden, um Objekte und Arrays zu zerlegen.
// Wenn wir also nur gewisse Felder aus einem Object wollen, können wir den Rest Operator nutzen, um die restlichen Felder rauszuziehen.
// Hier nutzen wir zusätzlich das sogenannte 'destructuring'.
const { captain, ...restOfCrew } = strawHatPiratesWithMoreMembers
console.log('captain', captain)
console.log('restOfCrew', restOfCrew)

// Wir können den Rest-Operator auch verwenden, um nur gewisse Werte aus einem Array zu bekommen.
// Auch hier nutzen wir zusätzlich das sogenannte 'destructuring'.
const [firstCrewMember, secondCrewMember, ...restOfCrewMembers] = strawHatPiratesWithMoreMembers.crew
console.log('firstCrewMember', firstCrewMember)
console.log('secondCrewMember', secondCrewMember)
console.log('restOfCrewMembers', restOfCrewMembers)

// Zusätzlich ermöglichen uns Spread und Rest auch Arrays und Objekte oberflächlich zu kopieren.
const strawHatPiratesCopy = { ...strawHatPirates }
console.log('strawHatPiratesCopy', strawHatPiratesCopy)

const crew = [...strawHatPirates.crew]
console.log('crew', crew)
