// Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.

// The first node is considered odd, and the second node is even, and so on.

// Note that the relative order inside both the even and odd groups should remain as it was in the input.

// You must solve the problem in O(1) extra space complexity and O(n) time complexity.var oddEvenList = function(head) {

var oddEvenList = function (head) {
    if (!head || !head.next) return head; // edge case

    let odd = head;           // odd pointer
    let even = head.next;     // even pointer
    let evenHead = even;      // to connect later

    while (even && even.next) {
        odd.next = even.next; // connect odd to next odd
        odd = odd.next;

        even.next = odd.next; // connect even to next even
        even = even.next;
    }

    odd.next = evenHead; // attach even list at the end
    return head;
};
