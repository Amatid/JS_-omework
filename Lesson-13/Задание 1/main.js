var table = document.getElementsByTagName('tbody')[0];
var addRow = table.getElementsByTagName('tr');
var first = addRow[0];
addRow = addRow[addRow.length - 1];
var cell = table.children;

addRow.addEventListener('click', function (event) {
    event.stopPropagation();
    var newRow = document.createElement('tr');
    var newCell = document.createElement('td');
    var newCell1 = document.createElement('td');
    var newCell2 = document.createElement('td');
    newRow.appendChild(newCell);
    newRow.appendChild(newCell1);
    newRow.appendChild(newCell2);
    table.insertBefore(newRow, first);
    first = newRow;
})

table.addEventListener('click', function (event) {
    var target = event.target;
    if (target.tagName === 'TD' && target !== addRow && target.firstElementChild === null && target.innerHTML === '') {
        tdClick(event);
    } else if (target.tagName === 'TD' && target.innerHTML !== '') {
        tdContainsText(event);
    }
})

var input = document.createElement('input');

function tdClick(event) {
    var target = event.target;
    event.stopPropagation();
    input.className = 'inputs';
    target.appendChild(input);
    input.value = '';
    input.focus();
    input.setAttribute('maxlength', 24);
}


input.addEventListener('focusout', function (event) {
    inputFocusOut(event);
})

function inputFocusOut(event) {
    var target = event.target;
    target.parentElement.innerHTML = input.value;
}

function tdContainsText(event) {
    var target = event.target;
    event.stopPropagation();
    var text = target.innerHTML;
    target.innerHTML = '';
    input.className = 'inputs';
    target.appendChild(input);
    input.value = text;
    input.focus();
}

input.addEventListener('keypress', function (event) {
    if (event.key == 'Enter') {
        event.target.blur();
    }
})