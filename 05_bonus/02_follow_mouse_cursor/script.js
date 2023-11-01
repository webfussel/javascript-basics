const orb = document.querySelector('.orb')

document.documentElement.addEventListener('mousemove', event => {
    const { clientX, clientY } = event
    orb.style.setProperty('--left', `${clientX - 50}px`)
    orb.style.setProperty('--top', `${clientY - 50}px`)
})
