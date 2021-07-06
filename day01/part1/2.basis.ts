// 声明一个变量a, 同时指定它的类型为number
let a: number

// a的类型设置为number，在以后的使用过程中a的值只能是数字
a= 10
a= 33
// 报错 因为变量a的类型是number，不能赋值字符串
// a= 'hello' 

let b: string
b= 'hi'
// b= 123

// 声明变量直接进行赋值
// let c: boolean = false

// 如果变量的声明和赋值是同时进行的，ts可以自动对变量进行类型检测
let c = false
c= true

// js中函数是不考虑参数的类型和个数的
// function sum(a, b) {
//   return a + b
// }
// sum(123, 456)
// sum(123, '456')

function sum(a: number, b: number): number {
  return a + b
}
// sum(123, '456')
const result = sum(123, 456)

export {};