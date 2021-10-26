/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let dummyNode = new ListNode(null, head);
    let fastPtr = dummyNode, slowPtr = dummyNode;
    
    while(n > 0){
        fastPtr = fastPtr.next;
        n--;
    }
    
    while(fastPtr != null && fastPtr.next != null) {
        fastPtr = fastPtr.next;
        slowPtr = slowPtr.next;
    }
    
    slowPtr.next = slowPtr.next.next;
    
    
    return dummyNode.next;
};