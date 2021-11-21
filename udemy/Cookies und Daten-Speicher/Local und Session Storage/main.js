"use strict";

// Items im localStorage setzten
localStorage.setItem("name", "Leonardo");
console.log(localStorage.getItem("name"));
// Items entfernen
localStorage.setItem("alter", "23");
localStorage.removeItem("alter");
// localStorage säubern
localStorage.clear();
console.log(localStorage);

// Items im sessionStorage setzen
sessionStorage.setItem("name", "Herbert");
// Items entfernen
sessionStorage.setItem("alter", "28");
sessionStorage.removeItem("alter");
// sessionStorage SÄUBERN
sessionStorage.clear();
console.log(sessionStorage);
