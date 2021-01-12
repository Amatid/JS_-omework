var form = document.querySelector('form[name="userForm"]');
var inputs = form.getElementsByTagName('input');
var email = inputs[0].value;
var password = inputs[1].value;


function getWithUrl() {
    var xhr = new XMLHttpRequest();

    xhr.open('POST', ' https://reqres.in/api/register');

	xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.send(JSON.stringify({
        email: email,
        password: password
    }));

    xhr.onload = function() {
        try {
            var id = JSON.parse(this.response).data;
        }
        catch {
            
        }
    }
}

