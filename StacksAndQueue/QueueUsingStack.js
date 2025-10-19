// Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).

// Implement the MyQueue class:

// void push(int x) Pushes element x to the back of the queue.
// int pop() Removes the element from the front of the queue and returns it.
// int peek() Returns the element at the front of the queue.
// boolean empty() Returns true if the queue is empty, false otherwise.
// Notes:

// You must use only standard operations of a stack, which means only push to top, peek/pop from top, size, and is empty operations are valid.
// Depending on your language, the stack may not be supported natively. You may simulate a stack using a list or deque (double-ended queue) as long as you use only a stack's standard operations.
 

// Implementing a Queue using two Stacks
var MyQueue = function () {
    // s1 will be used for enqueue (push)
    // s2 will be used for dequeue (pop and peek)
    this.s1 = [];
    this.s2 = [];
};

/** 
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
    // Simply push the element into stack s1
    this.s1.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
    // If s2 is empty, we need to transfer elements from s1 to s2
    // This reverses the order and makes the oldest element ready to pop
    if (this.s2.length == 0) {
        while (this.s1.length) {
            this.s2.push(this.s1.pop());
        }
    }

    // Pop from s2, which represents the front of the queue
    return this.s2.pop();
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {
    // If s2 is empty, transfer all elements from s1 to s2
    // The top of s2 will then be the front element
    if (this.s2.length == 0) {
        while (this.s1.length) {
            this.s2.push(this.s1.pop());
        }
    }

    // Return the top element from s2 (front of queue)
    return this.s2[this.s2.length - 1];
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
    // Queue is empty only when both stacks are empty
    return this.s1.length == 0 && this.s2.length == 0;
};

/** 
 * Example usage:
 * var obj = new MyQueue();
 * obj.push(1);
 * obj.push(2);
 * var a = obj.peek();   // returns 1
 * var b = obj.pop();    // returns 1
 * var c = obj.empty();  // returns false
 */
