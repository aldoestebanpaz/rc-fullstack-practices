import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import Home from './Home';
import AboutMe from './AboutMe';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>My React App</h1>
      </div>
      <Link to="/">Home</Link>
      <Link to="/aboutme">About Me</Link>
      <Switch>
        <Route path="/aboutme">
          <AboutMe />
        </Route>
        <Route path="/" >
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
