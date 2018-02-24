import React                   from 'react';
import PropTypes               from 'prop-types';
import { Redirect }            from 'react-router-dom';
import { connect }             from 'react-redux';
import { css }                 from 'linaria';
import { ipcRenderer }         from 'electron';
import { changeMenuFocusIndex,
         changePage }          from '../redux/actions';
import { Gesture }             from '../../../config.js';
import Icon                    from './icon.jsx';

const mapStateToProps = (state, ownProps) => ({
    focusIndex: state.mainMenuFocusIndex,
    currentPage: state.currentPage
});

class MainMenu extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let store = this.context.store;

        ipcRenderer.on('gesture', (event, gesture) => {
            let currentState = store.getState();

            if (currentState.currentPage === 'MAIN_MENU') {
                let currentIndex = currentState.mainMenuFocusIndex;

                switch (gesture) {
                    case Gesture.SWIPE_LEFT:
                        if (currentIndex - 1 < 0) {
                            store.dispatch(changeMenuFocusIndex(2));
                        }
                        else {
                            store.dispatch(changeMenuFocusIndex(currentIndex - 1));
                        }
                        break;
                    case Gesture.SWIPE_RIGHT:
                        if (currentIndex + 1 > 2) {
                            store.dispatch(changeMenuFocusIndex(0));
                        }
                        else {
                            store.dispatch(changeMenuFocusIndex(currentIndex + 1));
                        }
                        break;
                    case Gesture.TAP:
                        switch (currentIndex) {
                            case 0: store.dispatch(changePage('MOVIE')); break;
                            case 1: store.dispatch(changePage('MUSIC')); break;
                            case 2: store.dispatch(changePage('YOUTUBE')); break;
                        }
                        break;
                }    
            }
        });
    }

    componentWillUnmount() {
        ipcRenderer.removeAllListeners('gesture');
    }

    render() {
        if (this.props.currentPage === 'MOVIE') {
            return <Redirect to='/movie' />
        }
        else if (this.props.currentPage === 'MUSIC') {
            return <Redirect to='/music' />
        }
        else if (this.props.currentPage === 'YOUTUBE') {
            return <Redirect to='/youtube' />
        }
        else {
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
                                style={this.props.focusIndex === 0 ? iconFocus : {}}>
                                <Icon type="movie" />
                            </div>
                            <div className={spacer}></div>
                            <div className={icon}
                                style={this.props.focusIndex === 1 ? iconFocus : {}}>
                                <Icon type="music" />
                            </div>
                            <div className={spacer}></div>
                            <div className={icon}
                                style={this.props.focusIndex === 2 ? iconFocus : {}}>
                                <Icon type="youtube" />
                            </div>
                        </div>
                        <div className={highlightRow}>
                            <div className={highlight} style={{left: (this.props.focusIndex * 25) + 'vw'}}></div>
                        </div>
                        <div className={flexRow}>
                            <div className={label}
                                style={this.props.focusIndex === 0 ? labelStyle : {}}>Movie
                            </div>
                            <div className={spacer}></div>
                            <div className={label}
                                style={this.props.focusIndex === 1 ? labelStyle : {}}>Music
                            </div>
                            <div className={spacer}></div>
                            <div className={label}
                                style={this.props.focusIndex === 2 ? labelStyle : {}}>YouTube
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

MainMenu.contextTypes = {
    store: PropTypes.object
};

export default connect(mapStateToProps)(MainMenu);

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
