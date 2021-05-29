let person = {
    name: 'lbj',
    age: 21,
    like: 'fkx',
    outputInfo: function (name, age) {
        console.log(arguments);
        console.log(name, age);
        console.log(this.name);
    }
};

function info() {
    console.log(this.name);
}
// person.outputInfo()

let teacher = {
    name: '李敏',
    age: '35'
}

person.outputInfo.call(teacher, '李歘', '21')