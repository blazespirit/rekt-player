import React          from 'react';
import { css, names } from 'linaria';

export default class Icon extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let iconClass;

        switch(this.props.type) {
            case 'movie': iconClass = movie; break;
            case 'music': iconClass = music; break;
            case 'youtube': iconClass = youtube; break;
        }
        return (
            <div className={names(container, iconClass)}></div>
        );
    }
}

// styling
const container = css`
    width: 100%;
    height: 100%;
    background-size: 85%;
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