import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../HeroList/HeroList.css';

import { Link } from 'react-router-dom';


class HeroListItem extends Component {
    removeHero(event) {
        event.stopPropagation();
        event.preventDefault();
        this.props.onDeleteHero(this.props.value.id)
    }
    render()
    {
        return (
            <Link to={`/detail/${this.props.value.id}`}>
                <li className="hero-list-item">
                    <span className="hero-id">{this.props.value.id}: </span>
                    <span className="hero-name">{this.props.value.name}</span>
                    <button onClick={this.removeHero.bind(this)} className="remove-button pull-right btn btn-outline-danger btn-sm">
                        <i className="fa fa-window-close"></i> Remove
                    </button>
                </li>
            </Link>)
    }
}

function matchDispatchToProps(dispatch) {
    return {
        onDeleteHero: (heroID) => {dispatch({type: 'HERO_DELETED', payload: heroID})}
    }
}

export default connect(null, matchDispatchToProps)(HeroListItem);