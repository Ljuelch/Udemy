"use strict";

let s = " Lorem ipsum dolor sit amet ipsum. ";

console.log(s.length);
console.log(s.indexOf("ipsum", 20));
console.log(s.lastIndexOf("ipsum"));
console.log(s.includes("sit"));
console.log(s.toLowerCase());
console.log(s.toUpperCase());
console.log(s.trim()); // cuttet leerzeichen raus
console.log(s.repeat(10));

let regex = /i\w{4}/g;

console.log(s.search(regex));
console.log(s.replace(regex, "opsum"));
console.log(s.match(regex));
