// 19. Remove Nth Node From End of List
// Given the head of a linked list, remove the nth node from the end of the list and return its head.


var removeNthFromEnd = function (head, n) {
    // Step 1: Create a sentinel (dummy) node pointing to head
    // This handles edge cases like removing the first node
    let sentinel = new ListNode();
    sentinel.next = head;

    // Step 2: Initialize two pointers at sentinel
    let first = sentinel;
    let second = sentinel;

    // Step 3: Move `first` pointer n steps ahead
    // This creates a gap of n between first and second
    for (let i = 0; i < n; i++) {
        first = first.next;
    }

    // Step 4: Move both pointers until `first` reaches the last node
    // After this, `second` will be just before the node we want to remove
    while (first.next) {
        first = first.next;
        second = second.next;
    }

    // Step 5: Skip the target node
    second.next = second.next.next;

    // Step 6: Return new head (sentinel.next is the actual head)
    return sentinel.next;
};
