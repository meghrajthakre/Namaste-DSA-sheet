var sortArray = function (arr) {
    if (arr.length <= 1) return arr;

    let mid = Math.floor(arr.length / 2);

    // 🔹 Recursively sort left and right halves
    let left = sortArray(arr.slice(0, mid));
    let right = sortArray(arr.slice(mid));

    // 🔹 Merge sorted halves
    return merge(left, right);
}

function merge(left, right) {
    let res = [];
    let i = 0;
    let j = 0;

    // Compare elements and merge
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            res.push(left[i]);
            i++;
        } else {
            res.push(right[j]);
            j++;
        }
    }

    // Add remaining elements
    return [...res, ...left.slice(i), ...right.slice(j)];
}

// Example
console.log(sortArray([5, 2, 3, 1])); // [1, 2, 3, 5]
