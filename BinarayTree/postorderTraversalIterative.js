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
