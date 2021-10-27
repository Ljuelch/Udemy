"use strict";

let jumbo = document.querySelector(".jumbotron");
console.log(jumbo);

let class_list = jumbo.classList;
console.log(class_list);

jumbo.classList.add("meine-klasse"); // Klasse hinzufügen
jumbo.classList.remove("jumbotron"); // Klasse entfernen
jumbo.classList.replace("meine-klasse", "neue-klasse"); // Klasse mit einer anderen ersetzen

console.log(jumbo.classList.contains("jumbotron"));
console.log(jumbo.classList.contains("neue-klasse")); // abfragen ob Klasse existiert

jumbo.classList.toggle("auch-eine-klasse"); // wenn klasse nicht existiert wird sie hinzugefügt (an-aus-schalter)
jumbo.classList.toggle("auch-eine-klasse"); // wenn Klasse existiert wird sie entfernt  (an-aus-schalter)
