console.log('Regular Expression - Exercises')
/**
 * Da Regex echt nichts einfaches ist, nutzt gerne die Hilfeseiten.
 * https://regexr.com/
 * https://regex101.com/
 * https://debuggex.com/
 *
 * Nutzt bitte keine KI, die euch die Regex schreibt.
 * Ihr betrügt euch damit nur selbst.
 */

const text = "Ich bin Monkey D. Luffy und werde der König der Piraten. Ich werde der Mann sein, der das One Piece findet."

// Aufgabe: 1
// Erstelle eine Regex, die alle Vorkommen von "der" findet.
const regex1 = /der/g
console.log('Aufgabe 1: ', text.match(regex1))

// Aufgabe: 2
// Erstelle eine Regex, die alle Vorkommen von "der" und "den" findet.
const regex2 = /de[rn]/g
console.log('Aufgabe 2: ', text.match(regex2))
// Alternative Regex
// const regex2 = /de(?:r|n)/g
// const regex2 = /(den)|(der)/g

// Aufgabe: 3
// Ersetze Luffy durch Ruffy.
const regex3 = /Luffy/g
console.log('Aufgabe 3: ', text.replace(regex3, 'Ruffy'))

// Aufgabe: 4
// Schreibe eine Regex, die folgende Namen matched
// Monkey D. Luffy, Monkey D. Ruffy, Luffy, Ruffy
const monkeydluffy = 'Monkey D. Luffy'
const monkeydruffy = 'Monkey D. Ruffy'
const luffy = 'Luffy'
const ruffy = 'Ruffy'

const regex4 = /(?:Monkey D. )?[LR]uffy/
console.log('Aufgabe 4: Monkey D. Luffy', regex4.test(monkeydluffy))
console.log('Aufgabe 4: Monkey D. Ruffy', regex4.test(monkeydruffy))
console.log('Aufgabe 4: Luffy', regex4.test(luffy))
console.log('Aufgabe 4: Ruffy', regex4.test(ruffy))


// Aufgabe: 5
// Schreibe eine Regex, welches Monkey D. NAME matched und dann NAME entfernt.
// Beispiele: Monkey D. Ruffy, Monkey D. Ace, Monkey D. Dragon, Monkey D. Garp => Monkey D.
const name = 'Monkey D. Luffy'
const regex5 = /(Monkey D.)( [A-Z][a-z]+)/
console.log('Aufgabe 5:', name.replace(regex5, '$1'))
