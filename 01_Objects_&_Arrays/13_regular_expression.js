console.log('Regular Expression')

/**
 * Regular Expression, auch bekannt als RegEx, RegExp, Regex oder auch "Regretful Experience", ist eine Sprache, die
 * verwendet wird, um Zeichenketten zu beschreiben und zu suchen oder zu ersetzen.
 * In JavaScript haben wir mehrere Möglichkeiten zu definieren und zu verwenden.
 */

// Definition
const standard = /abc/
const konstruktor = new RegExp('abc')

// Wir können Regex nutzen, um zum Beispiel ein Passwort auf verschieden Kriterien zu prüfen.
const password = 'mageis123'

const hasNumber = /\d/
const hasNumberAlternative = /[0-9]/
const hasUpperCase = /[A-Z]/
const hasLowerCase = /[a-z]/
const hasSpecialCharacter = /[^A-Za-z0-9]/

/**
 * Es gibt noch viele weitere Token
 * \d => Ziffer
 * \D => Keine Ziffer
 * \w => Wortzeichen (Alles von a-z, A-Z, 0-9 und _)
 * \W => Kein Wortzeichen
 * \s => Whitespace (Leerzeichen, Tab, Zeilenumbruch)
 * \S => Kein Whitespace
 * . => Jedes Zeichen
 * \. => Punkt
 */

console.log('hasNumber', hasNumber.test(password))
console.log('hasUpperCase', hasUpperCase.test(password))
console.log('hasLowerCase', hasLowerCase.test(password))
console.log('hasSpecialCharacter', hasSpecialCharacter.test(password))

/**
 * Zusätzlich gibt es sogenannte Quantifiers, die die Anzahl der Vorkommen definieren.
 * ? => 0 oder 1
 * * => 0 oder mehr
 * + => 1 oder mehr
 * {n} => n
 * {n,} => n oder mehr
 * {n,m} => n bis m
 */


const i = 'i i i i i i i i i i i i i i'
const ii = 'ii ii iii ii iii ii'
const iii = 'iiiiiiiiiiiiiiiiiiiiiiiiii'
const iRegex = /i{2,}/

console.log('iRegex', iRegex.test(i))
console.log('iRegex', iRegex.test(ii))
console.log('iRegex', iRegex.test(iii))

// Der Aufbau eines Regex kann sehr komplex werden.
// Es gibt eine Standarddefinition eines E-Mail Regex, der aber nicht alle Fälle abdeckt.
// https://emailregex.com/ (Viel Spaß beim anschauen)
// Grundsätzlich kann man Regex nur mit viel Übung und Erfahrung schreiben.
// Es gibt aber auch Tools, die einem dabei helfen können.
// https://regexr.com/
// https://regex101.com/
// https://debuggex.com/
// Ich habe Kollegen, die selbst nach 20 Jahren die Finger davon lassen
// Aber weiter im Text.

// Wir können Regex nutzen, um Zeichenketten zu ersetzen.
const text = 'Ich bin ein Text und ich habe ein paar Wörter im Text, die ich im Text ersetzen möchte.'
const regex = /text/gi
const newText = text.replace(regex, 'Fisch')

console.log('newText', newText)

// Was macht das g und das i?
// g steht für global und ersetzt alle Vorkommen, nicht nur das erste
// i steht für case insensitive und ersetzt auch somit alle vorkommnisse unabhängig von Groß- und Kleinschreibung

// Wir können Regex nutzen, um Zeichenketten zu suchen.
const text2 = 'Ich bin ein Text und ich habe ein paar Wörter im Text, die ich im Text ersetzen möchte.'
const regex2 = /text/gi
const found = text2.match(regex2)

console.log('found', found)

// Ihr könnt sogenannte Capturing Groups nutzen, um Teile des Regex zu speichern.
// Diese könnt ihr dann später nutzen, um zum Beispiel Teile des Textes zu ersetzen.
// Hier drehen wir einfach die beiden Vorkommnisse um.
const text3 = 'asdf 1234'
const regex3 = /(\w+) (\d+)/
const swapped3 = text3.replace(regex3, '$2 $1')

console.log('text3', text3)
console.log('swapped3', swapped3)
