"use strict";

const btns = document.querySelectorAll("button"),
      overlay = document.querySelector(".overlay");

// btn.onclick = function() {
//   alert("Ты дурак?");         // добавления обработчика событий устаревший вариант
// };

////////////////////////////////////////////////////////////

// btn.addEventListener("click", () => {
//     alert("narubi pary churok");         //  новый вариант, более мобильный.
//     alert("darova");
// });

////////////////////////////////////////////////////////////

// btn.addEventListener("mouseenter", (event) => {
//     console.log(event.target);
//     event.target.remove();
//     // console.log('Hover');
// });


// btn.addEventListener("click", (e) => {
//     console.log(e.target);
//     e.target.remove();
//     // console.log("Hover");
// });

////////////////////////////////////////////////////////////

let i = 0

const deleteElement = (e) => {
    console.log(e.currentTarget);
    console.log(e.type)
    // i++
    // if (i == 4) {
    //     btns.removeEventListener("click", deleteElement);
    // }
};

// btn.addEventListener('click', deleteElement);
// overlay.addEventListener("click", deleteElement);

btns.forEach( btn => {
    btn.addEventListener("click", deleteElement, {once: true});
});


// const link = document.querySelector('a');

// link.addEventListener("click", event => {
//     event.preventDefault();

//     console.log(event.target);
// });