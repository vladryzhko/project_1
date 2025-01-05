"use strict";

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log(`How are you ${this.name} ?`);
    }
}

User.prototype.exit = function() {
    console.log(`Пользователь ${this.name} ушел`)
}

const vlad = new User("Vlad", 25);
const den = new User("Denis", 26);

vlad.exit();
den.exit();

vlad.hello();
den.hello();

console.log(vlad);
console.log(den);