/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    let parentOfP = [], parentOfQ =  [];
    
    findParent(root, p, parentOfP);
    findParent(root, q, parentOfQ);
    
    let i = 0, j = 0, res = parentOfP[i];
    
    while(parentOfP[i] == parentOfQ[j]){
        res = parentOfP[i];
        i++;
        j++;
    }
    
    return res;
};

let findParent = (root, node, res = []) => {
    if(root == null) return false;
    
    res.push(root);
    
    if(root == node) return true;
    
    let left = findParent(root.left, node, res);
    let right = findParent(root.right, node, res);

    if(left == true || right == true) return true;
    
    if(left == false && right == false){
        res.pop();
        return false;
    }
}
