"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter = /** @class */ (function () {
    function Sorter(collection) {
        this.collection = collection;
    }
    Sorter.prototype.sort = function () {
        var length = this.collection.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                if (this.collection.compare(j, j + 1)) {
                    this.collection.swap(j, j + 1);
                }
            }
        }
    };
    return Sorter;
}());
exports.Sorter = Sorter;
// sort(): void {
//   const { length } = this.collection;
//   for (let i = 0; i < length; i++) {
//     for (let j = 0; j < length - i - 1; j++) {
//       // If collection is an array of numbers
//       // Type Guard
//       if (this.collection instanceof Array) {
//         if (this.collection[j] > this.collection[j + 1]) {
//           const temp = this.collection[j];
//           this.collection[j] = this.collection[j + 1];
//           this.collection[j + 1] = temp;
//         }
//       }
//       // If collection is a string
//       // Type Guard
//       else if (typeof this.collection === "string") {
//       }
//     }
//   }
// }
