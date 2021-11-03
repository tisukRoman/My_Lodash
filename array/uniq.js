// Creates a duplicate-free version of an array, using SameValueZero for equality comparisons, 
// in which only the first occurrence of each element is kept. 
// The order of result values is determined by the order they occur in the array.

const uniq = (array) => {
    return [...new Set(array)];
}

console.log(uniq([1, 2, 3, 3, 2, 1, 2])); // => [1, 2, 3]