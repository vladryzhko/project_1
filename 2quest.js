"use strict"

// Условия

// if (4 == 9) {
//     console.log('ok!');
// } else {
//     console.log('no!');
// }

//////////////////////////////////////////////////////////////

// const num = 50;

// if (num < 49) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log("Много")
// } else {
//     console.log("ok!");
// }

// Тернарый оператор (участвует 3 аргумента)

// (num === 50) ? console.log("Ok!") : console.log("Error");

//////////////////////////////////////////////////////////////

// const num = 50;

// switch (num) {
//     case 49:
//         console.log("error");
//         break;
//     case 50:
//         console.log("Great!");
//         break;
//     default:
//         console.log("no it's time");
//         break;
// }

//////////////////////////////////////////////////////////////


// const hamburger = true;
// const fries = true;

// if (hamburger && fries ) {
//     console.log("ya daun");
// }

// console.log((hamburger && fries));

// const hamburger = 3;
// const fries = 1;
// const cola = 0;

// if (hamburger === 3 && cola === 1 && fries) {
//     console.log("Nice!");
// } else {
//     console.log("good bye!");
// }

//////////////////////////////////////////////////////////////

// console.log( NaN || 2 || undefined );
// console.log( NaN && 2 && undefined );
// console.log( 1 && 2 && 3 );
// console.log( !1 && 2 || !3 );
// console.log( 25 || null && !3 );
// console.log( NaN || null || !3 || undefined || 5);
// console.log( NaN || null && !3 && undefined || 5);
// console.log( 5 === 5 && 3 > 1 || 5);

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;
// if (hamburger || cola || fries === 3 || nuggets) {
//    console.log('Done!')
// }
// console.log(hamburger || cola || fries === 3 || nuggets);


// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;


// if (hamburger && cola || fries === 3 && nuggets) {
//    console.log('Done!')
// }

// console.log(hamburger && cola || fries === 3 && nuggets);

//////////////////////////////////////////////////////////////

//                            ЦИКЛ

// let num = 50;

// while (num <= 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while (num < 55);

// for (let i = 1; i < 10; i++) {
//     if (i === 6) {
//         // break;
//         continue;
//     }
    
//     console.log(i);
// }

//////////////////////////////////////////////////////////////

// for (let i = 0; i < 3; i++) {
//     console.log(i);
//     for (let j = 0; j < 3; j++) {
//         console.log(j);
//     }
// }

//////////////////////////////////////////////////////////////

// let result = "";
// const length = 7;

// for (let i = 1; i < length; i++) {

//     for (let j = 0; j < i; j++) {
//         result += "*";
//     }
    
//     result += '\n'
// }


// console.log(result);

//////////////////////////////////////////////////////////////


// first: for (let i = 0; i < 3; i++) {
//     console.log(`First level: ${i}`);
//     for (let j = 0; j < 3; j++) {
//         console.log(`Second level: ${j}`);
//         for (let k = 0; k < 3; k++) {
//             if (k === 2) continue first
//             console.log(`Third level: ${k}`);
//         }
//     } 
// }

//////////////////////////////////////////////////////////////

// function thirdTask() {
//     for (let i = 2; 2 <= 10; i++) {
//         if (i % 2 === 0) {
//             console.log(i);
//         }
//     }
// }

//////////////////////////////////////////////////////////////
let num = 3;

if (num % 3 === 0) {
    console.log('da');
} else {
    console.log("net");
}
