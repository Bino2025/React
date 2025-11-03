import React, { Component } from "react";
import Timer from "./Timer";

class ButtonUnMount extends Component {
  constructor(props) {
    super(props);
    this.state = { showTimer: true };
  }

  toggleTimer = () => {
    this.setState({ showTimer: !this.state.showTimer });
  };

  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <button onClick={this.toggleTimer}>
          {this.state.showTimer ? "Unmount Timer" : "Mount Timer"}
        </button>

        {/* Conditionally render the Timer */}
        {this.state.showTimer && <Timer />}
      </div>
    );
  }
}

export default ButtonUnMount;