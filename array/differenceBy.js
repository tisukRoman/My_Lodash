// This method is like _.difference except that it accepts iteratee which is invoked for each element of array 
// and values to generate the criterion by which they're compared. 
// The order and references of result values are determined by the first array. 
// The iteratee is invoked with one argument: (value).

const testArray = [1.2, 1.3, 4];
const testArray2 = [{ 'x': 1 }, { 'x': 3 }, { 'x': 2 }];
const testArray3 = [
    { 'name': 'Roma', 'age': 18 },
    { 'name': 'Gregory', 'age': 12 },
    { 'name': 'Kiril', 'age': 18 },
    { 'name': 'Roma', 'age': 19 },
];

const differenceBy = (arr1, arr2, iteratee) => {
    if (Array.isArray(arr1) && Array.isArray(arr2)) {
        if (typeof iteratee === 'function') {
            return arr1.filter(el => !arr2.includes(iteratee(el)));
        } else {
            return arr1.filter((el) => !arr2.some(x => x[iteratee] === el[iteratee]));
        }
    } else if (Array.isArray(arr1) && !Array.isArray(arr2)) {
        return arr1;
    }
    return [];
}

console.log(differenceBy(testArray, [1, 3], Math.floor));
console.log(differenceBy(testArray, [1, 3], Math.ceil));
console.log(differenceBy(testArray2, [{ 'x': 1 }, { 'x': 3 }], 'x'));
console.log(differenceBy(testArray3, [{ 'name': 'Roma', 'age': 18 }], 'name'));
console.log(differenceBy(testArray3, [{ 'name': 'Roma', 'age': 18 }], 'age'));