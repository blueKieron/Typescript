"use strict";
// 使用class关键字定义一个类
class Person {
    constructor() {
        // 定义实例属性
        // readonly表示只读属性
        this.name = 'xiaoxiao';
    }
    say() {
        console.log('say');
    }
}
// 在属性前使用static关键字可以定义类属性（静态属性）
Person.age = 19;
const per = new Person();
console.log(per);
console.log(per.name);
console.log(Person.age);
