// Задание 1
{
    let { a, b, ...obj } = { a: 1, b: 2, c: 3, d: 4 };
}

// Задание 2
{
    let name = prompt('Введите имя пользователя');
    const obj = { name, sayHi(name) { return `Hi, ${obj.name}` } };
}

// Задание 3
{
    function doPow({ a: x, b: y }, z = 1) {
        return (x * z) ** y;
    }
    doPow({ a: 2, b: 3 }, 2);
}

//Задание 4
{
    let user = ['Vasya', 25]
    function sayHello(name, age) {
        return `Hello, I'm ${name} and I'm ${age} years old.`
    }
    sayHello(...user);
}

//Задание 5
{
    function showArray(...arr) {
        for (let value of arr) {
            console.log(value);
        }
    }
    showArray(4, 2, 5, 7);
}

//Задание 6
{
    function countVowelLetters(text) {
        const vowelLetters = ['а', 'я', 'ы', 'и', 'о', 'ё', 'у', 'ю', 'э', 'е', 'a', 'e', 'i', 'o', 'u', 'y'];
        let counter = 0;

        text.toLowerCase().split('').forEach(letter => vowelLetters.includes(letter) && counter++);

        return counter;
    }
}

//Задание 7
{
    function findPerson(arrOfObj) {
        return {
            ['Пользователи младше 40']: arrOfObj.filter(object => object.age < 40),
            ['Пользователь с именем Федор']: arrOfObj.find(object => object.name.startsWith('Fedor')),
        }
    }
    findPerson([
        { name: 'Vasya Pupkin', age: 25 },
        { name: 'Ivan Petrov', age: 30 },
        { name: 'Fedor Ivanov', age: 42 }
    ]);
}

//Задание 8
{
    function convertArr(arr) {
        return arr.map((name, i) => ({ [`Пользователь ${i + 1}`]: name }));
    }
    convertArr(['Вася', 'Сергей']);
}

//Задание 9
{
    function unitedObjects(arrOfObj) {
        return arrOfObj.reduce((object, current) => Object.assign(object, current) , {});
    }
    unitedObjects([
        { name: 'Vasya' },
        { name: 'Piotr', age: 25 },
        { salary: '2000$' }
    ]);
}

//Задание 10
{
    class Animal {
        constructor(name) {
            this.name = name
            this._foodAmount = 50
        }
        _formatFoodAmount() {
            return `${this._foodAmount} гр.`;
        }
        dailyNorm(amount) {
            if (!arguments.length) return this._formatFoodAmount();

            if (amount < 50 || amount > 500) {
                return 'Недопустимое количество корма.';
            }

            this._foodAmount = amount;
        }
        feed() {
            console.log(`Насыпаем в миску ${this.dailyNorm()} корма.`);
        }
    }

    class Cat extends Animal {
        feed() {
            super.feed();
            console.log('Кот доволен ^_^');
            return this;
        }
        stroke() {
            console.log('Гладим кота.');
            return this;
        }
    }

    let barsik = new Cat('Барсик');

    console.log(barsik.feed().stroke().stroke().feed());

    barsik = null;
}

//Задание 11
{
    function showFigures(figure1, figure2) {
        if (figure1 > figure2) {
            [figure1, figure2] = [figure2, figure1];
        }
        return new Promise((resolve, reject) => {
            let timer = setInterval(() => {
                if (Number.isInteger(figure1) && Number.isInteger(figure2)) {
                    console.log(figure1);
                    if (figure1 === figure2) {
                        clearInterval(timer);
                        resolve(figure1);
                    }
                    figure1++;
                } else {
                    clearInterval(timer);
                    reject('Введены одно или два нецелых числа')
                };
            }, 1000)
        })
    }
    showFigures(2, 6)
        .then(result => console.log(`Конечный результат: ${result}`))
        .catch(error => console.log(error));
}