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
var levelOrderBottom = function(root) {
    let topToBottomTraversal = levelOrderTopToBottom(root);
    
    return topToBottomTraversal.reverse();
};

let levelOrderTopToBottom = (root) => {
    let queue = [];
    let result= [];
    
    if(root == null) return result;
 
    queue.push(root);
    
    while(queue.length > 0){
        let size = queue.length;
        let nodesPerLevel = [];
        for(let i=0;i<size;i++){
            let node = queue.shift();
            nodesPerLevel.push(node.val);
            if(node.left){
                queue.push(node.left);
            }
            if(node.right){
                queue.push(node.right);
            }

        }
        result.push(nodesPerLevel);
    }
    
    return result;
}