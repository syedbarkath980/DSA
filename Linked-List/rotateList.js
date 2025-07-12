/* (Q61) ROTATE LIST: 

Given the head of a linked list, rotate the list to the right by k places.

*/

//SOLUTION: 1 - Using two pointers: 
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {

    if(head == null || head.next == null) return head

    let length = 1;
    let temp = head;
    while (temp.next != null) {
        temp = temp.next;
        length++;
    }

    k = k % length;

    for(let i = 0; i < k; i++){
        let prev = head
        let curr = head.next

        while(curr.next != null){
            prev = curr
            curr = curr.next
        }
        curr.next = head
        prev.next = null
        head = curr
    } 
    return head
};


// SOLUTION: 2
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (!head || !head.next || k === 0) return head;

    // Step 1: Find length and tail node
    let length = 1;
    let tail = head;
    while (tail.next !== null) {
        tail = tail.next;
        length++;
    }

    // Step 2: Make the list circular
    tail.next = head;

    // Step 3: Normalize k to avoid extra rotations
    k = k % length;
    if (k === 0) {
        tail.next = null; // Break the circle
        return head;
    }

    // Step 4: Find the new tail (length - k steps from start)
    let stepsToNewTail = length - k;
    let newTail = head;
    for (let i = 1; i < stepsToNewTail; i++) {
        newTail = newTail.next;
    }

    // Step 5: Break the circle and return new head
    let newHead = newTail.next;
    newTail.next = null;
    return newHead;
};
