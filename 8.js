/*
Обращаем массив вспять. Напишите две функции, reverseArray и reverseArrayInPlace. Первая получает 
массив как аргумент и выдаёт новый массив, с обратным порядком элементов. Вторая работает как оригинальный 
метод reverse – она меняет порядок элементов на обратный в том массиве, который был ей передан в качестве 
аргумента. Не используйте стандартный метод reverse.

*/

function reverseArray(arr){
    var array =[];
    for(var i = 1; i <= arr.length;i++){
        array.push(arr[arr.length - i]);
    }
    return array;
}

console.log(reverseArray([1, 2, 3, 4, 5]));