// Recursively flatten array up to depth times.

const flattenDepth = (array, depth = 1) => {
    const resultArray = [];

    if (typeof array === 'string') {
        return array.split('');
    }

    if (Array.isArray(array)) {
        // Exit recursion 
        if (array.every(el => !Array.isArray(el)) || depth === 0) {
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

    return flattenDepth(resultArray, depth - 1);
}

console.log(flattenDepth([1, [2, [3, [4]], 5]])); // => [1, 2, [3, [4]], 5]
console.log(flattenDepth([1, [2, [3, [4]], 5]], 2)); // => [1, 2, 3, [4], 5]
console.log(flattenDepth([1, [2, [3, [4]], 5]], 3)); // => [1, 2, 3, 4, 5]