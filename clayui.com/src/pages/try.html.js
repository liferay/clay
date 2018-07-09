import React, { Component } from 'react';
import Helmet from 'react-helmet';
import LayoutNav from '../components/LayoutNav';
import CodeEditor from '../components/CodeEditor';
import loadScript from '../utils/loadScript';
import mountCodeEditor from '../utils/mountCodeEditor';

class Try extends Component {
    constructor(props, context) {
        super(props, context);

        const {data} = props;

        this._listSidebar = data.list.edges.map(({node}) => {
            return {
                title: node.id.split('-').join(' '),
                code: JSON.parse(node.internal.contentDigest)
            };
        });
    }

    componentDidMount() {
        const babelUrl = '//unpkg.com/babel-standalone@6.26.0/babel.min.js';

        loadScript(babelUrl)
            .then(event => {
                mountCodeEditor('code-editor', this._listSidebar[0].code);
            })
            .catch(error => {
                console.error('Babel failed to load.', error);
            });
    }

    _renderSidebarList() {
        return this._listSidebar.map((element, index) => (
            <li key={index} onClick={this._updateCode.bind(this, element.code)}>
                <a className="align-middle" href="javascript:;">
                    <span>{element.title}</span>
                </a>
            </li>
        ))
    }

    _updateCode(code) {
        mountCodeEditor('code-editor', code);
    }

    render() {
        const description = "This is Clay. A web implementation of the Lexicon Experience Language; built by Liferay.";

        return (
            <div className="try">
                <Helmet>
                    <title>Try - Clay</title>
                    <meta name="description" content={description} />
                    <meta name="og:description" content={description} />
                    <meta name="twitter:description" content={description} />
                    <meta name="og:title" content="Try - Clay" />
                </Helmet>
                <main className="content">
                    <header className="header">
                        <LayoutNav fixed={false} />
                    </header>

                    <section className="try-box" id="try-box">
                        <div className="try-sidebar-components">
                            <div className="sidebar-list sidebar-clay-site">
                                <ul className="nav nav-nested nav-pills nav-stacked">
                                    <li className="nav-heading active">
                                        <a className="align-middle" href="javascript:;">
                                            <span>Examples</span>
                                        </a>
                                        <ul className="nav nav-nested nav-pills nav-stacked">
                                            {this._renderSidebarList()}
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="try-playground" id="code-editor"></div>
                    </section>
                </main>
            </div>
        );
    }
};

export const query = graphql`
    query TryExamplesQuery {
        list: allExampleCode {
            edges {
                node {
                    id
                    internal {
                        contentDigest
                    }
                }
            }
        }
    }
`;

export default Try;