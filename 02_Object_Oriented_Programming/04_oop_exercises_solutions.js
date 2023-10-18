/**
 * Ihr habt jetzt einiges über Objekte, Funktionen und sonstiges gelernt.
 * Mit den zusätzlichen Informationen zu Klassen könnt ihr jetzt schon sehr viel machen.
 * Zum Beispiel folgende Aufgaben lösen.
 *
 * Bei Fragen stehe ich euch natürlich jederzeit gerne zur Verfügung.
 *
 * Ihr müsst bei den folgenden Aufgaben natürlich nicht auf das Originalmaterial zurückgreifen.
 * Überlegt euch einfach irgendwelche Namen, Kopfgelder und Teufelsfrüchte.
 * (Das ist übrigens auch ein typisches Vorgehen beim Erstellen von Testdaten für echte Anwendungen.)
 */

// ACHTUNG! Alle Felder sollen privat sein und nur über getter von außen angesprochen werden können.

// Aufgabe 1: Erstelle eine Klasse "Pirate". Diese soll name, devilFruit und bounty als Eigenschaften haben.
// Beachte dabei die Datenkapselung und schreibe Guard Clauses für die setter eurer Eigenschaften, wo sie nötig sind.

// Aufgabe 2: Erstelle eine Klasse "Crew". Diese soll name, captain und members als Eigenschaften haben.
// Es gibt hier sehr viele Möglichkeiten, wie ihr die members definieren könnt. Sucht euch eine aus - aber nutzt Instanzen von Pirate.

// Aufgabe 3: Erstelle eine Methode in der Klasse "Pirate", die das Kopfgeld des Piraten mit dem Kopfgeld eines anderen Piraten vergleicht.
// Gebe aus, ob das Kopfgeld des Piraten höher, niedriger oder gleich hoch ist.
// Der andere Pirat soll als Übergabeparameter übergeben werden.

// Aufgabe 4: Erstelle eine Methode in der Klasse "Crew", die das Kopfgeld aller Mitglieder der Crew zusammenrechnet und ausgibt.

// Aufgabe 5: Erstelle eine Methode in der Klasse "Crew", welches ein Tupelarray aus Namen und Kopfgeldern entgegennimmt, die Cremitglieder
// erstellt und sie der Crew hinzufügt. (Wichtig: HINZUFÜGEN, nicht überschreiben)
// Beispiel für ein Tupelarray: [ ['Long John Silver', 140_000], ['Dynamite Dingo', 200_000] ]

// Aufgabe 6: Erstelle eine Methode in der Klasse "Crew", welche einen Namen erhält und dann das jeweilige Crewmitglied Kielholen lässt.
// (Kielholen: Man bindet den Piraten an den Füßen fest und wirft ihn über Bord. Er wird dann unter dem Schiff durchgezogen und stirbt.)
// ((Das müsst ihr natürlich nicht entwickeln. Es reichen Console logs.))
// Wenn ein Crewmitglied stirbt, ist es selbstverständlich nicht mehr Teil der Crew und muss entfernt werden.

// Aufgabe 7: Erstelle eine Klasse "RedRumPirate", die von der Klasse "Pirate" erbt.
// Überschreibe den setter des Feldes "name" so, dass der Name immer folgende Struktur haben muss:
// - 3 Teile getrennt durch ein Leerzeichen
// - Jeder Teil muss mit einem Großbuchstaben beginnen
// - Der erste Teil muss "Red" sein
// - Der zweite Teil muss aus 3-7 Buchstaben bestehen
// - Der dritte Teil muss aus 3-5 Buchstaben bestehen
// - Beispiel: "Red Whiskey Jack"
// IHR MÜSST REGEX NUTZEN!


// BONUS: Der zweite Teil des Namens muss einer aus einer Liste von verschiedenen Alkoholsorten entsprechen, die in einem Array abgelegt sind.
// (Tipp: RegExp Constructor statt /blabla/)

class Pirate {
    #name

    #devilFruit

    #bounty

    constructor(name, bounty, devilFruit) {
        this.#name = name
        this.#devilFruit = devilFruit
        this.#bounty = bounty
    }

    get name() {
        return this.#name
    }

    set name(value) {
        this.#name = value
    }

    get devilFruit() {
        return this.#devilFruit
    }

    set devilFruit(value) {
        this.#devilFruit = value
    }

    get bounty() {
        return this.#bounty
    }

    set bounty(value) {
        if (value < 0) {
            this.#bounty = 0
        }
        this.#bounty = value
    }

