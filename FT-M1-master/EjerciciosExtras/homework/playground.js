function Queue() {
  this.array = [];
}

Queue.prototype.enqueue = function (elemento) {
  return this.array.push(elemento);
};

Queue.prototype.dequeue = function () {
  return this.array.shift();
};

Queue.prototype.size = function () {
  return this.array.length;
};

var queueOne = new Queue();

queueOne.enqueue(1);
queueOne.enqueue(3);
queueOne.enqueue(5);
queueOne.enqueue(7);
queueOne.enqueue(9);

var queueTwo = new Queue();
queueTwo.enqueue(2);
queueTwo.enqueue(4);
queueTwo.enqueue(6);

var mergeQueues = function (queueOne, queueTwo) {
  // Tu código aca:
  var newQ = new Queue();
  console.log(queueOne.size());
  console.log(queueTwo.size());
  while (queueOne.size() !== 0 || queueTwo.size() !== 0) {
    if (queueOne.size() !== 0){
    newQ.enqueue(queueOne.dequeue());
    };
    if (queueTwo.size() !== 0){
    newQ.enqueue(queueTwo.dequeue());
    console.log(newQ);
    };
  };
  console.log(newQ.size());
  return newQ;
};
mergeQueues(queueOne, queueTwo);
console.log(mergeQueues(queueOne, queueTwo))
