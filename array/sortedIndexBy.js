// This method is like _.sortedIndex except that it accepts iteratee 
// which is invoked for value and each element of array to compute their sort ranking. 
// The iteratee is invoked with one argument: (value).

const testArray = [{ 'x': 4 }, { 'x': 7 }];

const sortedIndexBy = (array, value, iteratee) => {
    if (Array.isArray(array)) {
        if (typeof iteratee === 'function') {
            const lowerArray = [];
            const higherArray = [];
            for (let i = 0; i < array.length; i++) {
                if (iteratee(array[i]) < iteratee(value)) {
                    lowerArray.push(array[i]);
                } else if (iteratee(array[i]) >= iteratee(value)) {
                    higherArray.push(array[i]);
                }
            }
            const newArray = [...lowerArray, value, ...higherArray];
            return newArray.findIndex(el => el === value);
        } else {
            const lowerArray = array.filter(x => x[iteratee] < value[iteratee]);
            const higherArray = array.filter(x => x[iteratee] >= value[iteratee]);
            const newArray = [...lowerArray, value, ...higherArray];
            return newArray.findIndex(el => el === value);
        }
    }
    return 0;
}


console.log(sortedIndexBy(testArray, { 'x': 7 }, 'x')); // => 1
console.log(sortedIndexBy(testArray, { 'x': 3 }, o => o.x)); // => 0
console.log(sortedIndexBy(testArray, { 'x': 9 }, o => o.x)); // => 2