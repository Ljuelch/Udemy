"use strict";


//FUNKTIONSAUSDRÜCKE

const funktion_1 = function() {
    console.log("Funktion 1");
};
funktion_1();

let funktion_2 = function() {
  console.log("Funktion 2");
};
funktion_2();

funktion_2 = function() {
  console.log("Funktion 2 (Neu)");
};
funktion_2();


//FUNKTIONSDEKLARATIONEN (werden gehoisted)
funktion_3();

function funktion_3 () {
  console.log("Funktion 3");
}
