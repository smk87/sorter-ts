"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var CharactersCollection_1 = require("./CharactersCollection");
// const numbersCollection = new NumbersCollection([10, 30, -5, 0]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(sorter.collection);
var charactersCollection = new CharactersCollection_1.CharactersCollection("Xaayb");
var sorter = new Sorter_1.Sorter(charactersCollection);
sorter.sort();
console.log(sorter.collection);
