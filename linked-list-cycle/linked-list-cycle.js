/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    
    if(head == null || head.next == null) return false;
    
    let fastPtr = head, slowPtr = head;
    
    
    while(fastPtr != null && fastPtr.next != null){
        fastPtr = fastPtr.next.next;
        slowPtr = slowPtr.next;
        if(fastPtr == slowPtr){
            return true;
        }
    }
    
    return false;
};