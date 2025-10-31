// You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

// Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

// You are given an API bool isBadVersion(version) which returns whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.


var solution = function (isBadVersion) {
    /**
     * @param {integer} n - Total versions
     * @return {integer} - The first bad version number
     */
    return function (n) {
        // Initialize search boundaries
        let l = 1;
        let r = n;

        // Use binary search to find the first bad version
        while (l < r) {
            // Find the middle version
            let mid = Math.floor((r + l) / 2);

            // Check if mid version is bad
            let bad = isBadVersion(mid);

            if (bad === false) {
                // If mid is not bad, move search to the right half
                l = mid + 1;
            } else {
                // If mid is bad, it could be the first bad version
                // so move search to the left half (including mid)
                r = mid;
            }
        }

        // When loop ends, l and r point to the first bad version
        return r;
    };
};
