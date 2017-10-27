import React, { Component } from 'react';
import './HeroExpand.css';
import { connect } from 'react-redux';
import ToHomePageButton from '../shared/ToHomePageButton';
import AddNewHeroButton from '../shared/AddNewHeroButton';

class HeroExpand extends Component {


    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <ToHomePageButton/>
                        <div className="ml-1"><AddNewHeroButton/></div>

                    </div>
                </div>
                <div className="hero-expand">
                    My hero ID is: {this.props.match.params.id}
                </div>
            </div>
        )
    }
}

export default connect()(HeroExpand);