"use strict";
//Массивы и псевдомассивы

const arr = [92, 94, 46, 67, 20];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
    return a - b;
}
// arr[99] = 0
// arr.pop(); // - удаляет последний элемент из массива
// arr.push(21); // - добавляет элемент в начало массива
// console.log(arr);
// console.log(arr.length);

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

for (let value of arr) {
    console.log(value);
}

arr.forEach(function(item, i, arr) {
    console.log(`${i} находится: ${item} внутри всего ${arr}`);
});

//////////////////////////////////////////////////////////////////

const str = prompt("Перечислите продукты необходимые для покупки в магазине, через запятую:", "");
const products = str.split(", "); // - создает массив из строки.
products.sort() // -сортирует по порядку буквам, цифрам.
console.log(products.join("; ")); // - создает строку из массива.

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

/////////////////////Задачи с обьектами////////////////////////////////////////////


const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function(plan) {
        const {age} = plan;
        const {languages} = plan.skills;
        let str = `Мне ${age} и я владею языками: `;

        languages.forEach(function(lang) {
            str += `${lang.toUpperCase()} `
        });
        
        return str;
    }
};

console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

function showExpPerson(plan) {
    const {exp} = plan.skills;
    return `Я прокачиваю скил уже: ${exp}`;
}

console.log(showExpPerson(personalPlanPeter));

function showProgrammingLangs(plan) {
    let str = "";
    const {programmingLangs} = plan.skills;
    for (let key in programmingLangs) {
        str += `Язык ${key.toUpperCase()} изучен на: ${programmingLangs[key]}\n`
    }
    return str;
}

console.log(showProgrammingLangs(personalPlanPeter));


/////////////////////Задачи с массивами////////////////////////////////////////////

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    let str = '';

    arr.length === 0 ? str = 'Семья пуста' : str = 'Семья состоит из: ';

    arr.forEach(name => {
        str += `${name} `;
    })

    return str;
    
}

console.log(showFamily(family));

////////////////////////////////////////////////////////////////

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    arr.forEach(words => {
        console.log(words.toLowerCase());
    })
}

standardizeStrings(favoriteCities);

////////////////////////////////////////////////////////////////

const someString = 'This is some strange string';

function reverse(str) {
    return typeof(str) === 'string' ? str.split('').reverse().join('') : 'Ошибка!'
}

console.log(reverse(someString));


function reverseEven(str) {
    let newArr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        newArr += str[i];
    }
    return newArr;
}

console.log(reverseEven(someString));

////////////////////////////////////////////////////////////////

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    let str = '';
    arr.length === 0 ? str = 'Нет доступных валют' : str = 'Доступные валюты:\n';

    arr.forEach(function(curr, i) {
        if (curr !== missingCurr) {
            str += `${curr}\n`;
        }
    })
    return str;

}

console.log(availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY'))