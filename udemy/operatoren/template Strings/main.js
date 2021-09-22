"use strict";

let vorname = "Leo ";
let nachname = "Juelch";
let alter = 24;

let begruessung = `Hallo ${vorname}!`;
console.log(begruessung);

let zusammenfassung = `${vorname}${nachname} (${alter} Jahre)`;
console.log(zusammenfassung);

let mehrzeiliger_templatestring = `Hallo ${name}!
Du bist ${alter} Jahre alt.
Wie gehts dir?`;
console.log(mehrzeiliger_templatestring);
