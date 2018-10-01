import React, { Component } from 'react';

class HTML extends Component {
    render() {
        return(
            <html lang="en">
                <head>
                    <meta charSet="utf-8" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1.0"
                    />
                    <link rel="shortcut icon" type="image/png" href="/images/favicon-32x32.png" sizes="16x16 32x32"/>
                    {this.props.headComponents}

                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.css" />
                    <script type="text/javascript" src="/js/jquery.min.js"></script>
                    <script type="text/javascript" src="/js/popper.js"></script>
                    <script type="text/javascript" src="/js/bootstrap.js"></script>
                </head>
                <body {...this.props.bodyAttributes}>
                    <div
                        id="___gatsby"
                        dangerouslySetInnerHTML={{ __html: this.props.body }}
                    />
                    {this.props.postBodyComponents}
                    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.js"></script>
                </body>
            </html>
        );
    }
}

export default HTML;