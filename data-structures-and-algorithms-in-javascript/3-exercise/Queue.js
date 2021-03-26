function Queue() {
  this._storage = {};
  this._size = 0;
  this._firstStorageKey = 0;
}

Queue.prototype.enqueue = function enqueue(value) {
  this._storage[this._size] = value;
  this._size++;
};

Queue.prototype.dequeue = function dequeue() {
  const value = this._storage[this._firstStorageKey];

  if (this._size > 0) {
    delete this._storage[this._firstStorageKey];

    this._size--;
    this._firstStorageKey++;
  }

  return value;
};

Queue.prototype.size = function size() {
  return this._size;
};

module.exports = Queue;
