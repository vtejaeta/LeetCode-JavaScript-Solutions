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
var sumNumbers = function(root) {
    let ans = [0];
    calcSum(root, 0, ans);
    
    return ans[0];
};

let calcSum = (root, val = 0, ans) => {
    if(root == null) return;
    
    val = val*10 + root.val;
    
    if(root.left == null && root.right == null){
        ans[0] += val;
        return;
    }
    
    calcSum(root.left, val, ans);
    calcSum(root.right, val, ans);
    
}