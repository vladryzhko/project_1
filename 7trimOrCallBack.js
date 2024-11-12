"use stict";

const personalNameThink = {
    doThis: []
};

function answerUser() {
    for (let i = 0; i < 2; i++) {
        const nameTag = prompt("how are you", "").trim();
   
        if (nameTag != "" && nameTag != null) {
            personalNameThink.doThis[nameTag] = "good"; 
            console.log("done");          
        } else {
            console.log("error");
            i--; 
        }
    } 
    console.log(personalNameThink); 
}

answerUser();

/////////////////////////////////////////////////////////////////

//callback funciton

function first() {
    setTimeout (function(){
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();

/////////////////////////////////////////////////////////////

function learnJS(lang, callabck) {
    console.log(`Я учу: ${lang}`);
    callabck();
}

function done() {
    console.log("Я прошел этот курс");
}

learnJS('JavaScript', done);


