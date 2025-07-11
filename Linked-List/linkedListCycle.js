/* Q(141) - STATEMENT: 
Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again
by continuously following the next pointer. Internally, pos is used to denote the index of 
the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.

*/

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

//Flyod's algorithm:
var hasCycle = function(head) {
    if(head == null) return false   // If Linked List is empty

    let slow = head    
    let fast = head.next

    while(slow != fast){  // Run the LOOP till fast is not equal to slow
        if(fast == null || fast.next == null) return false  // If LL is null or LL is circular or 
        // hasCYCLE

        slow = slow.next         //One Step
        fast = fast.next.next    //Two Step
    }
    return true      // Return when fast gets equals to Slow
};