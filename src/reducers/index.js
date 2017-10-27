import { combineReducers } from 'redux';
import HeroesReducers from './heroes';
import { routerReducer } from 'react-router-redux';

const heroes = HeroesReducers();

function heroesHandleActions(state = heroes, action) {
    switch (action.type) {
        case 'HERO_ADDED':
            return [
                ...state,
                action.payload
            ];
        case 'HERO_DELETED':
            return state.filter(hero => { return hero.id !== action.payload });
        default: return state;
    }
}



const allReducers = combineReducers({
    routing: routerReducer,
    heroes: heroesHandleActions
});

export default allReducers;