"use strict";

let jumbo = document.querySelector(".jumbotron");

let classes = jumbo.className;
console.log(classes);

jumbo.className = "meine-klasse";

jumbo.className += " lorem";  // Klasse hinzufügen(auf Leerzeichen achten sonst wird string einfach nur an klasse angehangen)

jumbo.className = jumbo.className.replace("meine", "deine");  // Teile eines Strings ersetzen

jumbo.className = jumbo.className.replace(" lorem", ""); // Klasse (bzw.String) entfernen (auf Leerstelle achten)


document.querySelector("#navigation > ul > li:first-of-type > a").className = "";
document.querySelector("#navigation > ul > li:nth-of-type(3) > a").className = "active";
