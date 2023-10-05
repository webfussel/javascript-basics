console.log('Objects - Basics')
/**
 * Genau wie Arrays sind Objekte Sammlungen von Werten.
 * Im Gegensatz zu Arrays sind Objekte aber nicht geordnet.
 * Während ein Array einer Liste gleicht, ist ein Object eher mit einem Wörterbuch zu vergleichen.
 */

/**
 * Objekte werden mit geschweiften Klammern erstellt.
 * Die Werte werden mit Kommas getrennt.
 * Jeder Wert wird als Schlüssel-Wert-Paar bezeichnet.
 * Der Schlüssel ist dabei immer ein String.
 * Der Wert kann ein beliebiger Datentyp sein.
 * Der Schlüssel und der Wert werden mit einem Doppelpunkt getrennt.
 */
const luffy = {
    name: 'Monkey D. Ruffy',
    devilFruit: 'Gum Gum Fruit',
    position: 'Captain',
    deleteMe: 'ok',
}

console.log('luffy - fresh', luffy)

/**
 * Es ist möglich dem Objekt nachträglich weitere Schlüssel-Wert-Paare hinzuzufügen.
 * Es ist auch möglich Schlüssel-Wert-Paare zu überschreiben oder zu löschen.
 */
luffy.willBeKingOfPirates = true
luffy.position = 'King of Pirates'
delete luffy.deleteMe

console.log('luffy - edited', luffy)

/**
 * Objekte können andere Objekte und Arrays beinhalten.
 */
const nami = {
    name: 'Nami',
    devilFruit: null,
    position: 'Navigator',
}

const usopp = {
    name: 'Usopp',
    devilFruit: null,
    position: 'Sniper',
}

const chopper = {
    name: 'Tony Chopper',
    devilFruit: 'Human Human Fruit',
    position: 'Doctor',
}

const strawHatPirates = {
    captain: luffy,
    crew: [
        luffy,
        nami,
        usopp,
        chopper,
    ],
    ship: {
        name: 'Thousand Sunny',
        maxSpeed: 100,
        cannons: 56,
    }
}

console.log('strawHatPirates', strawHatPirates)

/**
 * Keys sind case sensitive!
 */
console.log('strawHatPirates - captain', strawHatPirates.captain)
console.log('strawHatPirates - Captain', strawHatPirates.Captain)

console.log('Ship', strawHatPirates.ship.name)

const bla = {
    name: 'asdf',
    Name: 'asdf',
    nAme: 'asdas',
    naMe: 'asdasf',
}
