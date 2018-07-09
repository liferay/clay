import { window, document } from 'browser-monads';
import React, { Component } from 'react';
import Link from "gatsby-link";
import classnames from 'classnames';

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
        if (this._getScrollTop() >= 50) {
            this.refs.navElement.classList.add('scroll');
        } else {
            this.refs.navElement.classList.remove('scroll');
        }
    }

    componentDidMount() {
        this._rootNode.addEventListener('scroll', this._addScroll, false);
    }

    componentWillUnmount() {
        this._rootNode.removeEventListener('scroll', this._addScroll, false);
    }

    render() {
        const { fixed = true } = this.props;

        const styles = classnames('navbar navbar-clay-site navbar-expand-lg navbar-dark', {
            'fixed-top': fixed,
        });

        return (
            <nav ref="navElement" className={styles}>
                <div className="container-fluid container-fluid-max-lg">
                    <Link to="/" className="navbar-brand">
                        <img className="logo mr-2" src="/images/home/clay_logo_w.svg" alt="" />
                        <span className="title align-middle">Clay</span>
                    </Link>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link ml-3" to="/docs/getting-started/introduction.html">Getting Started</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link ml-3" to="/docs/components/alerts.html">
                                Components Library
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link ml-3" to="/try.html">
                                Try
                            </Link>
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