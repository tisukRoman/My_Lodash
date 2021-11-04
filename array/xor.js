// Creates an array of unique values that is the symmetric difference of the given arrays. 
// The order of result values is determined by the order they occur in the arrays.


const xor = (...arrays) => {
    const map = new Map();
    const wholeArray = [].concat(...arrays);

    wholeArray.forEach(el => {
        if (!map.has(el)) {
            map.set(el, 1);
        }
        else {
            let mapValue = map.get(el);
            mapValue = mapValue + 1;
            map.set(el, mapValue);
        }
    });
    return wholeArray.filter(el => {
        let mapValue = map.get(el);
        if (mapValue > 1) return false;
        else return true;
    })
}

console.log(xor([1, 2, 2, 5, 1, 2, 3, 3, 4])); // => [5, 4]
console.log(xor(['a', 'b', 'c', 'd', 'b', 'c'])); // => [ 'a', 'd' ]
console.log(xor([null, null, undefined])); // => [ undefined ]