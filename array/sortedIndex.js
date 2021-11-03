// Uses a binary search to determine the lowest index at which value should be inserted into array 
// in order to maintain its sort order.

const sortedIndex = (array, value) => {
    if (Array.isArray(array)) {
        const lowerArray = array.filter(x => x <= value);
        const higherArray = array.filter(x => x > value);
        const newArray = [...lowerArray, value, ...higherArray];
        return newArray.findIndex(el => el === value);
    }
    return 0;
}


console.log(sortedIndex([10, 30, 50, 70], 20)); // => 1
console.log(sortedIndex([10, 30, 50, 70], 60)); // => 3
console.log(sortedIndex(['a', 'b', 'd', 'e'], 'c')); // => 3