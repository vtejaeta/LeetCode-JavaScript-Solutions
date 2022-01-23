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
let ans = 0;
var sumNumbers = function(root) {
    ans = 0;
  
    let calcSum = (root, val = 0) => {
        if(root == null) return;

        val = val*10 + root.val;

        if(root.left == null && root.right == null){
            ans += val;
            return;
        }
    
        calcSum(root.left, val);
        calcSum(root.right, val);
    }
    
    calcSum(root, 0);
    return ans;
};