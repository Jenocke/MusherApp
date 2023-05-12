import "./css/App.css";
import { NavBar } from "./components/navBar.js";
import { PageManager } from "./components/pageManager.js";

function App() {
  return (
    <>
      <header className="App-header">
        <NavBar></NavBar>
      </header>
      <section>
        <PageManager></PageManager>
      </section>
      <footer></footer>
    </>
  );
}

export default App;
