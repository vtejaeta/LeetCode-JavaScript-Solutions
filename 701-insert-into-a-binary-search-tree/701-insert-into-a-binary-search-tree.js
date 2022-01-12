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


var insertIntoBST = function(root, val) {
    if(root == null) return new TreeNode(val);
    
    let curr = root;
    while(true){
        if(val < curr.val){
            if(curr.left != null){
                curr = curr.left;
            }else{
                curr.left = new TreeNode(val);
                break;
            }
        }
        if(val > curr.val){
            if(curr.right != null){
                curr = curr.right;
            }else{
                curr.right = new TreeNode(val);
                break;
            }
        }
    }
    
    return root;
};