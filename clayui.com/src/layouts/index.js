import React, { Component } from 'react';
import '../styles/main.scss';

class Template extends Component {
    render() {
        const { children } = this.props;

        return children();
    }
};

export default Template;