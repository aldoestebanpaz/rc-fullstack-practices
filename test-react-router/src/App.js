import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Home } from './pages/Home';
import UserProfile from './pages/UserProfile';
import Post from './pages/Post';
import { About } from './pages/About';

function App(props) {
  return (
    <Router>
      <header>
        <h1>My Personal Blog</h1>
      </header>
      <div>
        <Link to="/">Home</Link>
        <br />
        <Link to="/users/1">Show profile of user with ID 1</Link>
        <br />
        <Link to="/posts/1">Show post with ID 1</Link>
        <br />
        <Link to="/about">About</Link>
        
        <Switch>
          <Route path="/users/:id">
            <UserProfile />
          </Route>
          <Route path="/posts/:id">
            <Post />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
