// You are given a string num, representing a large integer. Return the largest-valued odd integer (as a string) that is a non-empty substring of num, or an empty string "" if no odd integer exists.

// A substring is a contiguous sequence of characters within a string.


var largestOddNumber = function (num) {
    let n = num.length - 1;

    while (n >= 0) {
        if(num[n] % 2 == 1){
            return num.substring(0 , n+1)
        }
        n--
    }

    return ""
};