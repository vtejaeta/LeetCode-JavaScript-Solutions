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
 * @return {number[]}
 */


var inorderTraversal = function(root) {
    let res = [], stack = [];    
    
    while(root || stack.length){
        if(root){
            stack.push(root);
            root = root.left;
        }else{
            let temp = stack.pop()
            res.push(temp.val);
            root = temp.right;
        }
    }
    
    return res;
};