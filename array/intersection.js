// Creates an array of unique values that are included in all given arrays using SameValueZero for equality comparisons. 
// The order and references of result values are determined by the first array.

const intersection = (...arrays) => {
    const resultArray = arrays[0];
    return resultArray.filter(el => {
        if (arrays.every(x => x.includes(el))) {
            return el;
        }
    });
}


console.log(intersection([2, 1, 4], [2, 3, 4])); // => [2, 4]
console.log(intersection([4, 5], [2, 3, 4, 5], [0, 4, 5], [0, 3, 4, 5])); // => [4, 5]