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
    datum = prompt("Datum (jjjj.mm-tt)");
};

eintrag_erfassen();

const eintrag_ausgeben = function(title, typ, betrag, datum) {
    console.log(`Titel: ${title}
Typ: ${typ}
Betrag: ${betrag} ct
Datum: ${datum}`
    );
};

eintrag_ausgeben(title, typ, betrag, datum);

//Verrechnen

const eintrag_mit_gesamtbilanz_verrechnen = function(einnahmen, bilanz, ausgaben) {
  if (typ === "Einnahme") {
      einnahmen = einnahmen + betrag;
      bilanz = bilanz + betrag;
  } else if (typ_1 === "Ausgabe") {
      ausgaben = ausgaben + betrag;
      bilanz = bilanz - betrag;
  } else {
    console.log(`Der Typ "${typ}" ist nicht bekannt`);
  }
};




console.log(`Titel: ${title_2}
Typ: ${typ_2}
Betrag: ${betrag_2} ct
Datum: ${datum_2}`
);

if (typ_2 === "Einnahme") {
    einnahmen = einnahmen + betrag_2;
    bilanz = bilanz + betrag_2;
} else if (typ_2 === "Ausgabe") {
    ausgaben = ausgaben + betrag_2;
    bilanz = bilanz - betrag_2;
} else {
  console.log(`Der Typ "${typ_2}" ist nicht bekannt`);
}

// Gesamtbilanz ausgeben
let positiv = bilanz >= 0;
console.log(`Einnahemn: ${einnahmen} ct
Ausgaben: ${ausgaben} ct
Bilanz: ${bilanz} ct
Bilanz ist positiv: ${positiv}`
);
