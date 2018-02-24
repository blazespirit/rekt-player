import React             from 'react';
import ReactDOM          from 'react-dom';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { createStore }   from 'redux';
import { Provider }      from 'react-redux';
import reducer           from './redux/reducers';
import RektPlayer        from './components/rekt-player.jsx';

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <RektPlayer />
        </HashRouter>
    </Provider>,
    document.getElementById('app')
);