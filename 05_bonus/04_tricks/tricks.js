// Schreibe diese Zahl von vorne nach hinten
// Bsp: 133742069 => 960247331
// const number = 133742069
// const reverse = n => +[...`${n}`].reverse().join('')
//
// console.log(reverse(number))



const warLordsOfTheSea = [
    {
        name: 'Mihawk Dulacre Falkenauge',
        description: 'Greates Swordsman in the World',
        exBounty: 'unknown',
        devilFruit: 'unknown',
    },
    {
        name: 'Jimbei',
        description: 'Knight of the Sea',
        exBounty: 'unknown',
        devilFruit: 'unknown',
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
const reduce_GOOD = (result, current) => {
    result[current.name] = current.exBounty
    return result
}
const reduce_BAD = (result, current) => ({
    ...result,
    [current.name]: current.exBounty
})

console.time('BAD')
warLordsOfTheSea.reduce(reduce_BAD, {})
console.timeEnd('BAD')

console.time('GOOD')
warLordsOfTheSea.reduce(reduce_GOOD, {})
console.timeEnd('GOOD')
