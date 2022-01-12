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
                
        if(val > root.val){
            if(root.right == null){
                root.right = new TreeNode(val);
                return;
            }else{
                traverseAndInsert(root.right, val);
            }
        }
        
        if(val < root.val){
            if(root.left == null){
                root.left = new TreeNode(val);
                return;
            }else{
                traverseAndInsert(root.left, val);
            }
        }        
    };
    
    traverseAndInsert(root, val);
    
    return root;
};
