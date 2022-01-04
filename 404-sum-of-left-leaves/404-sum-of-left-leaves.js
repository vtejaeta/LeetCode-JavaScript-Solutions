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
    
    let sum = [0];
    findSum(root, sum);
    return sum[0];
};

let findSum = (root, sum) => {
    if(root == null) return;
    
    if(root.left == null && root.right == null){
        return;
    }
    
    
    if(root.left != null &&root.left.left == null && root.left.right == null){
        sum[0] = sum[0] + root.left.val;
    }
    
    findSum(root.left, sum);
    findSum(root.right, sum);
}