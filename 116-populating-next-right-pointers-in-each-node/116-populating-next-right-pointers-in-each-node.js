/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    let levelOrder = level(root);
    
    for(let i = 0; i < levelOrder.length; i++){
        let perLevel = levelOrder[i];
        
        let curr = null, next = null;
        for(let j = 0; j < perLevel.length; j++){
            curr = perLevel[j];
            if(j+1 < perLevel.length){
                next = perLevel[j+1];
                curr.next = next;
            }
        }
    }
    
    return root;
};

var level = function(root) {
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
            nodesPerLevel.push(latestNode);
        }
        
        result.push(nodesPerLevel);
    }
    
    return result;
};