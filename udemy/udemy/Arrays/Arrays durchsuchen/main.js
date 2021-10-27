"use strict";

let personen = [
    "Sebastian",
    "Marcel",
    "Anna",
    "Dennis",
    "Mia"
];

// includes(): Durchsucht das Array ab einem Startindex nach einem Wert und gibt true zurück, wenn das
// Element gefunden wurde, bzw. false, wenn es nicht gefunden wurde
// Syntax: includes(Suchwert[, Startindex])
// nicht destruktiv
personen.includes("Dennis");
console.log(personen.includes("Dennis"));

// indexOf(): Durchsucht das Array ab einem Startindex nach einem Wert und gibt den Index der ersten Fundstelle
// zurück, wenn der Wert gefunden wurde, oder -1, wenn der Wert nicht im Array gefunden wurde
// Syntax: indexOf(Suchwert[, Startindex])
// nicht destruktiv
personen.indexOf("Dennis");
console.log(personen.indexOf("Dennis"));

// lastIndexOf(): Durchsucht das Array ab einem Startindex rückwärts nach einem Wert und gibt den Index der ersten 
// Fundstelle zurück, wenn der Wert gefunden wurde, oder -1, wenn der Wert nicht im Array gefunden wurde
// Syntax: lastIndexOf(Suchwert[, Startindex])
// nicht destruktiv
personen.lastIndexOf("Sebastian");
console.log(personen.lastIndexOf("Sebastian"));
personen.lastIndexOf("Anna");
console.log(personen.lastIndexOf("Anna"));

