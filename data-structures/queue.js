/*

QUEUE

Abstract data type
FIFO - First in, first out
Collection of elements with enqueue and dequeue operations.
Note that there is a natural order. Elements are removed in the reverse order of their addition.

DO NOT use an array and the native push/shift method in your implementation. Use an object as the underlying data structure.


*** Operations:

myQueue.enqueue(value)
=> count of queue
add value to collection

myQueue.dequeue()
=> oldest element added collection
Remove item so that it is no longer in collection

myQueue.peek()
=> oldest element added collection
Similiar to dequeue, but do not remove element from collection

myQueue.count()
=> number of elements in queue


*** Additional Exercises:

Modify your queue to take a max capacity and return a string if you try to add an element when there's no more room:
myQueue.enqueue(value)
=> "Max capacity already reached. Remove element before adding a new one."

Create a contains method to check if a value is in the queue:
myQueue.contains('findme')
=> true/false
What's the time complexity?

Create an until method to get the number of dequeues until you get to a certain value:
queue values - (first)2-5-7-3-6-9(last)
myQueue.until(7)
=> 3
What's the time complexity?




 */

function Queue(capacity) {
    this._storage = {};
    this._capacity = capacity || infinity;
    this._head = 0;
    this._tail = 0;
}

Queue.prototype.enqueue = function(value) {
    if (this.count() < this._capacity) {
        this._storage[++this._tail] = value;
        return this.count();
    } else {
        console.log('The queue is full');
    }
};
// Time complexity: O(1)

Queue.prototype.dequeue = function() {
    if (this.count() === 0) {
        console.log('The Queue is empty.');
        return;
    }
    var value = this._storage[this._head];
    delete this._storage[this._head];
    if (this._head < this._tail) {
        this.head++;
    }
    return value;
};
// Time complexity: O(1)

Queue.prototype.peek = function() {
    return this._storage[this._head];
};

Queue.prototype.count = function() {
    return this._tail - this._head;
};
// Time complexity: O(1)

function Queue_ofTwoStacks (capacity) {
    this._capacity = capacity || infinity;
    this._storage = {};
    this._head = 0;
    this._tail = 0;
    this._inStack = new Stack();
    this._outStack = new Stack();
}

Queue_ofTwoStacks.prototype.enqueue = function (val) {
    if (this._inStack.count() === 0 && this._outStack.count() > 0) {
        this.transferStacks();
    }
    this.inStack.push(val);
};

Queue_ofTwoStacks.prototype.transferstacks = function () {
    if (this._outStack.count() === 0) {
        this._outStack.push(this._inStack.pop());
    } else if (this._inStack.count() === 0) {
        this._inStack.push(this._outStack.pop());
    }
}

Queue_ofTwoStacks.prototype.dequeue = function () {
    if (this._outStack.count() === 0) {
        this.transferStacks();
        this._outStack.pop();
    }
};

/*
*** Exercises:

1. Implement a queue using two stacks.

2. Implement a double-ended queue, with the following methods: enqueueLeft, dequeueLeft, enqueueRight, dequeueRight.

3. Given a tree, print out the value of each node in breadth-first order using a queue data structure.


 */
