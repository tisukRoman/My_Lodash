// Creates an array of values corresponding to paths of object.

const testObject = { 'a': [{ 'b': { 'c': 3 } }, 4] };

const at = (object, path) => {
    const ourObj = JSON.parse(JSON.stringify(object));
    console.log(ourObj);
    if (typeof path === 'string') {
        const strPath = `ourObj.${path}`;
        return eval(strPath);
    } else if (Array.isArray(path)) {
        return path.map(el => {
            const strPath = `ourObj.${el}`;
            return eval(strPath);
        })
    }
}

console.log(at(testObject, "a[0].b.c")); // => 3
console.log(at(testObject, ["a[0].b.c", "a[1]", "a[0].b"])); // => [ 3, 4, { c: 3 } ]