// Fills elements of array with value from start up to, but not including, end.
// fill(array, value, [start=0], [end=array.length])

const testArray = [1, 2, 3, 4];

const fill = (array, value, start = 0, end = array.length) => {
    if (Array.isArray(array)) {
        return array.map((el, i) => {
            if (i >= start && i < end) {
                return value
            } else {
                return el;
            }
        });
    }
    return [];
}

console.log(fill(testArray, '*', 1, 3));
console.log(fill(testArray, null, 1));