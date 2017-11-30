/*

Интерфейс к последовательностям

Разработайте интерфейс, абстрагирующий проход по набору значений. Объект с таким 
интерфейсом представляет собой последовательность, а интерфейс должен давать возможность 
в коде проходить по последовательности, работать со значениями, которые её составляют, и 
как-то сигнализировать о том, что мы достигли конца последовательности.

Задав интерфейс, попробуйте сделать функцию logFive, которая принимает объект-
последовательность и вызывает console.log для первых её пяти элементов – или для 
меньшего количества, если их меньше пяти.

Затем создайте тип объекта ArraySeq, оборачивающий массив, и позволяющий проход по 
массиву с использованием разработанного вами интерфейса. Создайте другой тип объекта, 
RangeSeq, который проходит по диапазону чисел (его конструктор должен принимать аргументы from и to).

*/


function ArraySeq(data) {
    this.position = -1;
    this.data = data;
}

function logFive(seq) {
    for (var i = 0; i < 5; i++) {
        if (!seq.next()) {
            break;
        }
        
        console.log(seq.curr());
    }
}

ArraySeq.prototype.next = function () {
    if (this.position >= this.data.length - 1) {
        return false;
    }
    this.position++;
    return true;
}

ArraySeq.prototype.curr = function () {
    return this.data[this.position];
}

function RangeSeq(from, to) {
    this.position = from - 1;
    this.to = to;
}

RangeSeq.prototype.next = function () {
    if (this.position >= this.to) {
        return false;
    }
    this.position++;
    return true;
}

RangeSeq.prototype.curr = function () {
    return this.position;
}

logFive(new ArraySeq([1, 7, 5, 3, 12, 6, 9, 2]));
ogFive(new RangeSeq(100, 1000));