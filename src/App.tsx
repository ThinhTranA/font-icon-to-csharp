import React from 'react';
import './App.css';
import dragDropImage from './assets/images/logo.svg';
import { UploadFile } from './components/UploadFile';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="column-layout_3">
          <UploadFile />
        </div>
      </header>
    </div>
  );
}

export default App;
