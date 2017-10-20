import { combineReducers } from 'redux';
import HeroesReducers from './heroes';

const allReducers = combineReducers({
    heroes: HeroesReducers
});

export default allReducers;