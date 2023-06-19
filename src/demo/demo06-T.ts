/**
 * 泛型
 */
// keyof 用索引类型 keyof T 把传入的对象的属性类型取出生成一个联合类型，
// 这里的泛型 U 被约束在这个联合类型中，这样一来函数就被完整定义了

/**
 * @param  {T} obj
 * @param  {U} key
 */
function getValue<T extends object, U extends keyof T>(obj: T, key: U) {
  return obj[key] // error
}

const a = {
  name: 'xiaomuzhu',
  id: 1
}

getValue(a,'name')


function createArray<T>(length:number,value:T):Array<T> {
  let result: T[] = []

  for(let i = 0; i<length; i+=1) {
    result[i] = value
  }

  return result
}

createArray<string>(3, 'x')

// easy demo
function joinItem<T>(first:T,second:T) {
  return `${first}${second}`
}

const sayHI = joinItem<string>('你好','铁汁')
console.log(sayHI)

// 泛型中数组的使用

function myFun<T>(params: Array<T>) {
  return params
}

myFun<number>([1,2,3])
// myFun<object>([{1,2,3}])