// 3. 数组的类型
// let fibonacci1: number[] = [1, '1', 2, 3, 5] // 不能将类型“string”分配给类型“number”。ts(2322)
let fibonacci2: number[] = [1, 2, 3, 5] 

 // 数组的一些方法的参数类型也会被约束 
// fibonacci2.push('8') 类型“string”的参数不能赋给类型“number”的参数。ts(2345)

// 数组泛型
let fibonacci3: Array<string> = ['1','2']

// 用接口表示数组
interface NumberArray {
  [index: number]: number
}

let fibonacci4: NumberArray = [1, 2, 3]

// 类数组
// function sum () {
//   // const args: number[] = arguments
//   // 类型“IArguments”缺少类型“number[]”的以下属性: pop, push, concat, join 及其他 24 项。ts(2740)
// }
// 上例中，arguments 实际上是一个类数组，不能用普通的数组的方式来描述，而应该用接口：
function sum1 () {
  const args : {
    [index: number]: number;
    length: number;
    callee: Function;
  } = arguments
}


/* 
  固定长度和循序的数组
  元祖
  数组合并了相同类型的对象，而元组（Tuple）合并了不同类型的对象。
  元组起源于函数编程语言（如 F#），这些语言中会频繁使用元组。
*/






