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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if(root == null) return root;
    
    invert(root);
    
    return root;
};

let invert = (root) => {
    if(root == null) return;
    
    let left = root.left;
    root.left = root.right;
    root.right = left;
    
    invert(root.left);
    invert(root.right);
}