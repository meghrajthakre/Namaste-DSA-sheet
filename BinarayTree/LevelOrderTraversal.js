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

// level order traversal (DFS )
var levelOrder = function (root) {
    // If tree is empty, return an empty array
    if (!root) return [];

    let ans = [];   // This will store arrays of each level
    let level = 0;

    // Recursive function to traverse the tree
    const traversal = (curr, level) => {
        // If this level does not exist in ans, create an empty array
        if (!ans[level]) ans[level] = [];

        // Push the current node's value into the correct level array
        ans[level].push(curr.val);

        // Traverse left child (if exists), increasing the level
        if (curr.left) traversal(curr.left, level + 1);

        // Traverse right child (if exists), increasing the level
        if (curr.right) traversal(curr.right, level + 1);
    };

    // Start traversal from the root at level 0
    traversal(root, level);

    // Return the final level order structure
    return ans;
};
