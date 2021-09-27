"use strict";

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

// Werte auslesen (Dot-Notation)

let wert_1 = konto_1.iban;
console.log(wert_1);

let wert_2 = konto_2.bic;
console.log(wert_2);

let wert_3 = konto_1.inhaber.Nachname;
console.log(wert_3);

console.log(`${konto_2.inhaber.Vorname} ${konto_2.inhaber.Nachname} hat ${konto_2.kontostand}€ auf seinem Konto!`);

// Werte stezen (Dot-Notation)

konto_1.abhebelimit = 1000;
console.log(konto_1);

// Werte setzen bzw. verändern (Dot-Notation)

konto_1.kontostand = 3000;
console.log(konto_1.kontostand);

//Challenge

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

  Auto_1.ps = 300;
  Auto_1.Modell = "v90";

  console.log(`Ein ${Auto_1.Marke} ${Auto_1.Modell} hat ${Auto_1.ps} PS!`);