// 交叉类型
/**
 * LeftType
 */
type LeftType = {
  id: number
  /** 左边 */
  left: string
}
/**
 * RightType
 */
type RightType = {
  /** ID */
  id: number
  /**右边 */
  right: string
}

/** IntersectionType 组合了两种类型: LeftType 和 RightType ，并使用 ＆ 符号构造交叉类型。 */
type IntersectionType = LeftType & RightType

const obj1: IntersectionType = {
  id: 1, left: "test", right: "test"
}



// 联合类型
/** 联合类型表示一个值可以是几种类型之一，例如某个函数希望传入 string 或者 number 类型的参数。 */
type UnionType = string | number

const age1: UnionType = '19岁'
const age2: UnionType = 19

// 泛型 Generics
/** 泛型是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。 */

function showGenericsType1<T>(args: T) {
  console.log(args)
  return args
}

showGenericsType1("test")

interface GenericsType<T, U> {
  id: T
  userInfo: U
}

function showGenericsType2(args: GenericsType<number, Record<keyof any, string>>) {
  return args
}

showGenericsType2({ id: 18, userInfo: { name: 'qile' } })

// 内置类型
/* TypeScript 提供了方便的内置类型，可帮助轻松地操作类型。要使用它们，你需要将要转换的类型传递给 <> */

interface UserInfoType {
  id: number
  name: string
  age: number
}
/** Partial 允许你将 T 类型的所有属性设为可选。*/
type PartialUserInfoType = Partial<UserInfoType>

/** Required 将 T 类型的所有属性设为必需。*/
type RequiredUserInfoType = Required<UserInfoType>

/** Readonly 将 T 类型的所有属性变成只读属性。*/
type ReadonlyUserInfoType = Readonly<UserInfoType>

/**
 * Pick
 * 
 * 使用语法：
 * 
 * Pick<T, K>
 * 
 * 作用：
 * 从类型 T 中取出 K 中指定的属性。
 */
interface IPickType {
  id: number
  firstName: string
  lastName: string
}

type PickType = Pick<IPickType, 'id' | 'firstName'>

const pickUserInfo: Partial<PickType> = {
  id: 123,
  firstName: 'qi',
}

/**
 * Omit 
 * 
 * 语法：
 * Omit<T, K>
 * 
 * 从类型 T 中剔除 K 中指定的属性
 */
interface IOmitType {
  id: number
  firstName: string
  lastName: string
}

type omitType = Omit<IOmitType, 'lastName'>

const omitUserName: omitType = {
  id: 123,
  firstName: 'qi'
}


/** Extract, 提取共同可分配的给U
 * 从T类型中提取所有可分配给U类型
 * 
 * Exclude， 排除共同将其余可分配的给U
 * 从 T 中排除所有可分配给 U 的类型
 */
interface FirstType {
  id: number
  firstName: string
  lastName: string
}

interface SecondType {
  id: number
  address: string
  city: string
}
interface ThirdType {
  id: number
  firstName: string
  city: string
}


type ExtractType = Extract<keyof FirstType, keyof SecondType> // Output : 'id'

type ExcludeType = Exclude<keyof FirstType, keyof ThirdType> // Output : 'lastName'


/**
 * Record<K, T>
 * 
 * 构造具有给定类型 T 的一组属性 K的类型
 */

interface IDeptTBaseType {
  id: number
  name: string
}

enum Methods {
  GET = "get",
  POST = "post",
  DELETE = "delete",
  PUT = "put",
}

type deptType = Record<Methods, IDeptTBaseType>


/**
 * NonNullable
 * 从类型T中删除 null和 undefined
 * 
 * 如果将 --strictNullChecks 标志添加到 tsconfig 文件，TypeScript 将应用非空性规则。
 */

type UnionType2 = string | number | symbol | null | undefined

type NonNullableType = NonNullable<UnionType2>

function showMaker(args: NonNullableType) {
  console.log(args)
}
showMaker(1)
showMaker('dd')
showMaker(Symbol('cc'))
showMaker(null)
showMaker(undefined)


/**
 * Mapped Types
 * 
 * 映射类型允许你采用现有模型并将其每个属性转换成为新类型
 * 
 */
type StringMap<T> = {
  [P in keyof T]: string | number | symbol
}

function showFaker(arg: StringMap<{ id: number, name: string }>) {
  console.log(arg)
}

showFaker({ id: 'dd', name: 'test' })
showFaker({ id: 123, name: 'test' })
showFaker({ id: Symbol(666), name: 'test' })


/**
 * 类型保护
 * 
 * typeof
 * 
 * instanceof
 * 
 * in
 */


/**
 * 条件类型
 * extends
 */

type showCleanLove<T> = T extends null | undefined ? never : T

/**
 * unknown 和 any 的区别就是
 * 
 * unknown类型的值只能赋值给unknown|any类型
 * any类型的值能赋值给任何数据类型
 * 
 * 而且unknown不能对定义的值进行任何操作
 */
let value = {name: 'dd'}

const val2: Record<string, unknown> = value

let val3 = (num: number): never => {
  console.log('num', num)
  throw new Error()
}

let num: 1 | 2 | 3 = 1

num = 3

interface IQile<T = number> {
  name: T
}

const inf: IQile = {
  name: 123
}

interface Props {
  length: number
}
const calcArray = <T extends Props, >(data: T): number => {
  return data.length // error 
}

calcArray('')

/**
 * infer
 */
type ParamType<T> = T extends (param: infer P) => any ? P : T

interface User {
  /**名称 */
  name: string
  age: number 
}
const u:Required<User> = {
  name: '111',
  age: 18
}
u.age = 12

type Func = (user: User) => User
type Param = ParamType<Func>

const arr: Array<number | string> = [123, 'ddd']

type ElementOf<T> = T extends Array<infer E> ? E : never

type TTuple = [string, number, boolean];

type ToUnion = ElementOf<TTuple>; // string | number

interface Demo1 {
  name: '123'
}
type ThisTypeDemo = ThisType<Demo1>

let o1 = {
  a: 1,
  b: 2
}

/**
 * 索引类型
 * 实现对对象的值的类型的查询和约束
 * keyof T
 * 
 * T[K]
 */

function getVal<T, K extends keyof T>(obj: T, keys: K[]): T[K][] {
  return keys.map(key => obj[key])
}

// console.log(getVal(o1, ['a', 'b']))
// console.log(getVal(o1, ['f', 'b']))


let yifeng:unknown = () => console.log(ql, null,)
let ql:symbol = Symbol('data')
let anyWay:any = {}
enum MM {
  LIN,
  XI
}
type strType = 'q'

// ql = yifeng // Error
// anyWay = yifeng

// (yifeng as {foo: () => {}}).foo()

const myName:strType = 'q'

interface FOO {
  a: string
  b: number
  c: boolean
}

// type testO = string[]

// type KOO1 = keyof testO
// type KOO2 = Extract<keyof testO , unknown>