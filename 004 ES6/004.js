

class Yanzao {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    eat() {
        return `I like eat~`
    }
}

// 等同于
// Yanzao.prototype = {
//     eat(){}
// }
let user1 = new Yanzao('盐藻', 18)
console.log(user1, user1.eat());
console.log(Yanzao.prototype);