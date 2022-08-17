class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.tamanio = 0;
  }

  enqueue(data) {
    let newNode = !(data instanceof Node) ? new Node(data) : data;
    this.first === null && this.last === null
      ? (this.first = this.last = newNode)
      : (this.last.next = this.last = newNode);
    this.tamanio++;
  }

  dequeue() {
    let data = undefined;
    if (this.first !== this.last) {
      data = this.first.data;
      this.first = this.first.next;
    } else {
      if (this.first !== null) data = this.first.data;
      this.first = this.last = null;
    }
    // this.first !== this.last
    //   ? (this.first.data, (this.first = this.first.next))
    //   : (this.first !== null ? this.first.data : undefined,
    //     (this.first = this.last = null));
    this.tamanio = this.tamanio - 1 < 0 ? 0 : this.tamanio - 1;
    return data;
  }

  size() {
    return this.tamanio;
  }

  printQueue(node = this.first) {
    if (!node) return "";
    return node.data + (node.next ? " -> " : "") + this.printQueue(node.next);
  }
}

let queue = new Queue();
console.log(queue);
queue.enqueue(1);
console.log(queue.printQueue());
queue.enqueue(2);
console.log(queue.printQueue());
queue.enqueue(3);
console.log(queue.printQueue());
queue.dequeue();
console.log(queue.printQueue());
queue.dequeue();
console.log(queue.printQueue());

console.log(queue.dequeue());
console.log(queue.dequeue());
queue.enqueue(4);
console.log(queue.printQueue());
queue.enqueue(5);
console.log(queue.printQueue());
queue.enqueue(6);
console.log(queue.printQueue());
queue.dequeue();
console.log(queue.printQueue());
queue.dequeue();
console.log(queue.printQueue());
console.log(queue.dequeue());
console.log(queue.dequeue());
