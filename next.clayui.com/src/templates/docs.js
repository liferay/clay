/**
 * © 2018 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import Helmet from 'react-helmet';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';
import React, {useEffect} from 'react';
import {graphql} from 'gatsby';
import {Link} from 'gatsby';

import CodeClipboard from '../components/CodeClipboard';
import getSection from '../utils/getSection';
import LayoutNav from '../components/LayoutNav';
import Sidebar from '../components/Sidebar';
import Typography from '../components/Typography';

export default props => {
	const {
		data,
		location,
		pageContext: {markdownJsx},
	} = props;
	const {allMarkdownRemark, allMdx, markdownRemark, mdx} = data;
	const {code, excerpt, frontmatter, html, timeToRead} =
		mdx || markdownRemark;

	const title = `${frontmatter.title} - Clay`;

	const mapStatus = {
		beta: 'warning',
		deprecated: 'danger',
		'new release': 'info',
		pending: 'secondary',
		stable: 'success',
	};

	useEffect(() => {
		document
			.querySelectorAll('.clay-site-custom-checkbox-indeterminate')
			.forEach(item => {
				item.indeterminate = true;
			});
	}, []);

	return (
		<div className="docs">
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
				<LayoutNav />
				<div className="container-fluid">
					<div className="row flex-xl-nowrap">
						<Sidebar
							data={getSection([
								...allMarkdownRemark.edges,
								...allMdx.edges,
							])}
							location={location}
						/>
						<div className="col-xl-9 sidebar-offset">
							<header>
								<div className="clay-site-container container-fluid">
									<h1>{frontmatter.title}</h1>
									{frontmatter.version && (
										<p className="docs-title-version">
											{frontmatter.version}
										</p>
									)}
									{frontmatter.packageNpm && (
										<p className="docs-package-npm">
											{'npm install '}
											{frontmatter.packageNpm}
										</p>
									)}
									{frontmatter.description && (
										<p className="docs-description">
											{frontmatter.description}
										</p>
									)}
								</div>
							</header>

							{frontmatter.packageStatus && (
								<div className="clay-site-container container-fluid">
									<Link
										className="clay-site-label"
										to="/docs/get-started/components-status.html"
									>
										<span
											className={`label label-${
												mapStatus[
													frontmatter.packageStatus.toLowerCase()
												]
											}`}
										>
											<span className="label-item label-item-expand">
												{frontmatter.packageStatus}
											</span>
										</span>
										{frontmatter.packageVersion && (
											<span className="label label-secondary">
												<span className="label-item label-item-expand">
													{frontmatter.packageVersion}
												</span>
											</span>
										)}
									</Link>
								</div>
							)}

							<div className="clay-site-container container-fluid">
								<div className="row">
									<div className="col-md-12">
										<article>
											<CodeClipboard>
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
													<div
														dangerouslySetInnerHTML={{
															__html: html,
														}}
													/>
												)}
											</CodeClipboard>
										</article>
									</div>
								</div>
							</div>

							<footer className="clay-site-container container-fluid">
								<div className="row">
									<div className="col-6">
										<p className="legal">
											{
												'Except as otherwise noted, the content of this site is licensed under '
											}
											<a
												href="https://creativecommons.org/licenses/by-sa/4.0/"
												target="_blank"
											>
												{'CC BY-SA'}
											</a>
											{' 4.0 license.'}
										</p>
									</div>
									<div className="col-6 p-md-0">
										<ul className="social-icons">
											<li className="mr-2">
												<a
													className="rounded-circle sticker sticker-secondary"
													href="https://github.com/liferay/clay/issues"
													target="_blank"
												>
													<svg
														aria-hidden="true"
														className="lexicon-icon lexicon-icon-bars"
													>
														<use xlinkHref="/images/icons/icons.svg#comments" />
													</svg>
												</a>
											</li>
											<li>
												<a
													className="rounded-circle sticker sticker-secondary"
													href="https://github.com/liferay/clay"
													target="_blank"
												>
													<img
														alt=""
														className="lexicon-icon"
														src="/images/home/GitHub-Mark-64px.svg"
													/>
												</a>
											</li>
										</ul>
									</div>
								</div>
							</footer>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
};

export const pageQuery = graphql`
	query($slug: String!) {
		mdx(fields: {slug: {eq: $slug}}) {
			excerpt
			timeToRead
			frontmatter {
				title
				packageStatus
			}
			code {
				body
			}
		}
		markdownRemark(fields: {slug: {eq: $slug}}) {
			excerpt
			timeToRead
			html
			htmlAst
			frontmatter {
				description
				packageNpm
				packageStatus
				packageVersion
				title
				version
			}
		}
		allMdx {
			edges {
				node {
					fields {
						alwaysActive
						layout
						slug
						indexVisible
						title
						draft
						order
					}
				}
			}
		}
		allMarkdownRemark {
			edges {
				node {
					fields {
						alwaysActive
						layout
						slug
						title
						order
						indexVisible
						draft
					}
				}
			}
		}
	}
`;
