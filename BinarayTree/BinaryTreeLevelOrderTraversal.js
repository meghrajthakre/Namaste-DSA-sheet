// 102. Binary Tree Level Order Traversal

// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

 

levelOrder = function (root) {
    if (!root) return [];

    let ans = [];
    let q = [root];

    // BFS
    while (q.length) {
        let levelArray = [];
        let levelSize = q.length; // number of nodes at this level

        for (let i = 0; i < levelSize; i++) {
            let curr = q.shift(); // remove first node

            // push children
            if (curr.left) q.push(curr.left);
            if (curr.right) q.push(curr.right);

            // store current value
            levelArray.push(curr.val);
        }

        ans.push(levelArray); // add that level to final result
    }

    return ans;
};
