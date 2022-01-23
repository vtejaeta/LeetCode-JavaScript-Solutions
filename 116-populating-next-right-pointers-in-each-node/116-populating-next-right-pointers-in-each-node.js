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
    if(root == null) return null;
    
    let head = root;
    
    while(head != null){
        let dummy = new TreeNode(0);
        let temp = dummy;
                
        while(head != null){
            if(head.left != null){
                temp.next = head.left;
                temp = temp.next;
            }
            
            if(head.right != null){
                temp.next = head.right;
                temp = temp.next;
            }
            
            head = head.next;
        }
        
        head = dummy.next;
    }
    
    return root;
};
