import React, { Component } from 'react';
import rehypeReact from "rehype-react"
import Helmet from 'react-helmet'

import docsSidebar from '../data/sidebars/doc-links.yaml'
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
        this._codeClipboard = null;
    }

    render() {
        const { data, location, pathContext } = this.props;
        const { htmlASTTreated } = pathContext;
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
                    <Sidebar sectionsList={docsSidebar} location={location} />
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