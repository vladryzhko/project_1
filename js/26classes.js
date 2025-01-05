"use strict";


class Rectangle {
    constructor(heigh, width) {
        this.heigh = heigh;
        this.width = width;
    }                                            // Концепция

    calcArea() {
        return this.heigh * this.width;
    }
}

class ColoredRectangleWithText extends Rectangle {
    constructor(heigh, width, text, bgColor) {
        super(heigh, width);
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps() {
        console.log(`Text: ${this.text}, color: ${this.bgColor}`);
    }
}

const div = new ColoredRectangleWithText(29, 39, "Nice ms.", "blue");

div.showMyProps();
console.log(div.calcArea());

// const cube = new Rectangle(10, 20);             // Экземпляры 

// console.log(cube.calcArea());