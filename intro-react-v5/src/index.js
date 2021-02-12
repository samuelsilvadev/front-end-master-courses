import React from "react";
import { render } from "react-dom";

import Pet from "components/pet";

const App = () => {
  return (
    <div>
      <h1>Adopt me</h1>
      <Pet name="Python" type="Cat" breed="husky" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
