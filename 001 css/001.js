// throw '类型不匹配'
// throw  创建自定义错误。
let num = 3.1415926
// console.log(parseInt(num));   // => 3
// console.log(parseFloat(num));  // => 3.1415926
let str = '刘蓉同学汇编语言与接口技术课程不幸重修 ——2021年4月12日'

let arr1 = ['1', '2'],
  arr2 = ['3', '4'],
  newarr = [];

newarr = arr1.concat(arr2)  //  => 1234
newarr = arr1.concat(arr2, '5')  // => 12345

// join() 方法把数组的每个元素用指定的字符串连接起来
// console.log(arr1.join(''));  // => 数组转字符串

// slice() 截取数组的部分元素，然后返回一个新的数组
// 第一个参数 开始位置 。 第二个参数 结束位置
// 如果只有一个参数   从指定位置到结束
// console.log(arr1.slice(0, 2));  // [1,2]        
// sort() 可以对当前数组排序.



// substr()  字符串截取         第一个参数 开始位置     第二个参数截取位置
// 如果只有一个参数   从指定位置到结束
// console.log(str.substr(5，7));  // => `编语言与接口技`
// 字符串也有slice()方法
let time = new Date()
let year = time.getFullYear(),
  month = time.getMonth() + 1,
  day = time.getDate()
// console.log(year, month, day)




let arr = [65, 44, 12, 4, 8]
const getSum = (total, num) => {
  return total + num
}

// console.log('平均数：', arr.reduce(getSum) / arr.length);
for (let i = 0; i < 5; i++) {
  let str = ''
  for (let j = 0; j < i * 2 + 1; j++) {
    str += '#'
  }
  str = str.padStart((9 - str.length) / 2 + str.length, ' ')
  console.log(str)
}





// 转换成数组
let ConvertanArray = function (list) {
  let arr = []
  while (list) {
    arr.push(list.val)
    list = list.next
  }
  return arr
}

// 转换成链表
let ConversionListNodes = function (arr) {
  let listnodes = {
    val: arr[arr.length - 1],
    next: null
  }
  for (let i = arr.length - 2; i >= 0; i--) {
    listnodes = {
      val: arr[i],
      next: listnodes
    }
  }
  return listnodes
}
/**
* Definition for singly-linked list.
* function ListNode(val, next) {
*     this.val = (val===undefined ? 0 : val)
*     this.next = (next===undefined ? null : next)
* }
*/
/**
* @param {ListNode} l1
* @param {ListNode} l2
* @return {ListNode}
*/
// 转换成数组

var addTwoNumbers = function (l1, l2) {
  let arr1 = ConvertanArray(l1)
  let arr2 = ConvertanArray(l2)
  let len = Math.max(arr1.length, arr2.length)
  let jw = { 0: 0 }

  let result = []
  for (let i = 0; i < len; i++) {
    let he = (arr1[i] || 0) + (arr2[i] || 0) + jw[i]
    let zhi = he % 10
    result[i] = zhi
    jw[i + 1] = Math.floor(he / 10)
  }
  if (jw[len]) {
    result.push(1)
  }
  return ConversionListNodes(result)
};