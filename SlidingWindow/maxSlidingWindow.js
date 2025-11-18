// 239. Sliding Window Maximum

// You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

// Return the max sliding window.


var maxSlidingWindow = function (nums, k) {
    let res = [];
    let q = [];

    let i = j = 0;

    while (j < nums.length) {
        //checking the largest num in the queue
        while(q.length && nums[j] > q[q.length-1]){
            q.pop()
        }

        q.push(nums[j]);

        // checking the window size is k 
        if(j >= k-1){
            res.push(q[0])
            
            // cheking the leftmost element for currunt window[i] is largest q[0]
            // then remove it 
            if(nums[i] === q[0]){
                q.shift()
            }
            i++
        }
        j++
    }
    return res

};