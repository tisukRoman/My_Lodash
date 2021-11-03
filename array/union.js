// Creates an array of unique values, in order, from all given arrays using SameValueZero for equality comparisons.

const union = (...arrays) => {
    return [...new Set([].concat(...arrays))];
}

console.log(union([1, 3, 2], [2], [3, 2])); // => [ 1, 3, 2 ]
console.log(union([1, 3, 2], [2, 3, 4], [3, 2], [2, 3, 5])); // => [ 1, 3, 2, 4, 5 ]