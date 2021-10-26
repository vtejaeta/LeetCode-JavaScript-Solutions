/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let fastPtr = head;
    let slowPtr = head;
    
    while(fastPtr != null && fastPtr.next != null){
        fastPtr = fastPtr.next.next;
        slowPtr = slowPtr.next;
    }
    
    return slowPtr;
};