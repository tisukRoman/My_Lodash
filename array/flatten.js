// Flattens array a single level deep.


const flatten = (array) => {
    const resultArray = [];
    if (Array.isArray(array) || typeof array === 'string') {
        for (let i = 0; i < array.length; i++) {
            if (Array.isArray(array[i])) {
                resultArray.push(...array[i]);
            } else {
                resultArray.push(array[i]);
            }
        }
    }
    return resultArray;
}


console.log(flatten([1, [2, [3, [4]], 5]])); // => [1, 2, [3, [4]], 5]
console.log(flatten(null)); // => []
console.log(flatten('hello')); // => [ 'h', 'e', 'l', 'l', 'o' ]
console.log(flatten(['hell', ['hi', 'hello']])); //=> [ 'hell', 'hi', 'hello' ]  