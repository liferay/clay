import React, { Component } from 'react';
import rehypeReact from "rehype-react"
import Helmet from 'react-helmet'
import fixHtmlAst from '../utils/fixHtmlAst';

import docsSidebar from '../data/sidebars/doc-links.yaml'
import Sidebar from '../components/Sidebar';
import CodeTabs from '../components/CodeTabs';
import Graph from '../components/Graph';

const renderAst = new rehypeReact({
    createElement: React.createElement,
    components: { "clay-chart": Graph }
}).Compiler;

export default class Docs extends Component {
    componentDidMount() {
        this._codeTabs = new CodeTabs();
    }

    componentWillUnmount() {
        this._codeTabs = null;
    }

    render() {
        const { data, location } = this.props;
        const { markdownRemark } = data;
        const { frontmatter, htmlAst, excerpt, timeToRead } = markdownRemark;
        const title = `${frontmatter.title} - Clay`;

        // This is a hook to fix `xlink:href` for xlinkHref, even if we 
        // switch the docs to xlinkHref the AST passes in small letters. 
        // We are correcting until we have a solution in the package.
        fixHtmlAst(htmlAst);

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
                                    {renderAst(htmlAst)}
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