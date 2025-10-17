// Stack initialization (using array in JavaScript)
let stack = [];

// Pushing elements into the stack (LIFO - Last In First Out)
stack.push(1); // stack = [1]
stack.push(2); // stack = [1, 2]
stack.push(3); // stack = [1, 2, 3]
stack.push(4); // stack = [1, 2, 3, 4]
stack.push(5); // stack = [1, 2, 3, 4, 5]

// Removing (popping) the top element from the stack
stack.pop();   // removes 5 → stack = [1, 2, 3, 4]

// stack[5] // ❌ Invalid operation in stack
// Direct index access breaks stack rules (we can only use push/pop)

// Displaying the current stack elements
console.log(stack); // Output: [1, 2, 3, 4]



// Queue initialization (using array)
let q = [];

// Enqueue operations (adding elements at the end)
q.push(1); // q = [1]
q.push(2); // q = [1, 2]
q.push(3); // q = [1, 2, 3]
q.push(4); // q = [1, 2, 3, 4]
q.push(5); // q = [1, 2, 3, 4, 5]

// Dequeue operation (removes element from the front)
q.shift(); // removes 1 → q = [2, 3, 4, 5]

// Accessing the current front element
let front = q[0]; // front = 2

// Never access queue elements directly by index like q[5]
// It breaks the FIFO (First In First Out) rule of a queue

console.log(front); // Output: 2
console.log(q);     // Output: [2, 3, 4, 5]
