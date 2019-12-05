import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Abilities from './pages/Abilities';
import Projects from './pages/Projects';
import Navbar from './Navbar';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Switch>
          <Route path="/aboutme">
            <AboutMe/>
          </Route>
          <Route path="/abilities">
            <Abilities/>
          </Route>
          <Route path="/projects">
            <Projects/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
