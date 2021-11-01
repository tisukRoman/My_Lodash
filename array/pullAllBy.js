// This method is like _.pullAll except that it accepts iteratee 
// which is invoked for each element of array and values to generate the criterion by which they're compared. 
// The iteratee is invoked with one argument: (value).
// Note: Unlike _.differenceBy, this method mutates array. 

const testArray = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];


const pullAllBy = (array, values, iteratee) => {
    for (let i = 0; i < array.length; i++) {
        if (values.some(el => el[iteratee] === array[i][iteratee])) {
            array.splice(i, i + 1);
        }
    }
    return array;
}

console.log(pullAllBy(testArray, [{ 'x': 1 }, { 'x': 3 }], 'x')); // => [{ 'x': 2 }]
console.log(testArray); // => [{ 'x': 2 }]