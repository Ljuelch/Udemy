import {objekt_anzeigen} from "./utils/helper.js";
// import eines benannten exports
import {max, sabrina} from "./utils/settings.js)";
// Benannter Import eines exports
import {Konto as K} from "./classes/Konto.js";
// import eines benannten exports
import {Hammer} from "./classes/Kinderkonto.js";

objekt_anzeigen(new K("DE6206752564419854", max.name, max.vermoegen));
objekt_anzeigen(new Hammer("DE6206752564419740", sabrina.name, sabrina.vermoegen, 500));
