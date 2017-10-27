import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selected } from '../actions/index';
import './HeroList.css';
import HeroListItems from '../HeroListItems/HeroListItems';
import HeroExpand from '../HeroExpand/HeroExpand';
import AddHero from "../AddHero/AddHero";
import history from '../index';
import { Route, Router } from 'react-router-dom';


class HeroList extends Component {

    constructor(props) {
        super(props);
        this.addHero = this.addHero.bind(this);
        console.log('constructor', this.props);
    }

    addHero(hero) {
        this.props.heroes.push(hero);
    }

    render() {
        return (
            <div>
                <Router history={history}>
                    <div className="heroes-wrapper">
                        <Route exact path="/" component={ HeroListItems } />
                        <Route path="/add" component={ AddHero } />
                        <Route path="/detail/:id" component={ HeroExpand } />
                    </div>
                </Router>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {heroes: state.heroes, ownProps}
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({selected: selected}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(HeroList);
