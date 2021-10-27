"use strict";

let personen = [
    "Sebastian",
    "Marcel",
    "Anna",
    "Dennis"
];

personen[1] = "Pia";

console.log(personen);

// push(): Fügt ein Element am Ende des Arrays hinzu (und gibt neue Größe des Arrays zurück)
// destruktiv
personen.push("Max");
console.log(personen);

// pop(): Entfernt das letzte Element aus dem Array (und gibt es zurück)
// destruktiv
personen.pop();
console.log(personen);

// unshift(): Fügt ein Element am Anfang des Arrays hinzu ( und gibt die Größe des Arrays zurück)
// destruktiv
personen.unshift("Max");
console.log(personen);

// shift(): Entfernt das erste Element aus einem Array (und gibt es zurück)
// destruktiv
personen.shift();
console.log(personen);