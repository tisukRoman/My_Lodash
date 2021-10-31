// Gets all but the last element of array.

const testArray = [1, 2, 3, 4, 5];

const initial = (array) => {
    return array.slice(0, -1);
}


console.log(initial(testArray)); // => [1, 2, 3, 4]