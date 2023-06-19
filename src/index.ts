export const name:string = 'qile'
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


document?.addEventListener<'click'>('click' , () => {})