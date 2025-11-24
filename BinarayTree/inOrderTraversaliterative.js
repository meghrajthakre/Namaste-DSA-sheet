// 94. Binary Tree Inorder Traversal

var inorderTraversal = function(root) {
    // Array to store inorder result
    let ans = [];

    // Stack to simulate recursion
    let stack = [];

    // Pointer starting at root
    let curr = root;

    // Run until both stack is empty AND curr is null
    while (curr || stack.length) {

        // Go as deep as possible on the left subtree
        while (curr) {
            stack.push(curr);    // push current node to stack
            curr = curr.left;    // move left
        }

        // Pop the last visited node (leftmost)
        curr = stack.pop();

        // Add its value to the result
        ans.push(curr.val);

        // Shift to the right subtree
        curr = curr.right;
    }

    return ans;
};
