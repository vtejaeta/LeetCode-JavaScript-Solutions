/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    let arr = toArray(head);
    return constructLeft(arr, 0, arr.length-1);
};

let constructLeft = (arr, left, right) => {
    if(left > right) return null;
    
    let mid = Math.floor(left + (right - left) / 2);
    console.log(arr[mid]);
    let node = new TreeNode(arr[mid]);
    
    node.left = constructLeft(arr, left, mid-1);
    node.right = constructLeft(arr, mid+1, right);
    
    return node;
}

let toArray = (head) => {
    let arr = [];
    
    while(head != null){
        arr.push(head.val);
        head = head.next;
    }
    
    return arr;
}