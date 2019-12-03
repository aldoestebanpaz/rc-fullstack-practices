import React from 'react';

class Counter extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };

    //this.incrementHandler = this.incrementHandler.bind(this);
    //this.decrementHandler = this.decrementHandler.bind(this);
  }

  incrementHandler = () => {
    this.setState({ counter: this.state.counter + 1 });
  }

  decrementHandler = () => {
    this.setState({ counter: this.state.counter - 1 });
  }

  render() {
    return (
      <div>
        <p>This "Counter" (Counter.js) is a class component.</p>
        <div>{this.state.counter}</div>
        <button onClick={this.incrementHandler}>+</button>
        <button onClick={this.decrementHandler}>-</button>
      </div>
    );
  }

}

export default Counter;