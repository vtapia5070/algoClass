/*
Implement factorial.

factorial(5) => 5*4*3*2*1 => 120
*/

function factorial (n) {
    if (n === 1) {
        return n;
    } else {
        return n * factorial(n-1);
    }
}
