/**
 * SPDX-FileCopyrightText: © 2018 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {ClayIconSpriteContext} from '@clayui/icon/src';
import {ClayTooltipProvider} from '@clayui/tooltip';
import {MDXProvider} from '@mdx-js/react';
import {Link, graphql} from 'gatsby';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';
import React, {useEffect} from 'react';
import Helmet from 'react-helmet';

import CodeClipboard from '../components/CodeClipboard';
import LayoutNav from '../components/LayoutNav';
import Sidebar from '../components/Sidebar';
import Typography from '../components/Typography';
import getSection from '../utils/getSection';

const spritemap = '/images/icons/icons.svg';

export default props => {
	const {
		data,
		location,
		pageContext: {blacklist = [], markdownJsx},
	} = props;
	const {
		allMarkdownRemark,
		allMdx,
		markdownRemark,
		mdTab,
		mdx,
		mdxTab,
	} = data;
	const {code, excerpt, fields, frontmatter, html, timeToRead} =
		mdx || markdownRemark;

	const tab = mdTab || mdxTab;

	const title = `${frontmatter.title} - Clay`;

	const mapStatus = {
		beta: 'warning',
		deprecated: 'danger',
		'new release': 'info',
		pending: 'secondary',
		stable: 'success',
	};

	const showDescTop = !frontmatter.packageNpm && frontmatter.description;

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
			<ClayIconSpriteContext.Provider value={spritemap}>
				<ClayTooltipProvider>
					<main className="content">
						<div className="container-fluid">
							<div className="flex-xl-nowrap row">
								<Sidebar
									data={getSection(
										[
											...allMarkdownRemark.edges,
											...allMdx.edges,
										],
										blacklist
									)}
									location={location}
								/>
								<div className="col-xl sidebar-offset">
									<LayoutNav />
									<header>
										<div className="clay-site-container container-fluid">
											<div className="row">
												<div className="col-12">
													<h1 className="docs-title">
														{frontmatter.title}
													</h1>
													{frontmatter.packageNpm && (
														<p className="docs-subtitle">
															{`yarn add ${
																frontmatter.packageNpm
															}`}
														</p>
													)}
													{showDescTop && (
														<p className="docs-subtitle">
															{
																frontmatter.description
															}
														</p>
													)}
												</div>
												<div className="col-12">
													{tab && tab.html ? (
														<ul
															className="border-bottom nav nav-clay nav-underline"
															role="tablist"
														>
															<li className="nav-item">
																<a
																	aria-controls="advanced"
																	aria-expanded="true"
																	className="active nav-link"
																	data-toggle="tab"
																	href="#advancedTab"
																	id="advancedTabs"
																	role="tab"
																>
																	<span
																		className="c-inner"
																		tabIndex="-1"
																	>
																		{
																			'React Component'
																		}
																	</span>
																</a>
															</li>
															<li className="nav-item">
																<a
																	aria-controls="simpleTabs"
																	className="nav-link"
																	data-toggle="tab"
																	href="#simpleTabs"
																	id="simpleTab"
																	role="tab"
																>
																	<span
																		className="c-inner"
																		tabIndex="-1"
																	>
																		{
																			'CSS / Markup'
																		}
																	</span>
																</a>
															</li>
														</ul>
													) : (
														<hr className="clay-site-separator" />
													)}
												</div>
											</div>
										</div>
									</header>

									<div
										className={`clay-docs-content container-fluid ${
											frontmatter.disableTOC
												? ''
												: 'clay-site-container'
										}`}
									>
										<div className="row">
											<div className="col-12">
												<div className="tab-content">
													<div
														aria-labelledby="advancedTabs"
														className="active fade show tab-pane"
														id="advancedTab"
														role="tabpanel"
													>
														{(frontmatter.packageNpm ||
															fields) && (
															<p className="clay-site-label">
																{fields && (
																	<>
																		{fields.packageStatus && (
																			<Link
																				className={`label label-lg label-${
																					mapStatus[
																						fields.packageStatus.toLowerCase()
																					]
																				}`}
																				to="/docs/get-started/how-to-read-this-documentation.html"
																			>
																				<span
																					className="c-inner"
																					tabIndex="-1"
																				>
																					{
																						fields.packageStatus
																					}
																				</span>
																			</Link>
																		)}

																		{fields.packageVersion && (
																			<a
																				className="label label-lg label-secondary"
																				href={`https://www.npmjs.com/package/${
																					frontmatter.packageNpm
																				}`}
																				rel="noopener noreferrer"
																				target="_blank"
																			>
																				<span
																					className="c-inner"
																					tabIndex="-1"
																				>
																					{
																						fields.packageVersion
																					}
																				</span>
																			</a>
																		)}
																	</>
																)}

																{frontmatter.packageNpm && (
																	<>
																		<a
																			className="label label-lg label-secondary"
																			href={`https://github.com/liferay/clay/blob/master/packages/${frontmatter.packageNpm.replace(
																				'@clayui/',
																				'clay-'
																			)}/CHANGELOG.md`}
																			rel="noopener noreferrer"
																			target="_blank"
																		>
																			<span
																				className="c-inner"
																				tabIndex="-1"
																			>
																				{
																					'CHANGELOG'
																				}
																			</span>
																		</a>

																		<a
																			className="align-middle d-inline-block link-primary"
																			href={`https://storybook.clayui.com/?path=/story/components-${frontmatter.packageNpm
																				.replace(
																					'@clayui/',
																					'clay'
																				)
																				.replace(
																					'-',
																					''
																				)}`}
																			rel="noopener noreferrer"
																			target="_blank"
																		>
																			<span
																				className="c-inner d-block"
																				tabIndex="-1"
																			>
																				<img
																					alt="storybook demos"
																					className="d-block"
																					src="/images/storybook_badge.svg"
																				/>
																			</span>
																		</a>
																	</>
																)}
															</p>
														)}

														<article>
															<CodeClipboard>
																{markdownJsx ? (
																	<MDXProvider
																		components={{
																			a:
																				Typography.A,
																			h1:
																				Typography.H1,
																			h2:
																				Typography.H2,
																			h3:
																				Typography.H3,
																			h4:
																				Typography.H4,
																			p:
																				Typography.P,
																			ul: props => (
																				<ul
																					className={
																						props.className
																							? props.className
																							: 'clay-ul'
																					}
																				>
																					{
																						props.children
																					}
																				</ul>
																			),
																		}}
																	>
																		<MDXRenderer>
																			{
																				code.body
																			}
																		</MDXRenderer>
																	</MDXProvider>
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
													<div
														aria-labelledby="simpleTab"
														className="fade tab-pane"
														id="simpleTabs"
														role="tabpanel"
													>
														{frontmatter.description && (
															<p className="docs-description">
																{
																	frontmatter.description
																}
															</p>
														)}
														{tab && tab.html && (
															<div
																dangerouslySetInnerHTML={{
																	__html:
																		tab.html,
																}}
															/>
														)}
														{tab && tab.code && (
															<article>
																<CodeClipboard>
																	<MDXProvider
																		components={{
																			a:
																				Typography.A,
																			h1:
																				Typography.H1,
																			h2:
																				Typography.H2,
																			h3:
																				Typography.H3,
																			h4:
																				Typography.H4,
																			p:
																				Typography.P,
																			ul: props => (
																				<ul
																					className={
																						props.className
																							? props.className
																							: 'clay-ul'
																					}
																				>
																					{
																						props.children
																					}
																				</ul>
																			),
																		}}
																	>
																		<MDXRenderer>
																			{
																				tab
																					.code
																					.body
																			}
																		</MDXRenderer>
																	</MDXProvider>
																</CodeClipboard>
															</article>
														)}
													</div>
												</div>
											</div>
										</div>
									</div>
									<footer
										className={`container-fluid ${
											frontmatter.disableTOC
												? ''
												: 'clay-site-container'
										}`}
									>
										<div className="border-top py-5 row">
											<div className="col-6">
												<p className="legal">
													{
														'How can this be improved? Create an issue!'
													}
												</p>
											</div>
											<div className="col-6 p-md-0">
												<ul className="social-icons">
													<li>
														<a
															className="rounded-circle sticker sticker-secondary"
															href="https://github.com/liferay/clay"
															rel="noopener noreferrer"
															target="_blank"
														>
															<span
																className="c-inner"
																tabIndex="-1"
															>
																<svg
																	className="lexicon-icon"
																	height="24"
																	name="github"
																	viewBox="12 12 24 24"
																	width="24"
																>
																	<path d="M24.06 12C17.426 12 12 17.395 12 23.988c0 5.275 3.497 9.83 8.2 11.389.603.12.845-.24.845-.6V32.74c-3.377.72-4.1-1.558-4.1-1.558-.483-1.439-1.327-1.799-1.327-1.799-1.085-.719.12-.719.12-.719 1.206.12 1.81 1.199 1.81 1.199 1.085 1.918 2.894 1.319 3.497 1.079.12-.72.361-1.319.723-1.558-2.532-.36-5.427-1.439-5.427-5.994 0-1.32.483-2.398 1.206-3.237-.12-.36-.482-1.559.12-3.237 0 0 .966-.36 3.257 1.199 1.085-.12 2.17-.36 3.135-.36.965 0 2.05.12 3.015.36 2.291-1.559 3.256-1.199 3.256-1.199.603 1.678.241 2.877.12 3.117a4.854 4.854 0 0 1 1.207 3.237c0 4.555-2.774 5.634-5.548 5.874.483.36.844 1.079.844 2.277v3.237c0 .36.242.72.845.6 4.823-1.559 8.2-6.114 8.2-11.389C36.118 17.395 30.692 12 24.059 12z" />
																</svg>
															</span>
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
				</ClayTooltipProvider>
			</ClayIconSpriteContext.Provider>
		</div>
	);
};

export const pageQuery = graphql`
	query($blacklist: [String!], $slug: String!, $sibling: String!) {
		mdx(fields: {slug: {eq: $slug}}) {
			excerpt
			timeToRead
			frontmatter {
				description
				disableTOC
				lexiconDefinition
				packageNpm
				title
			}
			fields {
				packageStatus
				packageVersion
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
						packageVersion
						packageStatus
						slug
						indexVisible
						title
						draft
						order
					}
				}
			}
		}
		allMarkdownRemark(filter: {fields: {slug: {nin: $blacklist}}}) {
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
		mdTab: markdownRemark(fields: {slug: {ne: "", eq: $sibling}}) {
			html
		}
		mdxTab: mdx(fields: {slug: {ne: "", eq: $sibling}}) {
			code {
				body
			}
		}
	}
`;
