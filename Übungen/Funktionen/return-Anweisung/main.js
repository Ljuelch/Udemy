"use strict";

const multi = function(a, b) {
  return a * b;
  // code nach return in function wird nicht mehr ausgeführt
};

let z_1 = 2;
let z_2 = 4;

let ergebnis = multi(z_1, z_2);
console.log(ergebnis);

let ergebnis_2 = multi(ergebnis, ergebnis);
console.log(ergebnis_2);
  
