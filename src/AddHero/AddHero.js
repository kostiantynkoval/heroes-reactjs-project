import React, { Component } from 'react';
import { connect } from 'react-redux';
import './AddHero.css';
import ToHomePageButton from '../shared/ToHomePageButton';

class AddHero extends Component {

    constructor(props) {
        super(props)
        this.state = {inpHasError: 'collapse'}
        this.addHero = this.addHero.bind(this);
    }

    addHero() {
        if (this.state.inpHasError) {
            this.setState({inpHasError: 'collapse'});
        }
        let id = (Math.floor(Math.random() * 1000)+(Date.now()*1000));
        let val = this.refs.name.value;
        if (val !== "") {
            this.props.onAddHero({id,name: val});
            this.props.history.push('/');
            console.log('props', this.props);
        }
        else {
            this.setState({inpHasError: ''});
            return false;
        }
    }
    render() {
        return (
            <div>
                <ToHomePageButton/>
                <div className="new-hero-form container d-flex flex-column align-items-center justify-content-center">
                    <h2 className="mt-3">Add New Hero:</h2>
                    <div className="d-flex flex-column m-2 col-8">
                        <input className="input-group p-2" ref="name" type="text" placeholder="Hero Name"/>
                        <small className={this.state.inpHasError+" text-danger"}>This field is required</small>
                    </div>
                    <button className="btn btn-info" onClick={this.addHero}>Add Hero</button>
                </div>
            </div>
        )
    }
}

export default connect(null, dispatch => ({
    onAddHero: (hero) => {dispatch({type: 'HERO_ADDED', payload: hero})}
}))(AddHero);