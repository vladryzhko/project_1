"use strict";

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function(plan) {
        const {age} = plan;
        const {languages} = plan.skills;
        let str = `Мне ${age} лет и я владею языками: `;

        languages.forEach(function(lang) {
            str += `${lang.toUpperCase()} `;
        });
        
        return str;
    }
};

console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

function showExperince(plan) {
    const {exp} = plan.skills;
    return exp;
}

function showProgrammingLangs(plan) {
    let str = "";
    const {programmingLangs} = plan.skills;
    for (key in programmingLangs) {
        str += `Язык ${key} изучен на ${programmingLangs[key]}\n`
    }
    return str;
}

console.log(showProgrammingLangs(personalPlanPeter));
console.log(showExperince(personalPlanPeter));


////////////////////////////////////////////////////////////////////////////////////


const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    let str = "";

    arr.length === 0 ? str = "пустая семейка" : str = "семья состоит из: ";
    arr.forEach(function(member) {
        str += `${member}, `;
    });
    return str;
}

console.log(showFamily(family));

////////////////////////////////////////////////////////////////////////////////////

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

// function standardizeStrings(arr) {
//     let str = "";
    
//     arr.length === 0 ? str = "nothing finde" : str = "";
//     arr.forEach(function(serch) {
//         str += `${serch.toLowerCase()}\n`;
//     })
//     return str;
// }


// function standartCity(arr) {
//     let str = "";
//     arr.forEach(town => {
//         str += `${town.toLowerCase()}\n`;
//     });
//     return str;
// }


function standartCity(arr) {
    arr.forEach(town => {
        console.log(town.toLowerCase());
    });
}

console.log(standartCity(favoriteCities));

////////////////////////////////////////////////////////////////////////////////////

const someString = 'This is some strange string';

function reverse(str) {
    if (typeof(str) !== "string") {
        return "False!";
 }
 
//  return str.split("").reverse().join("");

    let newStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }
    return newStr;
}
console.log(reverse(someString));


const number = "I have a lot of problems";
console.log(number.split('').reverse().join(''));

////////////////////////////////////////////////////////////////////////////////////

let textNew = "How are you";

function newPaper(care) {
    let letter = "";
    for (let i = care.length - 1; i >= 0; i--) {
        letter += care[i];
    }
    return letter;
}

console.log(newPaper(textNew));

////////////////////////////////////////////////////////////////////////////////////

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    let str = "";
    arr.length === 0 ? str = "Нет доступных валют" : str = "Доступные валюты:\n";

    arr.forEach(function(curr, i) {
        if (curr !== missingCurr) {
            str += `${curr}\n`;
        }
    });
    return str;
}

console.log(availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY'));

////////////////////////////////////////////////////////////////////////////////////


const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
}

function isBudgetEnough(data) {
    let square = 0;
    let volume = 0;

    data.shops.forEach(function(shop) {
        square += shop.width * shop.length;
    });
    

    volume = data.height * square;


    if (data.budget - (volume * data.moneyPer1m3) >= 0) {
        return "Бюджета достаточно";
    } else {
        return "Бюджета недостаточно";
    }
}
console.log(isBudgetEnough(shoppingMallData));

////////////////////////////////////////////////////////////////////////////////////


const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {   
    arr.sort();
    let a = [], b = [], c = [], rest = [];

    for (let i = 0; i < arr.length; i++) {
        if (i < 3) {
            a.push(arr[i]);
        } else if (i < 6) {
            b.push(arr[i]);
        } else if (i < 9) {
           c.push(arr[i]);
        } else {
            rest.push(arr[i]);
        }
    }
    return [a, b, c, `Оставшиеся студенты: ${rest.length === 0 ? "-" : rest.join(", ")}`]
}
console.log(sortStudentsByGroups(students));



const coWorker = ["ataly", "pavel", "cikheal", "john", "nevel", "tolik"];

function showTirCommador(obj) {
    obj.sort();
    let q = [], g = [], last = [];

    for (let i = 0; i < obj.length; i++) {
        if (i < 3) {
            q.push(obj[i]);
        } else if (i < 6) {
            g.push(obj[i]);
        } else {
            last.push(obj[i]);
        }
    }
    return [q, g, `last students write : ${last.length === 0 ? "-" : last.join(", ")}`]
}
console.log(showTirCommador(coWorker));