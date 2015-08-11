QUnit.test( "hello test", function( assert ) {
  assert.ok( 1 == "1", "Passed!" );
});

QUnit.test("Testing Plus function", function(assert) {
  assert.equal(5, calculate(2, 3, "+"), "3 + 2 is 5");
});

QUnit.test("Testing Minus function with passing", function(assert) {
  assert.equal(2, calculate(4, 2, "-"), "2 + 2 is 5");
});

QUnit.test("Testing Plus function with passing", function(assert) {
  assert.equal(4, calculate(2, 2, "+"), "2 + 2 is 4");
});

QUnit.test("Testing Multiply function with passing", function(assert) {
  assert.equal(4, calculate(2, 2, "*"), "2 * 2 is 4");
});

QUnit.test("Testing Divide function with passing", function(assert) {
  assert.equal(1, calculate(2, 2, "/"), "2 / 2 is 1");
});

QUnit.test("Testing Default function with passing", function(assert) {
  assert.equal(0, calculate(2, 2, "a"), "default 0");
});

QUnit.test("Testing Divide with 0 function with passing", function(assert) {
  assert.equal("can't divide by zero", calculate(2, 0, "/"), "divide by zero");
});
