"use strict";

let jumbo = document.querySelector(".jumbotron");

// CSS_Style-Declaration-Objekt ausgeben
console.log(jumbo.style);

//Inline-Styles auslesen
console.log(jumbo.style.backgroundColor); // Eigenschaft abfragen

// Inline-Stles verändern
// Eigenschaften immer in Strings angeben
jumbo.style.backgroundColor = "red"; // Eigenschaft ändern
jumbo.style.width = "40rem";
jumbo.style.height = "30rem";
jumbo.style.fontSize = "15px";
