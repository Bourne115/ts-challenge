function log<T>(val: T): T {
  console.log(val)
  return val
}

log<string[]>(['a', 'b'])

type LogType = <T>(val: T) => T
let myLog: LogType = log


interface ILog {
  <T>(value: T): T
}

interface IUserGenerics<T = number, U = string> {
  (val: T, h: U): T
}

let bar: IUserGenerics = (a, b) => a

bar(12, '')

type PInfoType = {
  name: string
  age: number
  count: string[]
}

function foo(count: Pick<PInfoType, 'count'>) {
  if(Array.isArray(count)) {
    return count.length
  }
}


class Person<T> {
  run(v: T) {
    return v
  }
}

let p1 = new Person<string>()

p1.run('hello')



interface ILength {
  length: number
}

function myP1<T extends ILength>(v: T) : T {
  return v
}

myP1([])
myP1('')

/**
 * 总结：
 * 1.函数和类可以轻松地支持多种类型，增强程序的扩展性
 * 2.不必写多条函数重载，冗长的联合类型声明，增强代码的可读性
 * 3.灵活控制类型之间的约束
 */
