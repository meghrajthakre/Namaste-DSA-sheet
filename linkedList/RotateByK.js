// Given the head of a linked list, rotate the list to the right by k places.

var rotateRight = function (head, k) {
    // If list is empty, has only one node, or k=0 → no rotation needed
    if (!head || !head.next || k == 0) return head;

    // Step 1: Find the total length of linked list
    let length = 0;
    let curr = head;
    while (curr) {
        curr = curr.next;
        length++;
    }

    // Step 2: Reduce k if it's larger than length
    k = k % length;

    // If k becomes 0 after modulo, no need to rotate
    if (k === 0) return head;

    // Step 3: Move fast pointer k steps ahead
    let slow = head;
    let fast = head;
    for (let i = 0; i < k; i++) {
        fast = fast.next;
    }

    // Step 4: Move slow and fast together until fast reaches the last node
    // At the end → slow will be just before the new head
    while (fast.next) {
        slow = slow.next;
        fast = fast.next;
    }

    // Step 5: Make the list circular (connect last node to head)
    fast.next = head;

    // Step 6: New head will be after slow
    let newHead = slow.next;

    // Step 7: Break the link to make it a proper list again
    slow.next = null;

    return newHead;
};
