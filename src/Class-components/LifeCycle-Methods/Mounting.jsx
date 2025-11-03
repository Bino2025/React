import React, { Component } from 'react'

export default class Mounting extends Component {

    componentDidMount(){//life cycle method which is automatically called when the component mount
        console.log("component mounted");
        
        
    }
  render() {
    return (
      <div>
        <p>Component has been Mounted!</p>
      </div>
    )
  }
}
