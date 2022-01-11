/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    let hashMap = {};
    
    inorder.forEach((val,key) => {
        hashMap[val] = key;
    });
    
    return constructTree(preorder, 0, preorder.length-1, inorder, 0, inorder.length-1, hashMap);
};

let constructTree = (preorder, preStart, preEnd, inorder, inStart, inEnd, hashMap) => {
    let node = new TreeNode(preorder[preStart]);
    
    if(preStart > preEnd ||  inStart > inEnd) return null;
    
    
    let inorderRootIndex = hashMap[node.val];
    let remNodes = inorderRootIndex - inStart;
    
    node.left = constructTree(preorder, preStart + 1, preStart + remNodes, inorder, inStart, inorderRootIndex - 1, hashMap);
    node.right = constructTree(preorder, preStart + remNodes + 1, preEnd, inorder, inorderRootIndex + 1, inEnd, hashMap);
    
    return  node;
    
}