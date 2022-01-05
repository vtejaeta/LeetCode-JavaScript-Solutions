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
var isValidBST = function(root) {
    let range = [-Infinity, Infinity];
    
    return validate(root,range);
};


let validate = (root, range) => {
    if(root == null) return true;
    
    if(!liesInRange(root.val,range)){
        return false
    }
    
    return validate(root.left,[range[0],root.val]) && validate(root.right, [root.val,range[1]]);
}

let liesInRange = (val,range) => val > range[0] && val < range[1];