const { NotImplementedError } = require("../extensions/index.js");

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

const { ListNode } = require("../extensions/index.js");

class Queue {
  constructor() {
    this.queue = null;
    this.head = null;
  }

  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    const node = new ListNode(value);
    if (this.head === null) {
      this.queue = node;
      this.head = node;
    } else {
      console.log(this.queue);
      this.queue.next = node;
      console.log(this.queue);
      this.queue = node;
      console.log(this.queue);
    }
  }

  dequeue() {
    let result = this.head.value;
    this.head = this.head.next;
    return result;
  }
}

const queue = new Queue();

queue.enqueue(1); // adds the element to the queue
queue.enqueue(3); // adds the element to the queue
queue.dequeue(); // returns the top element from queue and deletes it, returns 1
queue.getUnderlyingList(); // returns { value: 3, next: null }

module.exports = {
  Queue,
};
