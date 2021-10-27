"use strict";


let personen = [
  "Peter",
  "Anna",
  "Marc",
  "Maximilian",
  "Mia"
];
// Vorwärts
for (let i = 0; i < personen.length; i++) {
  console.log(`Hallo ${personen[i]}`);
}
// Rückwärts
for (let i = personen.length -1; i >= 0; i--) {
  console.log(`Tschüss ${personen[i]}`);
}
