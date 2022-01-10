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
 * @return {void} Do not return anything, modify root in-place instead.
 */

let first = null, middle = null, last = null;

var recoverTree = function(root) {
    first = null, middle = null, last = null, prev = new TreeNode(-Infinity);
    
    inorder(root);
    
    if(first != null && last != null){
        let temp = last.val;
        last.val = first.val;
        first.val = temp;
    }else if(first != null && middle != null){
        let temp = first.val;
        first.val = middle.val;
        middle.val = temp;
    }
};

let inorder = (root) => {
    if(root == null) return;
    
    inorder(root.left);
    
    if(prev != null && (root.val < prev.val)){
        if(first == null){
            first = prev;
            middle = root;
        }else{
            last = root;
        }
    }
    prev = root;
    
    inorder(root.right);
}