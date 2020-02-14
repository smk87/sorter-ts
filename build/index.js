"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumberCollection_1 = require("./NumberCollection");
var CharactersCollection_1 = require("./CharactersCollection");
// New approach
var numbersCollection = new NumberCollection_1.NumbersCollection([10, 30, -5, 0]);
var charactersCollection = new CharactersCollection_1.CharactersCollection("AxbyCz");
numbersCollection.sort();
charactersCollection.sort();
console.log(numbersCollection.data, charactersCollection.data);
/*
Old approach
*/
// const numbersCollection = new NumbersCollection([10, 30, -5, 0]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(sorter.collection);
