var form = document.querySelector('form[name="userForm"]');
var inputs = form.getElementsByTagName('input');

form.addEventListener('submit', function (event) {
    getWithUrl();   
})

function getWithUrl() {
    var email = inputs[0].value;
    var password = inputs[1].value;
    var xhr = new XMLHttpRequest();
    var sendObject = { email: email, password: password };

    if (email === '' || password === '') {
        inputs[0].classList.add('redBorder');
        inputs[1].classList.add('redBorder');
        for (var i=0; i<2; i++) {
            inputs[i].value = '';
        }
        var notData = document.createElement('h2');
        form.appendChild(notData);
        notData.innerHTML = 'Enter the data';
        return;
    }

    xhr.open('POST', 'https://reqres.in/api/register.');

    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.send(JSON.stringify(sendObject));

    xhr.onload = function () {
        var statusType = +String(this.status)[0];

        if (statusType === 2) {
            try {
                var id = JSON.parse(this.response).id;
                localStorage.setItem('id', JSON.stringify(id));
            }
            catch (ex) {
            //     throw ('something went wrong');
            }
        }
    }
    xhr.onloadend = function() {
        form.remove();
        var message = document.createElement('h1');
        document.appendChild(message);
        var id = JSON.parse(localStorage.getItem('id'));
        message.innerHTML = 'User ' + id + ' has been successfully registered';
    };
}


   
