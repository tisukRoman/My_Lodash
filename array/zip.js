// Creates an array of grouped elements, the first of which contains the first elements of the given arrays, 
// the second of which contains the second elements of the given arrays, and so on.


const zip = (...arrays) => {
    const resultArray = arrays;
    const lastArray = resultArray[arrays.length - 1];
    for (let i = 0; i < resultArray.length - 1; i++) {
        resultArray[i].push(lastArray[i]);
    }
    resultArray.pop();
    return resultArray;
}

console.log(zip(['a', 'b'], [1, 2], [true, false])); // => [['a', 1, true], ['b', 2, false]]