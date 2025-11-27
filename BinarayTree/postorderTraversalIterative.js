var postorderTraversal = function (root) {
    // If tree is empty, return empty array
    if (!root) return [];

    // s1: for processing nodes
    // s2: will store nodes in reverse postorder
    let s1 = [root];
    let s2 = [];

    // Step 1: Process all nodes
    while (s1.length) {
        let curr = s1.pop();   // Take node from stack 1
        s2.push(curr);         // Push it into stack 2

        // Push left and right children
        // (left pushed first so right is processed first)
        curr.left && s1.push(curr.left);
        curr.right && s1.push(curr.right);
    }

    // Step 2: Pop from s2 to get postorder
    let ans = [];
    while (s2.length) {
        ans.push(s2.pop().val);  // Now the order becomes Left → Right → Root
    }

    return ans;
};


// using one stack // 145. Binary Tree Postorder Traversal

var postorderTraversal = function(root) {
    let stack = [];           // Stack to simulate recursion
    let curr = root;          // Current node pointer
    let ans = [];             // Result array (postorder list)
    let lastVisited = null;   // Tracks the last visited node

    // Traverse until both stack is empty and current node is null
    while (curr || stack.length) {

        // 1️⃣ Push all left nodes to stack
        while (curr) {
            stack.push(curr);
            curr = curr.left;
        }

        // Peek the top node from stack (don't pop yet)
        let peek = stack[stack.length - 1];

        // 2️⃣ If right child exists and not yet visited → go right
        if (peek.right && peek.right !== lastVisited) {
            curr = peek.right;
        } 
        else {
            // 3️⃣ Otherwise visit the node (postorder moment)
            ans.push(peek.val);

            // Mark this node as visited
            lastVisited = stack.pop();
        }
    }

    return ans;
};