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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(root == null) return [];
    
    let finalResult = [], queue = [root];
    
    while(queue.length > 0){
        let size = queue.length;
        let nodesPerLevel = [];
        for(let i=0;i<size;i++){
            let node = queue.shift();
            nodesPerLevel.push(node.val);
            if(node.left != null) queue.push(node.left);
            if(node.right != null) queue.push(node.right);
        }
        finalResult.push(nodesPerLevel);
    }
    
    return finalResult;
    
};