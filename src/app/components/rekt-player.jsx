import React  from 'react';
import Header from './header.jsx';
import Style  from './rekt-player.css';

export default class App extends React.Component {
    render() {
        return (
            <div className="rekt-player">
                <Header />
            </div>
        );
    }
}