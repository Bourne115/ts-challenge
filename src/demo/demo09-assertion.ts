
// 联合类型 和 类型保护
/** 
 * 类型断言
 * 类型断言的用途: （需要注意的是，类型断言只能够「欺骗」TypeScript 编译器，无法避免运行时的错误，反而滥用类型断言可能会导致运行时错误：）
 * 1. 将一个联合类型断言为其中一个类型
 * （当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的所有类型里共有的属性或方法：）
*/
// 语法： 值 as 类型  || <类型>值

interface Waiter {
  anjiao:boolean;
  say:()=>{};
}

interface Teacher {
  anjiao:boolean;
  skill:()=>{}
}
// as
function judgeWho1(position: Waiter | Teacher) {
  if(position.anjiao) {
    (<Teacher>position).skill()
  } else {
    (position as Waiter).say()
  }
}

// in
function judgeWho2(position: Waiter | Teacher) {
  if("skill" in position) {
    position.skill()
  } else {
    position.say()
  }
}

// typeof
function sum(first: string | number,second: string|number) {
  if(typeof first === 'string'||typeof second ==='string'){
    return `${first}${second}`
  }
  return first + second
}

// instance
class NumberObj {
  public count : number = 1
}
function addObj(first: object | NumberObj,second: object | NumberObj) {
  if(first instanceof NumberObj && second instanceof NumberObj) {
    return first.count + second.count
  }
  return 0
}