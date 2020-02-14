import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumberCollection";
import { CharactersCollection } from "./CharactersCollection";

// const numbersCollection = new NumbersCollection([10, 30, -5, 0]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(sorter.collection);

const charactersCollection = new CharactersCollection("Xaayb");
const sorter = new Sorter(charactersCollection);
sorter.sort();
console.log(sorter.collection);
