import React, { Component } from 'react';
import './HeroList.css';
import HeroListItems from '../HeroListItems/HeroListItems';
import HeroExpand from '../HeroExpand/HeroExpand';
import AddHero from "../AddHero/AddHero";
import { Route } from 'react-router-dom';


class HeroList extends Component {

    render() {
        return (
            <div className="heroes-wrapper">
                <Route exact path="/" component={ HeroListItems } />
                <Route path="/add" component={ AddHero } />
                <Route path="/detail/:id" component={ HeroExpand } />
            </div>
        );
    }
}

export default HeroList;
