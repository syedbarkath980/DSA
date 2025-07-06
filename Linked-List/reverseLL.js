//  STATEMENT: (Q206) REVERSE A LINKED LIST:

//SOLUTON: 
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
    let prev = null
    let curr = head

    while(curr){      // While curr exist (or) curr !== null
        let temp = curr.next
        curr.next = prev
        prev = curr
        curr = temp
    }
    head = prev
    return head
};

/*
Why we need the 'temp' variable:

Imagine the current node is pointing to the next node like this:

curr → [5] → [10]

If we change curr.next to point to prev:

curr.next = prev;

Then we lose the connection to [10] (the next node).

So, before we change the link, we save it in a variable:

let temp = curr.next;

This way, we can still move forward in the list even after changing the direction of the link.
*/