"use strict";

let zahlen = [12, 22, 44, 45, 23, 76, 32, 99];

let kleiner_gleich_zwanzig = zahlen.filter(function(e) {
  if (e <= 50) {
    return true;
  }else {
    return false;
  }
});
console.log(kleiner_gleich_zwanzig);
