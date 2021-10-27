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
var addTwoNumbers = function(l1, l2) {
    let carry = 0, sum = 0, result = new ListNode(), final = result;
    
    while(l1 != null || l2 !=null){
        if(l1 != null && l2 !=null){
            sum = l1.val + l2.val + carry;
            carry = Math.floor(sum / 10);
            sum = sum % 10;
            result.next = new ListNode(sum);
            result = result.next;
            
            l1 = l1.next;
            l2 = l2.next;
        }else if(l1 != null){
            sum = l1.val + carry;
            carry = Math.floor(sum / 10);
            sum = sum % 10;
            result.next = new ListNode(sum);
            result = result.next;
            
            l1 = l1.next;
        }else if(l2 != null){
            sum = l2.val + carry;
            carry = Math.floor(sum / 10);
            sum = sum % 10;
            result.next = new ListNode(sum);
            result = result.next;
            
            l2 = l2.next;
        }
    }
    
    if(carry != 0){
        let node = new ListNode(carry);
        result.next = node;
    }
    
    return final.next;
};