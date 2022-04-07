import logo from "./logo.svg";
import "./App.css";
import { FetchBasics } from "./topics/1-Fetch-basics";

function App() {
  return (
    <div className="App">
      <main className="App-main">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Interacting with the network in React</h1>
        <div>
          <FetchBasics />
        </div>
      </main>
    </div>
  );
}

export default App;
