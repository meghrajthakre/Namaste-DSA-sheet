// Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.


var swapPairs = function (head) {
    // Base case: if the list is empty or has only one node, no swaps needed
    if (!head || !head.next) return head;

    // Create a dummy node to handle edge cases more easily
    let dummy = new ListNode();
    dummy.next = head;

    // Initialize pointers:
    let p = dummy;   // Previous node
    let c = head;    // Current node
    let n = head.next; // Next node

    // Traverse the list in pairs
    while (c && n) {
        // Step 1: Point previous node to the second node (n)
        p.next = n;

        // Step 2: Point current node to the node after the pair
        c.next = n.next;

        // Step 3: Point second node to the first node (swap)
        n.next = c;

        // Move the pointers forward for the next swap
        p = c;
        c = p.next;
        n = c && c.next; // Check if next pair exists
    }

    // Return the new head of the list
    return dummy.next;
};

// recursive aproch

var swapPairs = function (head) {
    // Base case: If list is empty or has only one node, no swap possible
    if (!head || !head.next) return head

    // Take first two nodes
    let l = head
    let r = head.next

    // Recursively swap the rest of the list from r.next onwards
    l.next = swapPairs(r.next)

    // Swap l and r
    r.next = l

    // Return new head (after swapping, r becomes the head of this pair)
    return r
};
