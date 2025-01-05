"use strict";

const chooseJob = function(main, dop, ...rest) {
    console.log(main, dop , rest);
}

chooseJob("laywer", "nirse", "doctor", "accountent")


function calcOrDouble(number, basis = 2) {
    console.log(number * basis);
}

calcOrDouble(6);


function setOptions(height, width, ...additional) {
    console.log(height, width, ...additional)
}
setOptions(400, 500, 'red', 'top');




 

