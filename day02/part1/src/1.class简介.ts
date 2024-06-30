// 使用class关键字定义一个类

class Person {
  // 定义实例属性
  // readonly表示只读属性
  readonly name: string = "xiaoxiao";
  // 在属性前使用static关键字可以定义类属性（静态属性）
  static age: number = 19;

  say() {
    console.log("say");
  }
}

const per = new Person();

console.log(per);
console.log(per.name);

console.log(Person.age);
