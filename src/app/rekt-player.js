import React          from 'react';
import ReactDOM       from 'react-dom';
import { HashRouter } from 'react-router-dom';
import RektPlayer     from './components/rekt-player.jsx';

ReactDOM.render(
    <HashRouter>
        <RektPlayer />
    </HashRouter>,
    document.getElementById('app')
);