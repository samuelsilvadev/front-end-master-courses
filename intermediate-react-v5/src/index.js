import React, { lazy, Suspense, useState } from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";

import SearchParams from "components/search-params";

import { ThemeContext } from "hooks/theme";
import Header from "components/header";

const Details = lazy(() => import("components/details"));

const App = () => {
  const theme = useState({ buttonColor: "green" });

  return (
    <React.StrictMode>
      <ThemeContext.Provider value={theme}>
        <div>
          <Header />
          <Suspense fallback={<h1>Loading route...</h1>}>
            <Router>
              <Details path="/details/:id" />
              <SearchParams path="/" />
            </Router>
          </Suspense>
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));

if (module.hot) {
  module.hot.accept();
}
