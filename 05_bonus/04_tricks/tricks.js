// Schreibe diese Zahl von vorne nach hinten
// Bsp: 133742069 => 960247331
const number = 133742069
const reverse = n => +[...`${n}`].reverse().join('')

console.log(reverse(number))

