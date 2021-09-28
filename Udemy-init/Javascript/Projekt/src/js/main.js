"use strict";

const haushaltsbuch = {

  gesamtbilanz: {
    einnahmen: 0,
    ausgaben: 0,
    bilanz: 0
  },

  neuer_eintrag:{
    titel: null,
    typ: null,
    betrag: null,
    datum: null
  },

// Eingabedaten holen
  eintrag_erfassen() {
  this.neuer_eintrag.title = prompt("Titel:");
  this.neuer_eintrag.typ = prompt("Typ (Einnahme oder Ausgabe):");
  this.neuer_eintrag.betrag = parseInt(prompt("Betrag (in Cent)"));
  this.neuer_eintrag.datum = prompt("Datum (jjjj-mm-tt)");
  },

// ausgeben
  eintrag_ausgeben() {
      console.log(`Titel: ${this.neuer_eintrag.title}
Typ: ${this.neuer_eintrag.typ}
Betrag: ${this.neuer_eintrag.betrag} ct
Datum: ${this.neuer_eintrag.datum}`
        );
  },

// Verrechnen
eintrag_mit_gesamtbilanz_verrechnen() {
  switch (this.neuer_eintrag.typ) {
    case "Einnahme":
    case "einnahme":
      this.gesamtbilanz.einnahmen += this.neuer_eintrag.betrag;
      this.gesamtbilanz.bilanz += this.neuer_eintrag.betrag;
      break;
    case "Ausgabe":
    case "ausgabe":
      this.gesamtbilanz.ausgaben += this.neuer_eintrag.betrag;
      this.gesamtbilanz.bilanz -= this.neuer_eintrag.betrag;
      break;
    default:
      console.log(`Der Typ "${this.neuer_eintrag.typ}" ist nicht bekannt`);
      break;
  }
},

// ausgeben
  gesamtbilanz_ausgeben() {
    console.log(`Einnahmen: ${this.gesamtbilanz.einnahmen} ct
Ausgaben: ${this.gesamtbilanz.ausgaben} ct
Bilanz: ${this.gesamtbilanz.bilanz} ct
Bilanz ist positiv: ${this.gesamtbilanz.bilanz >= 0}`
    );
  },

// hinzufügen
  eintrag_hinzufuegen() {
    this.eintrag_erfassen();
    this.eintrag_ausgeben();
    this.eintrag_mit_gesamtbilanz_verrechnen();
    this.gesamtbilanz_ausgeben();
  }
};

// ausführen
haushaltsbuch.eintrag_hinzufuegen();
haushaltsbuch.eintrag_hinzufuegen();
haushaltsbuch.eintrag_hinzufuegen();
