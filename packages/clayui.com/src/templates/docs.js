import React from "react";

export default function Docs({data, location}) {
    const { markdownRemark } = data;
    const { frontmatter, html } = markdownRemark;

    return (
        <div class="docs">
            <main class="content">
                <div class="sidebar-offset">
                    <header>
                        <div class="clay-site-container container-fluid">
                            <h1>{frontmatter.title}</h1>
                        </div>
                    </header>

                    <div class="clay-site-container container-fluid">
                        <div class="row">
                            <div class="col-md-12">
                                <div
                                    dangerouslySetInnerHTML={{ __html: html }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export const pageQuery = graphql`
    query TemplateDocsMarkdown($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                path
                title
            }
        }
    }
`;