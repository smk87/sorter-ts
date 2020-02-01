"use strict";
var Sorter = /** @class */ (function () {
    function Sorter(collection) {
        this.collection = collection;
    }
    return Sorter;
}());
var sorter = new Sorter([10, 3, -1, 5]);
sorter.sort();
console.log(sorter.collection);
