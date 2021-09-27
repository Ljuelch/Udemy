"use strict";

let auto = {
  marke: "BMW"
};

//Eigenschaften ändern
auto.marke = "Tesla";

//Eigenschaften hinzufügen
auto.modell = "Model 3";
auto.ps = 450;
auto["Farbe" = "rot"];

//Eigenschaften entfernen
delete auto.farbe;
