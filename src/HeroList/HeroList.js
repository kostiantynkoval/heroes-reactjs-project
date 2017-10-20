import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selected } from '../actions/index';
import './HeroList.css';
import HeroListItems from '../HeroListItems/HeroListItems';
import HeroExpand from '../HeroExpand/HeroExpand';
import AddHero from "../AddHero/AddHero";

import { Route, Router } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();

class HeroList extends Component {

    constructor(props) {
        super(props);
        this.addHero = this.addHero.bind(this);
        console.log('constructor', this.props.heroes);
    }

    addHero(hero) {
        this.props.heroes.push(hero);
        history.push('/');
    }

    deleteHero(id) {
        const index = this.props.heroes.findIndex(hero => {return hero.id === id});
        this.props.heroes.splice(index, 1);
        // this.setState(this.state);
    }

    render() {
        return (
            <div>
                <Router history={history}>
                    <div className="heroes-wrapper">
                        <Route exact path="/" render={ (props) => <HeroListItems {...props} heroes={this.props.heroes} onDelete={this.deleteHero.bind(this)}/> } />
                        <Route path="/add" render={ (props) => <AddNewHero {...props} handleNewHero={this.addHero} /> } />
                        <Route path="/detail/:id" component={ HeroExpand } />
                    </div>
                </Router>
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log('stAte', state.heroes);
    return {heroes: state.heroes}
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({selected: selected}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(HeroList);


class AddNewHero extends Component {

    constructor(props) {
        super(props);
        this.putUpHero = this.putUpHero.bind(this)
    }
    putUpHero(hero) {
        this.props.handleNewHero(hero)
    }

    render() {
        return (
            <AddHero getNewHero={this.putUpHero}/>
        )
    }
}



