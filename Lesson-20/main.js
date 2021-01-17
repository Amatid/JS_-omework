var action = document.getElementById('action');
var body = document.getElementsByTagName('body')[0];
var milisecond = 0;
var second = 0;
var minute = 0;
var numberMilisecond = document.getElementById('miliseconds');
var numberSecond = document.getElementById('seconds');
var numberMinute = document.getElementById('minutes');
var buttons = document.getElementsByTagName('button');

function startTimer() {
    var clock = document.getElementsByTagName('div');
    var timer = setInterval(function () {
        if (action.dataset.status === 'stop') {
            clearInterval(timer);
        }
        if (action.dataset.status === 'start') {
            return;
        }
        milisecond++;
        numberMilisecond.innerHTML = milisecond;
        numberSecond.innerHTML = second;
        numberMinute.innerHTML = minute;
        for (var i = 1; i < clock.length; i++) {
            if (clock[i].innerHTML <= 9) {
                clock[i].innerHTML = '0' + clock[i].innerHTML;
            }
        }
        if (milisecond === 99) {
            second++;
            milisecond = 0;
        }
        if (second === 59) {
            minute++;
            second = 0;
        }
        if (minute === 59) {
            clearInterval(timer);
        }
    }, 10);
}

function createButtons() {
    for (var i = 0; i <= 1; i++) {
        var createdButtons = document.createElement('button');
        body.appendChild(createdButtons);
    }
    buttons[1].innerHTML = 'Reset';
    buttons[2].innerHTML = 'Save';
}

function resetTimer() {
    action.setAttribute('data-status', 'start');
    action.innerHTML = 'Start'
    numberMilisecond.innerHTML = '00';
    numberSecond.innerHTML = '00';
    numberMinute.innerHTML = '00';
    milisecond = 0;
    second = 0;
    minute = 0;
    while (buttons.length > 1) {
        buttons[1].remove();
    }
}

action.addEventListener('click', function (event) {
    if (action.dataset.status === 'start') {
        createButtons();
    }
    var buttons = document.getElementsByTagName('button');
    var reset = buttons[1];
    var save = buttons[2];
    reset.addEventListener('click', function (event) {
        resetTimer();
    })
    save.addEventListener('click', function (event) {
        saveResult();
    })
    if (action.dataset.status === 'start' || action.dataset.status === 'stop') {
        action.setAttribute('data-status', 'process');
        action.innerHTML = 'Stop';
        startTimer();
        return;
    }
    if (action.dataset.status === 'process') {
        action.setAttribute('data-status', 'stop');
        action.innerHTML = 'Run';
        return;
    }
})






