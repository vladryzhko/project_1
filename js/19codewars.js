"use strict";

//  ask with codewars

function between(string) {
    return string.split(" ");
}

console.log(between("Nice day today"));

////////////////////////////////////////////////

function simpleMultiolication(number) {
    return number * (number % 2 > 0 ? 9 : 8);
}

console.log(simpleMultiolication(2));

////////////////////////////////////////////////////

function dnaToRna(dna) {
    return dna.replace(/T/g, "U");
}

console.log(dnaToRna("ATCG"));

function DNAtoRNA(dnk) {
    resultRNK = ""
    for (let i = 0; i < dnk.length; i++) {
        if (dnk[i] == "T") {
            resultRNK += "U";
        } else {
            resultRNK += dnk[i];
        }
    }
    return resultRNK;
}

console.log(DNAtoRNA('ATCG'));

///////////////////////////////////////////////////

function findAverage(array) {
    
   
    if (array.length === 0) {
        return 0; 
    } else { 
        let result = 0;
        for (let i = 0; i < array.length; i++) {
            result += array[i];
        }
        return result / array.length;
    }
}

console.log(findAverage([2, 3, 4, 5, 6, 7]));

////////////////////////////////////////////////////////

function abbrevName(name){
    return name.split(" ").map((part) => part[0].toUpperCase()).join(".");
}

console.log(abbrevName("Vlad Ryzhko"));


////////////////////////////////////////////////////////


function choseYourNumber(number) {
    return number % 2 === 0 ? "Even" : "Odd";
}

console.log(choseYourNumber(21));

///////////////////////////////////////////////////////

let nameStretch = {
    a: 1,
    b: 2
 };
 
 let target = Object.assign({}, nameStretch);
 
 console.log(target);
 
 ///////////////////////////////////////////////////////
 
 
 let obj = {
     a: "lox",
     b: "pidr",
     c: "petuh",
     d: {
         f: "daun"
     }
   };
 
 obj.d.f = "nice";
 let objCopy = Object.assign({}, obj);
 
 
 console.log(obj);
 console.log(objCopy);
 
 ///////////////////////////////////////////////////////
 
 
 let obj = {
     name: 'scotch.io',
     exec: function exec() {
       return true;
     },
   }
   
 let method1 = Object.assign({}, obj);
 let method2 = JSON.parse(JSON.stringify(obj));
 
 console.log(method1);
 console.log(method2);
 
 ///////////////////////////////////////////////////////
 
 let obj = { 
     a: 'a',
     b: { 
       c: 'c',
       d: 'd',
     },
   }
   
   obj.c = obj.b;
   obj.e = obj.a;
   obj.b.c = obj.c;
   obj.b.d = obj.b;
   obj.b.e = obj.b.c;
   
   let newObj = Object.assign({}, obj);
   
   console.log(newObj);

 ///////////////////////////////////////////////////////

 const nameTag = ["Vlad", "Maria", "Karina", "Violetta", "Zoe", "Tom"];


 function choseYourName(invite) {
    return invite.filter( (name) => {
        return name.length >= 5;
    });
}

 console.log(choseYourName(nameTag));


   