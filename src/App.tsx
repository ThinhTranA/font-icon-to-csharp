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
      <div className="App-header">
        <Route exact path="/" component={UploadFile} />
        <Route path="/upload" component={UploadFile} />
        <Route path="/editor" component={Editor} />
      </div>
    </div>
  );
}

export default App;
