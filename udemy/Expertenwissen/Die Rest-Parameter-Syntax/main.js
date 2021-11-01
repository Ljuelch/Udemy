"use strict";

// const addieren  =  function(array) {
//   let summe = 0;
//   array.forEach(e => summe += e);
//   return summe;
// };
// console.log(addieren([23, 54, 76, 123, 1233]));
const addieren  =  function(...summanden) {
  let summe = 0;
  summanden.forEach(e => summe += e);
  return summe;
};
console.log(addieren(23, 54, 76, 123, 1233));

const personen_addieren = function(name_1, name_2, ...punkte) {
    let summe = 0;
    punkte.forEach(e => summe += e);
    return `${name_1} und ${name_2} haben zusammen ${summe} gesammelt!`;
};
console.log(personen_addieren("jan", "mona", 32, 43, 12, 100));
