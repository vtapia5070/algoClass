/*
Write a function that takes two numbers and returns the greatest common divisor.
*/

21 14
21 % 14 ? 


// Solution 1: O(n)
function greatestCommonDivisor (num1, num2) {
    var commonDivisor;
    var greatestNum = num1 >= num2 ? num1 : num2;
    for (var i = 0; i < greatestNum; i++) {
        if (num1 % i === 0 && num2 % i === 0) {
            commonDivisor = i;
        }
    }
    return commonDivisor;
}

// Solution 2: O(n-1)??
function gcd (num1, num2) {
    var gcd = null;
    var lowestNum = num1 <= num2 ? num1 : num2;
    for (var i = lowestNum; i > 1; i--) {
        if (num1 % i === 0 && num2 % i === 0) {
            gcd = i;
        }
    }
    return gcd;
}

// solution 3: O(n^2) ??
function gcd (num1, num2) {
    if (num2 === 0) {
        return num1;
    }
    return gcd(num2, num1 % num2)
}
