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
let max = -Infinity;

var maxPathSum = function(root) {
    max = -Infinity;
    main(root,max);
    
    
    return max;
};

function main(root){
    if(root == null){
        return 0;
    }
    
    let left = Math.max(0,main(root.left));
    let right = Math.max(0,main(root.right));
    
    max = Math.max(max,left+right+root.val);
    
    
    return root.val + Math.max(left,right);
}