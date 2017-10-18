import React, { Component } from 'react';
import './HeroList.css';
import HeroExpand from '../HeroExpand/HeroExpand';
import AddHero from "../AddHero/AddHero";

const HEROES = [
        { id: 11, name: 'Mr. Nice' },
        { id: 12, name: 'Narco' },
        { id: 13, name: 'Bombasto' },
        { id: 14, name: 'Celeritas' },
        { id: 15, name: 'Magneta' },
        { id: 16, name: 'RubberMan' },
        { id: 17, name: 'Dynama' },
        { id: 18, name: 'Dr IQ' },
        { id: 19, name: 'Magma' },
        { id: 20, name: 'Tornado' }
];

class HeroList extends Component {

    constructor(props) {
        super(props);
        this.state = { heroes: HEROES, selectedHero: {}, isHeroChosen: false };
        this.handleHero = this.handleHero.bind(this);
    }

    handleHero(hero) {
        this.setState({selectedHero: hero, isHeroChosen: true})
    }

    render() {
        if (this.state.isHeroChosen) {
            return (
                <div className="heroes-wrapper">
                    <FullList heroes={this.state.heroes} onHeroSelected={this.handleHero.bind(this)}/>
                    <AddNewHero/>
                    <HeroExpand selectedHero={this.state.selectedHero}/>
                </div>
            );
        } else {
            return (
                <div className="heroes-wrapper">
                    <FullList heroes={this.state.heroes} onHeroSelected={this.handleHero.bind(this)}/>
                    <AddNewHero/>
                </div>
            );
        }

    }
}

class ListItem extends Component {


    selectHero(hero) {
        this.props.onSelectedHero(hero);
    }

    render()
    {
        return <li onClick={this.selectHero.bind(this, this.props.value)} className="hero-list-item"><span className="hero-id">{this.props.value.id}: </span><span
            className="hero-name">{this.props.value.name}</span></li>
    }
}

class FullList extends Component {

    handleSelectedHero(hero) {
        this.props.onHeroSelected(hero)
    }

    render() {
        return <ul>{this.props.heroes.map((hero, i) => <ListItem key={i.toString()} value={hero} onSelectedHero={this.handleSelectedHero.bind(this)}/>)}</ul>
    }

}

class AddNewHero extends Component {

    constructor(props) {
        super(props);
        this.addHeroClicked = this.addHeroClicked.bind(this);
        this.state = {addHeroActive: false}

    }
    addHeroClicked(){
        console.log('SET');
        this.setState({addHeroActive: true})
    }
    render() {
        console.log('rerender');
        if(this.state.addHeroActive) {
            return (
                <AddHero/>
            )
        } else {
            return (
                <button onClick={this.addHeroClicked}>Add new Hero</button>
            )
        }

    }
}


export default HeroList;
