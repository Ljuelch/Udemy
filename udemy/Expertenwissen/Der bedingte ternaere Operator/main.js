"use strict";


// Syntax: Bedingung ? Ausdruck_1 : Ausdruck_2

// if (Bedingung) {
//   Ausdruck_1;
// } else {
//   Ausdruck_2
// }

let meine_zahl = 12;

// if(meine_zahl > 10) {
//   console.log("groeßer");
// } else {
//   console.log("kleiner oder gleich");
// }


console.log(meine_zahl > 10 ? "größer als 10" : "kleiner oder gleich");

let geschlecht = 0;
// if (geschlecht) {
//   console.log("Hallo Frau Mustermann");
// } else {
//   console.log("hallo Herr Mustermann");
// }
console.log(`Hallo ${geschlecht ? "Frau" : "Herr"} Mustermann`);

let fuehrerschein = true;

// const fuererschein_kontrolle = function() {
//   if (fuehrerschein) {
//       return "Darf Auto fahren";
//   } else {
//       return "Darf nicht Auto fahren";
//   }
// };
const fuehrerschein_kontrolle = function() {
    return fuehrerschein ? "Darf Auto fahren" : "Darf nicht Auto fahren";
};

console.log(fuehrerschein_kontrolle());

let erdbeschleunigung = 15.2;
let panik = false;

erdbeschleunigung > 9.81 ? (panik = true, erdbeschleunigung = 9.81) : (panik = false, erdbeschleunigung = 9.81);
console.log(erdbeschleunigung);
console.log(panik);

let farbe = "gelb";

// if (farbe === "rot") {
//   console.log("Ich mag rot");
// } else if (farbe === "blau") {
//   console.log("Ich mag blau");
// } else if (farbe === "grün") {
//   console.log("Ich mag kein grün");
// } else {
//   console.log(`Zur Farbe ${farbe} habe ich keine Meinung`);
// }

console.log(farbe === "rot" ? "Ich mag rot" : farbe === "blau" ? "Ich mag blau" : farbe === "grün" ? "Ich mag kein grün" : `Zur Farbe ${farbe} habe ich keine Meinung`);
