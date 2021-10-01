/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// Recursive Solution
var preorderTraversal = function(root) {
    let res = [];
    
    function traverseTree(root){
        if(!root) return;
        
        res.push(root.val);
        traverseTree(root.left);
        traverseTree(root.right);
    }
    
    traverseTree(root);
    
    return res;
};