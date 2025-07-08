/* (Q203) REMOVE LL ELEMENTS: 

Given the head of a linked list and an integer val, 
remove all the nodes of the linked list that has Node.val == val, and return the new head.

*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    //  Handle if the initial head nodes need to be deleted
    while (head !== null && head.val === val) {
        head = head.next;
    }

    let curr = head;
    let prev = null;

    while (curr) {
        if (curr.val !== val) {
            prev = curr;
            curr = curr.next;
        } else if (curr.val === val) {
            prev.next = prev.next.next;
            curr = curr.next;
        }
    }

    return head;
};

// APPROACH: 2

/*
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
*/

var removeElements = function(head, val) {
    //  Create a sentinel (dummy) node
    let dummy = new ListNode(0);     // this is our fake starter node
    dummy.next = head;               // link it to the actual head

    // Step 2: Start from the dummy node
    let curr = dummy;

    while (curr.next) {
        if (curr.next.val === val) {
            // Remove the node by skipping it
            curr.next = curr.next.next;
        } else {
            // Move forward in the list
            curr = curr.next;
        }
    }

    // Step 3: Return the new head (skipping dummy)
    return dummy.next;
};

/**
 * ✅ Explanation (in my own words):
 * 
 * Sentinel node helps in treating the **head node like any other node**.
 * 
 * Usually, when we insert or delete the head, we need **manual checks**
 * because there's no node before the head to help us rewire pointers.
 * 
 * But by creating a **sentinel (dummy) node**, we add a fake node before head.
 * This means:
 *    - Now head is just like any other node's `.next`
 *    - We can delete or skip it using simple logic like `curr.next = curr.next.next`
 *    - No need for separate `if (head.val === val)` checks or `prev === null` checks
 * 
 * 💡 Final benefit:
 *    - Cleaner, safer, uniform logic for insertions/deletions
 *    - Handles edge cases (like deleting the head) naturally
*/

