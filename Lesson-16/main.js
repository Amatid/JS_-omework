var spaceForTabs = document.getElementById('usersTabs');
var spaceForInformation = document.getElementById('usersInformation');
var button = document.getElementById('getInformation');

button.addEventListener('click', function (event) {
    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://reqres.in/api/users?page=2', true);

    xhr.send();

    xhr.onload = function () {
        var statusType = +String(this.status)[0];

        if (statusType === 2) {
            try {
                var usersList = JSON.parse(this.response).data;
            }
            catch (ex) {
                alert('Сouldnt get data');
            }
        }
    
        localStorage.setItem('users', JSON.stringify(usersList));

        for (var i = 0; i < usersList.length; i++) {
            var newTab = document.createElement('div');
            spaceForTabs.appendChild(newTab);
            if (!i) {
                newTab.classList.add('tabActive');
            } else {
                newTab.classList.add('tab');
            }
            newTab.innerHTML = '<p>User <p>' + (i + 1);
        }

        paintElements(0);

        spaceForTabs.addEventListener('click', function (event) {
            target = event.target;
            var lastActive = document.getElementsByClassName('tabActive')[0];

            if (target.tagName === 'DIV' && target.classList.contains('tab')) {
                lastActive.classList.toggle('tabActive');
                lastActive.classList.toggle('tab');
                target.classList.toggle('tab');
                target.classList.toggle('tabActive');
                var indexOfElement = +target.lastElementChild.innerHTML - 1;
                deleteElements();
                paintElements(indexOfElement);
            } else if (target.tagName === 'P' && target.parentElement.classList.contains('tab')) {
                lastActive.classList.toggle('tabActive');
                lastActive.classList.toggle('tab');
                target.parentElement.classList.toggle('tab');
                target.parentElement.classList.toggle('tabActive');
                var indexOfElement = target.nextElementSibling ? +target.nextElementSibling.innerHTML - 1 : +target.innerHTML - 1;
                deleteElements();
                paintElements(indexOfElement);
            }
        })

        function paintElements(index) {
            var image = document.createElement('img');
            spaceForInformation.appendChild(image);
            image.setAttribute('src', usersList[index].avatar);
            var name = document.createElement('p');
            spaceForInformation.appendChild(name);
            name.innerHTML = 'First Name: ' + usersList[index].first_name + '<br>' + 'Last Name: ' + usersList[index].last_name;
        }

        function deleteElements() {
            var deleteImage = document.getElementsByTagName('img');
            var deleteData = spaceForInformation.getElementsByTagName('p');
            deleteImage[0].remove();
            for (i = 0; i < deleteData.length; i++) {
                deleteData[0].remove();
            }
        }
    };
    button.setAttribute('disabled', true);
});