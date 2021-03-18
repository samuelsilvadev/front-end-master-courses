const Stack = require("./Stack");

describe("2-exercise", () => {
  describe("Stack", () => {
    it("should be a function", () => {
      expect(typeof Stack).toBe("function");
    });

    it("should have `push`, `pop` and `size` methods", () => {
      expect(typeof Stack.prototype.push).toBe("function");
      expect(typeof Stack.prototype.pop).toBe("function");
      expect(typeof Stack.prototype.size).toBe("function");
    });

    it("should push value correctly onto the stack", () => {
      const stack = new Stack();

      stack.push("1 plate");
      stack.push("2 plate");

      expect(stack.size()).toBe(2);
    });

    it("should pop last item correctly", () => {
      const stack = new Stack();

      stack.push(1);
      stack.push(2);
      stack.push(3);
      stack.pop();

      expect(stack.size()).toBe(2);
    });

    it("should remove all items successfully", () => {
      const stack = new Stack();

      stack.push(1);
      stack.push(2);
      stack.push(3);

      stack.pop();
      stack.pop();
      stack.pop();

      expect(stack.size()).toBe(0);
    });

    it("should not result in an invalid size if pop is called more than necessary", () => {
      const stack = new Stack();

      stack.push(1);
      stack.push(2);
      stack.push(3);

      stack.pop();
      stack.pop();
      stack.pop();
      stack.pop();

      expect(stack.size()).toBe(0);
    });
  });
});
