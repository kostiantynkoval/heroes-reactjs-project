import React, { Component } from 'react';
import './HeroExpand.css';

class HeroExpand extends Component {

    render() {
        return <div className="hero-expand">
            My hero is: {this.props.selectedHero.name}
        </div>
    }
}

export default HeroExpand;