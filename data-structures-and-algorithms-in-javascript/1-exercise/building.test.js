const Building = require("./Building");

describe("1-exercise", () => {
  describe("Building", () => {
    it("should create an instance of a Building", () => {
      const instance = new Building();

      expect(instance).toHaveProperty("floors");
      expect(instance).toHaveProperty("getFloors");
      expect(instance).toHaveProperty("printFloors");
    });

    it("should return the amount of floors", () => {
      const building = new Building(5);

      expect(building.getFloors()).toBe(5);
    });

    it("should print message if floor is zero correctly", () => {
      const consoleLog = console.log;

      const mockedConsole = jest.fn();

      console.log = mockedConsole;

      const building = new Building(0);

      building.printFloors();

      expect(mockedConsole).toHaveBeenCalledTimes(1);
      expect(mockedConsole).toHaveBeenCalledWith("The building has no floors");

      console.log = consoleLog;
    });

    it("should print message if floor is one correctly", () => {
      const consoleLog = console.log;

      const mockedConsole = jest.fn();

      console.log = mockedConsole;

      const building = new Building(1);

      building.printFloors();

      expect(mockedConsole).toHaveBeenCalledTimes(1);
      expect(mockedConsole).toHaveBeenCalledWith(
        "The building has only 1 floor"
      );

      console.log = consoleLog;
    });

    it("should print message if floor more than one correctly", () => {
      const consoleLog = console.log;

      const mockedConsole = jest.fn();

      console.log = mockedConsole;

      const building = new Building(2);

      building.printFloors();

      expect(mockedConsole).toHaveBeenCalledTimes(1);
      expect(mockedConsole).toHaveBeenCalledWith("The building has 2 floors");

      console.log = consoleLog;
    });
  });
});
