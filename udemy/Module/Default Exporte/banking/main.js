// import eines default exports
import oa from "m/utils/helper.js";
// import {default as oa} from "m/utils/helper.js";
// import eines benannten exports
import {max, sabrina} from "./utils/settings.js)";
// Benannter Import eines exports
import {Konto as K} from "./classes/Konto.js";
// import eines benannten exports
import Hammer from "./classes/Kinderkonto.js";

oa(new K("DE6206752564419854", max.name, max.vermoegen));
oa(new Hammer("DE6206752564419740", sabrina.name, sabrina.vermoegen, 500));
