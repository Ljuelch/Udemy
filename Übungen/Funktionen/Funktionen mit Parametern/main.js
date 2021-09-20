"use strict";
/*
const = meine_funktion = function(parameter_1, parameter_2) {
  auszuführender Code
};

meine_funktion(p1, p2);
*/

const log_die_zahl = function(a) {
  console.log(a);
};

log_die_zahl(42);


const begruessung = function(vorname, nachname){
  console.log(`Hallo ${vorname} ${nachname}!`);
};

let vor = "Leo";
let nach = "Juelch";

begruessung(vor, nach);


const grundrechenarten = function(a, b) {
  console.log(a+b);
  console.log(a-b);
  console.log(a*b);
  console.log(a/b);
  console.log(a%b);
};

let nr1 = 3;
let nr2 = 22;
let nr3 = 98;
let nr4 = 11;
let nr5 = 78;

grundrechenarten(nr1, nr5);
grundrechenarten(nr2, nr4);
grundrechenarten(nr4, nr3);
grundrechenarten(nr2, nr1);
grundrechenarten(nr5, nr4);
