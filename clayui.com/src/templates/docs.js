import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';
import React, { Component } from 'react';

import Sidebar from '../components/Sidebar';
import CodeTabs from '../components/CodeTabs';
import CodeClipboard from '../components/CodeClipboard';
import Typography from '../components/Typography';

export default class Docs extends Component {
    componentDidMount() {
        this._codeTabs = new CodeTabs();
        this._codeClipboard = new CodeClipboard();

        document.querySelectorAll('.clay-site-custom-checkbox-indeterminate')
            .forEach(item => item.indeterminate = true);
    }

    componentWillUnmount() {
        this._codeTabs = null;
        this._codeClipboard.dispose();
    }

    render() {
        const { data, location, pageContext: { markdownJsx } } = this.props;
        const { mdx, markdownRemark } = data;
        const { code, frontmatter, excerpt, timeToRead, html } = mdx || markdownRemark;

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
                    <Sidebar location={location} />
                    <div className="sidebar-offset">
                        <header>
                            <div className="clay-site-container container-fluid">
                                <h1>{frontmatter.title}</h1>
                            </div>
                        </header>

                        <div className="clay-site-container container-fluid">
                            <div className="row">
                                <div className="col-md-12">
                                    <article>
                                        {markdownJsx ? (
                                            <MDXRenderer
                                                components={{
                                                    h1: Typography.H1,
                                                    h2: Typography.H2,
                                                    h3: Typography.H3,
                                                    h4: Typography.H4,
                                                    p: Typography.P,
                                                }}
                                            >
                                                {code.body}
                                            </MDXRenderer>
                                        ) : (
                                            <div dangerouslySetInnerHTML={{ __html: html }} />
                                        )}
                                    </article>
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
    query($slug: String!) {
        mdx(fields: { slug: { eq: $slug } }) {
            excerpt
            timeToRead
            frontmatter {
                title
            }
            code {
                body
            }
        }
        markdownRemark(fields: { slug: { eq: $slug } }) {
            excerpt
            timeToRead
            html
            htmlAst
            frontmatter {
                title
            }
        }
    }
`;