"use strict";

let auto_1 = {
    marke: "BMW",
    modell: "i8"
};

let auto_2 = {
    marke: "Audi",
    modell: "a3"
};

let auto_3 = {
    marke: "Audi",
    modell: "a3"
};

console.log(auto_3.marke == auto_2.marke);
console.log({} == {});

let vergleich = function(o1, o2) {

    if(o1.marke == o2.marke && o1.modell == o2.modell) {
      return true;
    } else {
      return false;
    }
};

console.log(vergleich(auto_2, auto_3));


/*let {
    console.log(); auto_1.marke == auto_2.marke,
    v_1: auto_1.modell == auto_2.modell
};
*/
