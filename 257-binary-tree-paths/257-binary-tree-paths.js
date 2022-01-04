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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    if(root == null) return [];
    
    let res = [];
    
    findPaths(root, res, "");
    
    return res;
};

let findPaths = (root, res, str) => {
    if(root == null){
        return;
    }
    
    str = str + root.val + "->";
    
    if(root.left == null && root.right == null){
        str = str.slice(0,str.length-2);
        res.push(str);
    }
    
    if(root.left){
        findPaths(root.left, res, str);
    }
    if(root.right){
        findPaths(root.right, res, str);
    }
}