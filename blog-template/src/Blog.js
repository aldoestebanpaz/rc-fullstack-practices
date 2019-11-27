import React from 'react';
import './Blog.css';
import Body from './Body';
import Header from './Header';

function Blog() {
  return (
    <React.Fragment>
      <Header />

      <Body />

      <footer className="blog-footer">
        <p>Blog template built for <a href="https://getbootstrap.com/">Bootstrap</a> by <a href="https://twitter.com/mdo">@mdo</a>.</p>
        <p>
          <a href=".">Back to top</a>
        </p>
      </footer>
    </React.Fragment>
  );
}

export default Blog;
