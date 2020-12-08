//Задание 1
function Person(name, age) {
    var self = this;
    var personAge = age;

    self.name = name;

    function getFormattedAge() {
        return personAge + ' лет';
    }

    self.showInfo = function () {
        console.log('Привет, меня зовут ' + self.name + ' мне ' + getFormattedAge() + '.');
    }
}

function Employee(name, age, salary) {
    Person.apply(this, arguments);
    this.salary = salary;

    var personShowInfo = this.showInfo;
    this.showInfo = function () {
        personShowInfo();
        console.log('Моя зарплата ' + this.salary + '$.');
    }
}

var vasya = new Person('Вася', 25);
var petr = new Employee('Петр', 19, 2000);

console.log(vasya.showInfo());
console.log(petr.showInfo());

//Задание 2
function Person(name, age) {
    this.name = name;
    this._personAge = age;
}
    Person.prototype._getFormattedAge = function () {
        return this._personAge + ' лет';
    }

    Person.prototype.showInfo = function () {
        console.log('Привет, меня зовут ' + this.name + ' мне ' + this._getFormattedAge() + '.');
    }


function Employee(name, age, salary) {
    this.name = name;
    this._personAge = age;
    this.salary = salary;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.showInfo = function () {
    Person.prototype.showInfo.apply(this, arguments);
    console.log('Моя зарплата ' + this.salary + '$.');
}


var vasya = new Person('Вася', 25);
var petr = new Employee('Петр', 19, 2000);

console.log(vasya.showInfo());
console.log(petr.showInfo());