import React, { Component } from 'react';
import './HeroExpand.css';
import { connect } from 'react-redux';
import ToHomePageButton from '../shared/ToHomePageButton';
import AddNewHeroButton from '../shared/AddNewHeroButton';

class HeroExpand extends Component {

    render() {
        const selectedHero = this.props.heroes.find(hero => hero.id === +this.props.match.params.id) || {id: 'N/A', name: 'N/A', costume_colour: 'N/A'};
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <ToHomePageButton/>
                        <div className="ml-1"><AddNewHeroButton/></div>

                    </div>
                </div>
                <div className="hero-expand d-flex justify-content-center">
                    <table className="table table-bordered table-hover text-center">
                        <thead className="thead-inverse">
                            <tr>
                                <th className="text-center">ID</th>
                                <th className="text-center">Name</th>
                                <th className="text-center">Color</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{selectedHero.id}</td>
                                <td>{selectedHero.name}</td>
                                <td>{selectedHero.costume_colour}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {heroes: state.heroes}
}

export default connect(mapStateToProps)(HeroExpand);