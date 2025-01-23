"use strict";
 
function copy(name) {
    let newCopy = {};
    let key;

    for (key in name) {
        newCopy[key] = name[key];
    }

    return newCopy;
}

const persone = {
    name: "Vlad",
    number: "+345343433",
    parents: {
        mom: "Olga",
        dad: "Piter"
    }

}

// console.log(copy(persone));

// console.log(JSON.stringify(persone));
// const clone = JSON.parse(JSON.stringify(persone));

// clone.parents.mom = "Anna";
// console.log(persone);
// console.log(clone);

//////////////////////////////////////////////////////

const someOne = {
    name: "Alex",
    surName: "Dolma",
    number: "+748500394",
    skill: "jumping"
}

const copyObj = Object.assign({}, someOne);
copyObj.surName = "Vlatet";
copyObj.number = "+35749";
console.log(copyObj);
console.log(someOne);

/////////////////////////////////////////////////////

let someObj = {
    a: 2
}

let obj = Object.create(someObj, {
    b: {
        value: 2
    },
    c: {
        value: 2,
        enumerable: true,
    },
});

let newObj = Object.assign({}, obj);
console.log(newObj);

/////////////////////////////////////////////////////

const array = [
    "a",
    "b",
    "c", {
        face: "Copy"
    },
];

const newArray = [...array];
console.log(newArray);

