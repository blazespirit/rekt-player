import React   from 'react';
import { css } from 'linaria';
import Icon    from './icon.jsx';

export default class App extends React.Component {
    render() {
        return (
            <div className={container}>
                <div className={iconWrapper}>
                    <Icon type="movie" />
                </div>
                <div className={iconWrapper}>
                    <Icon type="music" />
                </div>
                <div className={iconWrapper}>
                    <Icon type="youtube" />
                </div>
            </div>
        );
    }
}

// styling
const container = css`
    width:100vw;
    height: 80vh;
    display: flex;
    justify-content: space-around;
    box-sizing: border-box;
    padding-top: 20vh;
`;

const iconWrapper = css`
    width: 15vh;
    height: 15vh;
`;