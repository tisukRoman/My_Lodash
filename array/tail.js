// Gets all but the first element of array.

const tail = (array) => {
    return array.slice(1, array.length);
}

console.log(tail([1, 2, 3, 4, 5])); // => [ 2, 3, 4, 5 ]