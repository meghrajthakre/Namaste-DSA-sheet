// 19. Remove Nth Node From End of List
// Given the head of a linked list, remove the nth node from the end of the list and return its head.

var removeNthFromEnd = function (head, n) {
    // Step 1: Create a dummy (sentinal) node that points to head
    // This helps in handling edge cases (like removing the first node)
    let sentinal = new ListNode();
    sentinal.next = head;

    // Step 2: Calculate the length of the linked list
    let length = 0;
    let curr = head;
    while (curr) {
        curr = curr.next;
        length++;
    }

    // Step 3: Find the position to stop (length - n)
    let target = length - n;

    // Step 4: Move prev pointer to just before the node to be removed
    let prev = sentinal;
    for (let i = 0; i < target; i++) {
        prev = prev.next;
    }

    // Step 5: Skip the target node
    prev.next = prev.next.next;

    // Step 6: Return the new head (sentinal.next)
    return sentinal.next;
};
