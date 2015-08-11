QUnit.test( "hello test", function( assert ) {
  assert.ok( 1 == "1", "Passed!" );
});

QUnit.test("Testing Plus function", function(assert) {
  assert.equal(5, calculate(2, 3, "+"), "3 + 2 is 5");
});

QUnit.test("Testing Minus function with failing", function(assert) {
  assert.equal(2, calculate(4, 2, "-"), "4 - 2 is 2");
});

QUnit.test("Testing Plus function with failing", function(assert) {
  assert.equal(0, calculate(2, 2, "-"), "2 + 2 is 4");
});
