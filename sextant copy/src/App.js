import React, { Component } from 'react';
import './App.css';
import Banner from './Banner';
import Exhibit from './component1.js';
import Component2 from './component2.js';
import PylonWebsocket from './PylonWebsocket.js';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Banner bannerText="Sextant" />
                <Exhibit name="Public IPv4 Address">
                    <Component2 url='https://api.ipify.org?format=json' />
                </Exhibit>
                <Exhibit name="Public IPv6 Address">
                    <Component2 url='https://api64.ipify.org?format=json' />
                </Exhibit>
                <Exhibit name="Pylon Packet Latency">
                    <PylonWebsocket />
                </Exhibit>
            </div>
        );
    }
}

export default App;
