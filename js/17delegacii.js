"use scrict";

const btns = document.querySelectorAll("button"),
      wrapper = document.querySelector(".btn-block");

// console.log(btns[0].classList.length); // выводит кол-во классов 
// console.log(btns[0].classList.item(0)); // выводит конкретный класс который указан в скобках
// console.log(btns[0].classList.add("red")); // добавления класса который указан в скобках 
// console.log(btns[0].classList.remove("blue")); // удаляет класс указанный в скобках.
// console.log(btns[0].classList.toggle("blue")); // удаляет класс если он был или добавляет если его небыло указанный в скобках.


// if (btns[0].classList.contains("red")) {
//     console.log("red");
// }


btns[0].addEventListener("click", () => {
    // if (!btns[1].classList.contains("red")) {
    //     btns[1].classList.add("red");
    // } else {
    //     btns[1].classList.remove("red");
    // }
    // АНАЛОГИЧНО
    btns[4].classList.toggle("red");
})

wrapper.addEventListener("click", (event) => {
    if (event.target && event.target.matches("button.red")) {
        console.log("hello");
    }
});

const btn = document.createElement("button");
btn.classList.add("red");
wrapper.append(btn);


