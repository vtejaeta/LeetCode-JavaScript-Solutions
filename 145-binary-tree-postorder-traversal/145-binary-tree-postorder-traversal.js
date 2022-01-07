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
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    let stack = [], res = [];
    
    if(root == null) return stack;
    
    let cur = root;
    
    while(cur != null || stack.length != 0){
        if(cur !=  null){
            stack.push(cur);
            cur = cur.left;
        }else{
            let temp = stack[stack.length-1].right;
            
            if(temp == null){
                temp = stack[stack.length-1];
                stack.pop(); 
                res.push(temp.val);
                while(stack.length != 0 && temp == stack[stack.length-1].right){
                    temp = stack[stack.length-1];
                    stack.pop(); 
                    res.push(temp.val); 
                }
           }else{
                cur = temp;
            }
        }
    }
    
    return res;
};