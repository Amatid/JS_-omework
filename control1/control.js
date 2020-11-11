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
function transformObject(obj) {
    for (var k in obj) {
        var long = obj[k].length;
        obj[k + '_length'] = long;
        delete obj[k];
    }
}

//Задание 3
function transformObject(obj) {
    var dupObj = {};
        
    for (var k in obj) {
        var long = obj[k].length;
        if (dupObj[obj[k]] === undefined) {
            dupObj[obj[k]] = 1;
        } else {
            dupObj[obj[k]]++;
        }
        obj[k + '_length'] = long;
        delete obj[k];
    }
    for (var key in dupObj) {
        if (dupObj[key] === 1){
            delete dupObj[key];
        } else {
            dupObj[key] = dupObj[key] + ' times';
        }
    }
    obj['Duplicated values'] = dupObj; 
    return obj;
}