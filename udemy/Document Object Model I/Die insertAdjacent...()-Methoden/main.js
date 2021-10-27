"use strict";

let li = document.createElement("li");
li.setAttribute("id", "mein_listenelement");

let a = document.createElement("a");
a.setAttribute("id", "mein_ankerelement");
a.setAttribute("href", "#");
let text_node = document.createTextNode("Element");

li.appendChild(a)
a.appendChild(text_node);

//console.log(li);


let liste = document.querySelector("#navigation > ul");
// liste.appendChild(li);
//liste.insertAdjacentElement("beforebegin", li);
//liste.insertAdjacentElement("afterbegin", li);
//liste.insertAdjacentElement("beforeend", li);
//liste.insertAdjacentElement("afterend", li);

let dom_string = "<li id=\"mein-mein_listenelement\"><a id=\"mein_ankerelement\" href=\"#\">Element</a></li>";
//liste.insertAdjacentHTML("afterbegin", dom_string);

let text = "lorem ipsum dolor sit amet";
liste.insertAdjacentText("beforebegin", text);
