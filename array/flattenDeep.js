// Recursively flattens array


const flattenDeep = (array) => {
    const resultArray = [];

    if (typeof array === 'string') {
        return array.split('');
    }

    if (Array.isArray(array)) {
        // Exit recursion 
        if (array.every(el => !Array.isArray(el))) {
            return array;
        }
        for (let i = 0; i < array.length; i++) {
            if (Array.isArray(array[i])) {
                resultArray.push(...array[i]);
            } else {
                resultArray.push(array[i]);
            }
        }
    }
    return flattenDeep(resultArray);
}


console.log(flattenDeep([1, [2, [3, [4, [5]]], 6]])); // => [1, 2, 3, 4, 5, 6]
console.log(flattenDeep(null)); // => []
console.log(flattenDeep('hello')); // => [ 'h', 'e', 'l', 'l', 'o' ]