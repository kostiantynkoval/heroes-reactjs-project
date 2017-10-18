import React, { Component } from 'react';
import './AddHero.css';

class AddHero extends Component {

    constructor(props) {
        super(props)

        this.addHero = this.addHero.bind(this);
    }

    addHero() {
        let id = (Math.floor(Math.random() * 1000)+(Date.now()*1000));
        console.log(id);
    }
    render() {
        return (
            <div className="new-hero-form text-center">
                <h2>Add New Hero:</h2>
                <input className="input-group" type="text" placeholder="Hero Name" />
                <button className="btn btn-info" onClick={this.addHero}>Add Hero</button>
            </div>
        )
    }
}

export default AddHero;