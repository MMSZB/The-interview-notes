let str = '   a      f'
let reg = /\s/g
console.log(str.replace(reg, ''));


for (let i = 0; i < 5; i++) {

  setTimeout(() => {
    console.log(i);
  }, i * 1000)

}


let ip = '192.168.1.5'
isRightIp = (ip) => {
  return ip.split('.').some(item => item <= 255 && item >= 0)
}

console.log(isRightIp(ip));

