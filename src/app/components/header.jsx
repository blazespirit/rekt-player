import React from 'react';
import Clock from './clock.jsx';
import { Motion, spring } from 'react-motion';

export default class App extends React.Component {
    render() {
        let springConfig = {
            stiffness: 60,
            damping: 45,
            precision: 0.2
        };

        return (
            <div>
                <Motion defaultStyle={{opacity: 0.0}} style={{opacity: spring(1.0, springConfig)}}>
                    {
                        interpolatingStyle => {
                            return (
                                <div style={interpolatingStyle}>
                                    <Clock />
                                </div>
                            )
                        }
                    }
                </Motion>
            </div>
        );
    }
}
