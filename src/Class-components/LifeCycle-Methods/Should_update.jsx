import React, { Component } from 'react'

export default class Should_update extends Component {

    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }

    increment = () => {
        this.setState({ count: this.state.count + 1 });
    }

    // This method decides whether the component should update or not
    shouldComponentUpdate(nextProps, nextState) {
        console.log('Should component updated?');
        // Only update if count has changed
        if (this.state.count !== nextState.count) {
            console.log('Yes, count has changed.');
            return true;  // allow re-render
        }
        console.log('No, count is the same.');
        return false;     // prevent re-render
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            console.log('Component updated! New Count is:', this.state.count);
        }
    }

    render() {
        return (
            <div>
                <h1>Count : {this.state.count}</h1>
                <br />
                <button onClick={this.increment}>Increment</button>
            </div>
        )
    }
}