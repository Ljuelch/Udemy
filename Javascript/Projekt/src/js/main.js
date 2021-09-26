"use strict";

"use strict";

// Gesamtbilanz anlegen
let einnahmen = 0,
    ausgaben = 0,
    bilanz = 0,
    title,
    typ,
    betrag,
    datum;

// Eingabedaten holen
const eintrag_erfassen = function() {
    title = prompt("Titel:");
    typ = prompt("Typ (Einnahme oder Ausgabe):");
    betrag = parseInt(prompt("Betrag (in Cent)"));
    datum = prompt("Datum (jjjj-mm-tt)");
};


const eintrag_ausgeben = function(title, typ, betrag, datum) {
    console.log(`Titel: ${title}
Typ: ${typ}
Betrag: ${betrag} ct
Datum: ${datum}`
    );
};

// Verrechnen

const eintrag_mit_gesamtbilanz_verrechnen = function(typ, betrag) {
  if (typ === "Einnahme") {
      einnahmen = einnahmen + betrag;
      bilanz = bilanz + betrag;
  } else if (typ === "Ausgabe") {
      ausgaben = ausgaben + betrag;
      bilanz = bilanz - betrag;
  } else {
    console.log(`Der Typ "${typ}" ist nicht bekannt`);
  }
};


// ausgeben

const gesamtbilanz_ausgeben = function(einnahmen, ausgaben, bilanz) {
console.log(`Einnahemn: ${einnahmen} ct
Ausgaben: ${ausgaben} ct
Bilanz: ${bilanz} ct
Bilanz ist positiv: ${bilanz >= 0}`
    );
};

const eintrag_hinzufuegen = function() {
    eintrag_erfassen();
    eintrag_ausgeben(title, typ, betrag, datum);
    eintrag_mit_gesamtbilanz_verrechnen(typ, betrag);
    gesamtbilanz_ausgeben(einnahmen, ausgaben, bilanz);
};

eintrag_hinzufuegen();
eintrag_hinzufuegen();
eintrag_hinzufuegen();
