// This method is like _.find except that it returns the index of the first element 
// predicate returns truthy for instead of the element itself.

const isEqual = require('../object/isEqual');

var users = [
    { 'user': 'barney', 'active': false },
    { 'user': 'fred', 'active': false },
    { 'user': 'pebbles', 'active': true },
    { 'user': 'barney', 'active': false },
];


const findIndex = (array, predicate, fromIndex = 0) => {
    if (Array.isArray(array)) {
        if (Array.isArray(predicate)) {
            const propName = predicate[0];
            const propValue = predicate[1];
            return array.findIndex((el, i) => {
                if (i >= fromIndex) {
                    return el[propName] === propValue;
                }
            });
        }
        else if (typeof predicate === 'function') {
            return array.findIndex((el, i) => {
                if (i >= fromIndex) {
                    return predicate(el);
                }
            });
        }
        else if (typeof predicate === 'object') {
            return array.findIndex((el, i) => {
                if (i >= fromIndex) {
                    return isEqual(el, predicate);
                }
            });
        }

    }
    return [];
}

console.log(findIndex(users, (o) => o.user == 'fred')); // => 0
console.log(findIndex(users, (o) => o.user == 'barney', 2)); // => 3
console.log(findIndex(users, { 'user': 'fred', 'active': false })); // => 1
console.log(findIndex(users, ['active', false], 2)); // => 0