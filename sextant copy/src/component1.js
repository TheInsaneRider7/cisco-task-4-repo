import React, { Component } from 'react';
import './component1.css';

class Exhibit extends Component {
    render() {
        return (
            <div className="Exhibit">
                <h2 className="Exhibit-info">{this.props.name}</h2>
                <div className="Exhibit-info"><span id="ip"></span> 
                {this.props.children}
                </div>
            </div>
        );
    }
}

export default Exhibit;