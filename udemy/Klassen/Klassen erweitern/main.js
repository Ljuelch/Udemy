// "use strict";
//
// let konto = {
//     iban: "DE6206752564419854",
//     inhaber: ["Max Mustermann"],
//     saldo: 3500,
//     aktiv: true,
//     einzahlen(einzahlung) {
//         this.saldo += einzahlung;
//     },
//     abheben(auszahlung) {
//         this.saldo -= auszahlung;
//     },
//     kontostand_abfragen() {
//         return this.saldo;
//     }
// };


let k = new Konto("DE6206752564419854", "Max Mustermann", 3500);
let kk = new Kinderkonto("DE62067543264419854", "Mona Mustermann", 100, 300);
k.einzahlen = 1000;
k.abheben = 500;
// console.log(k.kontostand_abfragen);
// k.einzahlen(1000);
// k.abheben(500);
// k.kontostand_abfragen();
// console.log(k.kontostand_abfragen());
console.log(k);
kk.abheben(20);
console.log(kk);
