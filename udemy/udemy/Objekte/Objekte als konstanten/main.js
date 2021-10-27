"use strict";

const person = {
    vorname: "Max",
    nachname: "Mustermann",
    alter: 18
};

person.vorname = "Peter";
person.haarfarbe = "braun";
delete person.haarfarbe;

console.log(person);
