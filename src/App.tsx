import React from 'react';
import './App.css';
import Archiver from 'components/archiver/archiver';

function App() {
  return (
    <div className="App">
      <header className="App-header">Archiver Demo</header>
      <section className="App-content">
        <Archiver></Archiver>
      </section>
      <footer className="App-footer">
        v1.0 : https://www.tokyodev.com/jobs/hennge-front-end-engineer/
      </footer>
    </div>
  );
}

export default App;
