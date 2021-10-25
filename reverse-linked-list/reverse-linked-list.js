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
var reverseList = function(head) {
    let ptr = head;
    
    if(ptr != null){
        let last = null;
        while(ptr != null){
            let nextNode = ptr.next;
            ptr.next = last;
            last = ptr;
            ptr = nextNode;
        }
        return last;
    }else{
        return head;
    }
};