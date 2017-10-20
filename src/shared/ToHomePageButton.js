import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ToHomePageButton extends Component {
    render(){
        return (
            <div className="mb-3 mt-3">
                <Link to={'/'} className="btn btn-info" >Back</Link>
            </div>
        )
    }
}
export default ToHomePageButton;