"use strict";

console.log(window);

// Eigenschaften des Window-Objekts
console.log(innerWidth);
console.log(innerHeight);
console.log(outerWidth);
console.log(outerHeight);
console.log(scrollX);
console.log(scrollY);

// Für später im Kurs
console.log(location);
console.log(localStorage);
console.log(sessionStorage);

// Methoden des window-Objekts
// alert("Achtung!");
// prompt("was geht?");
// confirm("Sicher?")
// print();
// open("https://www.google.com");
//close();
let nav = document.querySelector("#navigation");
let nav_styles = getComputedStyle(nav);
console.log(nav_styles);
