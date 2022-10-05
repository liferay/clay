/**
 * SPDX-FileCopyrightText: © 2018 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {graphql} from 'gatsby';
import React, {useRef} from 'react';
import Helmet from 'react-helmet';

import LayoutNav from '../components/LayoutNav';
import Sidebar from '../components/Sidebar';

export default function Blog({data, location}) {
	const {allMarkdownRemark, markdownRemark} = data;
	const {excerpt, frontmatter, html, timeToRead} = markdownRemark;
	const title = `${frontmatter.title} - Clay`;

	const skipToSearch = useRef();

	const list = allMarkdownRemark.edges.map(({node}) => {
		const {
			fields: {slug},
			frontmatter: {title},
		} = node;

		return {link: slug.replace('.html', ''), title};
	});

	return (
		<div className="blog docs">
			<div className="overflow-hidden skippy">
				<a
					className="d-inline-flex m-1 p-1 sr-only sr-only-focusable"
					href="#content"
				>
					Skip to main content
				</a>
				<a
					accessKey="k"
					aria-keyshortcuts="Control+K"
					className="d-inline-flex m-1 p-1 sr-only sr-only-focusable"
					href="#algolia-doc-search"
					ref={skipToSearch}
				>
					Skip to search
				</a>
			</div>
			<Helmet>
				<title>{title}</title>
				<meta content={excerpt} name="description" />
				<meta content={excerpt} name="og:description" />
				<meta content={excerpt} name="twitter:description" />
				<meta content={title} name="og:title" />
				<meta content="article" name="og:type" />
				<meta content="Reading time" name="twitter.label1" />
				<meta content={`${timeToRead} min read`} name="twitter:data1" />
			</Helmet>
			<main className="content">
				<div className="container-fluid">
					<div className="flex-xl-nowrap row">
						<Sidebar data={list} location={location} />
						<div className="col-xl sidebar-offset">
							<LayoutNav
								pathname={location.pathname}
								searchRef={skipToSearch}
							/>
							<div className="clay-blog-content">
								<div className="clay-site-container container-fluid">
									<header>
										<h1 className="blog-title text-10">
											{frontmatter.title}
										</h1>
										<span className="blog-date">
											{markdownRemark.fields.date}
											{' by '}
											{toCommaSeparatedList(
												frontmatter.author,
												(author) => (
													<a
														href={
															author.frontmatter
																.url
														}
														key={
															author.frontmatter
																.name
														}
													>
														{
															author.frontmatter
																.name
														}
													</a>
												)
											)}
										</span>
									</header>
									<article
										dangerouslySetInnerHTML={{
											__html: html,
										}}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}

const addString = (list, string) =>
	list.push(<span key={`${list.length}-${string}`}>{string}</span>);

const toCommaSeparatedList = (array, renderCallback) => {
	if (array.length <= 1) {
		return array.map(renderCallback);
	}

	const list = [];

	array.forEach((item, index) => {
		if (index === array.length - 1) {
			addString(list, array.length === 2 ? ' and ' : ', and ');
			list.push(renderCallback(item, index));
		} else if (index > 0) {
			addString(list, ', ');
			list.push(renderCallback(item, index));
		} else {
			list.push(renderCallback(item, index));
		}
	});

	return list;
};

export const pageQuery = graphql`
	query TemplateBlogMarkdown($slug: String!) {
		markdownRemark(fields: {slug: {eq: $slug}}) {
			html
			excerpt(pruneLength: 500)
			frontmatter {
				title
				author {
					frontmatter {
						name
						url
					}
				}
			}
			fields {
				date(formatString: "MMMM DD, YYYY")
				path
				slug
			}
		}
		allMarkdownRemark(
			limit: 10
			filter: {fileAbsolutePath: {regex: "/blog/"}}
			sort: {fields: [fields___date], order: DESC}
		) {
			edges {
				node {
					frontmatter {
						title
					}
					fields {
						slug
					}
				}
			}
		}
	}
`;
