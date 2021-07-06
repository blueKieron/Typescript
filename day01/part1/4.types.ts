// object表示一个js对象
let a: object
a = {}
a= function() {}

// {}用来指定对象中可以包含哪些属性
// 语法：{属性名：属性值，属性名：属性值}
// 在属性名后边加上? 表示属性是可选的
let b: {name: string, age?: number}
b = {name:'sunwukong'}
b = {name:'liuxiaonan', age: 18}

// [propName: string]: any 表示任意类型的属性
let c: {name: string, [propName: string]: any}
c = {name: 'xiaoxiao', a: 1, b: 2}

// 设置函数结构类型的声明
let d: (a: number, b: number) => number
d = function(n1: number, n2: number): number{
  return n1 + n2
}

// string[] 表示字符串数组
let e: string[]

let f: number[]
let g: Array<number>

// 元组 元组就是固定长度的数组
let h: [string, number]
h = ['hello', 123]

// 枚举
enum Gender {
  Male,
  Female
}
let i: {name: string, gender: Gender}
i = {
  name: 'xiaoxiao',
  gender: Gender.Female
}
console.log(i.gender === Gender.Female)

// 类型的别名
type myType = 1 | 2 | 3 | 4 | 5
let k: myType
let l: myType
let m: myType

k = 2



export {};