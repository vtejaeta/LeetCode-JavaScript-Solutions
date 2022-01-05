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
    
    if(root.left == null && root.right == null && liesInRange(root.val,range)) return true;
    
    if(liesInRange(root.val,range)){
        let isLeft = validate(root.left,[range[0],root.val]);
        
        if(isLeft){
            let isRight = validate(root.right, [root.val,range[1]]);
            
            return isLeft && isRight;
        }else{
            return false;
        }
    }else{
        return false;
    }
}

let liesInRange = (val,range) => val > range[0] && val < range[1];