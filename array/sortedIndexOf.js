// This method is like _.indexOf except that it performs a binary search on a sorted array.

const sortedIndexOf = (array, value) => {
    if (Array.isArray(array)) {
        return array.indexOf(value)
    }
    return -1;
}

console.log(sortedIndexOf([1, 2, 3, 4, 5, 6], 0)); // => 2