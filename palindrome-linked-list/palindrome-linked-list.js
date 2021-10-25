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
var isPalindrome = function(head) {
    let arr = [];
    
    while(head != null) {
        arr.push(head.val);
        head = head.next;
    }
    
    let n = arr.length
    
    for(let index = 0; index < n; index++){
        if(arr[index] != arr[n-index-1]){
            return false;
        }
    }
    
    return true;
};