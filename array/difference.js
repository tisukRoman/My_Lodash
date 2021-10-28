// Creates an array of array values not included in the other given arrays 
// using SameValueZero for equality comparisons. 
// The order and references of result values are determined by the first array.

const testArray = [1, 2, 3, 4];
const testArray2 = [1, NaN, 'hello', null, '12'];

const difference = (arr1, arr2) => {
    if (Array.isArray(arr1) && Array.isArray(arr2)) {
        return arr1.filter(x => !arr2.includes(x));
    } else if (Array.isArray(arr1) && !Array.isArray(arr2)) {
        return arr1;
    }
    return [];
}

console.log(difference(testArray, [1, 3, 2]));
console.log(difference(testArray, testArray));
console.log(difference('hello', []));
console.log(difference(testArray, 12, 23));
console.log(difference(testArray2, [NaN, {}, 2, null, 12, '1']));