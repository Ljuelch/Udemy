"use strict";


let zahlen = [5, 56, 43, 42, 12, 99]
  console.log(zahlen);

/*
for (let i = 0; i < zahlen.lenght; i++) {
  console.log(zahlen[i]);
}


let meine_funktion = function(e) {
    console.log(e);
};

zahlen.forEach(meine_funktion);
*/

zahlen.forEach(function(e) {
  console.log(e);
});
