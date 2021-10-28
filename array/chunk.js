// Creates an array of elements split into groups the length of size. 
// If array can't be split evenly, the final chunk will be the remaining elements.
// It works with string
// For not iterable objects it returns []

const testArray = ['1', '2', 'hello', '12', 'ss'];
const testString = 'hello'

const chunck = (iterableItem = [], size = 1) => {
    const resultArray = [];

    if (Array.isArray(iterableItem) || typeof iterableItem === 'string') {
        for (let i = 0; i < iterableItem.length; i += size) {
            let element = iterableItem.slice(i, i + size);
            if (typeof element === 'string') {
                element = [element]
            }
            resultArray.push(element);
        }
    }
    return resultArray;
}
console.log(testArray);
console.log(testString);
console.log(chunck(testArray, 2));
console.log(chunck(testString, 3));
console.log(chunck(null, 2));
console.log(chunck({ hello: 'world' }));