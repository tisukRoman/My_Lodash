// Performs a deep comparison between two values to determine if they are equivalent.

const user1 = {
    name: 'Roma',
    age: 18,
};

const user2 = {
    name: 'George',
    age: 18,
    work: {
        title: 'programmer',
        rank: 'Junior',
        salary: {
            amount: 500,
        }
    },
}

const user3 = {
    name: 'George',
    age: 18,
    work: {
        title: 'programmer',
        rank: 'Junior',
        salary: {
            amount: 500,
        }
    },
}

const isEqual = (obj1, obj2) => {
    if (typeof obj1 === 'object' && typeof obj2 === 'object') {
        const propNames1 = Object.getOwnPropertyNames(obj1);
        const propNames2 = Object.getOwnPropertyNames(obj2);

        if (propNames1.length !== propNames2.length) {
            return false;
        };

        for (let i = 0; i < propNames1.length; i++) {
            const propName = propNames1[i];

            // Checking inner Objects
            if (typeof obj1[propName] === 'object') {
                const innerObjectsAreEqual = isEqual(obj1[propName], obj2[propName]);
                if (!innerObjectsAreEqual) return false;
            }
            // Checking Props
            else if (obj1[propName] !== obj2[propName]) {
                return false;
            }
        }
        return true;
    }
}

isEqual(user3, user2)


console.log(isEqual(user1, user2));
console.log(isEqual(user3, user2));


module.exports = isEqual;