import React from 'react';
import { Route } from 'react-router';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import dragDropImage from './assets/images/logo.svg';
import { UploadFile } from './components/UploadFile';
import Editor from './editor/Editor';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="column-layout_3">
          <Route exact path="/" component={UploadFile} />
          <Route path="/upload" component={UploadFile} />
          <Route path="/editor" component={Editor} />
          {/* <UploadFile /> */}
        </div>
      </header>
    </div>
  );
}

export default App;
