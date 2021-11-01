// Removes all given values from array using SameValueZero for equality comparisons.
// Note: Unlike _.without, this method mutates array. 

const testArray = ['a', 'b', 'c', 'a', 'b', 'c'];

const pull = (array, ...values) => {
    for (let i = 0; i < array.length; i++) {
        if (values.includes(array[i])) {
            array.splice(i, i + 1);
        }
    }
    return array;
}

console.log(pull(testArray, 'a', 'c')); // => ['b', 'b']
console.log(testArray); // => ['b', 'b']