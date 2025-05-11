"use strict";

//////////////////////////// Filter ///////////////////////////////

const differentName = ["Vlad", "Ihar", "Michail", "Andrio"];

const shortNames = differentName.filter( name => name.length < 5);

console.log(shortNames);


//////////////////////////// Map ///////////////////////////////

const answer = ["VLaD", "iHAr", "MIcHaiL", "AnDRio"];

const lowerNames = answer.map( item => item.toLowerCase());

console.log(lowerNames);


//////////////////(все)every|some(хотя бы одно) /////////////////

const some = [4, "name", 5, "prefere"];

// console.log(some.some( item => typeof(item) === "number"));
console.log(some.every( item => typeof(item) === "number"));


//////////////////////////// reduce /////////////////////////////

const arr = [1, 2, 3, 4];

const sumNumber = arr.reduce( (accumulator, currentValue) => accumulator + currentValue, 9);

console.log(sumNumber);

//////////////

const goods = ["apple", "oranje", "pineapple", "banana"];

const changeGoods = goods.reduce((word, current) => `${word}, ${current}`, "potato");

console.log(changeGoods);


//////////////////////////// entries /////////////////////////////


const object = {
    alfred: "animal",
    vlad: "persone",
    karina: "persone",
    tagira: "animal"
}

const newObj = Object.entries(object)
.filter( item => item[1] === "persone")
.map( item => item[0]);

console.log(newObj);



const myCard = {
    name: "Vlad",
    lastname: "Ryzhko",
    age: 25,
    sex: "man",
    language: "Russian",
    money: 25
}


const newRequest = Object.entries(myCard)
.filter( item => item[1] === 25)
.map(item => item[0]);

console.log(newRequest);

//////////////////////////////////////////////////////

// const films = [
//     {
//         name: 'Titanic',
//         rating: 9
//     },
//     {
//         name: 'Die hard 5',
//         rating: 5
//     },
//     {
//         name: 'Matrix',
//         rating: 8
//     },
//     {
//         name: 'Some bad film',
//         rating: 4
//     }
// ];

/////////////////////////////////////////////////////

// function showGoodFilms(arr) {
//     return arr.filter( item => item.rating >= 8);
// }

// console.log(showGoodFilms(films));

//////////////////////////////////////////////////////

// function showListOfFilms(arr) {
//     return arr.reduce( (acc, curr) => `${typeof(acc) === "object" ? acc.name: acc}, ${curr.name}`);
// }

// console.log(showListOfFilms(films));

//////////////////////////////////////////////////////

// function setFilmsId(arr) {
//     return arr.map( (film, i) => {
//         film.id = i;
//         return film;
//     });
// }

// console.log(setFilmsId(films));

//////////////////////////////////////////////////////

// function checkFilms(arr) {
//     return arr.every( film => film.id || film.id === 0 ? true : false);
// }

// console.log(checkFilms(films));

//////////////////////////////////////////////////////

const funds = [
    {amount: -1400},
    {amount: 2400},
    {amount: -1000},
    {amount: 500},
    {amount: 10400},
    {amount: -11400}
];


const getPositiveIncomeAmount = (data) => {
    return data.filter( item => item.amount > 0).reduce((acc, curr) => acc + curr.amount, 0);
};

// console.log(getPositiveIncomeAmount(funds));


const getTotalIncomeAlount = (data) => {
    return data.some(item => item.amount < 0) ? data.reduce((acc, curr) => acc + curr.amount, 0) : getPositiveIncomeAmount(data);
}

console.log(getTotalIncomeAlount(funds));


const lines = 5;
let result = '';

for (let i = 0; i < lines; i++) {
    for (let j = 0; j <= lines - i; j++) {
        result += " "
    }
    for (let j = 0; j < 2 * i + 1; j++) {
        result += "*";
    }
    result += "\n";
}

console.log(result);    

