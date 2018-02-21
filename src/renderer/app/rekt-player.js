import React          from 'react';
import ReactDOM       from 'react-dom';
import { HashRouter } from 'react-router-dom';
import RektPlayer     from './components/rekt-player.jsx';
import { ipcRenderer } from 'electron';

ipcRenderer.on('remoteGesture', (event, gesture) => {
    console.log(gesture + ' @rekt-player');
});

ReactDOM.render(
    <HashRouter>
        <RektPlayer />
    </HashRouter>,
    document.getElementById('app')
);