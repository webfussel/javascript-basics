const submit = document.querySelector('.search button')
const input = document.querySelector('.search input')

const image = document.querySelector('.dex img')
const name = document.querySelector('.dex .name')

const getPokemon = async () => {
    try {
        const pokemonName = input.value
        const raw = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        if (raw.status === 200) {
            const pokemon = await raw.json()
            const pok = {
                sprite: pokemon.sprites.front_default,
                name: pokemon.name
            }

            return [pok, null]
        } else {
            return [null, 'WRONG STATUS CODE']
        }
    } catch (e) {
        return [null, 'SOMETHING WENT WRONG']
    }
}

submit.addEventListener('click', async () => {
    const [pokemon, error] = await getPokemon()
    if (error) {
        console.error(error)
        return
    }

    image.src = pokemon.sprite
    name.innerText = pokemon.name
})
