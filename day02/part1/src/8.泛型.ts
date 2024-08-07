/* function fn(a: any): any {
  return a
} */

// 在定义函数或是类型时， 如果遇到类型不明确就可以使用泛型
function fn<T>(a: T): T {
  return a;
}

// 可以直接调用具有泛型的函数
fn(10); // 不指定泛型 ts可以自动对类型进行推断
fn<string>("hi"); // 指定泛型

// 泛型可以同时指定多个
function fn2<T, K>(a: T, b: K): T {
  return a;
}
fn2<number, string>(23, "hi");

interface Inter {
  length: number;
}
// T extends Inter 表示泛型T必须是Inter实现类（子类）
function fn3<T extends Inter>(a: T): number {
  return a.length;
}
fn3({ length: 100 });

class MyClass<T> {
  name: T;
  constructor(name: T) {
    this.name = name;
  }
}
const mc = new MyClass<string>("xiaoxiao");
