import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../HeroList/HeroList.css';
import AddNewHeroButton from '../shared/AddNewHeroButton';
import HeroListItem from '../ListItem/HeroListItem';


class HeroListItems extends Component {

    render() {
        return (
            <div>
                <AddNewHeroButton/>
                <ul>{this.props.heroes.map((hero, i) => <HeroListItem key={i.toString()} value={hero}/>)}</ul>
            </div>
        )
    }

}

function mapStateToProps(state) {
    return {heroes: state.heroes}
}

export default connect(mapStateToProps)(HeroListItems);