"use strict";

require("core-js/modules/es6.symbol.js");

require("core-js/modules/es7.string.trim-left.js");

require("core-js/modules/es6.object.keys.js");

require("core-js/modules/es6.array.index-of.js");

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// ===== JS con sintaxis moderna - No reconocido por algunos navegadores =====
var abc = {
  a: 'a',
  b: 'b',
  c: 'c'
};

var a = abc.a,
    bc = _objectWithoutProperties(abc, ["a"]);

console.log(bc);
console.log('Hola como estas Andres'); // ============= POLYFILL =============

var saludo = '    Uso de trimStart'.trimStart();
console.log(saludo);
