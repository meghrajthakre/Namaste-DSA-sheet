// 94. Binary Tree Inorder Traversal
// Given the root of a binary tree, return the inorder traversal of its nodes' values.

var inorderTraversal = function(root) {
    let ans = [];

    function travarsal(curr){
        if(!curr) return ;
        travarsal(curr.left);
        ans.push(curr.val)
        travarsal(curr.right);
    }
    travarsal(root)
    return ans 
};