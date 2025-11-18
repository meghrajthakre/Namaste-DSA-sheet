/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
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