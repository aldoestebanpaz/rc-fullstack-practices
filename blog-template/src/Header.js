import React from 'react';

import HeaderBar from './HeaderBar';
import Sections from './Sections';
import LongerFeaturedPost from './LongerFeaturedPost';

const featuredPost = {
  title: "Title of a longer featured blog post",
  summary: "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents."
};

const featuredPost1 = {
  title: "Title ofdddddddddd",
  summary: "Mudddddddddddrming new readers quickly and efficiently about what's most interesting in this post's contents."
};

export default class Header extends React.Component {
  render() {
    return (
      <div className="container">
        <HeaderBar />

        <Sections/>

        <LongerFeaturedPost
          title={featuredPost.title}
          summary={featuredPost.summary} />
        <LongerFeaturedPost
          title={featuredPost1.title}
          summary={featuredPost1.summary} />

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
    );
  }
}