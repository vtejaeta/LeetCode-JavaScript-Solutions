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
    if(root == null) return false;
    
    val = val*10 + root.val;
    let left = calcSum(root.left, val, ans);
    let right = calcSum(root.right, val, ans);
    
    if(left == false && right == false){
        console.log(val);
        ans[0] += val;
        return true;
    }
}