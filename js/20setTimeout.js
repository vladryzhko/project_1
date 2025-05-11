"use strcit";

// const time = setTimeout(function(text) {
//     prompt(text);
// }, 1000, 'Durak');

///////////////////////////////////////////////////////////////

// const newTime = setTimeout(waitCheck, 2000);
// 
// function waitCheck() {
//     alert('Hello');
// }

// clearInterval(newTime);

///////////////////////////////////////////////////////////////

// const btn = document.querySelector(".btn");
// let newTime,
//     i = 0;

// btn.addEventListener('click', () => {
//     // const newTime = setTimeout(waitCheck, 2000);
//     const newTime = setInterval(waitCheck, 500);
// });


// function waitCheck() {
//     if (i === 3) {
//         clearInterval(newTime);
//     } else {
//         console.log('Hello');
//         i++; 
//     }
// }

///////////////////////////////////////////////////////////////

// let id = setTimeout(function log() {
//     console.log("Hello");
//     id = setTimeout(log, 500);
// }, 500);

///////////////////////////////////////////////////////////////

const btn = document.querySelector(".btn");

function myAnimation() {
    const elem = document.querySelector(".box");
    let pos = 0;

    const id = setInterval(frame, 10);
    function frame() {
        if (pos === 300) {
            clearInterval(id);
        } else {
            pos++
            elem.style.top = pos + "px";
            elem.style.left = pos + "px";
        }
    }
}


btn.addEventListener("click", myAnimation); 




