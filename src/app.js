import "./css/App.css";
import { NavBar } from "./components/navBar.js";
import { PageManager } from "./components/pageManager.js";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <header className="App-header">
        <NavBar></NavBar>
      </header>
      <main>
        <PageManager></PageManager>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
