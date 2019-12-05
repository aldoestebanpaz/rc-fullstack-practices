import React from 'react';
import { Link } from 'react-router-dom';

export default function Jumbotron() {
  return (
    <div class="jumbotron">
      <div class="container">
        <h1 class="display-3">Software Developer &amp; Enthusiast!</h1>
        <p>I worked in multiple projects and helped in RollingCode (the best compoany of software trainings) too.</p>
        <p>
          <Link to="/aboutme" className="btn btn-primary btn-lg">About me &raquo;</Link>
        </p>
      </div>
    </div>
  );
}