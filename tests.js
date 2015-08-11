QUnit.test( "hello test", function( assert ) {
  assert.ok( 1 == "1", "Passed!" );
});

QUnit.test("Testing Plus function", function(assert) {
  assert.equal(5, plus(2, 3), "3 + 2 is 5");
});

QUnit.test("Testing Plus function with failing", function(assert) {
  assert.equal(5, plus(2, 2), "2 + 2 is 5");
});
