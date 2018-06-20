import React, { Component } from 'react';
import Helmet from 'react-helmet'
import Link, { withPrefix } from 'gatsby-link';
import LayoutNav from '../components/LayoutNav/LayoutNav';
import {WOW} from 'wowjs';

class Index extends Component {
    componentDidMount() {
        this._wow = new WOW();
        this._wow.init();
    }

    componentWillUnmount() {
        this._wow = null;
    }

    render() {
        const description = "This is Clay. A web implementation of the Lexicon Experience Language; built by Liferay.";

        return (
            <div className="home">
                <Helmet>
                    <title>Clay</title>
                    <meta name="description" content={description} />
                    <meta name="og:description" content={description} />
                    <meta name="twitter:description" content={description} />
                    <meta name="og:title" content="Clay" />
                </Helmet>
                <main className="content">
                    <header className="header">
                        <LayoutNav />

                        <div className="container-fluid">
                            <div className="row">
                                <div className="intro text-center col">
                                    <div className="container-fluid container-fluid-max-lg">
                                        <h1 className="h1">This is Clay</h1>
                                        <h2 className="h3">A Web Implementation of Lexicon Experience Language</h2>
                                        <Link to="/docs/getting-started/introduction.html" className="btn btn-lg btn-light font-weight-bold mx-3 mb-4">
                                            Get Started
                                        </Link>
                                        <a className="btn btn-lg btn-outline-light font-weight-bold mx-3 mb-4" href="https://github.com/liferay/clay" target="_blank">
                                            <img className="mr-2" src={withPrefix("/images/home/file-download.svg")} alt="" />Download
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>

                    <section className="teasers" id="teasers">
                        <div className="container-fluid container-fluid-max-lg">
                            <div className="row mb-4">
                                <div className="col-1 d-none d-md-block">
                                    <div className="vertical-title text-uppercase text-nowrap">Explore Clay</div>
                                </div>

                                <div className="col-md-5 text-center">
                                    <div className="card wow fadeInUp">
                                        <div className="card-body mx-4">
                                            <img className="mx-auto" src={withPrefix("/images/home/what.svg")} alt="" />
                                            <h2 className="font-weight-bold">What is Clay?</h2>
                                            <p>Clay is Liferay's web implementation of Lexicon Experience Language. Built with Bootstrap as a foundation, it's comprised of HTML, CSS, and JS.</p>
                                            <Link to="/docs/getting-started/clay.html" className="btn btn-sm text-uppercase font-weight-bold">
                                                <img className="mr-2" src={withPrefix("/images/home/chevron-right.svg")} alt="" />
                                                Learn More
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-5 text-center mt-4 mt-md-0">
                                    <div className="card wow fadeInUp" data-wow-delay="0.1s">
                                        <div className="card-body mx-4">
                                            <img className="mx-auto" src={withPrefix("/images/home/news.svg")} alt="" />
                                            <h2 className="font-weight-bold">Release Notes</h2>
                                            <p>Stay up-to-date on Clay's progress, fixed issues, and new features by visiting our Release Notes.</p>
                                            <Link to="/docs/news" className="btn btn-sm text-uppercase font-weight-bold">
                                                <img className="mr-2" src={withPrefix("/images/home/chevron-right.svg")} alt="" />
                                                Learn More
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-10 mx-auto">
                                    <div className="card wow fadeInLeft" data-wow-offset="100">
                                        <div className="row">
                                            <div className="col-md-6 text-center">
                                                <div className="card-body mx-4">
                                                    <img className="pt-5" src={withPrefix("/images/home/library03.svg")} alt="" />
                                                </div>
                                            </div>
                                            <div className="col-md-6 text-center text-md-left">
                                                <div className="card-body mx-4 pl-md-0 pt-5">
                                                    <h2 className="font-weight-bold">Component Library</h2>
                                                    <p>Browse Clay's extensive Component Library, where you'll find useful components—with extensive code examples—for your web application.</p>
                                                    <Link to="/docs/components/alerts.html" className="btn btn-sm text-uppercase font-weight-bold">
                                                        <img className="mr-2" src={withPrefix("/images/home/chevron-right.svg")} alt="" />
                                                        Learn More
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="contact-us">
                        <div className="container-fluid container-fluid-max-lg">
                            <div className="row">
                                <div className="col-md-4 ml-auto mr-lg-4 wow zoomIn" data-wow-duration="1.2s">
                                    <div className="text-center text-lg-right">
                                            <img src={withPrefix("/images/home/participate02.svg")} alt="" />
                                    </div>
                                </div>
                                <div className="col-md-6 mr-auto wow zoomIn" data-wow-duration="0.8s">
                                    <div className="media-body mt-4 text-center text-lg-left">
                                        <p className="h1 font-weight-bold">Want to contribute? Found an issue? Head on over to the <a href="https://github.com/liferay/clay" className="font-weight-bold" target="_blank">GitHub repo.</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="link-blocks text-center">
                        <div className="container-fluid container-fluid-max-lg">
                            <div className="row">
                                <div className="body ml-auto col-md-9 mr-auto">
                                    <h2 className="h1 font-weight-bold">A web implementation of Lexicon</h2>
                                    <p className="pb-5 pt-4">There's always been a distinction between Lexicon as a design system, and Lexicon as a web implementation. Naming them like this didn't help with the distinction, so <span className="font-weight-bold">the web implementation of Lexicon is now called Clay</span>.</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-5 ml-auto mb-4">
                                    <div className="card h-100 wow fadeInUp">
                                        <div className="card-body mx-5">
                                            <img className="mx-auto" src={withPrefix("/images/home/lexicon_symbol.svg")} alt="" />
                                            <p>Visit the current Lexicon <br />
                                            Experience Language site</p>
                                            <a href="https://lexicondesign.io/" className="mb-3" target="_blank">
                                                Lexicon v2.0.0-alpha
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-5 mr-auto mb-4">
                                    <div className="card h-100 wow fadeInUp" data-wow-delay="0.1s">
                                        <div className="card-body mx-5">
                                            <img className="mx-auto" src={withPrefix("/images/home/clay_logo_w.svg")} alt="" />
                                            <p>Visit the previous version of <br />
                                            Clay at Lexicon CSS project site</p>
                                            <a href="https://lexiconcss.wedeploy.io/" className="mb-3" target="_blank">
                                                Lexicon CSS
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="footer">
                        <div className="container-fluid container-fluid-max-lg">
                            <div className="row">
                                <div className="col-lg text-center text-lg-left mb-4 mb-lg-0">
                                    <img className="logo" src={withPrefix("/images/liferayLogo.png")}/>

                                    <div className="clearfix d-lg-none"></div>

                                    Brought to you by <a href="http://www.liferay.com" className="font-weight-bold" target="_blank">Liferay, Inc.</a>
                                
                                </div>

                                <div className="col-lg text-center text-lg-right">
                                    <div>Powered by <a href="https://wedeploy.com/" className="font-weight-bold" target="_blank">WeDeploy™</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
    )};
}
                        
export default Index;