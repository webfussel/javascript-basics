/**
 * Der MutationObserver erlaubt es, Änderungen am DOM zu beobachten.
 * Dazu wird ein neuer Observer erstellt und diesem ein Ziel-Element und eine Konfiguration übergeben.
 * Anschließend wird der Observer gestartet.
 */

// Utilities, die nichts mit dem Observer zu tun haben und nur der besseren Lesbarkeit dienen
const log = document.getElementById('log')
const printNode = (el) => [el.nodeName && `Nodename: ${el.nodeName}`, el.tagName && `Tagname: ${el.tagName}`, el.innerHTML && `Inner HTML: ${el.innerHTML}`].filter(e => !!e).join(', ')
const printNodeList = (list) => [...list].map(el => printNode(el)).join(' | ')


// Selektiere das Ziel-Element und erstelle eine Konfiguration für den Observer
const target = document.getElementById('target')
// Wir beobachten alle Änderungen am Ziel-Element, ihr könnt aber auch nur bestimmte Mutationen beobachten
const observerConfig = {
    attributes: true,
    childList: true,
    characterData: true,
    subtree: true
}

// Erstelle einen neuen MutationObserver.
// Im Callback werden die Mutationen übergeben, die beobachtet werden.
// In diesem Beispiel werden die Mutationen einfach in der Konsole und imL Log ausgegeben.
// Ihr könnt aber natürlich auch allen möglichen Schabernack mit den Mutationen treiben.
const observer = new MutationObserver((mutationsList) => {
    console.log('Mutations List', mutationsList)
    for (let mutation of mutationsList) {
        if (mutation.type === 'childList') {
            if (mutation.addedNodes.length > 0) {
                console.log('Kindknoten wurden hinzugefügt', mutation.addedNodes)
                log.innerHTML += `<p>Kindknoten wurden hinzugefügt: ${printNodeList(mutation.addedNodes)}</p>`
            }

            if (mutation.removedNodes.length > 0) {
                console.log('Kindknoten wurden entfernt', mutation.removedNodes)
                log.innerHTML += `<p>Kindknoten wurden entfernt: ${printNodeList(mutation.removedNodes)}</p>`
            }
        } else if (mutation.type === 'attributes') {
            console.log('Attribut wurde geändert', mutation.attributeName)
            log.innerHTML += `<p>Attribut wurde geändert: ${mutation.attributeName}, ${printNode(mutation.target)}</p>`
        } else if (mutation.type === 'characterData') {
            console.log('Knotentext wurde geändert', mutation.target)
            log.innerHTML += `<p>Knotentext wurde geändert: ${printNode(mutation.target)}</p>`
        }
    }
})
// Starte den Observer
observer.observe(target, observerConfig)


// Ändere das DOM, um Mutationen auszulösen
setTimeout(() => {
    target.textContent = 'Ich wurde verändert!'
    target.style.backgroundColor = 'lightcoral'
    const newChild = document.createElement('span')
    newChild.textContent = 'Neues Kind'
    target.appendChild(newChild)
}, 2000)

/**
 * Änderungen am DOM können auf unterschiedlichste Weiße ausgelöst werden.
 * Im Beispiel oben werden die Mutationen durch mich manuell in der setTimeout-Funktion ausgelöst.
 * Wenn ihr mit Frameworks arbeitet, werden die Mutationen meistens durch das Framework ausgelöst.
 *
 * Ich habe damit beispielsweise mal ein kleines Tampermonkey Script geschrieben, um auf Twitter Werbung und sponsored Posts zu entfernen.
 * (RIP Twitter)
 */
