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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    if(root == null) return null;
    
    let prev = null;
    
    function flatt(node) {
        if(node == null) return;
        
        flatt(node.right);
        flatt(node.left);
        
        node.right = prev;
        node.left = null;
        prev = node;
    }
    
    flatt(root);
};