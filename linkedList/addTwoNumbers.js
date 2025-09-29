var addTwoNumbers = function (l1, l2) {
    // Create a dummy node to simplify handling of the result list
    let ans = new ListNode();
    let dummy = ans; // Keep a reference to the head of the list to return later
    let carry = 0; // Initialize carry for addition

    // Loop until both lists are exhausted and no carry is left
    while (l1 || l2 || carry) {
        // Calculate sum of current digits + carry
        let sum = (!l1 ? 0 : l1.val) + (!l2 ? 0 : l2.val) + carry;

        // Update carry for next iteration
        carry = Math.floor(sum / 10);

        // Current digit to store in the node
        let digit = sum % 10;

        // Create a new node with the digit
        let newNode = new ListNode(digit);

        // Append new node to the result list
        ans.next = newNode;
        ans = ans.next; // Move pointer forward

        // Move to next nodes in input lists if available
        l1 = l1 && l1.next;
        l2 = l2 && l2.next;
    }

    // Return the next of dummy node (skip dummy itself)
    return dummy.next;
};


// Explanation in simple terms:

// dummy is used to keep track of the head of the resulting linked list.

// carry stores any overflow during addition(like adding 8 + 7 gives 15 → carry 1).

// Each iteration adds corresponding digits from l1 and l2 along with carry.

// A new node is created for the digit part(sum % 10) and appended to the result.

// Loop continues until all nodes are processed and any remaining carry is handled.