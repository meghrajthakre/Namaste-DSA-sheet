// Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */

var dailyTemperatures = function (arr) {
    let n = arr.length;
    let stack = []; // Stack me un indices ko store karenge jinke liye abhi next warmer day nahi mila
    let ans = Array(n).fill(0); // Har index ke liye answer array (0 se fill, default 0 matlab koi warmer day nahi mila)

    // Pehle last element ka index stack me daal do (kyunki uske baad koi day nahi hai)
    stack.push(n - 1);

    // Loop ko right to left chalayenge
    for (let i = n - 2; i >= 0; i--) {

        // Jab tak stack empty nahi hai aur current temp >= stack ke top vale temp ke hai,
        // tab tak stack se pop karte rahenge (kyunki wo day warmer nahi ho sakta)
        while (stack.length) {
            let top = stack[stack.length - 1];
            if (arr[i] >= arr[top]) {
                stack.pop(); // current day ke liye top wala day useful nahi hai
            } else {
                // Agar warmer day mil gaya
                ans[i] = top - i; // difference in days store karo
                break; // exit loop
            }
        }

        // Current day ka index stack me push kar do
        stack.push(i);
    }

    return ans; // final answer array return karo
};
