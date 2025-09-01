let arr = [1, 1, 2, 3, 4, 5, 6, 9, 7];

function findSecondLargest(arr) {
    let largest = -Infinity;
    let secondLargest = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if (arr[i] > secondLargest && arr[i] < largest) {
            secondLargest = arr[i];
        }
    }

    return secondLargest === -Infinity ? null : secondLargest;
}

let res = findSecondLargest(arr);
console.log(res); // 7
