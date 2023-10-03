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
