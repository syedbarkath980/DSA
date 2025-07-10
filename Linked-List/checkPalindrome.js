/* (Q234) STATEMENT:

Given the head of a singly linked list,
 return true if it is a palindrome or false otherwise.

 EXAMPLE: head = [1,2,2,1]
 Output: True

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
 * @return {boolean}
 */
var isPalindrome = function(head) {
    // Finding the Middle Element:
    let slow = head
    let fast = head

    while(fast != null && fast.next != null){
        slow = slow.next
        fast = fast.next.next
    }

    // Reverse Secondhalf of the LL:
    let prev = null
    let curr = slow

    while(curr){
        let temp = curr.next
        curr.next = prev
        prev = curr
        curr = temp
    }

    // Check whether they are palindrome or not: 
    let firstList = head
    let secondList = prev

    while(secondList){
        if(firstList.val != secondList.val){
            return false
        }
        firstList = firstList.next
        secondList = secondList.next
    }
    return true
};