/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
// var isPalindrome = function(head) {
// //     Space: O(n)    
// //     let arr = [];
    
// //     while(head != null) {
// //         arr.push(head.val);
// //         head = head.next;
// //     }
    
// //     let n = arr.length
    
// //     for(let index = 0; index < Math.floor(n / 2); index++){
// //         if(arr[index] != arr[n-index-1]){
// //             return false;
// //         }
// //     }
    
// //     return true;
    
// //    Space: O(1)
    
//     if(head == null || head.next == null) return true;
    
//     function reverse(head){
//         let reversedHead = null;
        
//         if(!head) return null;
//         while(head) {
//             let next = head.next;
//             head.next = reversedHead;
//             reversedHead = head;
//             head = next;
//         }
        
//         return reversedHead;
//     }
    
//     let fastPtr = head, slowPtr = head;
    
//     while(fastPtr != null && fastPtr.next != null) {
//         slowPtr = slowPtr.next;
//         fastPtr = fastPtr.next.next;
//     }
    
//     let end = reverse(slowPtr.next);
    
    
    
//     let curr = head;
//     while(end != null){
//         if(curr.val != end.val){
//             return false;
//         }
//         curr = curr.next;
//         end = end.next;
//     }
    
//     return true;
// };

var isPalindrome = function(head) {
    if(head == null || head.next == null) return true;
        var slow = head;
        var fast = head;
        while(fast.next != null && fast.next.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        slow.next = reverseList(slow.next);
        slow = slow.next;
        while(slow != null) {
            if(head.val != slow.val) return false;
            head = head.next;
            slow = slow.next;
        }
        return true;
};

var reverseList = function(head) {
        var pre = null;
        var next = null;
        while(head != null) {
            next = head.next;
            head.next = pre;
            pre = head;
            head = next;
        }
        return pre;
};