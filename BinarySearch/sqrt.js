// Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

// You must not use any built-in exponent function or operator.

// For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python

var mySqrt = function(x) {
    if (x < 2) return x;  // sqrt(0)=0, sqrt(1)=1

    let left = 2;
    let right = Math.floor(x / 2);

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let val = mid * mid;

        if (val === x) return mid;
        if (val < x) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return right;
};
