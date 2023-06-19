
/**
 * 类
 * 三种访问类型：private protected public
 */

interface IPersonBaseData {
  name?: string
  age?: number
  readonly sex: string
  // sayHi(say:string) : string
}

class Person {

  public name: string = '李雷'; //  公共属性 内部和外部都能使用
  //  private age : number = 18;  // 私有属性 只能在类，内部使用，继承中的子类也不能使用
  public age: number = 18;
  protected sex: string = 'male'; // 受保护属性，只能在继承中的子类中使用

  public sayHi(say: string): string {
    return say
  }

  // constructor(baseData:IPersonBaseData) {
  //   this.name = baseData.name
  //   this.age = baseData.age
  //   this.sex = baseData.sex
  // }
}

// const person1 = new Person({name:'李梅', age:12, sex:'female'})

// person1.name = '韩梅梅'
// person1.age = 18  // 属性“age”为私有属性，只能在类“Person”中访问。ts(2341)
// person1.sex = 'female'  // 属性“sex”受保护，只能在类“Person”及其子类中访问。ts(2445)

/**
* 构造函数
* 
*/
class Student extends Person {
  constructor(public name: string) {
    // 派生类的构造函数必须包含 "super" 调用。ts(2377)
    // 这个 super 的调用其实就是调用父类的 construction
    super()
  }
}

const student1 = new Student('韩梅梅')
student1.sayHi('hell-ts')

/**
* private属性的 get 和 set方法的用法和作用
* static 静态属性/方法
*/
class Goddess extends Person {
  // private _age:number = 19
  constructor(name: string, age: number) {
    super()
    // 派生类的构造函数必须包含 "super" 调用。ts(2377)
    // 这个 super 的调用其实就是调用父类的 construction
    // this._age = age
    this.name = name
  }

  // get _age() {
  //   if (this._age > 18) return 18
  //   return this._age
  // }

  // set _age(age: number) {
  //   this._age = age
  // }

  static sayLove() {
    return 'i love you'
  }
}

const iu = new Goddess('李知恩', 30)

console.log(iu.sayHi('你好！' + `我是iu(${iu.name}),来自思密达.` + '小哥哥，你好帅!') + Goddess.sayLove())
console.log('姓名:', iu.name)
console.log('年龄：', iu.age, '岁')
console.log('打招呼：', '你好！' + `我是iu(${iu.name})，来自思密达。今年其实才${iu.age = 17}。`)
console.log('女神技能：', Goddess.sayLove())


/**
* 只读属性
*/

class Teacher {
  //  public name : string
  constructor(public name: string) {

  }
}

/**
 * this
 */
class Qile {
  name: string

  constructor() {
    this.name = 'qile'
  }

  public sayHello(this: Qile) {
    return 'Hi' + this.name
  }
}
const qile = new Qile()
qile.sayHello()
console.log(qile.sayHello())
qile.sayHello.call({xxx:1})