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

// Werte auslesen (Bracket-Notation)

let wert_1 = konto_1["iban"];
console.log(wert_1);
let wert_2 = konto_1["inhaber"]["geschlecht"]

// Eigenschaften stezen (Bracket-Notation)

konto_2["abhebelimit"] = 100;
console.log(konto_2["abhebelimit"]);

// Werte setzen bzw. verändern (Bracket-Notation)

konto_1["kontostand"] = 100;
console.log(konto_2["kontostand"]);

//Warum sollten wir die Bracket-Notation jemals verwenden?

let eigenschaft = "iban";
let wert_3 = konto_1[eigenschaft];
console.log(wert_3);

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

Auto_1["ps"] = 1001;
Auto_1["modell"] = "i30";

let eig = "ps";

  console.log(`Ein ${Auto_1["Marke"]} ${Auto_1["Modell"]} hat ${Auto_1[eig]} PS!`);