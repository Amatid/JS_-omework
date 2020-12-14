//Практическое задание 1
var container = document.getElementById('container');

var firstPar = document.createElement('p'),
    secondPar = document.createElement('p');

firstPar.innerHTML = 'Hello, here are <a href="https://www.facebook.com">Link 1</a> and <a href="https://twitter.com">Link 2</a>';
secondPar.innerHTML = 'Hello, here are <a href="http://google.by">Link 3</a> and <a href="https://vk.com">Link 4</a>';

container.appendChild(firstPar);
container.appendChild(secondPar);

var button = document.getElementsByTagName('button');
var links = document.getElementsByTagName('a');

button = button[0];
var linksHigh = firstPar.children;
var linksLow = secondPar.children;

button.onclick = function (event) {
    for (var i = 0; i < linksHigh.length; i++) {
        linksHigh[i].className = 'High';
    }
}
secondPar.addEventListener('click', function (event) {
    target = event.target;
    if (target.tagName === 'A') {
        paragraphClick(event);
    }
})

localStorage.clear();

function paragraphClick(event) {
    event.preventDefault();
    var linkPath = event.target.getAttribute('href');
    var linkText = event.target.innerHTML;
    if ((localStorage.getItem(linkText)) === null) {
        localStorage.setItem(linkText, JSON.stringify({ path: linkPath }));
        event.target.setAttribute('href', '#');
        alert('Ссылка была сохранена');
    } else {
        var jsonString = localStorage.getItem(linkText);
        var jsonObj = JSON.parse(jsonString);
        alert(jsonObj.path);
    }
}