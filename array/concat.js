// Creates a new array concatenating array with any additional arrays and/or values.

const testArray = [1, 2];

const concat = (arr, ...args) => {
    if (!Array.isArray(arr)) {
        arr = [arr]
    }
    return arr.concat(...args)
}

console.log(concat(testArray, [3], [[4]], 2));
console.log(concat([], [3], [[4], [12]], 'hello'));
console.log(concat('hello', 'world'));
console.log(concat(null, 'world'));
console.log(concat(false));
