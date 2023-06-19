// 对象的类型 使用接口自定义类型
interface customUserType {
  readonly id: number,
  userName: string;
  // nickName?: string;  // 该属性为可选属性
  age: number;
  gender: string;
  [propName: string]: string | number; // 可定义类型为string和number的任意属性
}

const user1:customUserType = {
  id: 9527,
  userName: '小红',
  nickName: '红红',
  age: 18,
  gender: 'male'
}
// user1.id = 9999 //无法分配到 "id" ，因为它是只读属性。ts(2540
console.log(user1)