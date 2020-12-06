//Задание 1
function transformArray(arr) {
    return arr.map(function (name) {
        var obj = {};
        obj.name = name;
        return obj;
    })
}

console.log(transformArray(['Vasya', 'Pyotr', 'Dima']));

//Задание 2
function transformToTime(arr) {
    return arr.reduce(function (figure, current) {
        return figure + ':' + current;
    }, 'Текущее время ')
}

console.log(transformToTime(['00', '22', '18']));

//Задание 3
function getSumQuantityVowel(string) {
    var ARR_VOWEL = ["а", "е", "ё", "и", "о", "у", "ы", "э", "ю", "я"];
    var sum = 0;
    var findPos = 0;

    string = string.toLowerCase();
    for (var i = 0; i < ARR_VOWEL.length;) {
        var checkFind = string.indexOf(ARR_VOWEL[i], findPos);
        if (checkFind === -1) {
            i++;
            findPos = 0;
        } else {
            sum++;
            findPos = checkFind + 1;
        }
    }
    return sum;
}

console.log(getSumQuantityVowel("прИвЕт"));
console.log(getSumQuantityVowel("рАз двА трИ чЕтЫрЕ пЯть"));

//Задание 4
function countSentencesLetters(string) {
    var arrSentence = string.split(/[.!?]/);
    var arrOfWords = [];

    for (var i = 0; i < arrSentence.length; i++) {
        var words = arrSentence[i].split(/[ ,]/).join('');
        if (arrSentence[i] === '') {
            delete arrSentence[i];
            continue;
        }
        arrOfWords.push(arrSentence[i] + ': Letters quantity is: ' + words.length);
    }
    return arrOfWords.forEach(function (sentence) {
        console.log(sentence);
    })
}

countSentencesLetters("Привет, студент! Студент... Как дела, студент?");
countSentencesLetters("Привет. Давно не виделись... Как ты? Как поживаешь?")

//Задание 5
function calculateRepetitionWord(string) {
    var arrWords = string.toLowerCase().split(/[.!? ,]/);
    var objRepeat = {};

    for (var i = 0; i < arrWords.length; i++) {
        if (arrWords[i] === '') {
            continue;
        }
        if (objRepeat[arrWords[i]] === undefined) {
            objRepeat[arrWords[i]] = 1;
        } else {
            objRepeat[arrWords[i]]++;
        }
    }
    var maxCount = 0;
    var maxWord = null;
    for (var word in objRepeat) {
        var wordCount = objRepeat[word];
        if (wordCount > maxCount) {
            maxCount = wordCount;
            maxWord = word;
        }              
    }
    return 'Максимальное число повторений у слова "' + maxWord + '" - ' + maxCount;
}

console.log(calculateRepetitionWord("Привет, студент! Студент... Как дела, студент?"));