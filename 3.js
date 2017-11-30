/*
Шахматная доска. Напишите программу, создающую строку, содержащую решётку 8х8, в которой 
линии разделяются символами новой строки. На каждой позиции либо пробел, либо #. В результате 
должна получиться шахматная доска.

*/

/* function chess(white, black){
    var str = '';
    if((j % 2) == 0){
        str = str + black;
    }  else{
        str = str + white;
    }
    return str;
} */

var arr = [0,1,2,3,4,5,6,7];
var line = arr.map(function(item, i){
    if((i % 2) == 0)
        return "#";
    return " # ";
}).join('');
var str = arr.map(function(item, i){
    if((i % 2) == 0)
        return line + "\n";
    return " " + line + "\n";
});

console.log(str.join(''));

/* for(var i = 0; i < 9; i++){
    for(var j = 0; j < 8; j++){
        if((i % 2) == 0){
            chess(' ', '#');
        } else{
            chess('#', ' ');
        }
        
    }
    console.log(str);
} */