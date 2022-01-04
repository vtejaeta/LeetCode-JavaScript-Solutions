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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if(root == null) return false;
    
    return checkSumUntilLeaf(root, targetSum, targetSum);
};

let checkSumUntilLeaf = (root, targetSum, remaining) => {
     if(root == null){
        return false;
    }
    
    if(root.left == null && root.right == null && remaining-root.val ==  0){
        return true;
    }
    
        return checkSumUntilLeaf(root.left, targetSum, remaining - root.val) || checkSumUntilLeaf(root.right, targetSum, remaining - root.val);    
    
}