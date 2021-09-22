"use strict";

// logische "und" &&
// logische "oder" ||
// logische "nicht" !

//muss für beides erfüllt sein
console.log(1 > 0 && 4 < 6);

//ist eine dieser beiden true?
console.log(1 > 0 || 4 < 6);

//nicht kleiner als 4
console.log(1 > 0 || !(6 < 4));
console.log(!true);

//bestimmter teil soll vorher ausgewertet werden
console.log(1 < 0 && 10 < 20 || 6 > 4);
console.log(1 < 0 && (10 < 20 || 6 > 4));
