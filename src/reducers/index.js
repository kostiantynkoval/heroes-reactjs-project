import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import HeroReducer from './heroes';

const heroes = HeroReducer();

const antiHeroes = () => [
        {id: 8000000000000008, name: 'Badman'},
        {id: 9000000000000009, name: 'Hrenman'}
    ]


function handleHeroes(state = heroes, action) {
    if (action.type === "ADD_HERO") {
        return [...state, action.payload];
    }
    return state;
}




const allReducers = combineReducers({
    routing: routerReducer,
    heroes: handleHeroes,
    antiHeroes: antiHeroes
});

export default allReducers;