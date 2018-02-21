import React   from 'react';
import { css } from 'linaria';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hour: '0',
            minute: '0',
            second: '0',
            ampm: ''
        };
    }

    tick() {
        let time = new Date();
        let hour = time.getHours();
        let minute = time.getMinutes();
        let second = time.getSeconds();
        let ampm = this.hour < 12 ? 'AM' : 'PM';

        // transform to 12 hours format.
        if (hour > 12) {
            hour -= 12;
        }
        if (hour === 0) {
            hour = 12;
        }

        // pad '0' infront of minutes/seconds if < 10.
        minute = minute < 10 ? '0' + minute : minute;
        second = second < 10 ? '0' + second : second;

        this.setState({
            hour,
            minute,
            second,
            ampm
        });
    }

    componentDidMount() {
        this.tick();
        this.timerID = setInterval(
            () => this.tick(),
            500
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        return (
            <div id="clock" className={container}>
                <span>{this.state.hour}:{this.state.minute}</span>
                <span className={smallText}>&nbsp; {this.state.ampm}</span>
            </div>
        );
    }
}

// styling
const container = css`
    align-items: baseline;
    font-family: Roboto;
    font-weight: 300;
    font-size: 6vh;
    line-height: 7vh;
    margin-right: 10px;
`;

const smallText = css`
    font-size: 4.5vh;
`;