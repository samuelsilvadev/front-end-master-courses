const SEPARATOR = "<@>";

function Stack() {
  this._store = "";
  this._size = 0;
}

Stack.prototype.push = function (value) {
  if (!this._store) {
    this._store = value;
  } else {
    this._store += `${SEPARATOR}${value}`;
  }

  this._size += 1;
};

Stack.prototype.pop = function () {
  if (!this._store) {
    return;
  }

  const lastValueIndex = this._store.lastIndexOf(SEPARATOR);

  if (lastValueIndex > 0) {
    this._store = this._store.substring(0, lastValueIndex);
    this._size -= 1;
  } else if (lastValueIndex === -1 && this._store) {
    this._store = "";
    this._size = 0;
  }
};

Stack.prototype.size = function () {
  return this._size;
};

module.exports = Stack;
