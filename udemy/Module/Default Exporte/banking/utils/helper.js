import {einrueckung} from "./settings.js";
import element from "./settings.js";
// default export
export default = function(obj) {
    let pre = document.createElement(element);
    pre.textContent = JSON.stringify(obj, null, einrueckung);
    document.querySelector("body").appendChild(pre);
};
