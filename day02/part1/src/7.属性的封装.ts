(function () {
  class Person {
    // public 默认值 修饰的属性可以在任意位置访问修改
    // private 私有属性 私有属性只能在类内部进行访问修改
    //    -通过在类中添加方法使得私有属性可以被外部访问
    // protected 受保护的属性 只能在当前类和当前类的子类中访问修改
    private _name: string;
    private _age: number;

    constructor(name: string, age: number) {
      this._name = name;
      this._age = age;
    }
    /*  // 获取
    getName() {
      return this._name
    }
    // 设置
    setName(value: string) {
      this._name = value
    }
    setAge(value: number){
      if(value >=0 ) this._age = value 
    } */
    get name() {
      return this._name;
    }
    set name(value: string) {
      this._name = value;
    }
  }

  const per = new Person("xiao", 19);

  // 现在属性是在对象中设置的，属性可以任意的被修改
  // 属性可以任意被修改将会导致对象中的数据变得非常不安全
  // per._name = 'xiaoxiao'
  // per._age = 20

  // per.setName('xiaoxiao')

  console.log(per.name);

  class C {
    constructor(public name: string, public age: number) {}
  }
  const c = new C("xxx", 1);
})();
