import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selected } from '../actions/index';
import '../HeroList/HeroList.css';
import AddNewHeroButton from '../shared/AddNewHeroButton';

import { Link } from 'react-router-dom';

class HeroListItems extends Component {

    deletingHero(heroID) {
        this.props.onDelete(heroID)
    }

    render() {
        return (
            <div>
                <AddNewHeroButton/>
                <ul>{this.props.heroes.map((hero, i) => <HeroListItem key={i.toString()} removingHero={this.deletingHero.bind(this)} value={hero}/>)}</ul>
            </div>
        )
    }

}



class HeroListItem extends Component {
    removeHero(event) {
        event.stopPropagation();
        event.preventDefault();
        this.props.removingHero(this.props.value.id)
    }
    render()
    {
        return (
            <Link to={`/detail/${this.props.value.id}`}>
                <li className="hero-list-item">
                    <span className="hero-id">{this.props.value.id}: </span>
                    <span className="hero-name">{this.props.value.name}</span>
                    <button onClick={this.removeHero.bind(this)} className="remove-button pull-right btn btn-outline-danger btn-sm">
                        <i className="fa fa-window-close" aria-hidden="true"></i> Remove
                    </button>
                </li>
            </Link>)
    }
}

function mapStateToProps(state) {
    console.log('stAte', state.heroes);
    return {heroes: state.heroes}
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({selected: selected}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(HeroListItems);