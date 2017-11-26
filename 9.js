/*
Список.Объекты могут быть использованы для построения различных структур данных. Часто встречающаяся 
структура – список (не путайте с массивом). Список – связанный набор объектов, где первый объект содержит
 ссылку на второй, второй – на третий, и т.п.

Списки удобны тем, что они могут делиться частью своей структуры. Например, можно сделать два списка, 
{value: 0, rest: list} и {value: -1, rest: list}, где list – это ссылка на ранее объявленную переменную. 
Это два независимых списка, при этом у них есть общая структура list, которая включает три последних 
элемента каждого из них. Кроме того, оригинальный список также сохраняет свои свойства как отдельный 
список из трёх элементов.

Напишите функцию arrayToList, которая строит такую структуру, получая в качестве аргумента [1, 2, 3], 
а также функцию listToArray, которая создаёт массив из списка. Также напишите вспомогательную функцию 
prepend, которая получает элемент и создаёт новый список, где этот элемент добавлен спереди к 
первоначальному списку, и функцию nth, которая в качестве аргументов принимает список и число, а 
возвращает элемент на заданной позиции в списке, или же undefined в случае отсутствия такого элемента.

Если ваша версия nth не рекурсивна, тогда напишите её рекурсивную версию.

*/



function arrayToList(arr) {
    var currentElement = 0;
    while (arr[currentElement]) {
        if (currentElement == (arr.length - 1)) {
            return {
                value: arr[currentElement],
                rest: null
            };
        }
        return {
            value: arr[currentElement],
            rest: arrayToList(arr.slice(++currentElement))
        };
    }
}

function listToArray(list) {
    arr = [];
    while (list) {
        arr.push(list.value);
        list = list.rest;
    }
    return arr;
}

function prepend(num, list) {
    return {
        value: num,
        rest: list
    }
}

function nth(list, pos) {
    if (list == null) return undefined;
    else {
        if (1 == pos) return list.value;
        return nth(list.rest, --pos);
    }
}

console.log(arrayToList([10, 20]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 2));