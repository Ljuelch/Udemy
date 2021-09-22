"use strict";

/*
let iban = "DE98903284902348023";
let bic = "BELADEBEXXX";
let kontostand = 343242;
let aktiv = true;

let inhaber_1 = {
  Vorname: "Herbert",
  Nachname: "Mayer",
  Geschlecht: "männlich",
  Alter: 33
};
console.log(inhaber_1);

let inhaber_2 = {
  Vorname: "Max",
  Nachname: "Musterman",
  Geschlecht: "männlich",
  Alter: 35
};
console.log(inhaber_2);
*/
let konto_1 = {
  iban: "DE98903284902348023",
  bic: "BELADEBEXXX",
  inhaber: {
    Vorname: "Herbert",
    Nachname: "Mayer",
    Geschlecht: "männlich",
    Alter: 33
  },
  kontostand: 343242,
  aktiv: true
};
console.log(konto_1);

let konto_2 = {
  iban: "DE989032849023342343",
  bic: "BELADEBEdad",
  inhaber: {
    Vorname: "Max",
    Nachname: "Musterman",
    Geschlecht: "männlich",
    Alter: 35
  },
  kontostand: 343,
  aktiv: true
};
console.log(konto_2);



let Auto_1 = {
  Marke: "Volvo",
  Modell: "xc60",
  Kraftstoffart: "Diesel",
  Kilometerstand: 300332,
  Ausstattung: {
    Navi: false,
    Klima: true,
    Sitzheizung: true,
    Tempomat: true,
    Panoramadach: true
  },
  Zustand: "gebraucht",
  Preis: 12460612346172461746
};
console.log(Auto_1);
