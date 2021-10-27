"use strict";

// setTimeout(callback-funktion, zeitspanne[, parameter1, parameter2, ..., parameterN])

console.log("LOS!");
setTimeout(function() {
  console.log("Fertig!");
}, 2000);

// setTimeout(code-string, zeitspanne)

console.log("Los!");
console.log(setTimeout("console.log(\"Fertig!\");", 2000));

// clearTimeout(2);

// setInterval(callback-funktion, zeitspanne[, parameter1, parameter2, ..., parameterN])

setInterval(function() {
    console.log("Eine Sekunde ist um!");
}, 1000);

// setInterval(code-string, zeitspanne)

setInterval("console.log(\"Eine Sekunde ist um!\");", 1000)

// clearInterval(1);
