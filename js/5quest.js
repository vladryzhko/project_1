"use strict";

function getMathResult(num, times) {
    if (typeof(times) !== 'number' || times <= 0) {
        return num;
    }

    let str = '';

    for (let i = 1; i <= times; i++) {
        if (i === times) {
            str += `${num * i}`;
            
        } else {
            str += `${num * i}---`;
        
        }
    }
    return str;
}

console.log(getMathResult(10, 5));

//////////////////////////////////////////////////////////////

const str = "nUmber";
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str);

//////////////////////////////////////////////////////////////

const fruit = "some people";
console.log(fruit.indexOf("people"));

//////////////////////////////////////////////////////////////

const logg = "Darova cheel ti"
console.log(logg.slice(0, 6,));

//////////////////////////////////////////////////////////////

const publ = "heelo dude";
console.log(publ.substring(0));

//////////////////////////////////////////////////////////////

const num = 14.6;
console.log(Math.round(num));

//////////////////////////////////////////////////////////////

const sell = 11.9;
// console.log(parseInt(sell));
console.log(parseFloat(sell));

//////////////////////////////////////////////////////////////

function calculateVolumeAndArea(length) {
    if (typeof(length) !== "number" || length < 0 || !Number.isInteger(length)) {
        return "При вычислении произошла ошибка";
    }
    
    let volume = 0,
        area = 0;
        
    volume = length * length * length ; // or volume = length ** 3;
    area = 6 * (length * length); // or are = 6 * (length ** 2);
    
    return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;

}

console.log(calculateVolumeAndArea(15));

//////////////////////////////////////////////////////////////

function getCOupeNumber(setNumber) {
    if (typeof(setNumber) !== "number" || setNumber < 0 || !Number.isInteger(setNumber)) {
        return "Ошибка, проверть правильносто введенного числа";
    }

    if (setNumber === 0 || setNumber > 36) {
        return "Таких мест в вагоне не существует";
    }

    return Math.ceil(setNumber / 4);
}

console.log(getCOupeNumber(8));

//////////////////////////////////////////////////////////////

function howMuchTimes(time) {
    if (typeof(time) !== "number" || time < 0 || !Number.isInteger(time)) {
        return "Ошибка, проверьте данные";
    }

    const hours = Math.floor(time / 60);
    const minutes = time % 60;

    let strTime = "";

    switch (hours) {
        case 0 :
            strTime = "часов";
            break;
        case 1 : 
            strTime = "час";
            break;
        case 2 :
        case 3 :
        case 4 :
            strTime = "часа";
            break;
        default : 
            strTime: "часов"
    }
    return (`Это ${hours} ${strTime} и ${minutes} минунт`)
}

console.log(howMuchTimes(150));

//////////////////////////////////////////////////////////////

function findMaxNumber(a, b, c, d) {
    if (typeof(a) !== "number" || 
        typeof(b) !== "number" || 
        typeof(c) !== "number" || 
        typeof(d) !== "number") {
        return 0;
    } else {
        return Math.max(a, b, c, d);
    }
} 

console.log(findMaxNumber(30, 50, 200));

//////////////////////////////////////////////////////////////

function fib(num) {
    if (typeof(num) !== "number" || num < 0 || !Number.isInteger(num)) {
        return "";
    }
    
    let result = "";
    let first = 0;
    let second = 1;
    
    for (let i = 0; i < num; i++) {
        if (i + 1 === num) {
            result += `${first}`;
        } else {
            result += `${first} `;
        }
        
        let third = first + second;
        first = second;
        second = third;
        
    }
    
    console.log(first)
    return result;
}

console.log(fib(13));