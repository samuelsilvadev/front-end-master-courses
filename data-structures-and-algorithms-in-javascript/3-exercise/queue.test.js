const Queue = require("./Queue");

describe("Queue", () => {
  it("should be a function", () => {
    expect(typeof Queue).toBe("function");
  });

  it("should have `enqueue`, `dequeue` and `size` methods", () => {
    expect(typeof Queue.prototype.enqueue).toBe("function");
    expect(typeof Queue.prototype.dequeue).toBe("function");
    expect(typeof Queue.prototype.size).toBe("function");
  });

  it("should add value correctly in the queue", () => {
    const queue = new Queue();

    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.size()).toBe(3);
  });

  it("should dequeue correctly", () => {
    const queue = new Queue();

    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.dequeue()).toBe(1);
    expect(queue.size()).toBe(2);
  });

  it("should dequeue all of values in the right order", () => {
    const queue = new Queue();

    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(2);
    expect(queue.dequeue()).toBe(3);
  });
});
