// 160. Intersection of Two Linked Lists

var getIntersectionNode = function(headA, headB) {
    let pA = headA;
    let pB = headB
    while(pA != pB){
        pA = pA == null ? headB : pA.next
        pB = pB == null ? headA : pB.next
    }
    return pA
};