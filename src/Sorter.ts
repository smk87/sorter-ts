interface Sortable {
  length: number;
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
}

export class Sorter {
  constructor(public collection: Sortable) {}

  sort(): void {
    const { length } = this.collection;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection.compare(j, j + 1)) {
          this.collection.swap(j, j + 1);
        }
      }
    }
  }
}

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
