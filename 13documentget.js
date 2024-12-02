"use strict";

const takeOn = document.getElementById("number");  // <= получение по ID
console.log(takeOn);

////////////////////////////////////////////////////////////////

const btn = document.getElementsByTagName("button"); // <= получение по тегу, а так же выбором массива по номеру индекса если нужно 
console.log(btn);

////////////////////////////////////////////////////////////////

const nameTagUse = document.getElementsByClassName("secret"); // <= получение по названию класса
console.log(nameTagUse);

////////////////////////////////////////////////////////////////

const hearts = document.querySelectorAll(".heart"); // <= получаем коллекцию если она имеется 
// console.log(hearts);

hearts.forEach(item => {
    console.log(item);
});

////////////////////////////////////////////////////////////////

const takeOneMore = document.querySelector("div"); // <= получаем первое попавшееся 
console.log(takeOneMore);
