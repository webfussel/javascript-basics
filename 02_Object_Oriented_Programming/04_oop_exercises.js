/**
 * Ihr habt jetzt einiges über Objekte, Funktionen und sonstiges gelernt.
 * Mit den zusätzlichen Informationen zu Klassen könnt ihr jetzt schon sehr viel machen.
 * Zum Beispiel folgende Aufgaben lösen.
 *
 * Bei Fragen stehe ich euch natürlich jederzeit gerne zur Verfügung.
 *
 * Ihr müsst bei den folgenden Aufgaben natürlich nicht auf das Originalmaterial zurückgreifen.
 * Überlegt euch einfach irgendwelche Namen, Kopfgelder und Teufelsfrüchte.
 * (Das ist übrigens auch ein typisches Vorgehen beim Erstellen von Testdaten für echte Anwendungen.)
 */

// ACHTUNG! Alle Felder sollen privat sein und nur über getter von außen angesprochen werden können.

// Aufgabe 1: Erstelle eine Klasse "Pirate". Diese soll name, devilFruit und bounty als Eigenschaften haben.
// Beachte dabei die Datenkapselung und schreibe Guard Clauses für die setter eurer Eigenschaften, wo sie nötig sind.

// Aufgabe 2: Erstelle eine Klasse "Crew". Diese soll name, captain und members als Eigenschaften haben.
// Es gibt hier sehr viele Möglichkeiten, wie ihr die members definieren könnt. Sucht euch eine aus - aber nutzt Instanzen von Pirate.

// Aufgabe 3: Erstelle eine Methode in der Klasse "Pirate", die das Kopfgeld des Piraten mit dem Kopfgeld eines anderen Piraten vergleicht.
// Gebe aus, ob das Kopfgeld des Piraten höher, niedriger oder gleich hoch ist.
// Der andere Pirat soll als Übergabeparameter übergeben werden.

// Aufgabe 4: Erstelle eine Methode in der Klasse "Crew", die das Kopfgeld aller Mitglieder der Crew zusammenrechnet und ausgibt.

// Aufgabe 5: Erstelle eine Methode in der Klasse "Crew", welches ein Tupelarray aus Namen und Kopfgeldern entgegennimmt, die Cremitglieder
// erstellt und sie der Crew hinzufügt. (Wichtig: HINZUFÜGEN, nicht überschreiben)
// Beispiel für ein Tupelarray: [ ['Long John Silver', 140_000], ['Dynamite Dingo', 200_000] ]

// Aufgabe 6: Erstelle eine Methode in der Klasse "Crew", welche einen Namen erhält und dann das jeweilige Crewmitglied Kielholen lässt.
// (Kielholen: Man bindet den Piraten an den Füßen fest und wirft ihn über Bord. Er wird dann unter dem Schiff durchgezogen und stirbt.)
// ((Das müsst ihr natürlich nicht entwickeln. Es reichen Console logs.))
// Wenn ein Crewmitglied stirbt, ist es selbstverständlich nicht mehr Teil der Crew und muss entfernt werden.

// Aufgabe 7: Erstelle eine Klasse "RedRumPirate", die von der Klasse "Pirate" erbt.
// Überschreibe den setter des Feldes "name" so, dass der Name immer folgende Struktur haben muss:
// - 3 Teile getrennt durch ein Leerzeichen
// - Jeder Teil muss mit einem Großbuchstaben beginnen
// - Der erste Teil muss "Red" sein
// - Der zweite Teil muss aus 3-7 Buchstaben bestehen
// - Der dritte Teil muss aus 3-5 Buchstaben bestehen
// - Beispiel: "Red Whiskey Jack"
// IHR MÜSST REGEX NUTZEN!


// BONUS: Der zweite Teil des Namens muss einer aus einer Liste von verschiedenen Alkoholsorten entsprechen, die in einem Array abgelegt sind.
// (Tipp: RegExp Constructor statt /blabla/)
