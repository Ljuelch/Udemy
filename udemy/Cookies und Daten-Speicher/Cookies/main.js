"use strict";

// Syntax:
// document.cookie = "cookie_name=[cookie_wert]"

document.cookie = "vorname=Leo";
document.cookie = "nachname=juelch";
document.cookie = `${encodeURIComponent("ein key;value-paare")}=${encodeURIComponent("key=value")}`;

const set_cookie = function(name, wert) {
  let cookie = `${encodeURIComponent(name)}=`;
  if (wert) {
      cookie += `${encodeURIComponent(wert)}`;
  }
  document.cookie = cookie;
};
set_cookie("passwort", "$A&/(=&)");
console.log(document.cookie);
