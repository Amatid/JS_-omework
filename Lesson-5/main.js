//Задача 1
var x = +prompt('Введите исходное число');
while (!x) {
    alert('Введите корректное число');
    var x = +prompt('Введите исходное число');
}
var n = prompt('Введите степень в которую хотите возвести число');
while (n != parseInt(n)) {
    alert('Введите целое число');
    var n = +prompt('Введите степень в которую хотите возвести число');
}
n = +n;
while (!n || n < 1) {
    alert('Введите корректное число');
    var n = +prompt('Введите степень в которую хотите возвести число');
}
function pow(x, n) {
    if (n === 1) {
        return x;
    } else {
        return x * pow(x, n - 1);
    }
}
alert(pow(x, n));

//Задача 2
//Способ 1
var sum = 0;

function sumTo(n) {
    for (var i = 1; i <= n; i++) {
        sum += i;
    }
    return sum // 2-ое по скорости решение данной задачи, т.к. операций сложения нужно выполнить n - раз
}
//Способ 2
function sumTo(n) {
    if (n === 1) {
        return 1
    }
    return n + sumTo(n - 1); // последнее по скорости, т.к. количество сложений такое же, как у цикла, но требуются дополнительные вычисления для вложенных вызовов
}
//Cпособ 3
function sumTo(n) {
    return (1 + n) / 2 * n // самый быстрый и простой способ решения данной задачи, т.к. для вычисления требуется выполнить всего 3 алгебраические операции 
}
//вариант sumTo (100000) с помощи рекурсии не пожет быть вычислен, т.к. браузеру не хватает размера стека, о чем он и сообщает. При этом 1 и 3 способы работают ввиду их простоты

//Задача 3
function treeSum(arr) {
    var sum = 0;

    for (var i = 0; i < arr.length; i++) {
        var item = arr[i];
        if (typeof item === "object" && item != null && item.length != null) {
            sum += treeSum(item);
            continue;
        }
        if (typeof item !== "number") {
            continue;
        }
        sum += item;
    }
    return sum;
}