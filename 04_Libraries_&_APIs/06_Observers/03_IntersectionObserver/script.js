/**
 * Der IntersectionObserver ist ein Observer, der die Überschneidung von Elementen mit ihren Eltern oder dem Viewport beobachtet.
 * In diesem Beispiel wird die Überschneidung mit dem Viewport beobachtet.
 */

// Wir selektieren alle Elemente, die beobachtet werden sollen
const boxes = document.querySelectorAll('.intersection-box')

// Die Optionen für den Observer
const options = {
    root: null, // Der Viewport ist das Standard-Root-Element
    rootMargin: '0px', // Kein Rand um den Viewport (das bedeutet, dass wir die Überschneidung eingrenzen können)
    threshold: 0.5, // 50% des beobachteten Elements muss sichtbar sein
}

// Wir erstellen den Observer mit Callback und Optionen
// Der Callback wird immer dann ausgeführt, wenn sich die Überschneidung ändert
// Hier geben wir einfach nur aus, ob das Element sichtbar ist oder nicht
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const { target, isIntersecting } = entry
        const textField = target.querySelector('span')
        if (isIntersecting) {
            textField.innerText = 'Sichtbar'
            console.log(`Das Element ${target.id} ist im Viewport sichtbar.`)
        } else {
            textField.innerText = 'Nicht sichtbar'
            console.log(`Das Element ${target.id} ist nicht mehr im Viewport sichtbar.`)
        }
    })
}, options)

// Alle selektierten Elemente zur Beobachtung hinzufügen
boxes.forEach(box => {
    observer.observe(box)
})
