import "./css/App.css";
import { NavBar } from "./components/navBar.js";
import { PageManager } from "./components/pageManager.js";

function App() {
  return (
    <>
      <header className="App-header">
        <NavBar />
      </header>
      <main>
        <PageManager />
      </main>
      <footer>
        <p>Made by Kévin Goffin (Jenocke)</p>
      </footer>
    </>
  );
}

export default App;
