// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.z


// Definition for singly-linked list:
// function ListNode(val, next) {
//     this.val = (val===undefined ? 0 : val)
//     this.next = (next===undefined ? null : next)
// }

var mergeTwoLists = function (l1, l2) {
    // Dummy node to act as the starting point
    let dummy = new ListNode();
    let curr = dummy;  // Pointer to build the new list

    // Traverse both lists until one is exhausted
    while (l1 && l2) {
        if (l1.val < l2.val) {
            // If l1's value is smaller, attach it to current
            curr.next = l1;
            l1 = l1.next; // Move l1 forward
        } else {
            // If l2's value is smaller/equal, attach it
            curr.next = l2;
            l2 = l2.next; // Move l2 forward
        }
        curr = curr.next; // Move current pointer forward
    }

    // If one list still has nodes, attach it directly
    if (!l1) {
        curr.next = l2;
    }
    if (!l2) {
        curr.next = l1;
    }

    // Return the merged list, skipping the dummy node
    return dummy.next;
};
