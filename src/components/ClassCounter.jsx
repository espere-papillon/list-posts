import React from 'react';

export class ClassCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      text: ""
    }
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
    this.onChangeInput = this.onChangeInput.bind(this)
  }

  increment() {
    this.setState({...this.state, count: this.state.count + 1})
  }

  decrement = () => {
    this.setState({...this.state, count: this.state.count - 1})
  }

  onChangeInput (event) {
    this.setState({...this.state, text: event.target.value})
  }

  render() {
    return (
      <div>
        <div>{this.state.text}</div>
        <input type="text" onChange={this.onChangeInput} value={this.state.text}/>
        <div>{this.state.count}</div>
        <button onClick={this.increment}>increment</button>
        <button onClick={this.decrement}>decrement</button>
      </div>
    )
  }
}