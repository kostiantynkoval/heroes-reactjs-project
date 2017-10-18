import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App/App';
import registerServiceWorker from './registerServiceWorker';
import HeroList from './HeroList/HeroList';

ReactDOM.render(
    <div>
        <App />
        <HeroList/>
    </div>,
    document.getElementById('root'));
registerServiceWorker();
