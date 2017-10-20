import React, { Component } from 'react';
import './DeleteHero.css';

class DeleteHero extends Component {


    render() {
        console.log(this);
        return <div className="hero-expand">
            My hero ID is: {this.props.match.params.id}
        </div>
    }
}

export default DeleteHero;