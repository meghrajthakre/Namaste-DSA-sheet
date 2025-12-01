// 102. Binary Tree Level Order Traversal

var levelOrder = function (root) {
    // If tree is empty, return empty list
    if (!root) return [];

    let ans = [];        // Final result storing nodes level by level
    let q = [root];      // Queue for BFS (start with root)

    while (q.length) {
        let levelSize = q.length;   // Number of nodes in the current level
        let levelArray = [];        // Array to store values of the current level

        // Process all nodes of the current level
        for (let i = 0; i < levelSize; i++) {
            let curr = q.shift();   // Remove the first node from the queue

            // Push left and right children (if they exist)
            if (curr.left) q.push(curr.left);
            if (curr.right) q.push(curr.right);

            // Store current node's value
            levelArray.push(curr.val);
        }

        // After processing this level, push it to the answer
        ans.push(levelArray);
    }

    return ans;   // Return the result containing all levels
};
