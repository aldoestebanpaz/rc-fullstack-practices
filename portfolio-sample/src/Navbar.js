import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar () {
  return (
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <a class="navbar-brand" href="#">Aldo Esteban Paz</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <NavLink to="/" className="nav-link" activeClassName="bg-danger" exact>Home</NavLink>
          </li>
          <li class="nav-item">
            <NavLink to="/aboutme" className="nav-link" activeClassName="bg-danger">About me</NavLink>
          </li>
          <li class="nav-item">
            <NavLink to="/abilities" className="nav-link" activeClassName="bg-danger">Abilities</NavLink>
          </li>
          <li class="nav-item">
            <NavLink to="/projects" className="nav-link" activeClassName="bg-danger">Projects</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}