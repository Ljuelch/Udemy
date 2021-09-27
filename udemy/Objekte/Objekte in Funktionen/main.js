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

const kontostand_ausgeben = function(konto) {
    console.log(`${konto.inhaber.Vorname} ${konto.inhaber.Nachname} hat ${konto.kontostand}€ auf dem Konto.`);
};
kontostand_ausgeben(konto_1);
kontostand_ausgeben(konto_2);
