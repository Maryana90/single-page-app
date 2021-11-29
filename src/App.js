import * as React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Homepage from './components/Homepage/Homepage';
import ArticlePage from './components/ArticlePage/ArticlePage';


function App() {
  return (<BrowserRouter>
    <div className="app-wrapper">
        <Route exact path='/' component={Homepage} />
        <Route path='/article' component={ArticlePage} />
    </div>
  </BrowserRouter>
  );
}

export default App;
