// 144. Binary Tree Preorder Traversal
// Given the root of a binary tree, return the preorder traversal of its nodes' values.

var preorderTraversal = function (root) {
    let ans = []

    function traversal(curr) {
        if (!curr) return;
        ans.push(curr.val);   // 1️⃣ Visit Node
        traversal(curr.left)  // 2️⃣ Go Left
        traversal(curr.right) // 3️⃣ Go Right
    }

    traversal(root);
    return ans
};
// Time Complexity: O(N) where N is the number of nodes in the tree
// Space Complexity: O(H) where H is the height of the tree due to recursion stack