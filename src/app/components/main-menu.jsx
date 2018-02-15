import React   from 'react';
import { css } from 'linaria';
import Icon    from './icon.jsx';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            highlightIndex: 0
        };
    }

    componentDidMount() {
        setInterval(() => {
            this.setState((prevState, props) => {
                if (prevState.highlightIndex + 1 > 2) {
                    return {highlightIndex: 0};
                }
                return {highlightIndex: prevState.highlightIndex + 1};
            });
        }, 2000);
    }

    render() {
        let iconFocus = {
            opacity: 1,
            padding: 0
        };

        let labelStyle = {
            opacity: 1,
            transform: 'translateY(0)'
        };
        return (
            <div className={container}>
                <div className={menu}>
                    <div className={flexRow}>
                        <div className={icon}
                            style={this.state.highlightIndex === 0 ? iconFocus : {}}>
                            <Icon type="movie" />
                        </div>
                        <div className={spacer}></div>
                        <div className={icon}
                            style={this.state.highlightIndex === 1 ? iconFocus : {}}>
                            <Icon type="music" />
                        </div>
                        <div className={spacer}></div>
                        <div className={icon}
                            style={this.state.highlightIndex === 2 ? iconFocus : {}}>
                            <Icon type="youtube" />
                        </div>
                    </div>
                    <div className={highlightRow}>
                        <div className={highlight} style={{left: (this.state.highlightIndex * 25) + 'vw'}}></div>
                    </div>
                    <div className={flexRow}>
                        <div className={label}
                            style={this.state.highlightIndex === 0 ? labelStyle : {}}>Movie
                        </div>
                        <div className={spacer}></div>
                        <div className={label}
                            style={this.state.highlightIndex === 1 ? labelStyle : {}}>Music
                        </div>
                        <div className={spacer}></div>
                        <div className={label}
                            style={this.state.highlightIndex === 2 ? labelStyle : {}}>YouTube
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

// styling
const container = css`
    width:100vw;
    height: 80vh;
`;

const menu = css`
    width: 60vw;
    margin-top: 20vh;
    margin-left: 20vw;
`;

const flexRow = css`
    display: flex;
`;

const icon = css`
    width: 10vw;
    height: 10vw;
    padding: 2vw;
    box-sizing: border-box;
    opacity: 0.5;
    transition: opacity 0.5s ease-out,
                padding 0.2s ease-out 0.2s;
`;

const spacer = css`
    width: 15vw;
`;

const highlightRow = css`
    margin-top: 1vh;
    margin-bottom: 1vh;
`;

const highlight = css`
    width: 10vw;
    height: 0.7vh;
    position: relative;
    background-color: #4FC3F7;
    transition: left 0.5s;
`;

const label = css`
    width: 10vw;
    font-size: 5vh;
    font-weight: 300;
    text-align: center;
    opacity: 0;
    transform: translateY(-45%);
    transition: opacity 0.5s ease-out 0.2s,
                transform 0.3s ease-out 0.2s;
`;
