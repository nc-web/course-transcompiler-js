
// ===== JS con sintaxis moderna - No reconocido por algunos navegadores =====
const abc = { a: 'a', b: 'b', c: 'c' }
const { a, ...bc } = abc

console.log(bc)

console.log('Hola como estas Andres')


// ============= POLYFILL =============
const saludo = '    Uso de trimStart'.trimStart();
console.log(saludo)