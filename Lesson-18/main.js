// Задание 1
var validateUser = /^[a-z]{4,10}_[a-z]{4,10}([\d]{0}|-[\d]{4})@[a-z\d]{2,20}[.-]?[a-z\d]{0,20}.com$/

console.log(validateUser.test('name_surname-1234@gmail.com'));

//Задание 2
function validatePhone(numberOfPhone) {
    return /^\+?(375|80|8-0)-?(29|33|44|25|17)-?[1-9]{1}[\d]{2}-?[\d]{2}-?[\d]{2}$/.test(numberOfPhone);
}

console.log(validatePhone('+375-25-777-77-77'));
console.log(validatePhone('375299999999'));
console.log(validatePhone('8-044-444-44-44'));
console.log(validatePhone('+8033-6666666'));

//Задание 3
function getSumQuantityVowel(string) {
    var arrVovel = string.match(/[аеёиоуыэюя]/ig);
    if (!arrVovel) {
        return 'Нет гласных букв';
    }
    return 'Количество гласных букв: ' + arrVovel.length;
}

console.log(getSumQuantityVowel("прИвЕт"));
console.log(getSumQuantityVowel("рАз двА трИ чЕтЫрЕ пЯть"));