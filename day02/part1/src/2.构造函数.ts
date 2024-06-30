class Dog {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  bark() {
    console.log("wang");
  }
}
const dog = new Dog("black", 4);
const dog2 = new Dog("white", 2);
console.log(dog);
console.log(dog2);
