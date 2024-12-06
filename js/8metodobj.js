"use strict";

const nameFunction = {
    uppercase: "true",
    filter: "normal",
    size: 45,
    colors: {
        namecolor: "red",
        nametag: "black",
    },
    width: 280,
    heigh: 300,
    makeTest: function() {
        console.log("Test");
    }
};

nameFunction.makeTest();
console.log(Object.keys(nameFunction).length); // ПРИМЕРЫ

/////////////////////////////////////////////////////////////////////////

const options = {
// ключ значения(свойство) :  значение     
    name: "test",
    width: 1024,
    heigh: 1024,
    colors: {
        border: "red",
        background: "yellow"
    },
    makeTest: function() {
        console.log("Test");
    }
};

options.makeTest();
const {border, background} = options.colors;
console.log(background);

console.log(Object.keys(options).length); // ВАЖНО ЗАПОМНИТЬ НА БУДУЩЕЕ!!!!!

// console.log(options.name);

// delete options.name;

// console.log(options);

for (let key in options) {
   if (typeof(options[key]) === "object") {
    for (let i in options[key]) {
        console.log(`в ячейке ${i} значение ${options[key][i]}`)
    }
   } else {
    console.log(`в ячейке ${key} значение ${options[key]}`)
   }
}


/////////////////////////////////////////////////////////////////////////

//Массивы и псевдомассивы

const arr = [2, 4, 6, 7, 20];

arr.pop();
arr.push(21);
console.log(arr);

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

for (let value of arr) {
    console.log(value);
}

arr.forEach(function(item, i, arr) {
    console.log(`${i} находится: ${item} внутри всего ${arr}`);
});

