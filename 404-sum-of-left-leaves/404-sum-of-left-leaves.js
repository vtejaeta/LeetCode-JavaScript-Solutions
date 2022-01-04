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
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
    if(root == null) return 0;
    
    return findSum(root);
};

let findSum = (root) => {
    if(root == null) return 0;
    
    if(root.left != null &&root.left.left == null && root.left.right == null){
        return root.left.val + findSum(root.right);
    }
    
    return findSum(root.left) + findSum(root.right);
}