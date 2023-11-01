/**
 * In dieser Datei importieren wir die exportierten Objekte von 01_exports.js.
 * Man kann hier schön den Unterschied zwischen Named und Default Exports sehen.
 */

// Named Imports => Beim Export wurde explizit ein name angegeben
// Man nutzt hier die geschweiften Klammern, um die Namen der exportierten Objekte anzugeben
// Das ist sehr ähnlich zum Object Destructuring
// Dabei ist es egal, ob es sich um Funktionen, Variablen oder Klassen handelt
import { add, subtract, divide, modulo, Calculator } from './01_exports.js'

// Wir können auch einen anderen Namen für die importierten Objekte nutzen
// Das muss dann nicht in einem extra import stehen. Das habe ich hier nur zur besseren Übersichtlichkeit gemacht.
import { PI as CherryPi, E as eh } from './01_exports.js'

// Default Imports => Beim Export wurde kein name angegeben
// Wir geben einfach ganz ohne geschweifte Klammern den Namen des exportierten Objekts an, den wir selbst nutzen wollen
import kessel from './01_exports.js'

console.log(add(5, CherryPi))
console.log(subtract(8, eh))
console.log(kessel(5, 3))
console.log(divide(10, 3))
console.log(modulo(10, 3))

const calc = new Calculator(5)
const val = calc.add(5).multiply(2).subtract(3).divide(2).value
console.log(val)

// Beim Import wird wie bei Übergabeparametern entweder eine Kopie oder eine Referenz übergeben
// Entsprechend lassen sich auch exportierte Objekte mutieren
import { mutateMe, logMutateMe } from './01_exports.js'
mutateMe.a = 5

console.log(mutateMe)
logMutateMe()
