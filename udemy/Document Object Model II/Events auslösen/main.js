"use strict";

let link = document.querySelector("a.active");
let input = document.querySelector("input[type=text]");
let formular = document.querySelector("form");

//setTimeout(() => link.click(), 3000);
setTimeout(() => input.focus(), 3000);
setTimeout(() => input.blur(), 6000);
setTimeout(() => formular.reset(), 9000);
setTimeout(() => formular.submit(), 11000);
