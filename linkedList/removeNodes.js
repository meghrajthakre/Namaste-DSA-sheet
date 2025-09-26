// Given the head of a linked list and an integer val, remove all the nodes of the linked list that have Node.val == val, and return the new head.

// Function to remove all nodes having value == val
var removeElements = function(head, val) {
    // Dummy node banate hain (safe side ke liye)
    // iska next head pe point karega
    let dummy = new ListNode();
    dummy.next = head;

    // Current pointer dummy se start karega
    let curr = dummy;

    // Jab tak curr aur curr.next exist karte hain loop chalega
    while (curr && curr.next) {
        if (curr.next.val == val) {
            // Agar next node ka value delete karna hai,
            // to us node ko skip kar do
            curr.next = curr.next.next;
        } else {
            // Agar value match nahi kiya,
            // to bas curr ko aage move kar do
            curr = curr.next;
        }
    }

    // Dummy ke next ko return karo (new head banega)
    return dummy.next;
};
