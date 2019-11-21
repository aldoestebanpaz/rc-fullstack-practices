import React from 'react';

export default class LongerFeaturedPost extends React.Component {
  render() {
    return (
      <div className="jumbotron p-3 p-md-5 text-white rounded bg-dark">
        <div className="col-md-6 px-0">
          <h1 className="display-4 font-italic">{ this.props.title }</h1>
          <p className="lead my-3">{ this.props.summary }</p>
          <p className="lead mb-0"><a href="." className="text-white font-weight-bold">Continue reading...</a></p>
        </div>
      </div>
    );
  }
}