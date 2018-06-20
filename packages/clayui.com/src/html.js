import React, { Component } from "react"

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
                    <link rel="icon" type="image/png" href="favicon-32x32.png" sizes="16x16 32x32" />
                    {this.props.headComponents}

                    <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900" rel="stylesheet" />
                </head>
                <body {...this.props.bodyAttributes}>
                    <div
                        id="___gatsby"
                        dangerouslySetInnerHTML={{ __html: this.props.body }}
                    />
                    {this.props.postBodyComponents}
                </body>
            </html>
        );
    }
}

export default HTML;