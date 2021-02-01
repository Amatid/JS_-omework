var form = document.querySelector('form[name="userForm"]');
var inputs = form.getElementsByTagName('input');


function checkInput() {
    var error = document.querySelector('.red');
    if (error) {
        error.remove();
    }
    var email = inputs[0].value;
    var password = inputs[1].value;
    if (email === '' || password === '') {
        inputs[0].classList.add('redBorder');
        inputs[1].classList.add('redBorder');
        for (var i = 0; i < 2; i++) {
            inputs[i].value = '';
        }
        var notData = document.createElement('h2');
        form.appendChild(notData);
        notData.classList.add('red');
        notData.innerHTML = 'Enter the data';
    }
}

form.addEventListener('submit', function (event) {
    event.preventDefault();
    checkInput();
    var email = inputs[0].value;
    var password = inputs[1].value;
    if (email === '' || password === '') {
        return;
    }
    getWithUrl();
})

function getWithUrl() {

    var xhr = new XMLHttpRequest();
    var email = inputs[0].value;
    var password = inputs[1].value;
    var sendObject = { email: email, password: password };
    inputs[0].classList.remove('redBorder');
    inputs[1].classList.remove('redBorder');



    xhr.open('POST', 'https://reqres.in/api/register.');

    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.send(JSON.stringify(sendObject));

    xhr.onload = function () {
        var statusType = +String(this.status)[0];

        if (statusType === 2) {
            try {
                var id = JSON.parse(this.response).id;
                localStorage.setItem('id', JSON.stringify(id));
                drawId();
            }
            catch (ex) {
                //     throw ('something went wrong');
            }
        }
    }
}

function drawId() {
    form.remove();
    var message = document.createElement('h1');
    var mainContent = document.getElementById('mainContent');
    mainContent.appendChild(message);
    var id = JSON.parse(localStorage.getItem('id'));
    message.innerHTML = 'User ' + id + ' has been successfully registered';
}



