export const name: string = 'qile'
const button: HTMLButtonElement | null = document.querySelector('.random')

interface ICatType {
  id: string;
  url: string;
  name: string;
  test?: boolean
}

class Cat implements ICatType {
  id: string;
  url: string;
  name: string;
  test: false

  constructor() {
    this.id = ''
    this.url = ''
    this.name = ''
    this.test = false
  }
}


document?.addEventListener<'click'>('click', () => { })


function tfunc<T>(info: T) {
  const { name, age } = info as unknown as { name: string, age: number }
  return `姓名：${name}；年龄：${age}`
}

function identity<T>(arg: T): T {
  return arg
}

identity({ number: 1234 })

function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key]
}

getProperty({ a: '123', b: '456' }, 'c')