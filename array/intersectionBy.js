// This method is like _.intersection except that it accepts comparator which is invoked to compare elements of arrays. 
// The order and references of result values are determined by the first array. 
// The comparator is invoked with two arguments: (arrVal, othVal).


const intersectionBy = (...args) => {
    const iteratee = args[args.length - 1];
    let resultArray = args[0];

    for (let i = 1; i < args.length - 1; i++) {
        if (typeof iteratee === 'function') {
            const nextArray = args[i].map(el => iteratee(el));
            const arrayWithShareValues = resultArray.filter(x => nextArray.includes(iteratee(x)))
            resultArray = [...arrayWithShareValues];
        } else {
            const nextArray = args[i];
            const arrayWithShareValues = resultArray.filter((el) => nextArray.some(x => x[iteratee] === el[iteratee]));
            resultArray = [...arrayWithShareValues];
        }
    }

    return resultArray;
}


console.log(intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor)); // => [2.1]
console.log(intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x')); // => [{ 'x': 1 }]