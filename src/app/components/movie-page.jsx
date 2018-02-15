import React from 'react';
import { css } from 'linaria';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            highlightIndex: 0,
            movieList: [
                { name: 'movie title 01' },
                { name: 'movie title 02' },
                { name: 'movie title 03' },
                { name: 'movie title 04' },
                { name: 'movie title 05' },
                { name: 'movie title 06' },
                { name: 'movie title 07' },
                { name: 'movie title 08' },
                { name: 'movie title 09' },
                { name: 'movie title 10' }
            ]
        };
    }

    componentDidMount() {
        setInterval(() => {
            this.setState((prevState, props) => {
                if (prevState.highlightIndex + 1 > 9) {
                    return {highlightIndex: 0};
                }
                return {highlightIndex: prevState.highlightIndex + 1};
            });
        }, 2000);
    }

    render() {
        let highlightStyle = {
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
        };

        let movieList = this.state.movieList.map((movie, index) => {
            return (
                <div className={movieItem}
                    style={index === this.state.highlightIndex ? highlightStyle : {}}>{movie.name}</div>
            );
        });

        return (
            <div className={container}>
                {movieList}
            </div>
        );
    }
}

// styling
const container = css`
    padding-left: 20vw;
    border-top: 1px solid white;
`;

const movieItem = css`
    width: 60vw;
    height: 8vh;
    font-size: 5vh;
    font-weight: 300;
    line-height: 8vh;
    transition: background-color 0.3s;
`;
