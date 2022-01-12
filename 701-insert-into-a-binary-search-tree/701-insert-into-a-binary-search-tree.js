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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
    if(root == null) return new TreeNode(val);
    
    function traverseAndInsert(root, val){
        if(root == null) return;
        
        if(root.right == null && val > root.val){
            root.right = new TreeNode(val);
            return;
        }
        
        if(root.left == null && val < root.val){
            root.left = new TreeNode(val);
            return;
        }
        
        if(val > root.val){
            traverseAndInsert(root.right, val);
        }
        
        if(val < root.val){
          traverseAndInsert(root.left, val);
        }        
    };
    
    traverseAndInsert(root, val);
    
    return root;
};
