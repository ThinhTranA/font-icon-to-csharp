import React, { useState } from 'react';
import { Route } from 'react-router';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import dragDropImage from './assets/images/logo.svg';
import { UploadFile } from './components/UploadFile';
import Editor from './editor/Editor';
import { Switch } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import { NavBar } from './components/NavBar';
import { AppContextProvider } from './context/AppContext';

function App() {
  const [fontFilename, setFontfileName] = useState('');

  const updateFontFilename = (filename: string) =>  {
    setFontfileName(filename)
  }

  const appContextValues = {
    fontFilename,
    updateFontFilename
  }

  return (
    <AppContextProvider value={appContextValues}>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={UploadFile} />
          <Route path="/upload" component={UploadFile} />
          <Route path="/editor" component={Editor} />
        </Switch>
      </div>
    </AppContextProvider>
  );
}

export default App;
