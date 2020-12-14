var inputX = document.getElementById('inputX');
var inputY = document.getElementById('inputY');
var button = document.getElementById('submit');

function isValidate() {
    var isValidX = !!inputX.value;
    var isValidY = !!inputY.value;
    if (isValidX && isValidY) {
        button.removeAttribute('disabled');
    } else {
        button.setAttribute('disabled', true);
    }
}

inputX.addEventListener('keyup', function (event) {
    isValidate();
})

inputY.addEventListener('keyup', function (event) {
    isValidate();
})

button.addEventListener('click', function (event) {
    checkValue(inputX);
    checkValue(inputY);
    createTable();
})

function checkValue(stringOfValue) {
    if (isNaN(+stringOfValue.value) || +stringOfValue.value < 1 || +stringOfValue.value > 10) {
        alert('Введите корректное значение в поля "X" и "Y" от 1 до 10');
        stringOfValue.value = '';
        isValidate();
    }
}

var table = document.getElementById('table');

function createTable() {
    if (table.children.length) {
        var deleteRow = table.getElementsByTagName('tr');
        var deleteCell = table.getElementsByTagName('td');
        while (deleteRow.length) {
            deleteRow[0].remove();
        }
        while (deleteCell.length) {
            deleteCell[0].remove();
        }
    }
    var quantityRow = +inputY.value;
    var quantityColumns = +inputX.value;
    var i = 1;
    var j = 1;
    while (i <= quantityRow) {
        var newRow = document.createElement('tr');
        table.appendChild(newRow);
        i++;
        j = 1;
        while (j <= quantityColumns) {
            var newCell = document.createElement('td');
            table.appendChild(newCell);
            newCell.className = 'cell';
            if (j % 2 === 0 && i % 2 === 0 || j % 2 !== 0 && i % 2 !== 0) {
                newCell.className = 'cellBlack';
            }
            j++;
        }
    }
    inputX.value = '';
    inputY.value = '';
    isValidate();
}

table.addEventListener('click', function (event) {
    mixCell();
})

function mixCell() {
    var arrBlack = table.querySelectorAll('.cellBlack');
    var arrWhite = table.querySelectorAll('.cell');
    for (i = 0; i < arrBlack.length; i++) {
        arrBlack[i].classList.toggle('cellBlack');
        arrBlack[i].classList.toggle('cell');
    }
    for (i = 0; i < arrWhite.length; i++) {
        arrWhite[i].classList.toggle('cell');
        arrWhite[i].classList.toggle('cellBlack');
    }
}