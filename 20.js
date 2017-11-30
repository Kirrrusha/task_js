function MultiplicatorUnitFailure(message) {
    this.message = message;
}

MultiplicatorUnitFailure.prototype = Object.create(Error.prototype);

function primitiveMultiply(test, message) {
    if (!test)
        throw new MultiplicatorUnitFailure(message);
}


function reliableMultiply(a, b) {
    primitiveMultiply(Math.random() < 0.5, "Ошибка");
    return a * b;
}

console.log(reliableMultiply(8, 8));
// → 64

//console.log(primitiveMultiply(2, 2));

/* function AssertionFailed(message) {
    this.message = message;
}
AssertionFailed.prototype = Object.create(Error.prototype);

function assert(test, message) {
    if (!test)
        throw new AssertionFailed(message);
}

function lastElement(array) {
    assert(array.length > 0, "пустой массив в lastElement");
    return array[array.length - 1];
}


console.log(lastElement([])); */