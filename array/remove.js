// Removes all elements from array that predicate returns truthy for and returns an array of the removed elements. 
// The predicate is invoked with three arguments: (value, index, array).
// Note: Unlike _.filter, this method mutates array. Use _.pull to pull elements from an array by value.


const testArray = [1, 2, 3, 4];

const remove = (array, predicate) => {
    const removedArray = [];
    if (Array.isArray(array)) {
        for (let i = 0; i < array.length; i++) {
            if (predicate(array[i])) {
                const removedEl = array.splice(i, 1)[0];
                removedArray.push(removedEl);
            }
        }
    }
    return removedArray;
}


const evens = remove(testArray, function (n) {
    return n % 2 == 0;
});

console.log(testArray); // => [ 1, 3 ]
console.log(evens); // => [ 2, 4 ]