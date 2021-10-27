"use strict";

document.addEventListener("keydown", e => {
  // console.log(e);
  if (e.key === "@") {
    console.log("@ wurde gedrückt");
  }
});

document.addEventListener("keyup", e => {
  if (e.key === "p") {
    console.log("p wurde gedrückt");
  }
});

// WICHTIG: keypress-Event hört nicht auf Shift, Fn und CapsLock
document.addEventListener("keypress", e => {
  if (e.key === ":") {
    console.log(": wurde gedrückt");
  }
});
