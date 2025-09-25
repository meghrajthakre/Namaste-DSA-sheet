// Given the head of a singly linked list, return true if it is a palindrome or false otherwise.


var isPalindrome = function (head) {
    let slow = head
    let fast = head
    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }

    let prev = null
    let curr = slow
    while (curr) {
        let temp = curr.next
        curr.next = prev
        prev = curr
        curr = temp
    }

    let firstList = head
    let secondList = prev
    while (secondList) {
        if (firstList.val !== secondList.val) {
            return false
        }
        firstList = firstList.next
        secondList = secondList.next
    }
    return true


};