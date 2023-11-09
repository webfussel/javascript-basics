const header = document.querySelector('header')

window.addEventListener('scroll', (event) => {
    const scrollTop = document.documentElement.scrollTop
    const alpha = Math.min(scrollTop / 100, 1)
    const c = Math.max(255 - scrollTop, 0)
    header.style.setProperty('--alpha', alpha)
    header.style.setProperty('--c', c)
})

const headline = document.querySelector('h1')
const nav = document.querySelector('nav')
const dropdownNav = document.querySelector('nav.dropdown')
const label = header.querySelector('label')
const cb = header.querySelector('input')

const resizeObserver = new ResizeObserver(() => {
    const headerPadding = +window.getComputedStyle(header).paddingLeft.replace('px', '')
    const headerWidth = header.getBoundingClientRect().width - headerPadding
    const headlineWidth = headline.getBoundingClientRect().width
    const navWidth = nav.getBoundingClientRect().width

    if(headlineWidth + navWidth > headerWidth - 200) {
        const lastLinkElement = nav.querySelector('ul li:last-child')
        if (!lastLinkElement) return

        const dropdownList = dropdownNav.querySelector('ul')

        dropdownList.prepend(lastLinkElement)
        label.classList.remove('hidden')
    }

    if (headlineWidth + navWidth < headerWidth - 400) {
        const firstLinkElement = dropdownNav.querySelector('ul li:first-child')
        if (!firstLinkElement) return

        const navList = nav.querySelector('ul')
        navList.append(firstLinkElement)

        if (dropdownNav.querySelector('ul').children.length === 0) {
            label.classList.add('hidden')
            cb.checked = false
        }

    }
})

resizeObserver.observe(document.documentElement)
