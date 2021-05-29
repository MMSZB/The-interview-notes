"use strict";
var uname = 'mmszb', u = undefined, n = null;
// 泛型
var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// 「类型 + 方括号」
var arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// 枚举
var arr3 = [1, '哈哈哈'];
// 接口
var arr4 = [5, 3, 3];
function alertName() {
    alert("My name is MMSZB !");
}
// 类型推论
// let myFavoriteNumber = 'seven';
// myFavoriteNumber = 7;   => 会报错
// 实际上是这样    推断出类型
// let myFavoriteNumber: string = 'seven';
// myFavoriteNumber = 7;
// 如果定义的时候没有赋值，不管之后有没有赋值
// 都会被推断成 any 类型而完全不被类型检查：
// let myFavoriteNumber;
// myFavoriteNumber = 'seven';
// myFavoriteNumber = 7;
// 这样就没事   喵喵喵？
