// Removes elements from array corresponding to indexes and returns an array of removed elements.

const testArray = ['a', 'b', 'c', 'a', 'b', 'c'];

const pullAt = (array, indexes) => {
    const from = indexes[0];
    const to = indexes[indexes.length - 1];
    return array.splice(from, to);
}


const pulled = pullAt(testArray, [1, 2])

console.log(testArray); // => [ 'a', 'a', 'b', 'c' ]
console.log(pulled); // => ['b', 'c']