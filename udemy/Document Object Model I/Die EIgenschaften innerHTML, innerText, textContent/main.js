"use strict";

let jumbo = document.querySelector(".jumbotron");
// console.log(jumbo);

//console.log(jumbo.innerHTML);   // gibt Drastellunge von HTML wieder genau so wie sie im Quelltext steht (DOM-String)
//console.log(jumbo.innerText);   // gesamten Text inhalt eiens Elements achtet aber darauf wie Elemente im FE dargestellt werden (gerenderte Textinhalte)
//console.log(jumbo.textContent); // gesamten Text inhalt eines Elements ohne Rücksicht auf gerenderten Text im FE (nur Text ohne umgebende HTML elemente)


let string_1 = "";
let string_2 = "<header><h2>Lorem ipsum dolor sit amet</h2></header>";
let string_3 = "<p>Lorem ipsum solor dit amen</p>";
let string_4 = "Lorem ipsum dolor sit amet."

// jumbo.innerHTML = string_1
//jumbo.innerHTML = string_2;
jumbo.innerHTML += string_3;

// jumbo.innerText = string_1;
// jumbo.innerText = string_2;
//jumbo.innerText += string_3;
//jumbo.innerText += string_4;

//jumbo.textContent = string_1;
//jumbo.textContent = string_2;
//jumbo.textContent += string_3;
//jumbo.textContent = string_2;
