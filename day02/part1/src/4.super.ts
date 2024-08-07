(function () {
  class Animal {
    name: string;
    constructor(name: string) {
      this.name = name;
    }

    bark() {
      console.log("bark");
    }
  }

  class Dog extends Animal {
    age: number;
    constructor(name: string, age: number) {
      // 如果在子类中写了构造函数， 在子类构造函数中必须对父类的构造函数进行调用
      super(name);
      this.age = age;
    }
    bark() {
      // 在类的方法中super就表示当前类的父类
      super.bark();
      console.log("wang");
    }
  }

  const dog = new Dog("wangcai", 4);
})();
