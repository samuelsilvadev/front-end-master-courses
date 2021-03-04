/**
 * @class
 * @classdesc Creates a building
 * @param {number} floors
 */
function Building(floors) {
  this.floors = floors || 0;
}

Building.prototype.getFloors = function getFloors() {
  return this.floors;
};

Building.prototype.printFloors = function printFloors() {
  const floors = this.getFloors();

  if (floors === 0) {
    console.log(`The building has no floors`);
  } else if (floors === 1) {
    console.log(`The building has only ${floors} floor`);
  } else {
    console.log(`The building has ${floors} floors`);
  }
};

module.exports = Building;
