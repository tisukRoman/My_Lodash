
const user = {
    name: "Sidor",
    age: 18,
    location: {
        city: "Kiyv",
        country: "Ukraine"
    }
}


const cloneDeep = (object) => {
    const clone = {};
    for (let key in object) {
        clone[key] = (typeof object[key] !== 'object') ? object[key] : cloneDeep(object[key]);
    }
    return clone;
}

const userClone = cloneDeep(user);
userClone.location.city = 'Nizhyn';

console.log(userClone, user);