var middleNode = function (head) {
    // Initialize two pointers at the start
    let slow = head;  // Moves one step at a time
    let fast = head;  // Moves two steps at a time

    // Traverse the list until fast reaches the end
    while (fast !== null && fast.next !== null) {
        slow = slow.next;         // slow moves 1 step
        fast = fast.next.next;    // fast moves 2 steps
    }

    // When fast reaches end, slow will be at the middle
    return slow;
};
// ⚡ Approach (Two Pointer Method)

// Initialize two pointers:

// slow = head

// fast = head

// Move them at different speeds:

// slow → moves 1 step at a time

// fast → moves 2 steps at a time

// Loop until fast reaches end:

// Condition: while (fast !== null && fast.next !== null)

// This ensures fast doesn’t go out of bounds.

// When loop ends:

// fast has reached the end of list.

// slow will be pointing to the middle node.

// Return slow → middle node.