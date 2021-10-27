"use strict";

// Gültigkeitsbereich: Bereich in dem man Zugriff auf eine Variable hat

// Globale Variablen: wird außerhalb aller Codeblöcke definiert und ist von überall zugänglich
// Lokale Variablen: wird immer innerhalb eines Codeblocks definiert und ist auch nur in diesem und in den codeblöcken die darin enthalten sind Verfügbar


let variable_1  = "variable 1";

const meine_funktion = function() {
  let variable_2 = "variable 2";

  if (true) {
    let variable_3 = "variable 3";
    console.log(variable_2);
    console.log(variable_3);
  }

  console.log(variable_1);
  console.log(variable_2);
//  console.log(variable_3);
};

meine_funktion();

console.log(variable_1);
//  console.log(variable_2);
//  console.log(variable_3);
