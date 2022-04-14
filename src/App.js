import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Pagination } from "./components";
import { FetchBasics } from "./topics/1-Fetch-basics";
import { FetchingInComponents } from "./topics/2-Fetching-in-components";
import { HandlingLoading } from "./topics/3-Handling-loading";
import { HandlingErrors } from "./topics/4-Handling-errors";
import { FetchingWithCustomHooks } from "./topics/5-Fetching-with-custom-hooks";
import { UpdatingData } from "./topics/6-Updating-data";

function App() {
  const [page, setPage] = useState(1);
  return (
    <div className="App">
      <main className="App-main">
        <div className="container">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Interacting with the network in React</h1>
          <div>
            {page === 1 ? <FetchBasics /> : null}
            {page === 2 ? <FetchingInComponents /> : null}
            {page === 3 ? <HandlingLoading /> : null}
            {page === 4 ? <HandlingErrors /> : null}
            {page === 5 ? <FetchingWithCustomHooks /> : null}
            {page === 6 ? <UpdatingData /> : null}
          </div>
          <Pagination page={page} setPage={setPage} maxPages={6} />
        </div>
      </main>
    </div>
  );
}

export default App;
