import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import registerServiceWorker from './registerServiceWorker';
import HeroList from './HeroList/HeroList';
import HeroExpand from './HeroExpand/HeroExpand';

ReactDOM.render(
    <div>
        <App />
        <HeroList/>
        <HeroExpand selectedHero="SomeBody"/>
    </div>,
    document.getElementById('root'));
registerServiceWorker();
