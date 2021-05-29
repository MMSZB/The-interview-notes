interface person {
  name: string,
  age: number,
  like: string[] | string
}

const person = {
  name: 'lbj',
  age: 21,
  like: 'fkx'
}


function info() {
  console.log(this.name);
}

