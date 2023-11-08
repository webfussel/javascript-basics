let name = ''
const span = document.querySelector('.name')
const input = document.querySelector('input')

const applyNameToSpan = () => {
    span.innerText = name
}
const applyNameToInput = () => {
    input.value = name
}

input.addEventListener('keyup', event => {
    name = event.target.value
    applyNameToSpan()
})

const fetchFromInternet = async () => {
    setTimeout(async () => {
        name = await Promise.resolve('Lena')
        applyNameToSpan()
        applyNameToInput()
    }, 2000)
}

fetchFromInternet()
