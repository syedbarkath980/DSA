/* (Q21) - MERGE TWO SORTED LIST: 

You are given the heads of two sorted linked lists 
list1 and list2.

Merge the two lists into one sorted list. 
The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

*/

// SOLUTION: 1
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {

    if(!l1) return l2    // corner case if one of this list is empty
    if(!l2) return l1
    let curr = null
    
    // Check at "first" or curr node which is smaller:
    if(l1.val < l2.val){
        curr = l1
        l1 = l1.next
    }
    else {
        curr = l2
        l2 = l2.next
    }

    let start = curr // point that to be returned or for future use

    // after the starting point check which is smaller among next two vals:
    while(l1 && l2){      // run the loop if and only if l1 and l1 isnt == null
        if(l1.val < l2.val){
            curr.next = l1   // point to that node
            curr = l1        // change start position to keep doing the same thing
            l1 = l1.next      // move l1 to compare more remaining values 
        }
        else{
            curr.next = l2
            curr = l2
            l2 = l2.next
        }
    }
    if(l1 == null) curr.next = l2  // follow up if either one of them is empty or becomes empty
    if(l2 == null) curr.next = l1

    return start
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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let start = new ListNode()   // Using a DUMMY NODE
    
    curr = start // starting before any list head


    while(l1 && l2){      
        if(l1.val < l2.val){
            curr.next = l1  
            curr = l1        
            l1 = l1.next      
        }
        else{
            curr.next = l2
            curr = l2
            l2 = l2.next
        }
    }
    if(l1 == null) curr.next = l2  
    if(l2 == null) curr.next = l1

    return start.next
};