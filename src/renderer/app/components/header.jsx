import React from 'react';
import Clock from './clock.jsx';
import { css } from 'linaria';

export default class Header extends React.Component {
    render() {
        return (
            <div className={container}>
                <div className={fadeIn}>
                    <Clock />
                </div>
            </div>
        );
    }
}

// styling
const container = css`
    display: flex;
    justify-content: flex-end;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`;

const fadeIn = css`
    opacity: 0;
    animation-name: slideFadeIn;
    animation-duration: 1s; 
    animation-timing-function: ease-out; 
    animation-delay: 1s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;

    @keyframes slideFadeIn {
        0% {
            opacity: 0;
            transform: translateY(-15%);
        }
        100% {
            opacity: 1
            transform: translateY(0);
        }
    }
`;