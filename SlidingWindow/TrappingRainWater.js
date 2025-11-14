// 42. Trapping Rain Water

// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.


var trap = function (arr) {
    let n = arr.length;

    // maxL[i] will store the maximum height to the LEFT of index i (including i)
    let maxL = [];
    maxL[0] = arr[0];

    // Build the left max array
    for (let i = 1; i < n; i++) {
        maxL[i] = Math.max(maxL[i - 1], arr[i]);
    }

    // maxR[i] will store the maximum height to the RIGHT of index i (including i)
    let maxR = [];
    maxR[n - 1] = arr[n - 1];

    // Build the right max array
    for (let i = n - 2; i >= 0; i--) {
        maxR[i] = Math.max(maxR[i + 1], arr[i]);
    }

    // Now calculate total trapped water
    let ans = 0;

    for (let i = 0; i < n; i++) {
        // Water at index i = min(leftMax, rightMax) - height[i]
        let waterTrapped = Math.min(maxL[i], maxR[i]) - arr[i];

        // Avoid negative water values
        ans += Math.max(waterTrapped, 0);
    }

    return ans;
};
