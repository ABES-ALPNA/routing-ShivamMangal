//Question-7
function multiply(a, b) {
  return a * b;
}

module.exports = multiply;


//app.js
const multiply = require('./math');

const result = multiply(5, 6);
console.log('Result:', result);
