import { combineReducers } from 'redux';
import HeroesReducers from './heroes';

const initialState = {
    heroes: HeroesReducers,
    antiHeroes: () => [
        {id: 88, name: 'Badman'},
        {id: 99, name: 'Hrenman'}
    ]
}

const allReducers = combineReducers({

});


export default allReducers;