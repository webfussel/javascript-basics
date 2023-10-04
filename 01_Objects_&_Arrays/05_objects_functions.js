console.log('Objects - Functions')
/**
 * Um korrekt mit Objekten arbeiten zu können, müssen wir uns mit einigen ihrer Methoden beschäftigen.
 * Diese Methoden sind Funktionen, welche auf Objekten aufgerufen werden können.
 */

const luffy = {
    name: 'Monkey D. Ruffy',
    devilFruit: 'Gum Gum Fruit',
    position: 'Captain',
    age: 19,
}

// Object.keys
// Gibt ein Array mit allen Schlüsseln des Objekts zurück.
const luffyKeys = Object.keys(luffy)
console.log('luffy - keys', luffyKeys)

// Object.values
// Gibt ein Array mit allen Werten des Objekts zurück.
const luffyValues = Object.values(luffy)
console.log('luffy - values', luffyValues)

// Object.entries
// Gibt ein Array mit allen Schlüssel-Wert-Paaren des Objekts zurück.
const luffyEntries = Object.entries(luffy)
console.log('luffy - entries', luffyEntries)

// Object.hasOwn
// Gibt true zurück, wenn das Objekt den Schlüssel enthält.
const hasDevilFruit = Object.hasOwn(luffy, 'devilFruit')
const hasSwimmingSkill = Object.hasOwn(luffy, 'swimmingSkill')
console.log('luffy - has devil fruit', hasDevilFruit)
console.log('luffy - has swimming skill', hasSwimmingSkill)

// Object.assign
// Kopiert alle Schlüssel-Wert-Paare von einem Objekt in ein anderes.
const objA = {
    a: 1,
    b: 2,
}

const objB = {
    b: 3,
    c: 4,
}

const objC = Object.assign(objA, objB)
console.log('objA', objA)
console.log('objB', objB)
console.log('objC', objC)

// Object.freeze
// Verhindert, dass das Objekt verändert werden kann.
const frozenLuffy = Object.freeze(luffy)
// Auskommentiert, weil Fehler
// frozenLuffy.age = 20
console.log('frozenLuffy', frozenLuffy)

// Object.seal
// Verhindert, dass neue Schlüssel hinzugefügt oder bestehende Schlüssel gelöscht werden können.
// Allerdings können die Werte der Schlüssel noch verändert werden.
const sealedLuffy = Object.seal(luffy)
sealedLuffy.bla = 'asdf'
console.log('sealedLuffy', sealedLuffy)

// Object.isFrozen
// Gibt true zurück, wenn das Objekt eingefroren ist.
const isFrozen = Object.isFrozen(frozenLuffy)
console.log('isFrozen', isFrozen)

// Object.isSealed
// Gibt true zurück, wenn das Objekt versiegelt ist.
const isSealed = Object.isSealed(sealedLuffy)
console.log('isSealed', isSealed)
