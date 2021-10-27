"use strict";

let ul = document.querySelector("#navigation > ul");
// console.log(nav);

// Kindelemente

let child_notes = ul.childNodes;                          // alle Kind-Elemente inkl. Text- und Kommentarknoten
let children = ul.children;                               // alle Kindelemente exkl. Text und Kommentraknoten
let first_child = ul.firstChild;                          // erstes Kind Element inkl. Text und Kommentarknoten
let last_child = ul.lastChild;                            // letztes Kindelement inkl. Text und Kommentarknoten
let first_element_child = ul.firstElementChild;           // erstes Kind Element exkl. Text und Kommentarknoten
let last_element_child = ul.lastElementChild;             // letztes Kindelement exkl. Text und Kommentarknoten

// Geschwisterelemente

let next_sibling = ul.nextSibling;                                          // nächstes Geschwisterlement inkl. Text und Kommentarknoten
let previous_sibling = ul.previousSibling;                                  // Vorangehendes Geschwisterelement inkl. Text und Kommentarknoten
let next_element_sibling = ul.firstElementChild.nextElementSibling;         // nächstes Geschwisterelement exkl. Text und Kommentarknoten
let previous_element_sibling = ul.lastElementChild.previousElementSibling;  // Vorangehendes Geschwisterelement exkl. Text und Kommentarknoten

// Elternelement

let parent_element = ul.parentElement; // Elternelement

// Allgemeines Navigieren

let anker = ul.querySelectorAll("li > a");

console.log(child_notes);
console.log(children);
console.log(first_child);
console.log(last_child);
console.log(first_element_child);
console.log(last_element_child);
console.log(next_sibling);
console.log(previous_sibling);
console.log(next_element_sibling);
console.log(previous_element_sibling);
console.log(parent_element);
console.log(anker);
