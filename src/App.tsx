import React from 'react';
import { Route } from 'react-router';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import dragDropImage from './assets/images/logo.svg';
import { UploadFile } from './components/UploadFile';
import Editor from './editor/Editor';
import { Switch } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import { NavBar } from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Container style={{ marginTop: '7em' }}>
        <Switch>
          <Route exact path="/" component={UploadFile} />
          <Route path="/upload" component={UploadFile} />
          <Route path="/editor" component={Editor} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
