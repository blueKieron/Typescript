"use strict";
class Dog {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    bark() {
        console.log('wang');
    }
}
const dog = new Dog('black', 4);
const dog2 = new Dog('white', 2);
console.log(dog);
console.log(dog2);
