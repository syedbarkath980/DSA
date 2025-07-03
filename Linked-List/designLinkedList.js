/* DESIGN LINKED LIST (Q707)
STATEMENT: Design your implementation of the linked list. You can choose to use a singly or 
doubly linked list.
A node in a singly linked list should have two attributes: val and next. 
val is the value of the current node, and next is a pointer/reference to the next node.
If you want to use the doubly linked list, 
you will need one more attribute prev to indicate the previous node in the linked list. Assume all nodes in the linked list are 0-indexed.

Implement the MyLinkedList class:

MyLinkedList() Initializes the MyLinkedList object.

- int get(int index) Get the value of the indexth node in the linked list. 
If the index is invalid, return -1.

- void addAtHead(int val) Add a node of value val before the first element of the linked list. 
After the insertion, the new node will be the first node of the linked list.

- void addAtTail(int val) Append a node of value val as the last element of the linked list.

- void addAtIndex(int index, int val) Add a node of value val before the indexth node in the linked list. 
If index equals the length of the linked list, the node will be appended to the end of the linked list. 
If index is greater than the length, the node will not be inserted.

- void deleteAtIndex(int index) Delete the indexth node in the linked list, if the index is valid.
*/


//SOLUTION: 

// Representation of a NODE and a LL
function Node(val) {
    this.val = val
    this.next = null
}
var MyLinkedList = function () {
    this.head = null
    this.size = 0
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
    if (index < 0 || index >= this.size) return -1

    let curr = this.head
    for (let i = 0; i < index; i++) {
        curr = curr.next
    }
    return curr.val
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {

 let headNode = new Node(val)


    
    headNode.next = this.head
    this.head = headNode
    this.size++
   
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
    let tailNode = new Node(val)

    if (this.head == null) {
        this.head = tailNode
        this.size++
        return 
    }
    let ptr = this.head

    while (ptr.next !== null) {
        ptr = ptr.next
    }
    ptr.next = tailNode
    this.size++
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
    let indexNode = new Node(val)
    if (index == 0) {
        this.addAtHead(val)

    }
    else if (index == this.size) {
        this.addAtTail(val)

    }
    else if (index < 0 || index >= this.size) return
    else {
        let current = this.head

        for (let i = 0; i < index - 1; i++) {
            current = current.next
        }
        indexNode.next = current.next
        current.next = indexNode
        this.size++
    }
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
    // Just point the next to the next index of given index
    let current2 = this.head
    if (index < 0 || index >= this.size) return

    else if(index == 0){
        this.head = this.head.next
        this.size--
    }

    else{
    for (let i = 0; i < index - 1; i++) {
        current2 = current2.next
    }
    current2.next = current2.next.next
    this.size--
    }
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */