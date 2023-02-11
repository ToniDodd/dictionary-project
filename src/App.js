
import './App.css';
import Dictionary from "./Dictionary";

function App() {
  return (
    <body>
      <div className="App">
        <div className="container">
          <header className="App-header text-center">Dictionary
          </header>
            <main>
              <Dictionary />
            </main>
        </div>
          <footer className="text-center footer">This project was coded by Toni Dodd and is <a href="https://github.com/ToniDodd/dictionary-project" target="_blank" rel="noreferrer">open sourced on Github </a> </footer>
      </div>
    </body>
  );
}

export default App;
