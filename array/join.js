// Converts all elements in array into a string separated by separator.


const join = (array, separator = ', ') => {
    if (typeof array === 'string') {
        return array.split('').join(separator);
    } else if (Array.isArray(array)) {
        return array.join(separator)
    }
    return '';
}


console.log(join(['a', 'b', 'c'], '~')); // => 'a~b~c'
console.log(join(['a', 'b', 'c'])); // => 'a, b, c'
console.log(join('hello', '-')); // => 'h-e-l-l-o'
console.log(join(null, '-')); // => ''