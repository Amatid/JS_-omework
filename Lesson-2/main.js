var stockNumber = +prompt('Введите исходное число', '');
var addend =  +prompt('Введите сколько прибавить', '');
var deducted = +prompt('Введите сколько отнять', '');
var multiple = +prompt('Введите на сколько умножить', '');
var devide = +prompt('Введите на сколько разделить', '');
var result = (stockNumber + addend - deducted) * multiple / devide;

alert('Формула: (' + stockNumber + ' + ' + addend + ' - ' + deducted + ') * ' + multiple + ' / ' + devide + '\nРезультат: ' + result);
