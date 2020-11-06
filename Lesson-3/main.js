//Задание 1
var login = prompt('Введите ваш логин');

if (login === 'Админ') {
    var password = prompt('Введите пароль');
    if (password === 'Чёрный Властелин') {
        alert('Добро пожаловать');
    } else if (password == null) {
        alert('Вход отменен');
    } else {
        alert('Пароль неверен');
    }
} else if (login == null) {
    alert('Вход отменен');
} else {
    alert('Я вас не знаю');
}

//Задание 2
var message;

message = (login == 'Вася')
    ? 'Привет'
    : (login == 'Директор')
        ? 'Здравствуйте'
        : (login == '') ? 'Нет логина' : '';

//Задание 3
var styles = ['Джаз', 'Блюз'];

styles.push('Рок-н-Ролл');
styles[styles.length - 2] = 'Классика';
alert(styles.shift());
styles.unshift('Рэп', 'Регги');

//Задание 4
var name = prompt('Введите ваше имя');

while (name == '' || name == 'null') {
    alert('Введите корректное имя!');
    name = prompt('Введите ваше имя');
}

var surname = prompt('Введите вашу фамилию');

while (surname == '' || surname == null) {
    alert('Введите корректную фамилию!');
    surname = prompt('Введите вашу фамилию');
}

var middleName = prompt('Введите ваше отчество');

while (middleName == '' || middleName == null) {
    alert('Введите корректное отчество!');
    middleName = prompt('Введите ваше отчество');
}

var old = +prompt("Введите ваш возраст");

while (isNaN(old) || old == null || old < 6 || old > 100) {
    alert('Введите корректный возраст!');
    old = prompt('Введите ваш возраст');
}

var isMale = confirm('Ваш пол мужской?');
var FiveYearsAfter = old + 5;

days = old * 365;

var gender = 'Женский';
if (isMale === true) {
    gender = 'Мужской';
}

var pensia = 'Нет';

if (isMale === true && old > 62 || isMale === false && old > 58) {
    pensia = 'Да';
}

alert('Ваше ФИО: ' + surname + ' ' + name + ' ' + middleName + '\nВаш возраст в годах: ' + old + '\nВаш возраст в днях: ' + days + '\nЧерез 5 лет вам будет: ' + FiveYearsAfter + '\nВаш пол: ' + gender + '\nВы на пенсии: ' + pensia);
