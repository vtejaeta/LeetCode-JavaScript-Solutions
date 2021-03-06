// /**
//  * Definition for a binary tree node.
//  * function TreeNode(val, left, right) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.left = (left===undefined ? null : left)
//  *     this.right = (right===undefined ? null : right)
//  * }
//  */
// /**
//  * @param {TreeNode} root
//  * @return {number[][]}
//  */
// var levelOrder = function(root) {
//     if(root == null) return [];
    
//     let finalResult = [], queue = [root];
    
//     while(queue.length > 0){
//         let size = queue.length;
//         let nodesPerLevel = [];
//         for(let i=0;i<size;i++){
//             let node = queue.shift();
//             nodesPerLevel.push(node.val);
//             if(node.left != null) queue.push(node.left);
//             if(node.right != null) queue.push(node.right);
//         }
//         finalResult.push(nodesPerLevel);
//     }
    
//     return finalResult;
    
// };


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
    let queue = [];
    let result = [];
    
    if(root == null){
        return result;
    }
    
    queue.push(root);
    
    while(queue.length > 0){
        let size = queue.length;
        let nodesPerLevel = [];
        for(let i=0;i<size;i++){
            let latestNode = queue.shift();
            
            if(latestNode.left){
                queue.push(latestNode.left);
            }
            if(latestNode.right){
                queue.push(latestNode.right);
            }
            nodesPerLevel.push(latestNode.val);
        }
        
        result.push(nodesPerLevel);
    }
    
    return result;
};