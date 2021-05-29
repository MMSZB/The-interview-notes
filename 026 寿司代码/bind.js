// 手写bind

Function.prototype.myBind = function (thisarg, ...list) {
  let _this = this
  return function () {
    _this.apply(thisarg, [...list])
  }
}