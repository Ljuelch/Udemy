"use strict";

let mein_set = new Set();

mein_set.add("Test");
mein_set.add(13);
mein_set.add(function() {});
mein_set.add({});

// {} === false

console.log(mein_set.has("Test"));
mein_set.delete("Test");
//mein_set.clear();

console.log(mein_set.size);
console.log(mein_set);
