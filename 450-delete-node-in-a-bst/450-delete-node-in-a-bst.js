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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    if(root == null) return null;
    
    let copyOfRoot = root;
    
    function helper(root){
        if(root.left == null) return root.right;
        if(root.right == null) return root.left;
        
        let rightSub = root.right;
        let leftSub = root.left;
        let lastRightNodeinLeftSub = findLast(leftSub);
        
        lastRightNodeinLeftSub.right = rightSub;
        
        return root.left;
    }
    
    function findLast(root){
        if(root != null && root.right == null) return root;
        
        return findLast(root.right);
    }
    
    if(root.val == key){
        return helper(root);
    }
    
    while(root != null){
        if(root.val < key){
            if(root.right != null && root.right.val == key){
                root.right = helper(root.right);
                break;
            }else{
                root = root.right;   
            }
        }else{
            if(root.left != null && root.left.val == key){
                root.left = helper(root.left);
                break;
            }else{
                root = root.left;   
            }
        }
    }
    
    return copyOfRoot;
};