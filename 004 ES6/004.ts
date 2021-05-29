

let age: number = 21

interface a {
  value: number;
}
let a: object = {
  value: 1
}

function getValue(name: string, age: number) {
  console.log(name);
  console.log(age);
}
getValue.call(null, '李歘', 35)
// 第一个参数 this 指向 ，后面是参数
getValue.apply(null, ['李歘', 35])


