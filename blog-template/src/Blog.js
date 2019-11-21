import React from 'react';
import './Blog.css';
import Body from './Body';
import LongerFeaturedPost from './LongerFeaturedPost';
import Sections from './Sections';

const featuredPost = {
  title: "Title of a longer featured blog post",
  summary: "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents."
};

function Blog() {
  return (
    <React.Fragment>
      <div className="container">
        <header className="blog-header py-3">
          <div className="row flex-nowrap justify-content-between align-items-center">
            <div className="col-4 pt-1">
              <a className="text-muted" href=".">Subscribe</a>
            </div>
            <div className="col-4 text-center">
              <a className="blog-header-logo text-dark" href=".">Large</a>
            </div>
            <div className="col-4 d-flex justify-content-end align-items-center">
              <a className="text-muted" href=".">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-3"><circle cx="10.5" cy="10.5" r="7.5"></circle><line x1="21" y1="21" x2="15.8" y2="15.8"></line></svg>
              </a>
              <a className="btn btn-sm btn-outline-secondary" href=".">Sign up</a>
            </div>
          </div>
        </header>

        <Sections/>

        <LongerFeaturedPost
          title={featuredPost.title}
          summary={featuredPost.summary} />

        <div className="row mb-2">
          
          <div className="col-md-6">
            <div className="card flex-md-row mb-4 box-shadow h-md-250">
              <div className="card-body d-flex flex-column align-items-start">
                <strong className="d-inline-block mb-2 text-primary">World</strong>
                <h3 className="mb-0">
                  <a className="text-dark" href=".">Featured post</a>
                </h3>
                <div className="mb-1 text-muted">Nov 12</div>
                <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                <a href=".">Continue reading</a>
              </div>
              <img className="card-img-right flex-auto d-none d-md-block" data-src="holder.js/200x250?theme=thumb" alt="Card cap" />
            </div>
          </div>
          
          <div className="col-md-6">
            <div className="card flex-md-row mb-4 box-shadow h-md-250">
              <div className="card-body d-flex flex-column align-items-start">
                <strong className="d-inline-block mb-2 text-success">Design</strong>
                <h3 className="mb-0">
                  <a className="text-dark" href=".">Post title</a>
                </h3>
                <div className="mb-1 text-muted">Nov 11</div>
                <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                <a href=".">Continue reading</a>
              </div>
              <img className="card-img-right flex-auto d-none d-md-block" data-src="holder.js/200x250?theme=thumb" alt="Card cap" />
            </div>
          </div>
        </div>

      </div>

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
