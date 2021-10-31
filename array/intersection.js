// Creates an array of unique values that are included in all given arrays using SameValueZero for equality comparisons. 
// The order and references of result values are determined by the first array.

const intersection = (...arrays) => {
    let resultArray = arrays[0];
    for (let i = 1; i < arrays.length; i++) {
        const arrayWithShareValues = resultArray.filter(x => arrays[i].includes(x));
        resultArray = [...arrayWithShareValues];
    }
    return resultArray;
}


console.log(intersection([2, 1, 4], [2, 3, 4])); // => [2, 4]
console.log(intersection([4, 5], [2, 3, 4, 5], [0, 4, 5], [0, 3, 4, 5])); // => [4, 5]