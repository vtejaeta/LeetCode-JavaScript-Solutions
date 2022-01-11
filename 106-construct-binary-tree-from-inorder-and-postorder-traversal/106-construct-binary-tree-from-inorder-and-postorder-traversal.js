/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    let hashMap = {};
    
    inorder.forEach((val, key) => {
        hashMap[val] = key;
    });
    
    return constructTree(inorder, 0, inorder.length-1, postorder, 0, postorder.length-1, hashMap);
};

let constructTree = (inorder, inStart, inEnd, postorder, postStart, postEnd, hashMap) => {
    if(inStart > inEnd || postStart > postEnd) return null;
    
    let node = new TreeNode(postorder[postEnd]);
    
    let inorderIndex = hashMap[node.val];
    let remNodes = inorderIndex - inStart;
    
    
    node.left = constructTree(inorder, inStart, inorderIndex - 1, postorder, postStart, postStart + remNodes - 1, hashMap);
    node.right = constructTree(inorder, inorderIndex + 1, inEnd, postorder, postStart + remNodes, postEnd-1, hashMap);
    
    return node;
}