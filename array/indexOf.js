// Gets the index at which the first occurrence of value is found in array using SameValueZero for equality comparisons. 
// If fromIndex is negative, it's used as the offset from the end of array.
// indexOf(array, value, [fromIndex=0])

const indexOf = (array, value, fromIndex = 0) => {
    return array.indexOf(value, fromIndex);
}


console.log(indexOf([1, 2, 1, 2], 2)); // => 1
console.log(indexOf([1, 2, 1, 2], 2, 2)); // => 3