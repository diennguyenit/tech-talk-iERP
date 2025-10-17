"use strict";
var Human = /** @class */ (function () {
    function Human() {
        this.type = 'Human';
    }
    Human.prototype.greet = function () {
        console.log('I am a Human');
    };
    Human.prototype.work = function () {
        console.log('I can go to work');
    };
    return Human;
}());
var Dog = /** @class */ (function () {
    function Dog() {
        this.type = 'Dog';
    }
    Dog.prototype.greet = function () {
        console.log('I am a Dog');
    };
    Dog.prototype.bark = function () {
        console.log('I like barking');
    };
    return Dog;
}());
var Bird = /** @class */ (function () {
    function Bird() {
        this.type = 'Bird';
    }
    Bird.prototype.greet = function () {
        console.log('I am a Bird');
    };
    Bird.prototype.fly = function () {
        console.log('Fly with me');
    };
    return Bird;
}());
var characters = [];
var Max = new Human();
var Boo = new Dog();
var Sweety = new Bird();
characters.push(Max, Boo, Sweety);
for (var i = 0; i < characters.length; i++) {
    characters[i].greet();
}
var Coder = /** @class */ (function () {
    function Coder(name) {
        this.name = name;
    }
    return Coder;
}());
var Jack = new Coder('Jack');
console.log(Jack.name);
