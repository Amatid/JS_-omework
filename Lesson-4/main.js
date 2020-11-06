//Задача 1
//Способ 1
for (var i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
        alert('Четное число: ' + i);
    }
}
//Способ 2
for (var i = 2; i <= 10; i += 2) {
    alert('Четное число: ' + i);
}
//Способ 3
for (var i = 2; i <= 10; i++) {
    var check = i % 2;
    if (!check) {
        alert('Четное число: ' + i);
    }
}

//Задача 2
function isEmpty(obj) {
    for (var k in obj) {
        return false;
    }
    return true;
}

//Задача 3
var sum = 0,
    arr = [],
    arrSec =[];

for (var i = 0; true; i++) {
    arr[i] = prompt('Введите число');
    if (arr[i] === "0") {
        continue;
    }
    arr[i] = parseInt(arr[i]);
    if (!arr[i]) {
        break;
    }
}
arr.pop(); 
for (i = 0; i < arr.length; i++) {
    sum += arr[i];
}

alert('Сумма введенных чисел: ' + sum);

//Задача 4
back: for (var i = 2; i <= 10; i++) {
    for (var n = 2; n < i; n++) {
        if (i % n == 0) {
            continue back;
        }
    }
    alert('Простое число: ' + i);
}