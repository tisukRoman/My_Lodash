// Creates a slice of array with n elements dropped from the beginning.
// drop(array, [n=1])

const testArray = [1, 2, 3];


const drop = (array, n = 1) => {
    if (Array.isArray(array) || typeof array === 'string') {
        const resultArray = [...array];
        resultArray.splice(0, n);
        return resultArray;
    }
    return [];
}


console.log(drop(testArray));
console.log(drop(testArray, 1));
console.log(drop(testArray, 0));
console.log(drop(testArray, 5));
console.log(drop('hello', 2));
console.log(drop(null, 2));

console.log(testArray);