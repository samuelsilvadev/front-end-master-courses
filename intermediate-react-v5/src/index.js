import React, { useState } from "react";
import { render } from "react-dom";
import { Link, Router } from "@reach/router";

import SearchParams from "components/search-params";
import Details from "components/details";

import { ThemeContext } from "hooks/theme";

const App = () => {
  const theme = useState({ buttonColor: "green" });

  return (
    <React.StrictMode>
      <ThemeContext.Provider value={theme}>
        <div>
          <header>
            <Link to="/">Adopt me</Link>
          </header>
          <Router>
            <Details path="/details/:id" />
            <SearchParams path="/" />
          </Router>
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
