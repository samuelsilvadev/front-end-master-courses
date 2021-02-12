import React from "react";
import { render } from "react-dom";

const Pet = ({ name, type, breed }) => {
  return React.createElement("section", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, type),
    React.createElement("h2", {}, breed),
  ]);
};

const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Adopt me"),
    React.createElement(Pet, { name: "Python", type: "Cat", breed: "husky" })
  );
};

render(React.createElement(App), document.getElementById("root"));
