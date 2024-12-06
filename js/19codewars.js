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