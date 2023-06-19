/**
 * 枚举类型
 */

enum Status {
  MASSAGE,
  SPA,
  DABAOJIAN,
}

function getServer(status: any) {
  if (status === Status.MASSAGE) {
    return '马杀鸡'
  } else if (status === Status.SPA) {
    return '洗啪'
  } else if (status === Status.DABAOJIAN) {
    return '大宝剑'
  }
}
const server = getServer(0)
console.log('我点一个' + server)

console.log('Status.MASSAGE', Status.MASSAGE) // 0
console.log('Status.SPA', Status.SPA) // 1
console.log('Status.DABAOJIAN', Status.DABAOJIAN) // 2

// 反查
console.log(Status.MASSAGE, Status[0]) // 0 'MASSAGE'

enum Gender {
  Male ,
  Female,
}