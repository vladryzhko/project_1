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



let c = 4
const addX = x => n => n + x
const addThree = addX(3)
let d = addThree(c)
console.log('example partial application', d);