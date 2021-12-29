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
var zigzagLevelOrder = function(root) {
    let queue = [];
    let result = [];
    
    if(root == null){
        return result;
    }
    
    queue.push(root);
    
    let flag = 0;
    
    while(queue.length > 0){
        let n = queue.length;
        let nodesPerLevel = [];
        
        for(let i=0;i<n;i++){
            let node = queue.shift();
            nodesPerLevel.push(node.val);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        
        if(flag == 0){
            result.push(nodesPerLevel);
            flag = 1;
        }else{
            result.push(nodesPerLevel.reverse());
            flag = 0;
        }
    }
    
    return result;
};