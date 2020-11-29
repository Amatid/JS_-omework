//Задание 1
function filterNumbersArr(numbers) {
    var newArr = numbers.filter(function (numbers) {
        return numbers > 0;
    })

    return newArr;
}

//Задание 2
function findFirstPositive(numbers) {
    var firstPositive = numbers.find(function (numbers) {
        return numbers > 0;
    })

    return firstPositive;
}

//Задание 3
function isPalindrome(word) {
    word = word.toLowerCase();
    for (var i = 0; i <= Math.floor(word.length / 2); i++) {
        var letterFirst = word[i];
        var letterLast = word[word.length - i - 1];

        if (letterFirst !== letterLast) {
            return false;
        } else {
            return true;
        }
    }
}

//Задание 4
function isAnagramm(word, letters) {
    word = word.toLowerCase();
    letters = letters.toLowerCase();
    if (word.length !== letters.length) {
        return false;
    }
    for (var i = 0; i < word.length; i++) {
        if (word.indexOf(letters[i], i) === -1) {
            return false;
        }
    }
    return true;
}

//Задание 5
function divideArr(arr, quantityElements) {
    var part = Math.ceil(arr.length / quantityElements);
    var newArr = [];

    while (newArr.length < quantityElements) {
        var partsOfArr = arr.splice(0, part);
        newArr.push(partsOfArr);
    }
    return newArr;
}