/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    let slowPtr = new ListNode(), fastPtr = slowPtr, start = head, l1Node, l2Node;
    
    slowPtr.next = head;
    
    while(fastPtr != null && fastPtr.next != null) {
        fastPtr = fastPtr.next.next;
        slowPtr = slowPtr.next;
    }
    
    let newHead = reverse(slowPtr.next);
    slowPtr.next = null;
    
    while(start != null && newHead != null){
        l1Node = start.next;
        l2Node = newHead.next;
        
        start.next = newHead;
        newHead.next = l1Node;
        
        start = l1Node;
        newHead = l2Node;
    }
    
    if(l2Node){
        start.next = l2Node;
    }
};

function reverse(head) {
    let prev = null, node;

    if(head == null) return head;

    while(head != null) {
        node = head.next;
        head.next = prev;
        prev = head;
        head = node;
    }

    return prev;
}