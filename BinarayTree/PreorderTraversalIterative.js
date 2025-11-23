
// 144. Binary Tree Preorder Traversal

var preorderTraversal = function(root) {
  // If the tree is empty, return an empty array
  if (!root) return [];

  let ans = [];          // This will store the preorder traversal result
  let stack = [root];    // Stack to simulate recursion (LIFO)

  while (stack.length) {
    // Take the top node from the stack
    let curr = stack.pop();

    // Preorder step 1 → Visit (process the node)
    ans.push(curr.val);

    // Push right child first so that left child is processed first
    if (curr.right) stack.push(curr.right);

    // Push left child last (so it comes out first from stack)
    if (curr.left) stack.push(curr.left);
  }

  // Return final preorder list
  return ans;
};
