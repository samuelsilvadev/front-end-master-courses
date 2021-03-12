const { readFileSync } = require("fs");
const path = require("path");
const { act } = require("@testing-library/react");

const breeds = [
  { name: "Bichon Frise" },
  { name: "Bolognese" },
  { name: "Bolonka" },
  { name: "Coton de Tulear" },
  { name: "Havanese" },
  { name: "Lowchen" },
  { name: "Maltese" },
];

const response = JSON.parse(
  readFileSync(path.join(__dirname, "__fixtures__", "response.json")).toString()
);

const ANIMALS = ["dog", "cat", "bird"];

const mock = {
  breeds: jest.fn(() => {
    return {
      then: () => ({ breeds }),
    };
  }),
  animals: jest.fn(() => {
    return {
      then: () => response.animals,
    };
  }),
};

module.exports = {
  ANIMALS,
  default: mock,
};
