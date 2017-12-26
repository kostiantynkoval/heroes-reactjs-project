import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { createStore } from 'redux';
import allReducers from "./reducers/index";
import { Provider } from 'react-redux';
import '../node_modules/font-awesome/css/font-awesome.min.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App/App';
import HeroList from './HeroList/HeroList';
import createBrowserHistory from 'history/createBrowserHistory';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(
    allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const history= createBrowserHistory();

ReactDOM.render(
    <div>
        <App />
        <Provider store={store}>
            <Router history={history}>
                <HeroList/>
            </Router>
        </Provider>
    </div>,
    document.getElementById('root'));
registerServiceWorker();



