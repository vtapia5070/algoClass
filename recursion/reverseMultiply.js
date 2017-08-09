function recurseMultiply (arr, num) {
    if (arr === 0) {
        return arr;
    }
    var lastItem = newArr.pop();
    reverseMultiply(arr, num);
    arr.push(lastItem * num);
    return arr;
}

function reverseMultiply (arr, num) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr.push(arr[i] * num);
    }
    return newArr;
}
