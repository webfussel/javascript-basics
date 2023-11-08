const main = document.querySelector('main')
const header = document.querySelector('header')

window.addEventListener('scroll', (event) => {
    const scrollTop = document.documentElement.scrollTop
    const alpha = Math.min(scrollTop / 100, 1)
    const c = Math.max(255 - scrollTop, 0)
    header.style.setProperty('--alpha', alpha)
    header.style.setProperty('--c', c)
})
