// Creates a slice of array with n elements taken from the end.


const takeRight = (array, size = 1) => {
    if (Array.isArray(array)) {
        const result = array;
        return result.splice(-size, size);
    }
    return [];
}

console.log(takeRight([1, 2, 3, 4, 5], 2));
console.log(takeRight([1, 2, 3, 4, 5], 4));
