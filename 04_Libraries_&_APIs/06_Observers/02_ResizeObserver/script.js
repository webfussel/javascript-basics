/**
 * Der ResizeObserver ist ein Observer, der Änderungen an der Größe von Elementen beobachtet.
 * Wir können ihn also nutzen, um bei Größenänderungen von Elementen bestimmte Aktionen auszuführen.
 */

const log = document.getElementById('log')

// Wir wählen alle Elemente aus, die eine Klasse haben, die "box" beinhaltet beginnt
const resizeBoxes = document.querySelectorAll('[class*="box"]')

// Wir erstellen einen neuen ResizeObserver
// Hier geben wir einfach nur die Änderungen in der Konsole und im Log aus
const resizeObserver = new ResizeObserver(entries => {
    console.log('Entries: ', entries)
    for (let entry of entries) {
        const { target, contentRect } = entry
        console.log(`Das Element ${target.id} hat eine neue Größe:`)
        console.log(`Breite: ${contentRect.width}px`)
        console.log(`Höhe: ${contentRect.height}px`)
        log.innerHTML = `<p>Das Element ${target.id} hat eine neue Größe: Breite: ${contentRect.width}px, Höhe: ${contentRect.height}px</p>` + log.innerHTML
    }
})

// Alle ausgewählten Elemente zur Beobachtung hinzufügen
resizeBoxes.forEach(box => {
    resizeObserver.observe(box)
})

// Manuelle Änderung der Größen, um Logs zu erzeugen
// Zusätzlich ändern wir die größe der dynamischen Boxen nicht, um die Dynamik beizubehalten
const changeSize = () => {
    resizeBoxes.forEach(box => {
        if (box.classList.contains('dynamic-box')) return
        const newWidth = Math.floor(Math.random() * 200 + 50)
        const newHeight = Math.floor(Math.random() * 200 + 50)
        box.style.width = newWidth + 'px'
        box.style.height = newHeight + 'px'
    })
}

// Ändert die Größe der Elemente nach 2 Sekunden
setTimeout(changeSize, 2000)
