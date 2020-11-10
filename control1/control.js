//Задание 1
function getMoreThanNull(arr) {
    var newArr = [];
    var j = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            continue;
        }
        newArr[j] = arr[i];
        j++;  
    }
    return newArr;
}

//Задание 2
function transformObject(obj){
    for (var k in obj){
        var long = obj[k].length;
        obj[k + '_length'] = long;
        delete obj[k];
    }
}