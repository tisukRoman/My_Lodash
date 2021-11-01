// This method is like _.indexOf except that it iterates over elements of array from right to left.

const lastIndexOf = (array, value, fromIndex = array?.length - 1) => {
    if (Array.isArray(array) || typeof array === 'string') {
        for (let i = fromIndex; i >= 0; i--) {
            if (array[i] === value) {
                return i;
            }
        }
    }
    return -1;
}

console.log(lastIndexOf([1, 2, 1, 2], 2)); // => 3
console.log(lastIndexOf([1, 2, 1, 2], 2, 2)); // => 1
console.log(lastIndexOf('hello', 'l')); // => 3
console.log(lastIndexOf('hello', 'l', 2)); // => 2
console.log(lastIndexOf(null)); // => 2
