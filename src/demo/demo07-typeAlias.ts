/* 1. 类型别名
  类型别名用来给一个类型起个新名字
*/
type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;

/**
 * @param  {NameOrResolver} n
 * @returns Name
 */

function getName(n: NameOrResolver): Name {
    if (typeof n === 'string') {
        return n;
    } else {
        return n();
    }
}

/* 2. 字符串字面量类型
  字符串字面量类型用来约束取值只能是某几个字符串中的一个。
*/

/**
 * @param  {Element} ele
 * @param  {EventNames} event
 * @returns Element
 */
type EventNames = 'click' | 'scroll' | 'mousemove'
// function handleEvent(ele:Element, event: EventNames):Element {
  // do something
  // return ele
// }