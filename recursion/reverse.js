/*
Implement a function that will reverse a string recursively.

reverse('abcdefg')
=> 'gfedcba'
*/

function reverse (str) {
    var reversedStr = '';

    for (var i = str.length - 1; i >= 0; i--) {
        reversedStr = reversedStr + str[i];
    }

    return reversedStr;
}

function reverse (str) {
    var reversedStr = '';

    for (var i = str.length - 1; i >= 0; i--) {
        reversedStr = reversedStr + str[i];
    }

    return reversedStr + reverse(str[str.length - 1]);
}

// abcd
// bcd
// cd
// d
// dc
// dcb
// dcba
