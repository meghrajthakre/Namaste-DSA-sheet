// 658. Find K Closest Elements

// Given a sorted integer array arr, two integers k and x, return the k closest integers to x in the array. The result should also be sorted in ascending order.

// An integer a is closer to x than an integer b if:

// |a - x| < |b - x|, or
// |a - x| == |b - x| and a < b

var findClosestElements = function(arr, k, x) {
    let l = 0;
    let r = arr.length - k;

    // Binary search to find the left boundary of the k closest elements
    while (l < r) {
        let m = l + Math.floor((r - l) / 2);

        // Compare which side is closer to x
        if ((arr[m + k] - x) < (x - arr[m])) {
            l = m + 1; // move right
        } else {
            r = m; // move left
        }
    }

    // Collect k elements starting from l
    let ans = [];
    for (let i = l; i < l + k; i++) {
        ans.push(arr[i]);
    }

    return ans;
    // return arr.slice(l , l+k)
};
