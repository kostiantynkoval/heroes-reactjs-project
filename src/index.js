import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import allReducers from "./reducers/index";
import { Provider } from 'react-redux';
import '../node_modules/font-awesome/css/font-awesome.min.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App/App';
import HeroList from './HeroList/HeroList';
import createBrowserHistory from 'history/createBrowserHistory';
import { syncHistoryWithStore } from 'react-router-redux';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(
    allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const history= syncHistoryWithStore(createBrowserHistory(), store);
export default history ;

store.subscribe(() => console.log('store changed', store.getState()));

ReactDOM.render(
    <div>
        <App />
        <Provider store={store}>
            <HeroList/>
        </Provider>
    </div>,
    document.getElementById('root'));
registerServiceWorker();



