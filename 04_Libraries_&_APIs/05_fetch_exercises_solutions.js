console.log('Fetch - Exercises')
/**
 * Hier ein paar Übungen zu fetch.
 * Euch ist sicher inzwischen aufgefallen, dass fetch immer ein Promise zurückgibt.
 * Also sind das hier noch zusätzliche Übungen dafür.
 *
 * Da es leider keine OnePiece API gibt, arbeiten wir mit Pokémon. (yay)
 * https://pokeapi.co
 */

// Aufgabe 0
// Schreibe einen Zufallszahlengenerator, der eine Zahl von 1 bis einschließlich 1017 zurückgibt.
const randomPokemon = () => Math.floor(Math.random() * 1017) + 1
const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1)


// Aufgabe 1
// Nutze deinen Zahlengenerator.
// Hole dir dann von der PokéAPI das entsprechende Pokémon.
// Gib den Namen des Pokémon auf der Konsole aus
// https://pokeapi.co/api/v2/pokemon/EURE_ZUFALLSZAHL

const getRandomPokemon = async () => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemon()}`)
    return response.json()
}

getRandomPokemon().then(pokemon => console.log('Aufgabe 1:', capitalize(pokemon.name)))


// Aufgabe 2
// Nutze deinen Zahlengenerator.
// Hole dir zwei Pokémon von der PokéAPI.
// Gib die Namen der Pokémon auf der Konsole aus und sag, welches Pokémon größer ist.
// (Mewtu ist größer als Bisasam)

const getNameAndWeight = (pokemon) => [capitalize(pokemon.name), pokemon.weight]

const comparePokemonWeights = async () => {
    const pokemon1 = await getRandomPokemon()
    const pokemon2 = await getRandomPokemon()

    const [p1Name, p1Weight] = getNameAndWeight(pokemon1)
    const [p2Name, p2Weight] = getNameAndWeight(pokemon2)

    const [light, heavy] = p1Weight > p2Weight ? [p2Name, p1Name] : [p1Name, p2Name]
    console.log('Aufgabe 2:', `${heavy} is heavier than ${light}`)
}

comparePokemonWeights()


// Aufgabe 3
// Nutze deinen Zahlengenerator.
// Hole dir 5 Pokémon von der PokéAPI.
// Sortiere sie nach ihrem Gewicht.

const sortPokemonByWeight = async () => {
    const pokemon = await Promise.all([getRandomPokemon(), getRandomPokemon(), getRandomPokemon(), getRandomPokemon(), getRandomPokemon()])
    const sortedPokemon = pokemon.sort((a, b) => a.weight - b.weight)
    console.log('Aufgabe 3:', sortedPokemon.map(p => capitalize(p.name)))
}

sortPokemonByWeight()


// Aufgabe 4
// Nutze deinen Zahlengenerator.
// Hole dir ein Pokémon von der PokéAPI.
// Lass dir den/die Typen des Pokémon in deutscher Sprache ausgeben.
// Tipp: Jede Resource der PokéAPI beinhaltet eine weitere API Url für weitere Infos zu dieser Resource.

const getPokemonTypes = async () => {
    const pokemon = await getRandomPokemon()
    const types = pokemon.types.map(t => t.type.url)

    const typePromises = types.map(async url => {
        const response = await fetch(url)
        const type = await response.json()
        return type.names.find(n => n.language.name === 'de').name
    })

    const typeNames = await Promise.all(typePromises)
    console.log('Aufgabe 4:', capitalize(pokemon.name), 'ist ein', typeNames.join('/'), 'Pokémon!')
}

getPokemonTypes()

// Aufgabe 5
// Für die Nerds unter euch
// Nutze deinen Zahlengenerator.
// Hole dir zwei Pokémon von der PokéAPI.
// Gib aus welches Pokémon einen Typenvorteil hat.
// Beispiele:
// Glumanda (Feuer) vs. Schiggy (Wasser) => Schiggy
// Glumanda (Feuer) vs. Bisasam (Pflanze) => Glumanda
// Glumanda (Feuer) vs. Glumanda (Feuer) => Keiner
// Beachte keine Dualtypen. Falls ein Pokémon mit Zweityp kommt, ignoriere den Zweityp.
// Bonus: BEACHTE BEIDE TYPEN! (Das ist echt schwer)

const getStrongAgainst = async (type) => {
    const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`)
    const data = await response.json()
    return data.damage_relations.double_damage_to.map(t => t.name)
}

const comparePokemonTypes = async () => {
    const p1 = await getRandomPokemon()
    const p2 = await getRandomPokemon()

    const p1Name = capitalize(p1.name)
    const p2Name = capitalize(p2.name)

    const p1Type = p1.types[0].type.name
    const p2Type = p2.types[0].type.name

    const p1TypeStrongAgainst = await getStrongAgainst(p1Type)
    const p2TypeStrongAgainst = await getStrongAgainst(p2Type)

    let p1Strong = false
    let p2Strong = false

    const result = []
    if (p1TypeStrongAgainst.includes(p2Type)) {
        p1Strong = true
        result.push(`${p1Name}'s type ${capitalize(p1Type)} is strong against ${p2Name}'s type ${capitalize(p2Type)}.`)
    } else {
        result.push(`${p1Name}'s type ${capitalize(p1Type)} has no advantage over ${p2Name}'s type ${capitalize(p2Type)}.`)
    }

    if (p2TypeStrongAgainst.includes(p1Type)) {
        p2Strong = true
        result.push(`${p2Name}'s type ${capitalize(p2Type)} is strong against ${p1Name}'s type ${capitalize(p1Type)}.`)
    } else {
        result.push(`${p2Name}'s type ${capitalize(p2Type)} has no advantage over ${p1Name}'s type ${capitalize(p1Type)}.`)
    }

    if (p1Strong && p2Strong || !p1Strong && !p2Strong) {
        result.push('This will be a fair fight!')
    }

    if (p1Strong && !p2Strong) {
        result.push(`${p1Name} will most likely win!`)
    }

    if (!p1Strong && p2Strong) {
        result.push(`${p2Name} will most likely win!`)
    }

    console.log('Aufgabe 5:', result.join(' '))
}

comparePokemonTypes()
