
// es5继承
// function Person(name,age){
//   this.name =name
//   this.age= age
  
//   this.run =function(){}
// }
// Person.prototype.work = function(){}

// function Web(name, age){
//   Person.call(this,name,age)  //对象冒充继承
// }
// Web.prototype = new Person()
// var w = new Web('web', 20)
// w.work()

(function() {
  class Animal{
    name: string
    age: number
    constructor(name: string, age: number) {
      this.name = name
      this.age = age
    }
  
    bark(){
      console.log('bark');
    }
  }

  // 使用继承后 子类会拥有父类所有的方法和属性
  // 通过继承可以将多个类中共有的代码写在一个父类z
  // 这样只需要写一次就可以让所有的子类都同时拥有父类中的属性和方法
  class Dog extends Animal{
    run() {
      console.log('run');
    }
    // 如果在子类中添加了和父类中相同的方法，会覆盖掉父类中方法
    // 方法重写
    bark() {
      console.log('wang');
      
    }
  }
  class Cat extends Animal{
    bark() {
      console.log('miao');
      
    }
  }
  const dog = new Dog('wangcai', 4)
  const cat = new Cat('mimi', 4)
  console.log(dog);
  console.log(cat);
})()
