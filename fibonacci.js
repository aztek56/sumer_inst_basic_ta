
/*
    Fibonacci Sequence - Enter a number and have the program
    generate the Fibonacci sequence to that number or to the Nth number.
*/
var memo = {};
function fibonacci() {
    "use strict";
    var n = document.getElementById("num").value;
    var val = f(n);
    document.getElementById("fibonacciLbl").textContent = val;
    //return f;
}

function f(n) {

    var value;

    if (memo.hasOwnProperty(n)) {
        value = memo[n];
    } else {
        if (n === 0 || n === 1) {
            value = n;
        } else {
            value = f(n - 1) + f(n - 2);
        }

        memo[n] = value;
    }

    return value;
}
//console.log(fibonacci(15));