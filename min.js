/*
Минимум. Напишите функцию min, принимающую два аргумента, и возвращающую минимальный из них.
*/

function min(a, b){
    if(a > b){
        return b;
    } else{
        return a;
    }
}
console.log(min(0, 10));

console.log(min(0, -10));
