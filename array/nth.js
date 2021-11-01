// Gets the element at index n of array. 
// If n is negative, the nth element from the end is returned.

const array = ['a', 'b', 'c', 'd'];

const nth = (array, n = 0) => {
    if (typeof array === 'string') {
        return array.split('').slice(n, n + 1)[0];
    } else if (Array.isArray(array)) {
        return array.slice(n, n + 1)[0];
    }
    return
}

console.log(nth(array, 1)); // => 'b'
console.log(nth(array, -2)); // => 'c'
console.log(nth(null, -2)); // => undefined