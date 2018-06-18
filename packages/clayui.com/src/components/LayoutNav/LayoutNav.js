import React, { Component } from 'react';

class LayoutNav extends Component {
    
    constructor() {
        super();
        this._rootNode = window || document;
        this._addScroll = this._addScroll.bind(this);
    }

    _getScrollTop() {
        if (this._rootNode == window) {
            return this._rootNode.pageYOffset;
        }
        if (this._rootNode == document) {
            return this._rootNode.defaultView.pageYOffset;
        }
    }

    _addScroll() {
        let reference = document.querySelector('.navbar-clay-site');

        this.node.addEventListener('scroll', evt => {
            if (this.getScrollTop() >= 50) {
                reference.classList.add('scroll');
            } else {
                reference.classList.remove('scroll');
            }
        });
    }
    
    componentDidMount() {
        this._rootNode.addEventListener('scroll', this._addScroll, false);
    }

    componentWillUnmount() {
        this._rootNode.removeEventListener('scroll', this._addScroll, false);
    }

    render() {
        return (
            <nav className="navbar fixed-top navbar-clay-site navbar-expand-lg navbar-dark">
                <div className="container-fluid container-fluid-max-lg">
                    <div className="navbar-brand">
                        <img className="logo mr-2" src="/images/home/clay_logo_w.svg" alt="" />
                        <span className="title align-middle">Clay</span>
                    </div>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link ml-3" href="/docs/getting_started/introduction.html">Getting Started</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link ml-3" href="/docs/components/alerts.html">
                                Components Library
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="mx-3 mr-lg-0" href="https://github.com/liferay/clay" target="_blank">
                                <img src="/images/home/GitHub-Mark-64px.svg" alt="" />
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
};

export default LayoutNav;