const assert = require('assert');

// escreva sum abaixo
const sum = (...numbers) => numbers.reduce(((acc, val) => acc + val), 0);

console.log(sum(5, 8))
assert.strictEqual(sum(), 0);
assert.strictEqual(sum(1), 1);
assert.strictEqual(sum(1, 2), 3);
assert.strictEqual(sum(1, 2, 3), 6);
assert.strictEqual(sum(1, 2, 3, 4), 10);