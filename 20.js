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