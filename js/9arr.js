"use strict";

const str = prompt("Перечислите продукты необходимые для покупки в магазине, через запятую:", "");
const products = str.split("", "");

console.log(products);

//////////////////////////////////////////////////////////////////

let a = 5,
    b = a;

b = b +5;

console.log(b);
console.log(a);

//////////////////////////////////////////////////////////////////

const obj = {
    a: 5,
    b: 1
}

const copy = obj; //ССЫЛКА

copy.a = 10;

console.log(copy);
console.log(obj);

//////////////////////////////////////////////////////////////////

function copy(mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}

const numbers = {
    a: 5,
    b: 10,
    c: 9,
    d: {
        x: 4,
        z: 12
    }
}

const newNumbers = copy(numbers);

newNumbers.a = 10; // обратить внимание на изменения в консоли 
newNumbers.d.x = 20; // обратить внимание на изменения в консоли 

// есть глубокие и поверхностные копии объектов, тот что сверху это поверхностный.

console.log(newNumbers);
console.log(numbers);


const add = {
    f: 22,
    e: 2
};

// console.log(Object.assign(numbers, add)); // Метод добавление в объект поверхностной копии.

const clone = Object.assign({}, add);

clone.f  = 23;

console.log(add);
console.log(clone);

const metaFake = ["v", "b", "noen"];
const betaArray = metaFake.slice();

betaArray[1] = "babaika";

console.log(betaArray);
console.log(metaFake);

/////////////////////////////////////////////////////////////////