"use strict";


let mein_array = [
    "Herbert",
    "Mia",
    "Marc"
];

let mein_objekt = {
    name: "Max",
    vorname: "Mustermann",
    alter: 25
};

console.log(mein_array);
console.log(mein_objekt);

for(let e in mein_array) {
  console.log(e);
}

for(let e in mein_objekt) {
  console.log(e);
  // console.log(mein_objekt[e]);
}

for(let f of mein_array) {
  console.log(f);
}

// geht nicht, da einfache Objekte nicht iterierbar sind
//for(let f of mein_objekt) {
//  console.log(f);
//}
