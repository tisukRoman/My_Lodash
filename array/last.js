// Gets the last element of array.

const testArray = [1, 2, 3, 4, 5];


const last = (array) => {
    if (Array.isArray(array) || typeof array === 'string') {
        return array.slice(array.length - 1, array.length)[0];
    }
    return
}


console.log(last(testArray));
console.log(last(testArray));
console.log(last('hello'));
console.log(last(null));