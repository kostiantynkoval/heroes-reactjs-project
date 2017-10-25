import React from 'react';
import ReactDOM from 'react-dom';
import store from './store-module';
import { Provider } from 'react-redux';
import '../node_modules/font-awesome/css/font-awesome.min.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App/App';
import HeroList from './HeroList/HeroList';
import registerServiceWorker from './registerServiceWorker';

console.log('original', store);

ReactDOM.render(
    <div>
        <App />
        <Provider store={store}>
            <HeroList/>
        </Provider>
    </div>,
    document.getElementById('root'));
registerServiceWorker();



