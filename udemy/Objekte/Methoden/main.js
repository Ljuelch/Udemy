"use strict";

let konto = {
    iban: "DE98903284902348023",
    bic: "BELADEBEXXX",
    inhaber: {
      Vorname: "Herbert",
      Nachname: "Mayer",
      Geschlecht: "männlich",
      Alter: 33
    },
    kontostand: 1000,
    aktiv: true,
    einzahlen(e) {
        this.kontostand += e;
    },
    abheben(a) {
        this.kontostand -= a;
    }
};

konto.einzahlen(1000);
console.log(konto.kontostand);

//challenge: Methode in objekt einbauen

let person = {
    vorname: "Max",
    nachname: "Mustermann",
    alter: 23,
    verarbeiten() {
      return {
          n: `${this.vorname} ${this.nachname}`,
          z: `${this.vorname} ${this.nachname} (${this.alter} Jahre)`,
          b: `Hallo ${this.vorname} ${this.nachname}!`
      };
    }
};

console.log(person.verarbeiten());
