QUnit.test("Test the add/Subtract/Multiply & Divide behavior.", function (assert) {
    var myCalc = new Calculator();
    var result = myCalc.addDigit('6');
    result = myCalc.storeOperator('*');
    result = myCalc.addDigit('6');
    result = myCalc.calculate();
    result = myCalc.currentInput;
    assert.deepEqual(result, 36);
    result = myCalc.storeOperator('/');
    result = myCalc.addDigit('6');
    result = myCalc.calculate();
    result = myCalc.currentInput;
    assert.deepEqual(result, 6);
    result = myCalc.storeOperator('+');
    result = myCalc.addDigit('6');
    result = myCalc.calculate();
    result = myCalc.currentInput;
    assert.deepEqual(result, 12);
    result = myCalc.storeOperator('-');
    result = myCalc.addDigit('6');
    result = myCalc.calculate();
    result = myCalc.currentInput;
    assert.deepEqual(result, 6);
});

QUnit.test("store(mc/m+/m-/mr)", function (assert) {
    var myCalc = new Calculator();
    result = myCalc.addDigit('6');
    result = myCalc.store('m+');
    result = myCalc.calculate();
    result = myCalc.allClear();
    result = myCalc.storedNumber;
    assert.deepEqual(result, "6");
    result = myCalc.addDigit('5');
    result = myCalc.store('m-');
    result = myCalc.calculate();
    result = myCalc.allClear();
    result = myCalc.storedNumber;
    assert.deepEqual(result, -5);
    result = myCalc.store('mr');
    result = myCalc.storedNumber;
    assert.deepEqual(result, -5);
    result = myCalc.store('mc');
    result = myCalc.storedNumber;
    assert.deepEqual(result, 0);
});

QUnit.test("allClear()", function (assert) {
    var myCalc = new Calculator();
    result = myCalc.addDigit('6');
    result = myCalc.storeOperator('*');
    result = myCalc.addDigit('6');
    result = myCalc.calculate();
    result = myCalc.allClear();
    result = myCalc.currentInput;
    assert.deepEqual(result, "0");
});

QUnit.test("changeSign()", function (assert) {
    var myCalc = new Calculator();
    result = myCalc.addDigit('6');
    result = myCalc.changeSign();
    result = myCalc.calculate();
    result = myCalc.currentInput;
    assert.deepEqual(result, -6);
});

QUnit.test("percentage()", function (assert) {
    var myCalc = new Calculator();
    result = myCalc.addDigit('6');
    result = myCalc.percentage('6');
    result = myCalc.calculate();
    result = myCalc.currentInput;
    assert.deepEqual(result, 0.06);
});

QUnit.test("log()", function (assert) {
    var myCalc = new Calculator();
    result = myCalc.addDigit('6');
    result = myCalc.log();
    result = myCalc.calculate();
    result = myCalc.currentInput;
    assert.deepEqual(result, 1.791759469228055);
});

QUnit.test("square()", function (assert) {
    var myCalc = new Calculator();
    result = myCalc.addDigit('4');
    result = myCalc.square();
    result = myCalc.calculate();
    result = myCalc.currentInput;
    assert.deepEqual(result, 16);
});

QUnit.test("cube()", function (assert) {
    var myCalc = new Calculator();
    result = myCalc.addDigit('6');
    result = myCalc.cube('6');
    result = myCalc.calculate();
    result = myCalc.currentInput;
    assert.deepEqual(result, 216);
});

QUnit.test("inverse()", function (assert) {
    var myCalc = new Calculator();
    result = myCalc.addDigit('6');
    result = myCalc.inverse();
    result = myCalc.calculate();
    result = myCalc.currentInput;
    assert.deepEqual(result, 0.16666666666666666);
});

QUnit.test("squareRoot()", function (assert) {
    var myCalc = new Calculator();
    result = myCalc.addDigit(16);
    result = myCalc.squareRoot();
    result = myCalc.calculate();
    result = myCalc.currentInput;
    assert.deepEqual(result, 4);
});

QUnit.test("cubeRoot()", function (assert) {
    var myCalc = new Calculator();
    result = myCalc.addDigit('12');
    result = myCalc.cubeRoot();
    result = myCalc.calculate();
    result = myCalc.currentInput;
    assert.deepEqual(result, 2.2894284851066637);
});

QUnit.test("factorial()", function (assert) {
    var myCalc = new Calculator();
    result = myCalc.addDigit(4);
    result = myCalc.factorial();
    result = myCalc.calculate();
    result = myCalc.currentInput;
    assert.deepEqual(result, 24);
});

QUnit.test("trig('sin/cos/tan')", function (assert) {
    var myCalc = new Calculator();
    result = myCalc.addDigit('6');
    result = myCalc.trig('sin');
    result = myCalc.calculate();
    result = myCalc.currentInput;
    assert.deepEqual(result,
-0.27941549819892586);
    result = myCalc.addDigit('6');
    result = myCalc.trig('cos');
    result = myCalc.calculate();
    result = myCalc.currentInput;
    assert.deepEqual(result,
0.9612168045072789);
    result = myCalc.addDigit('6');
    result = myCalc.trig('tan');
    result = myCalc.calculate();
    result = myCalc.currentInput;
    assert.deepEqual(result,
1.4320632688078336);
});

QUnit.test("rad()", function (assert) {
    var myCalc = new Calculator();
    result = myCalc.rad();
    result = myCalc.allClear();
    result = myCalc.addDigit('6');
    result = myCalc.trig('sin');
    result = myCalc.calculate();
    result = myCalc.currentInput;
    assert.deepEqual(result,
0.10452846326765347);
    result = myCalc.rad();
    result = myCalc.allClear();
    result = myCalc.addDigit('6');
    result = myCalc.trig('sin');
    result = myCalc.calculate();
    result = myCalc.currentInput;
    assert.deepEqual(result,
-0.27941549819892586);
});

QUnit.test("pi()", function (assert) {
    var myCalc = new Calculator();
    result = myCalc.pi();
    result = myCalc.calculate();
    result = myCalc.currentInput;
    assert.deepEqual(result, 3.141592653589793);
});

/*QUnit.test("johnCena()", function (assert) {
    var myCalc = new Calculator();
    result = myCalc.johnCena();
    result = myCalc.currentInput;
    assert.deepEqual(result, "WWE - SUPERSLAM   ");
});*/

QUnit.test("justClear() clear only currentInput", function (assert) {
    var myCalc = new Calculator();
    result = myCalc.addDigit('6');
    result = myCalc.storeOperator('*');
    result = myCalc.addDigit('6');
    result = myCalc.calculate();
    result = myCalc.storeOperator('*');
    result = myCalc.addDigit('6');
    result = myCalc.calculate();
    result = myCalc.justClear();
    result = myCalc.currentInput;
    assert.deepEqual(result, "0");
});

QUnit.test("addDecimal()", function (assert) {
    var myCalc = new Calculator();
    result = myCalc.addDigit('6');
    result = myCalc.addDecimal('6');
    result = myCalc.calculate();
    result = myCalc.currentInput;
    assert.deepEqual(result, "6.");
});
