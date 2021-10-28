// Creates an array with all falsey values removed. 
// The values false, null, 0, "", undefined, and NaN are falsey.

const testArray1 = [false, null, 0, undefined, NaN, 1, ""];
const testArray2 = ['1', 'false', 'null', '0', 'undefined', 0];
const testString = 'Hello';

const compact = (arr) => {
    if (typeof arr === 'string') {
        return arr.split('');
    }
    else if (Array.isArray(arr)) {
        return arr.filter(el => el);
    }
    return [];
}

console.log(compact(testArray1));
console.log(compact(testArray2));
console.log(compact(testString));
console.log(compact(null));