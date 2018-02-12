import React          from 'react';
import { css, names } from 'linaria';

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let cssClass;

        switch(this.props.type) {
            case 'movie': cssClass = movie; break;
            case 'music': cssClass = music; break;
            case 'youtube': cssClass = youtube; break;
        }
        return (
            <div className={names(container, cssClass)}></div>
        );
    }
}

// styling
const container = css`
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`;

const movie = css`
    background-image: url('../../assets/icon/movie.svg');
`;

const music = css`
    background-image: url('../../assets/icon/music.svg');
`;

const youtube = css`
    background-image: url('../../assets/icon/youtube.svg');
`;