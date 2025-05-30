"use sctict";

let num = 20;

function showFirstMessage(text) {
    console.log(text);
    let num = 10;
    console.log(num);
}

showFirstMessage("hello world");
console.log(num);


//////////////////////////////////////////////////////////////


function calc(a, b) {
    return (a + b);
}

console.log(calc(5, 7));
console.log(calc(9, 13));
console.log(calc(6, 18));


//////////////////////////////////////////////////////////////


function ret() {
    let num = 50;

    if (num > 50) {
        num = 200;
    } else if (num < 20) {
        num = 400;
    } else {
        num = false;
    }

    return num;
}

const anotherNum = ret();
console.log(anotherNum);


//////////////////////////////////////////////////////////////


const logger = function() {
    console.log("hello world");
};

logger();


//////////////////////////////////////////////////////////////


const calc = (a, b) => a + b;

console.log(calc(1, 5));

//////////////////////////////////////////////////////////////

const usdCurr = 13;
const discount = 5;

function convert(amount, curr) {
    return curr * amount;
}

function promotion(result, how) {
    console.log(result % how);
}

const res = convert(2, usdCurr);
promotion(res, discount);

//////////////////////////////////////////////////////////////

function test() {
    for(let i = 0; i < 5; i++) {
        console.log(i);
        if (i === 3) return
    }
    console.log("Done");
} 

test();

//////////////////////////////////////////////////////////////

function doNothing() {}
console.log(doNothing() === undefined);


function getMathResult(num, times) {
    if (typeof(times) != 'number' || times <= 0) {
        return num
    }
    
    let str = "";

    for (let i = 1; i <= times; i++) {
        if (i === times) {
           str += `${num * i}`; 
        } else {
            str += `${num * i}---`
        }
    }
    return str;
}

console.log(getMathResult(2, 5))

