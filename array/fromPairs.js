// The inverse of _.toPairs; this method returns an object composed from key-value pairs.


const fromPairs = (pairs) => {
    return Object.fromEntries(pairs);
}


console.log(fromPairs([['a', 1], ['b', 2]])); // =>  { 'a': 1, 'b': 2 }