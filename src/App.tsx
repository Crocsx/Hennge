import React from 'react';
import Archiver from 'components/archiver/archiver';

import './App.css';
import 'antd/dist/antd.css';
import 'styles/override.css';


import mails from 'data/mail.json';

function App() {
  return (
    <div className="App">
      <header className="App-header">Archiver Demo</header>
      <section className="App-content">
        <Archiver mails={mails}></Archiver>
      </section>
      <footer className="App-footer">
        v1.0 : https://www.tokyodev.com/jobs/hennge-front-end-engineer/
      </footer>
    </div>
  );
}

export default App;
