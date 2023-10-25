// Wähle ein Element für die Animation aus
const box = document.querySelector('.box');

// Hier erstellen wir an Array an Objekten, die die Eigenschaften der Animation beschreiben
// Wir können dadurch mehrere Keyframes definieren, die dann nacheinander abgespielt werden
// Die Eigenschaften, die nicht explizit angegeben werden, werden von der Animation nicht verändert
// Hier verändern wir nur die Eigenschaft transform, die die Position des Elements verändert
const keyframes = [
    {
        left: '-1500px',
        transform: 'scaleX(1)',
        offset: 0.25
    },
    {
        left: '-1500px',
        transform: 'scaleX(-1)',
        offset: .26
    },
    {
        left: '2500px',
        transform: 'scaleX(-1)',
        offset: .75
    },
    {
        left: '2500px',
        transform: 'scaleX(1)',
        offset: .76
    },
];

// Hier spielen wir mit unserer Box ein bisschen ping pong
const options = {
    duration: 10000, // Dauer der Animation in Millisekunden
    direction: 'normal', // normale Richtung
    iterations: Infinity, // unendlich oft wiederholen
    composite: 'replace',
};

// Erstelle ein KeyframeEffect-Objekt, das die Animation beschreibt
// Wir übergeben unsere Box, die Keyframes und die Optionen
const animation = new KeyframeEffect(box, keyframes, options);

const timeline = document.timeline; // Verwende die Dokumentzeitlinie
const anim = new Animation(animation, timeline);


// Starte die Animation
anim.play();
