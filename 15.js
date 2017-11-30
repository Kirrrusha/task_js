/*
Векторный тип. Напишите конструктор Vector, представляющий вектор в двумерном пространстве. 
Он принимает параметры x и y (числа), которые хранятся в одноимённых свойствах.
Дайте прототипу Vector два метода, plus и minus, которые принимают другой вектор в качестве 
параметра, и возвращают новый вектор, который хранит в x и y сумму или разность двух (один this, 
второй — аргумент)

Добавьте геттер length в прототип, подсчитывающий длину вектора – расстояние от (0, 0) до (x, y).

*/

function Vector(x, y) {
    this.x = x;
    this.y = y;
}
Vector.prototype.plus = function plus(otherVector) {
    var x = this.x + otherVector.x;
    var y = this.y + otherVector.y;
    return new Vector(x, y);
};
Vector.prototype.minus = function minus(otherVector) {
    var x = this.x - otherVector.x;
    var y = this.y - otherVector.y;
    return new Vector(x, y);
};
Object.defineProperty(Vector.prototype, 'length', {
    get: function(){
        var length = Math.pow(this.x, 2) + Math.pow(this.y, 2);
        return length;
    }
})

Vector.prototype.a = 1;


//console.log(new Vector(1, 2).plus(new Vector(2, 3)));
// → Vector{x: 3, y: 5}
//console.log(new Vector(1, 2).minus(new Vector(2, 3)));
// → Vector{x: -1, y: -1}
/* console.log(new Vector(3, 4).toString);
console.log(new Vector(3, 4).length); */
// → 5
var v1 = new Vector(1, 2);
var v2 = new Vector(3, 1)
console.log(v1);
console.log(v2);
console.log(v1.a);
console.log(v2.a);
v1.a = 3;
console.log(v1.a);
console.log(v2.a);
v2.a = 5;
console.log(v1.a);
console.log(v2.a);