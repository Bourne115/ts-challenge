// 函数的类型
function sum2 (x: number, y: number): number {
  return x + y;
}

const mySum: (x: number, y: number) => number = function (x: number, y: number): number {
  return x + y;
}
// 在 TypeScript 的类型定义中，=> 用来表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型。
// 在 在 ES6 中，=> 叫做箭头函数

// 用接口定义函数的形状
interface SearchFunc {
  /**
   * 
   * 哈哈哈
   */
  (source:string,subString: string):boolean;
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
    return source.search(subString) !== -1;
}

// 重载
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
    return ''
}