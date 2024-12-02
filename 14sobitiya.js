"use strict";

const btns = document.querySelectorAll("button"),
      overley = document.querySelector(".overlay");

// btn.onclick = function() {
//   prompt("Ты дурак?");  
// };


// btn.addEventListener("click", () => {
//     alert("narubi pary churok");
// });



// btn.addEventListener("click", (e) => {
//     console.log(e.target);
//     e.target.remove();
//     // console.log("Hover");
// });

let i = 0

const deleteElement = (e) => {
    console.log(e.target);
    console.log(e.type);
    // i++
    // if (i == 4) {
    //     e.target.remove();
    //     // btn.removeEventListener("click", deleteElement);
    // }
};


// btns.addEventListener("click", deleteElement);
// overley.addEventListener("click", deleteElement);

btns.forEach( btn => {
    btn.addEventListener("click", deleteElement, {once: true});
});


const link = document.querySelector('a');

link.addEventListener("click", event => {
    event.preventDefault();

    console.log(event.target);
});