/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if(l1 == null) return l2;
    if(l2 == null) return l1;
    
    // Make sure l1 first node is smaller than l2 first node
    if(l1.val > l2.val){
        let temp = l1;
        l1 = l2;
        l2 = temp;
    }
    
    let res = l1;
    
    while(l1 != null && l2 != null){
        let node = null;
        
        // traverse l1 till l1 element is greater than l2 element 
        while(l1 != null && l1.val <= l2.val){
            node = l1;
            l1 = l1.next;
        }
        
        // point smaller node to next largest one
        node.next = l2;
        
        // Swap l1 and l2 since l2 has smallest element now
        let temp = l1;
        l1 = l2;
        l2 = temp;
    }
    
    return res;
};