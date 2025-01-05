"use strict";

///////////////////// 1 ///////////////////////

// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return a + b;
//     }

//     console.log(sum());
// }

// showThis(4, 8);

///////////////////// 2 ///////////////////////

// const obj = {
//     a: 20,
//     b: 15,
//     sum: function() {
//         function shout() {
//             console.log(this);
//         }
//         shout();
//     }
// }

// obj.sum();

///////////////////// 3 ///////////////////////

// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function() {
//         console.log("Hello! " + this.name);
//     }
// }

// let vlad = new User("Vlad", 25);

///////////////////// 4 ///////////////////////

// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + " " + surname);
// }

// const user = {
//     name: "Vlad"
// }

// sayName.call(user, "Ryzhko");
// sayName.apply(user, ["Ryzhko"]);



// function count(num) {
//     return this * num;
// }

// const double = count.bind(2);
// console.log(double(2));
// console.log(double(13));


// 1) Обычная функция : this - window , но если use strict - undefined
// 2) Контект у метода объектов - сам объект 
// 3) this в конструкторах и классах - это новый экземпляр объекта
// 4) Ручная привязка this: call, apply, bind

///////////////////////////////////////////////

const btn = document.querySelector("button");

btn.addEventListener("click", function() { // this будет выбирать сам элемент в котором происходит событие при использовании function().
    this.style.backgroundColor = "blue";
    // this.classList.toggle("show");
});

btn.addEventListener("click", (e) => { // как использовать со стрелочной функцией.
    e.target.style.backgroundColor = "blue";
    // this.classList.toggle("show");
});

///////////////////////////////////////////////

const obj = {
    num: 5,
    sayNumber: function() {
        const say = () => {
            console.log(this);  // () => всегда берет контекст у своего родителя а если родитель метод то он сам ссылается на родительский объект.
        };

        say();
    }

    
}

obj.sayNumber();

///////////////////////////////////////////////

const double = a => a * 2;

console.log(double(5));







