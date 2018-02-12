import React    from 'react';
import Header   from './header.jsx';
import MainMenu from './main-menu.jsx';
import { css }  from 'linaria';

export default class App extends React.Component {
    render() {
        return (
            <div className={container}>
                <div className={bgImg}></div>
                <div className={bgShade}></div>
                <div className={content}>
                    <Header />
                    <MainMenu />
                </div>
            </div>
        );
    }
}

// styling
const container = css`
    width: 100vw;
    height: 100vh;
`;

const bgImg = css`
    width: 100vw;
    height: 100vh;
    margin: 0px;
    position: fixed;
    top: 0;
    left: 0;
    background-image: url(../../assets/img/morning.jpg);
    background-size: cover;
    background-repeat: no-repeat;
`;

const bgShade = css`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.3);
`;

const content = css`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
`;
