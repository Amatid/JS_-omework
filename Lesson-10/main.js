//Задание 1
function Animal(name) {
    this._foodAmount = 50;
    this.name = name;
}

Animal.prototype._formatFoodAmount = function () {
    return this._foodAmount + ' гр.';
}

Animal.prototype.dailyNorm = function (amount) {
    if (!arguments.length) return this._formatFoodAmount();

    if (amount < 50 || amount > 500) {
        return 'Недопустимое количество корма.';
    }

    this._foodAmount = amount;
};

Animal.prototype.feed = function () {
    console.log('Насыпаем в миску ' + this.dailyNorm() + ' корма.');

};

function Cat(name) {
    this._foodAmount = 50;
    this.name = name;
}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Animal;

Cat.prototype.feed = function () {
    Animal.prototype.feed.apply(this, arguments);
    console.log('Кот доволен ^_^');
}

Cat.prototype.stroke = function () {
    console.log('Гладим кота');
}

var barsik = new Cat('Барсик');

console.log(barsik.name);

console.log(barsik.dailyNorm());
console.log(barsik.feed());

console.log(barsik.dailyNorm(600));
console.log(barsik.feed());

console.log(barsik.dailyNorm(250));
console.log(barsik.feed());

barsik = null;

//Задание 2
function deepClone(initialObj) {
    var clonedObj;

    if (typeof initialObj !== 'object' || initialObj === null) {
        clonedObj = initialObj;
    } else if (Array.isArray(initialObj)) {
        clonedObj = [];
    } else {
        clonedObj = {};
    }

    for (var k in initialObj) {
        var original = initialObj[k];
        if (original == null) {
            clonedObj[k] = original;
            continue;
        }
        switch (typeof original) {
            case 'number':
            case 'string':
            case 'boolean':
            case 'function':
                clonedObj[k] = original;
                break;
            case 'object':
                if (Array.isArray(original)) {
                    clonedObj[k] = [];
                    for (var j = 0; j < original.length; j++) {
                        var clonedElement = deepClone(original[j]);

                        clonedObj[k].push(clonedElement);
                    }
                    break;
                }
                clonedObj[k] = deepClone(original);
                break;
        }
    }
    return clonedObj;
}

var initialObj = {
    string: 'Vasya',
    number: 30,
    boolean: true,
    undefined: undefined,
    null: null,
    array: [1, 2, 3],
    object: {
        string2: 'Petrov',
        object2: {
            array2: [{}, {}]
        },
        object3: {}
    },
    method: function () {
        alert('Hello');
    }
};
var clonedObj = deepClone(initialObj);

clonedObj.object.object2.array2[1].name = 'Vasya';
clonedObj.array.push(2);

console.log(initialObj);
console.log(clonedObj);

//Задание 3
function compareObj(obj1, obj2) {
    if (typeof obj1 !== typeof obj2) {
        return false;
    }
    if (typeof obj1 === 'undefined') {
        return true;
    }
    if (obj1 === null || obj2 === null) {
        return obj1 === obj2;
    }
    if (typeof obj1 === 'function') {
        return obj1.toString() === obj2.toString();
    }
    if (typeof obj1 !== 'object') {
        return obj1 === obj2;
    }
    if (!Array.isArray(obj1) && Array.isArray(obj2) || Array.isArray(obj1) && !Array.isArray(obj2)) {
        return false;
    }
    if (Array.isArray(obj1) && Array.isArray(obj2)) {
        if (obj1.length === obj2.length) {
            for (var i = 0; i < obj1.length; i++) {
                var resultCompare = compareObj(obj1[i], obj2[i]);
                if (resultCompare === false) {
                    return false;
                }
            }
        } else {
            return false;
        }
    }
    var arrKeysObj1 = Object.keys(obj1),
        arrKeysObj2 = Object.keys(obj2);

    if (arrKeysObj1.length === arrKeysObj2.length) {
        for (i = 0; i < arrKeysObj2; i++) {
            if (arrKeysObj1[i] !== arrKeysObj2[i]) {
                return false;
            }
        }
    } else {
        return false;
    }
    for (var k in obj1) {
        resultCompare = compareObj(obj1[k], obj2[k])
        if (resultCompare === false) {
            return false;
        }
    }
    return true;
}

compareObj(initialObj, clonedObj);