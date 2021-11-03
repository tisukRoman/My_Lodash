// Creates a slice of array with n elements taken from the beginning.


const take = (array, size = 1) => {
    return array.slice(0, size);
}

console.log(take([1, 2, 3, 4, 5], 2));
console.log(take([1, 2, 3, 4, 5]));
console.log(take([1, 2, 3, 4, 5], 0));
console.log(take([1, 2, 3, 4, 5], 6));