// Creates an array excluding all given values using SameValueZero for equality comparisons.
// Note: Unlike _.pull, this method returns a new array.

const without = (array, ...values) => {
    return array.filter(el => !values.includes(el));
}

console.log(without([2, 1, 2, 3], 1, 2)); // => [3]