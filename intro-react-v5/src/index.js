import React from "react";
import { render } from "react-dom";
import { Link, Router } from "@reach/router";

import SearchParams from "components/search-params";
import Details from "components/details";

const App = () => {
  return (
    <React.StrictMode>
      <div>
        <header>
          <Link to="/">Adopt me</Link>
        </header>
        <Router>
          <Details path="/details/:id" />
          <SearchParams path="/" />
        </Router>
      </div>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
