"use strict";

let essen = "Schnecken";

switch(essen) {
  case "Pizza":
  case "Döner":
    console.log("Lecker");
    break;
  case "Schnecken":
    console.log("NichsoLecker");
    break;
  default:
    console.log(`Ich kenne "${essen}" nicht!`);
    break;
}
