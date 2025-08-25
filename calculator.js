function _main(
  module = globalThis.__getCurrentModule(),
  exports = module.exports,
  require = globalThis.require
) {
  function add(a, b) {
    return a + b;
  }

  function subtract(a, b) {
    return a - b;
  }

  function multiply(a, b) {
    return a * b;
  }

  function divide(a, b) {
    if (b === 0) throw new Error("Division by zero");
    return a / b;
  }

  // Export functions for CommonJS
  module.exports = { add, subtract, multiply, divide };
}

__defineModule__(_main);