import React from 'react';

const sectionsArray = [
  "World",
  "U.S.",
  "Technology",
  "Design",
  "Culture",
  "Business",
  "Politics",
  "Opinion",
  "Science",
  "Health",
  "Style",
  "Travel",
];

const sections = (
  <React.Fragment>
  <a className="p-2 text-muted" href=".">World</a>
  <a className="p-2 text-muted" href=".">U.S.</a>
  <a className="p-2 text-muted" href=".">Technology</a>
  <a className="p-2 text-muted" href=".">Design</a>
  <a className="p-2 text-muted" href=".">Culture</a>
  <a className="p-2 text-muted" href=".">Business</a>
  <a className="p-2 text-muted" href=".">Politics</a>
  <a className="p-2 text-muted" href=".">Opinion</a>
  <a className="p-2 text-muted" href=".">Science</a>
  <a className="p-2 text-muted" href=".">Health</a>
  <a className="p-2 text-muted" href=".">Style</a>
  <a className="p-2 text-muted" href=".">Travel</a>
  </React.Fragment>
);

export default class Sections extends React.Component {
  render() {
    const links = [];

    for (let i = 0; i < sectionsArray.length; i++) {
      links.push(
        <a className="p-2 text-muted" href="." key={i} >{sectionsArray[i]}</a>
      );
    }


    const links = sectionsArray.map(item =>
      <a className="p-2 text-muted" href=".">{item}</a>  
    );
    return (
      <div className="nav-scroller py-1 mb-2">
        <nav className="nav d-flex justify-content-between">        
          {links}
        </nav>
      </div>
    );
  }
}