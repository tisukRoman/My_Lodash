// This method is like _.pull except that it accepts an array of values to remove.
// Note: Unlike _.difference, this method mutates array.

const testArray = ['a', 'b', 'c', 'a', 'b', 'c'];

const pullAll = (array, values) => {
    for (let i = 0; i < array.length; i++) {
        if (values.includes(array[i])) {
            array.splice(i, i + 1);
        }
    }
    return array;
}

console.log(pullAll(testArray, ['a', 'c'])); // => [ 'b', 'b' ]);
console.log(testArray); // => [ 'b', 'b' ]);