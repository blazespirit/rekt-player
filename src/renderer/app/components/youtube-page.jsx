import React from 'react';
import { css } from 'linaria';

export default class YoutubePage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={container}>
                This is YouTube page.
            </div>
        );
    }
}

// styling
const container = css`
    padding-left: 20vw;
    border-top: 1px solid rgba(255, 255, 255, 0.3);
`;
