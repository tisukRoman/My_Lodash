// This method is like _.zip except that it accepts an array of grouped elements 
// and creates an array regrouping the elements to their pre-zip configuration.

const unzip = (array) => {
    const resultArray = [];

    const maxLength = array.reduce((acc, element) => {
        if (acc < element.length) acc = element.length;
        return acc;
    }, 0);

    for (let i = 0; i < maxLength; i++) {
        const miniArray = [];
        for (let j = 0; j < array.length; j++) {
            miniArray.push(array[j][i]);
        }
        resultArray.push(miniArray);
    }

    return resultArray;
}

console.log(unzip([['a', 1, true], ['b', 2, false, 3, 3]])); // => [["a", "b"], [1, 2], [true, false], [undefined, 3], [undefined, 3]]