import React, { Component } from 'react'

export default class Updating extends Component {
    constructor(props){
        super(props);
        this.state={count:0};
    }
    increment =()=>{
        this.setState({
            count:this.state.count + 1
        });
    }

    componentDidUpdate(prevState){//prev state is the props and state of the compnent beforre the update occured
        if(prevState.count !== this.state.count){
            console.log(`component updated! New count: ${this.state.count}`);
            
        }
    }
  render() {
    return (
      <div>
        <h1>Count:{this.state.count}</h1><br />
        <button onClick={this.increment}>Increment</button>
      </div>
    )
  }
}
