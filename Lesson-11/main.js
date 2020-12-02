//Задание 1
function filterNumbersArr(numbers) {
    return numbers.filter(function (number) {
        return number > 0;
    })   
}

filterNumbersArr([1, 2, 3, -6, 9, -4, -10]);

//Задание 2
function findFirstPositive(numbers) {
    return numbers.find(function (number) {
        return number > 0;
    })
}

findFirstPositive([-1, -2, 3, -6, 9, -4, -10]);

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

isPalindrome ('нагаН');
isPalindrome ('бок');

//Задание 4
function isAnagramm(word, letters) {
    word = word.toLowerCase().split('').sort().join();
    letters = letters.toLowerCase().split('').sort().join();
    if (word !== letters) {
        return false;
    }  
    return true;
}

isAnagramm (бок, оок);
isAnagramm (бок, обк);

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

divideArr([1, 2, 3, 4], 2);
divideArr([1, 2, 3, 4, 5, 6, 7, 8], 3);