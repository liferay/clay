import React, { Component } from 'react';
import rehypeReact from "rehype-react";
import Helmet from 'react-helmet';

import Sidebar from '../components/Sidebar';
import CodeTabs from '../components/CodeTabs';
import Graph from '../components/Graph';
import CodeClipboard from '../components/CodeClipboard';

const renderAst = new rehypeReact({
    createElement: React.createElement,
    components: { "clay-chart": Graph }
}).Compiler;

export default class Docs extends Component {
    componentDidMount() {
        this._codeTabs = new CodeTabs();
        this._codeClipboard = new CodeClipboard();
    }

    componentWillUnmount() {
        this._codeTabs = null;
        this._codeClipboard.dispose();
    }

    render() {
        const { data, location, pathContext } = this.props;
        const { htmlASTTreated, docsPath } = pathContext;
        const sectionList = JSON.parse(docsPath);
        const { markdownRemark } = data;
        const { frontmatter, htmlAst, excerpt, timeToRead } = markdownRemark;
        const title = `${frontmatter.title} - Clay`;

        return (
            <div className="docs">
                <Helmet>
                    <title>{title}</title>
                    <meta name="description" content={excerpt} />
                    <meta name="og:description" content={excerpt} />
                    <meta name="twitter:description" content={excerpt} />
                    <meta name="og:title" content={title} />
                    <meta name="og:type" content="article" />
                    <meta name="twitter.label1" content="Reading time" />
                    <meta
                        name="twitter:data1"
                        content={`${timeToRead} min read`}
                    />
                </Helmet>
                <main className="content">
                    <Sidebar sectionsList={sectionList[0].items} location={location} />
                    <div className="sidebar-offset">
                        <header>
                            <div className="clay-site-container container-fluid">
                                <h1>{frontmatter.title}</h1>
                            </div>
                        </header>

                        <div className="clay-site-container container-fluid">
                            <div className="row">
                                <div className="col-md-12">
                                    {renderAst(JSON.parse(htmlASTTreated))}
                                </div>
                            </div>
                        </div>

                        <footer className="clay-site-container container-fluid">
                           <div className="row">
                              <div className="col-6">
                                 <p className="legal">Except as otherwise noted, the content of this site is licensed under <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank">CC BY-SA</a> 4.0 license.</p>
                              </div>
                              <div className="col-6 p-md-0">
                                 <ul className="social-icons">
                                    <li className="mr-2">
                                        <a className="rounded-circle sticker sticker-secondary" href="https://github.com/liferay/clay/issues" target="_blank">
                                            <svg aria-hidden="true" className="lexicon-icon lexicon-icon-bars">
                                                <use xlinkHref="/images/icons/icons.svg#comments" />
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="rounded-circle sticker sticker-secondary" href="https://github.com/liferay/clay" target="_blank">
                                            <img className="lexicon-icon" src="/images/home/GitHub-Mark-64px.svg" alt="" />
                                        </a>
                                    </li>
                                </ul>
                              </div>
                           </div>
                        </footer>
                    </div>
                </main>
            </div>
        );
    }
}

export const pageQuery = graphql`
    query TemplateDocsMarkdown($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            htmlAst
            excerpt
            timeToRead
            frontmatter {
                title
            }
        }
    }
`;