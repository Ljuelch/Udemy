"use strict";

console.log(location);

console.log(location.href);
location.href = "https://google.com"
console.log(location.protocol);
console.log(location.hostname);
console.log(location.pathname);
console.log(location.search);
console.log(location.hash);
location.reload();
location.assign("https://google.com");
location.replace("https://google.com");
