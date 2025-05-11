'use strict'

////////////////////// Рекурсия /////////////////////////////////////

function cow(x, n) {
    result = 1;

    for (let i = 0; i < n; i++) {
        result *= x;
    }

    return result;
}

console.log(cow(2, 4));


function pow(x, n) {
    if (n === 1) {
        return x;
    } else {
        return x * pow(x, n - 1);
    }
}

console.log(pow(2, 2));


/////////////////////////////////////////////////////////////


let students = {
    js: [{
        name: "John",
        progress: 100
    }, {
        name: "Vlad",
        progress: 60 
    }],

    html: {
        basic: [{
            name: "Peter",
            progress: 20
        }, {
            name: "Ann",
            progress: 18
        }],

        pro: [{
            name: "Sam",
            progress: 10
        }],

        semi: {
            students: [{
                name: "Test",
                progress: 100
            }]
        }
    }
}; 
 
function getTotalProgressByIteration(data) {
    let total = 0;
    let students = 0;

    for (let course of Object.values(data)) {
        if (Array.isArray(course)) {
            students += course.length;

            for (let i = 0; i < course.length; i++) {
                total += course[i].progress;
            }
        } else {
            for (let subCourse of Object.values(course)) {
                students += subCourse.length;

                for (let i = 0; i < subCourse.length; i++) {
                    total += subCourse[i].progress;
                }
            }
        }
    }

    return total / students;
}

console.log(getTotalProgressByIteration(students));


function getTotalProgressByRecursion(data) {
    if (Array.isArray(data)) {
        let total = 0;

        for (let i = 0; i < data.length; i++) {
            total += data[i].progress;
        }

        return [total, data.length];
    } else {
        let total = [0, 0];

        for (let subDate of Object.values(data)) {
            const subDataArr = getTotalProgressByRecursion(subDate);
            total[0] += subDataArr[0];
            total[1] += subDataArr[1];
        }

        return total;
    } 
}

const result = getTotalProgressByRecursion(students);

console.log(result[0]/result[1]);

////////////////////////////////////////////////////////////////


function factorial(n) {
    if (typeof(n) !== "number" || !Number.isInteger(n)) {
        return "Ошибка, проверьте данные";
    }

    if (n >= 1) {
        console.log(n)
        return n * factorial(n - 1);
    } else {
        return 1;
    }
    
}

console.log(factorial(6));