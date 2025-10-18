// Implement a last-in-first-out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal stack (push, top, pop, and empty).

// Implement the MyStack class:

// void push(int x) Pushes element x to the top of the stack.
// int pop() Removes the element on the top of the stack and returns it.
// int top() Returns the element on the top of the stack.
// boolean empty() Returns true if the stack is empty, false otherwise.
// Notes:

// You must use only standard operations of a queue, which means that only push to back, peek/pop from front, size and is empty operations are valid.
// Depending on your language, the queue may not be supported natively. You may simulate a queue using a list or deque (double-ended queue) as long as you use only a queue's standard operations.

MyStack.prototype.push = function (x) {
    this.q1.push(x)
};


MyStack.prototype.pop = function () {
    let n = this.q1.length;

    for (let i = 0; i < n - 1; i++) {

        this.q1.push(this.q1.shift());

    }
    let ans = this.q1[0]
    this.q1.shift()
    return ans
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
    let n = this.q1.length;
    for (let i = 0; i < n - 1; i++) {

        this.q1.push(this.q1.shift())
    }
    let ans = this.q1[0]
    this.q1.push(this.q1.shift())
    return ans
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
    return this.q1.length == 0
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */