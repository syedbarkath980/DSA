/* (Q160): INTERSECTION OF TWO LL 

Given the heads of two singly linked-lists headA and headB, return the node at which
the two lists intersect.
If the two linked lists have no intersection at all, return null.

*/


var getIntersectionNode = function(headA, headB) {
    let secondList = new Set()
    
    while(headB){
        secondList.add(headB)
        headB = headB.next
    }

    while(headA){
        if(secondList.has(headA)){
           return headA
        }
        headA = headA.next
    }
    return null

};

// WE CAN ALSO IMPROVE THE SC TO O(1) like this: 
var getIntersectionNode = function(headA, headB) {
    let a = headA;
    let b = headB;

    while (a !== b) {
        a = a ? a.next : headB;
        b = b ? b.next : headA;
    }

    return a; // or b
};
