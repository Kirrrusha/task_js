/*
Повтор

Допустим, у вас есть функция primitiveMultiply, которая в 50% случаев перемножает 2 числа,
а в остальных случаях выбрасывает исключение типа MultiplicatorUnitFailure. Напишите функцию,
обёртывающую эту, и просто вызывающую её до тех пор, пока не будет получен успешный результат.
Убедитесь, что вы обрабатываете только нужные вам исключения.

*/

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