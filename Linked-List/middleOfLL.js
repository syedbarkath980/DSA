/* STATEMNT- Q(876) LeetCode:

Given the head of a singly linked list, return the middle node of the linked list.
If there are two middle nodes, return the second middle node.

Example 1:
Input: head = [1,2,3,4,5]
Output: [3,4,5]
Explanation: The middle node of the list is node 3.
Example 2:

Example 2:
Input: head = [1,2,3,4,5,6]
Output: [4,5,6]
Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.
*/

/* APPROACH:
  🐢🦅 Slow and Fast Pointer Approach to Find the Middle Node of a Linked List:

  💡 Idea:
  Use two pointers:
    - slow: moves 1 step at a time
    - fast: moves 2 steps at a time

  🚀 Why it works:
  - When 'fast' reaches the end of the list,
  - 'slow' will be at the middle node.

  🔍 How it behaves:
  - If the list length is **odd**:
      → 'fast' stops at the **last node**
      → 'fast.next' becomes null in the next check, so loop ends
      → 'slow' is at the true middle

  - If the list length is **even**:
      → 'fast' reaches **null**
      → loop ends when fast is null
      → 'slow' ends up on the **second middle** node (which is what the question asks)

  📊 Visual Example:
  For list = [1, 2, 3, 4, 5]
  Step 0: slow = 1, fast = 1
  Step 1: slow = 2, fast = 3
  Step 2: slow = 3, fast = 5
  Step 3: fast.next = null → STOP
          slow is at node 3 ← 🟢 Middle node

  For list = [1, 2, 3, 4, 5, 6]
  Step 0: slow = 1, fast = 1
  Step 1: slow = 2, fast = 3
  Step 2: slow = 3, fast = 5
  Step 3: slow = 4, fast = null → STOP
          slow is at node 4 ← 🟢 Second middle node

  🧠 Time Complexity: O(n)
  🧠 Space Complexity: O(1)
*/

// SOLUTION:

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
var middleNode = function(head) {
    let slow = head
    let fast = head

    while(fast !== null && fast.next !== null){
        slow = slow.next
        fast = fast.next.next
    }
    return slow
};


