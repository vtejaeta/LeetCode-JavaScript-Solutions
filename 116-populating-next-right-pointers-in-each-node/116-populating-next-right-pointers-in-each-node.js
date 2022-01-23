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
   level(root);
    
    return root;
};

var level = function(root) {
    let queue = [];
    
    if(root == null){
        return [];
    }
    
    queue.push(root);
    
    while(queue.length > 0){
        let size = queue.length;
        let curr = null;
        for(let i=0;i<size;i++){
            let latestNode = queue.shift();

            if(curr == null){
                curr = latestNode;
            }else{
                curr.next = latestNode;
                curr = curr.next;
            }
            
            console.log(latestNode.val);
            
            if(latestNode.left != null){
                queue.push(latestNode.left);
            }
            if(latestNode.right != null){
                queue.push(latestNode.right);
            }
        }
    }
    
};