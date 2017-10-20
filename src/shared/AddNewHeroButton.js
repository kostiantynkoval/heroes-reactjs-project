import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AddNewHeroButton extends Component {
    render(){
        return (
            <div className="mb-3 mt-3">
                <Link to={'/add'} className="btn btn-info" >Add New Hero</Link>
            </div>
        )
    }
}
export default AddNewHeroButton;