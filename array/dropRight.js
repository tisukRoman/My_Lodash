// Creates a slice of array with n elements dropped from the end.

const testArray = [1, 2, 3];

const dropRight = (array, n = 1) => {
    if (Array.isArray(array) || typeof array === 'string') {
        const resultArray = [...array];
        resultArray.splice(-n, n);
        return resultArray;
    }
    return [];
}


console.log(dropRight(testArray));
console.log(dropRight(testArray, 1));
console.log(dropRight(testArray, 0));
console.log(dropRight(testArray, 5));
console.log(dropRight('hello', 3));
console.log(dropRight(null, 2));

console.log(testArray);