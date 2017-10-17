import React, { Component } from 'react';
import './HeroList.css';

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



    clicked() {
        alert ('I am clicked!');
    }

    render() {
        return (
            <div className="heroes-wrapper">
                <FullList heroes={HEROES} />
                <button onClick={this.clicked}>Click Me</button>
            </div>
        );
    }
}

class ListItem extends Component {

    selectHero(id) {
        console.log(id);
    }

    render()
    {
        return <li onClick={this.selectHero.bind(this, this.props.value)} className="hero-list-item"><span className="hero-id">{this.props.value.id}: </span><span
            className="hero-name">{this.props.value.name}</span></li>
    }
}

class FullList extends Component {

    render() {
        return <ul>{this.props.heroes.map((hero, i) => <ListItem key={i.toString()} value={hero} />)}</ul>
    }

}


export default HeroList;
