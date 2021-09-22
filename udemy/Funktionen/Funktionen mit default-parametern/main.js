"use strict";


const multi = function(a, b = 10) {
  console.log(a * b);
};

let z_1 = 22;
let z_2 = 11;

multi(z_1, z_2);


const begruessung = function(a = "Max", b = "Mustermann", c = 24) {
  console.log(`Hallo ${a} ${b} du bist ${c} Jahre alt!`)
};

let za_1 = "Leonardo";
let za_2 = "Juelch";
let za_3 = 23;

begruessung();
begruessung(za_1, za_2, za_3);
begruessung(undefined, za_2, za_3)
