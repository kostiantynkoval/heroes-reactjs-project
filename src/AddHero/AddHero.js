import React, { Component } from 'react';
import './AddHero.css';
import { connect } from 'react-redux';

import ToHomePageButton from '../shared/ToHomePageButton';


class AddHero extends Component {

    constructor(props) {
        super(props)
        this.state = {inpHasError: 'collapse'}
        this.addHero = this.addHero.bind(this);
    }

    addHero() {
        this.setState({inpHasError: 'collapse'});
        let id = (Math.floor(Math.random() * 1000)+(Date.now()*1000));
        let input = this.refs.name;
        console.log('input', input)
        if (input.value !== "") {
            this.props.onAddHero({id: id, name: input.value});

        }
        else {
            this.setState({inpHasError: ''});
            return false;
        }

        console.log('this.props : ', this.props);
    }
    render() {
        return (
            <div>
                <ToHomePageButton/>
                <div className="new-hero-form container d-flex flex-column align-items-center justify-content-center">
                    <h2 className="mt-3">Add New Hero:</h2>
                    <div className="form-group  col-8">
                        <input className="input-group p-2" ref="name" type="text" placeholder="Hero Name" required={true}/>
                        <small className={`text-danger ${this.state.inpHasError}`}>* This field is required</small>
                    </div>
                    <button className="mt-2 btn btn-info" onClick={this.addHero}>Add Hero</button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log('st to props', state)
    return {heroes: state.heroes}
}

export default connect(mapStateToProps, dispatch => ({
        onAddHero: hero => {
            console.log('dispatching hero ', hero);
            return dispatch({type: 'ADD_HERO', payload: hero})
        }
    })
)(AddHero);