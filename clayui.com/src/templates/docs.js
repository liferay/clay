/**
 * SPDX-FileCopyrightText: © 2018 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {ClayIconSpriteContext} from '@clayui/icon/src';
import {ClayLinkContext} from '@clayui/link';
import ClayTabs from '@clayui/tabs';
import {ClayTooltipProvider} from '@clayui/tooltip';
import {MDXProvider} from '@mdx-js/react';
import {Link, graphql} from 'gatsby';
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer';
import React, {useEffect, useRef} from 'react';
import Helmet from 'react-helmet';
import svg4everybody from 'svg4everybody';

import CodeClipboard from '../components/CodeClipboard';
import CodeToggle from '../components/CodeToggle';
import LayoutNav from '../components/LayoutNav';
import Sidebar from '../components/Sidebar';
import Typography from '../components/Typography';
import getSection from '../utils/getSection';

const spritemap = '/images/icons/icons.svg';

const CustomLink = ({href, ...otherProps}) => {
	return <Link to={href} {...otherProps} />;
};

const mapStatus = {
	beta: 'warning',
	deprecated: 'danger',
	'new release': 'info',
	pending: 'secondary',
	stable: 'success',
};

const getStorybookUrl = (packageNpm, path) => {
	const url = 'https://storybook.clayui.com/?path=/story/';

	if (path) {
		return url + path;
	}

	return `${url}design-system-components-${packageNpm
		.replace('@clayui/', '')
		.replace('-', '')}`;
};

const PackageInfo = ({fields = {}, frontmatter = {}}) => (
	<p className="clay-site-label">
		{fields.packageStatus && (
			<Link
				className={`label label-lg label-${
					mapStatus[fields.packageStatus.toLowerCase()]
				}`}
				to="/docs/get-started/how-to-read-this-documentation.html"
			>
				<span className="c-inner" tabIndex="-1">
					{fields.packageStatus}
				</span>
			</Link>
		)}

		{fields.packageVersion && (
			<a
				className="label label-lg label-secondary"
				href={`https://www.npmjs.com/package/${frontmatter.packageNpm}`}
				rel="noopener noreferrer"
				target="_blank"
			>
				<span className="c-inner" tabIndex="-1">
					{fields.packageVersion}
				</span>
			</a>
		)}

		{frontmatter.lexiconDefinition && (
			<a
				className="label label-lg label-secondary"
				href={frontmatter.lexiconDefinition}
				rel="noopener noreferrer"
				target="_blank"
			>
				<span className="c-inner" tabIndex="-1">
					View in Lexicon
				</span>
			</a>
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
					<span className="c-inner" tabIndex="-1">
						CHANGELOG
					</span>
				</a>

				<a
					className="align-middle d-inline-block link-primary"
					href={getStorybookUrl(
						frontmatter.packageNpm,
						frontmatter.storybookPath
					)}
					rel="noopener noreferrer"
					target="_blank"
				>
					<span className="c-inner d-block" tabIndex="-1">
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
);

const Content = ({html, jsx}) =>
	html ? (
		<CodeToggle>
			<div
				dangerouslySetInnerHTML={{
					__html: html,
				}}
			/>
		</CodeToggle>
	) : jsx ? (
		<MDXProvider
			components={{
				a: Typography.A,
				h1: Typography.H1,
				h2: Typography.H2,
				h3: Typography.H3,
				h4: Typography.H4,
				p: Typography.P,
				ul: (props) => (
					<ul
						className={
							props.className ? props.className : 'clay-ul'
						}
					>
						{props.children}
					</ul>
				),
			}}
		>
			<MDXRenderer>{jsx}</MDXRenderer>
		</MDXProvider>
	) : null;

export default function Documentation(props) {
	const skipToSearch = useRef();
	const {
		data,
		location,
		pageContext: {tabs = [], slug},
	} = props;

	const {allMarkdownRemark, allMdx, mainTab, pageMd, pageMdx} = data;

	const hasMainTab = mainTab ? !!mainTab.frontmatter.title : false;

	const {body, excerpt, fields, frontmatter, html, timeToRead} = {
		...(pageMdx || pageMd),
		...(hasMainTab ? mainTab : {}),
	};

	const title = `${frontmatter.title} - Clay`;

	React.useEffect(() => {
		svg4everybody({
			polyfill: true,
		});
	}, []);

	useEffect(() => {
		const hash = window.location.hash;

		if (hash !== '') {
			window.location.href = hash;
		}
	}, []);

	useEffect(() => {
		const elements = document.querySelectorAll(
			'.clay-site-custom-checkbox-indeterminate'
		);

		[...elements].forEach((item) => {
			item.indeterminate = true;
		});
	}, []);

	return (
		<div className="docs">
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
			<ClayLinkContext.Provider value={CustomLink}>
				<ClayIconSpriteContext.Provider value={spritemap}>
					<ClayTooltipProvider>
						<main className="content">
							<div className="container-fluid">
								<div className="flex-xl-nowrap row">
									<Sidebar
										active={[
											slug,
											...tabs.map(({href}) => href),
										]}
										data={getSection([
											...allMarkdownRemark.edges,
											...allMdx.edges,
										])}
										location={location}
									/>
									<div className="col-xl sidebar-offset">
										<LayoutNav
											pathname={location.pathname}
											searchRef={skipToSearch}
										/>
										<header id="content">
											<div className="clay-site-container container-fluid">
												<div className="row">
													<div className="col-12">
														<h1 className="docs-title">
															{frontmatter.title}
														</h1>

														{frontmatter.packageNpm && (
															<p className="docs-subtitle">
																{`yarn add ${frontmatter.packageNpm}`}
															</p>
														)}

														{frontmatter.description && (
															<p className="docs-subtitle">
																{
																	frontmatter.description
																}
															</p>
														)}
													</div>
													<div className="col-12">
														{tabs.length > 0 && (
															<ClayTabs>
																{tabs.map(
																	({
																		href,
																		name,
																	}) => (
																		<ClayTabs.Item
																			active={
																				`/${href}` ===
																				location.pathname
																			}
																			href={`/${href}`}
																			key={
																				name
																			}
																		>
																			<span
																				className="c-inner"
																				tabIndex="-1"
																			>
																				{
																					name
																				}
																			</span>
																		</ClayTabs.Item>
																	)
																)}
															</ClayTabs>
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
													{(fields ||
														frontmatter) && (
														<PackageInfo
															fields={fields}
															frontmatter={
																frontmatter
															}
														/>
													)}

													<CodeClipboard>
														<Content
															html={html}
															jsx={body}
														/>
													</CodeClipboard>
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
														How can this be
														improved? Create an
														issue!
													</p>
												</div>
												<div className="col-6 p-md-0">
													<ul className="social-icons">
														<li>
															<a
																aria-label="Github clay repository"
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
			</ClayLinkContext.Provider>
		</div>
	);
}

export const pageQuery = graphql`
	query ($pathGroup: [String!], $slug: String!, $mainTabURL: String!) {
		pageMdx: mdx(fields: {slug: {eq: $slug}}) {
			excerpt
			timeToRead
			frontmatter {
				description
				disableTOC
				navigationParent
				lexiconDefinition
				packageNpm
				storybookPath
				title
			}
			fields {
				packageStatus
				packageVersion
			}
			body
		}
		pageMd: markdownRemark(fields: {slug: {eq: $slug}}) {
			excerpt
			timeToRead
			html
			htmlAst
			frontmatter {
				description
				lexiconDefinition
				title
				version
			}
		}
		mainTab: mdx(fields: {slug: {eq: $mainTabURL}}) {
			frontmatter {
				description
				disableTOC
				lexiconDefinition
				packageNpm
				storybookPath
				title
			}
			fields {
				packageStatus
				packageVersion
			}
		}
		allMdx(filter: {fields: {slug: {nin: $pathGroup}}}) {
			edges {
				node {
					fields {
						alwaysActive
						navigationParent
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
		allMarkdownRemark(filter: {fields: {slug: {nin: $pathGroup}}}) {
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
