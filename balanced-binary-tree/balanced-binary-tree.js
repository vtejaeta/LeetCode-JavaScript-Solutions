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
 * @return {boolean}
 */
var isBalanced = function(root) {
    if(root == null){
        return true;
    }
    
    let leftHeight = calcHeight(root.left);
    let rightHeight = calcHeight(root.right);
    
    if(Math.abs(leftHeight - rightHeight) > 1) return false;
    
    let left = isBalanced(root.left);
    let right = isBalanced(root.right);
    
    if(!left || !right) return false;    
    
    return true;
};

let calcHeight = (root) => {
    if(root == null){
        return 0;
    }
    
    let left = calcHeight(root.left);
    let right = calcHeight(root.right);
    
    return 1 + Math.max(left, right);
}