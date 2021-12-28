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
let max = 0;
var diameterOfBinaryTree = function(root) {
    max = 0;
    main(root);
    return max;
};

let main = (root) => {
    if(root == null){
        return 0;
    }
    
    let left = main(root.left);
    let right = main(root.right);
    
    max = Math.max(max,left+right);
    
    return 1+Math.max(left,right);
    
}