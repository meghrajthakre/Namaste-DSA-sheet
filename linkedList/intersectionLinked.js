// Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.

var getIntersectionNode = function(headA, headB) {
    // Create a Set to store nodes of linked list B
    let table = new Set();

    // Traverse linked list B and add all nodes into the Set
    while (headB) {
        table.add(headB);   // store each node reference
        headB = headB.next; // move to the next node
    }

    // Traverse linked list A
    while (headA) {
        // If any node in A exists in the Set, 
        // it means this is the intersection point
        if (table.has(headA)) {
            return headA;   // return the intersection node
        }
        headA = headA.next; // move to next node
    }

    // If no intersection found, return null
    return null;
};
