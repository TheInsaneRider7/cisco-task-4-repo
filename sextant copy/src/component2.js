import React, { Component } from 'react';

class component2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: props.url,
            ipAddress: null
        };
    }

    componentDidMount() {
        fetch(this.state.url)
            .then(response => response.json())
            .then(data => this.setState({ ipAddress: data.ip }));
    }

    render() {
        return (
            <span className="component2">
                {this.state.ipAddress}
            </span>
        );
    }
}

export default component2;