    compareBounty(otherPirate) {
        if (!(otherPirate instanceof Pirate)) throw new Error('otherPirate is not an instance of Pirate')

        if (this.bounty > otherPirate.bounty) {
            console.log(`${this.name} hat ein höheres Kopfgeld als ${otherPirate.name}.`)
        } else if (this.bounty < otherPirate.bounty) {
            console.log(`${this.name} hat ein niedrigeres Kopfgeld als ${otherPirate.name}.`)
        } else {
            console.log(`${this.name} hat das gleiche Kopfgeld wie ${otherPirate.name}.`)
        }
    }
}

class Crew {
    #name

    #captain

    #members

    constructor(name, captain, members) {
        this.name = name
        this.captain = captain
        this.members = members
    }

    get name() {
        return this.#name
    }

    set name(value) {
        this.#name = value
    }

    get captain() {
        return this.#captain
    }

    set captain(value) {
        this.#captain = value
    }

    get members() {
        return this.#members
    }

    set members(value) {
        if (!Array.isArray(value)) {
            this.#members = []
            return
        }
        this.#members = value
    }

    getBounty() {
        return this.#members.reduce((res, member) =>  res + member.bounty, 0)
    }

    addMembers(newMembers) {
        newMembers.forEach(newMember => {
            const [name, bounty] = newMember
            this.#members.push(new Pirate(name, bounty))
        })
    }

    kheelhaul (name) {
        const member = this.#members.find(member => member.name === name)
        if (!member) {
            console.log(`${name} ist kein Mitglied der Crew.`)
            return
        }
        console.log(`${member.name} wird gekielholt.`)
        this.#members = this.#members.filter(member => member.name !== name)
    }

    printEachMember() {
        console.log('Crew:', this.#name)
        this.#members.forEach(member => console.log(member.name))
    }
}

const luffy = new Pirate('Monkey D. Luffy', 150_000_000, 'Gum-Gum Fruit')
const zoro = new Pirate('Roronoa Zoro', 320_000_000, 'Sword-Sword Fruit')
const nami = new Pirate('Nami', 66_000_000, 'Weather-Weather Fruit')
const usopp = new Pirate('Usopp', 200_000_000, 'Sniper-Sniper Fruit')

zoro.compareBounty(luffy)
zoro.compareBounty(zoro)
nami.compareBounty(usopp)
usopp.compareBounty(nami)

const strawhats = new Crew('Strawhats', luffy, [luffy, zoro, nami, usopp])
console.log('Bounty:', strawhats.getBounty())
strawhats.addMembers([ ['Sanji', 330_000_000], ['Chopper', 100] ])
console.log('Bounty:', strawhats.getBounty())

strawhats.printEachMember()
strawhats.kheelhaul('Chopper')
strawhats.printEachMember()
console.log('Bounty:', strawhats.getBounty())


class RedRumPirate extends Pirate {
    #name

    static #alcohol = ['Whiskey', 'Vodka', 'Rum', 'Beer', 'Wine', 'Tequila', 'Gin', 'Schnaps', 'Absinth', 'Sake']

    static #nameCheckers = {
        first: (name) => /^Red/.test(name),
        second: (name) => /^[A-Z][a-z]{2,6}$/.test(name),
        secondBonus: (name) => new RegExp(`^${this.#alcohol.join('|')}`).test(name),
        third: (name) => /^[A-Z][a-z]{2,4}$/.test(name)
    }


    constructor(name, bounty, devilFruit) {
        super('', bounty, devilFruit)
        this.name = name
    }

    set name(value) {
        const [first, second, third] = value.split(' ')

        if (!RedRumPirate.#nameCheckers.first(first)) {
            console.error('Name must start with "Red"!', `Tried to apply ${first}`)
            return
        }

        // if (!RedRumPirate.#nameCheckers.second(second)) {
        //     console.error('Second part of name must contain 3-7 letters, starting with Uppercase!', `Tried to apply ${second}`)
        //     return
        // }

        if (!RedRumPirate.#nameCheckers.secondBonus(second)) {
            console.error('Second part of name must be in the list of allowed beverages!', `Tried to apply ${second} (${second.length})`)
            return
        }

        if (!RedRumPirate.#nameCheckers.third(third)) {
            console.error('Third part of name must contain 3-5 letters, starting with Uppercase!', `Tried to apply ${third} (${third.length}})`)
            return
        }

        this.#name = value
    }

    get name() {
        return this.#name
    }
}

// const whiskeyJack = new RedRumPirate('Red Apple Jack', 100_000_000, 'Whiskey-Whiskey Fruit')
// console.log(whiskeyJack.name)
// whiskeyJack.name = 'Red Vodka John'
//
// console.log(whiskeyJack.name)
