const a = {
    b: 1,
}

const str = JSON.stringify(a, null, 2)

const obj = JSON.parse(str)

const noCopy = a
const copy = JSON.parse(JSON.stringify(a))

console.log(a)
console.log(noCopy)
console.log(copy)

noCopy.b = 23
copy.b = 42

console.log('a', a)
console.log('noCopy', noCopy)
console.log('copy', copy)


const map = new Map()
map.set('b', 1)

function mapReplacer(key, value) {
    if (value instanceof Map) {
        return {
            dataType: 'Map',
            value: Array.from(value.entries()), // or with spread: value: [...value]
        }
    } else {
        return value
    }
}

console.log(map)
console.log(JSON.stringify(map, mapReplacer, 2))

const stronk = 'asdf'
const num = 123
const arr = [1,'2',true]

console.log(JSON.stringify(stronk))
console.log(JSON.stringify(num))
console.log(JSON.stringify(arr))

const asdf = {
    d: 'asd'
}

asdf.child = asdf

const circularReplacer = () => {
    const seen = new WeakSet()
    return (key, value) => {
        if (typeof value === 'object' && value !== null) {
            if (seen.has(value)) {
                return 'circular'
            }
            seen.add(value)
        }
        return value
    }
}

console.log(asdf)
console.log(JSON.stringify(asdf, circularReplacer()))
