import React, { Component } from 'react';
import './AddHero.css';
import ToHomePageButton from '../shared/ToHomePageButton';

class AddHero extends Component {

    constructor(props) {
        super(props)
        this.state = {inpHasError: false}
        this.addHero = this.addHero.bind(this);
    }

    addHero() {
        if (this.state.inpHasError) {
            this.setState({inpHasError: false});
        }
        let id = (Math.floor(Math.random() * 1000)+(Date.now()*1000));
        let val = this.refs.name.value;
        if (val !== "") {
            this.props.getNewHero({id, name: val});
        }
        else {
            this.setState({inpHasError: true});
            return false;
        }

        console.log('Name: ', val);
        console.log('ID', id);
    }
    render() {
        return (
            <div>
                <ToHomePageButton/>
                <div className="new-hero-form container d-flex flex-column align-items-center justify-content-center">
                    <h2 className="mt-3">Add New Hero:</h2>
                    <input className="input-group col-8 m-2 p-2" ref="name" type="text" placeholder="Hero Name" required={true}/>
                    <small className="collapse text-danger">This field is required</small>
                    <button className="btn btn-info" onClick={this.addHero}>Add Hero</button>
                </div>
            </div>
        )
    }
}

export default AddHero;