/*
 * @Author: qile 
 * @Date: 2020-10-10 15:26:33 
 * @Last Modified by: qile
 * @Last Modified time: 2022-07-20 15:54:56
 */

// 1. 原始数据类型 7种
const age : number = 10
const fullYears : string = '2020'
const isStudent : boolean =  true
const empty : null = null
const voidVar : void = undefined
const aUndefined : undefined = undefined
const s:symbol = Symbol('foo')
const isObject:object = {}
const isArray1:Array<number> = [1,2,3]
const isArray2:string[] = ['hello']
const isDate:Date = new Date()
const isRegExp:RegExp = /^123?49$/ig

// 其他类型
/**
 * unknown 
 * any
 * unknown 与 any 的不同之处,虽然它们都可以是任何类型,
 * 但是当 unknown 类型被确定是某个类型之前,它不能被进行任何操作比如实例化、getter、函数执行等等
 * any却可以，所以我们应该尽量使用unknown 少使用 any
 */

 let value1:any

 value1.foo.bar = 'hello any'

 let value2:unknown

 value2.foo.bar = 'hello unknown'

 // never 类型表示的是那些永不存在的值的类型，never 类型是任何类型的子类型，也可以赋值给任何类型；
 // 然而，没有类型是 never 的子类型或可以赋值给 never 类型（除了never本身之外）。

// 抛出异常的函数永远不会有返回值
 function error(message:string):never {
   throw new Error(message)
 }

 // 空数组，而且永远是空的
 const emptyArray:never[] = []

 // 元祖 
 // 元组中包含的元素，必须与声明的类型一致，而且不能多、不能少，甚至顺序不能不符。
 
 let tuple:[string,number]

 tuple = ['hello',2]
//  tuple = ['hello',2,3]
//  tuple = [2,'Hello']
 
// 可以把元祖看做成严格版的数组
 interface Tuple extends Array<string | number> {
  0: string;
  1: number;
  length: 2;
}

