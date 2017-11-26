/*
Свертка. Используйте метод reduce в комбинации с concat для свёртки массива массивов в один массив, 
у которого есть все элементы входных массивов.
*/

var arrays = [[1, 2, 3], [4, 5], [6]];

function reduceArr(arr){
    var array = [];
    for (var i = 0; i < arr.length; i++){
       // array = arr.concat(arr[i]);
       array = array.concat(arr[i]);
    }
    return array;
}

console.log(reduceArr(arrays));