import React, { Component } from 'react';
import '../styles/main.scss';

class Template extends Component {
    render() {
        const { children } = this.props;

        return (
            <div>
                {children()}
            </div>
        );
    }
};

export default Template;