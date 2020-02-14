import { NumbersCollection } from "./NumberCollection";
import { CharactersCollection } from "./CharactersCollection";

// New approach
const numbersCollection = new NumbersCollection([10, 30, -5, 0]);
const charactersCollection = new CharactersCollection("AxbyCz");

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
