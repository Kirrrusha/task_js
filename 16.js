/*Ещё одна ячейка

Создайте тип ячейки StretchCell(inner, width, height), соответствующий интерфейсу ячеек 
таблицы из этой главы. Он должен оборачивать другую ячейку (как делает UnderlinedCell - из 
примера книги), и убеждаться, что результирующая ячейка имеет как минимум заданные ширину 
и высоту, даже если внутренняя ячейка была бы меньше.*/

function repeat(string, times) {
    var result = "";
    for (var i = 0; i < times; i++)
        result += string;
    return result;
}

function TextCell(text) {
    this.text = text.split("\n");
}
TextCell.prototype.minWidth = function () {
    return this.text.reduce(function (width, line) {
        return Math.max(width, line.length);
    }, 0);
};
TextCell.prototype.minHeight = function () {
    return this.text.length;
};
TextCell.prototype.draw = function (width, height) {
    var result = [];
    for (var i = 0; i < height; i++) {
        var line = this.text[i] || "";
        result.push(line + repeat(" ", width - line.length));
    }
    return result;
};

function StretchCell(inner) {
    this.inner = inner;
};
StretchCell.prototype.minWidth = function () {
    return this.inner.minWidth();
};
StretchCell.prototype.minHeight = function () {
    return this.inner.minHeight() + 1;
};
StretchCell.prototype.draw = function (width, height) {
    return this.inner.draw(width, height - 1).concat([repeat(" ", width)]);
};




// Ваш код.
var sc = new StretchCell(new TextCell("a\nbc"), 1, 2);
console.log(sc.minWidth());
// → 3
console.log(sc.minHeight());
// → 2
console.log(sc.draw(3, 2));
// → ["abc", "   "]