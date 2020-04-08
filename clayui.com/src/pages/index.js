/**
 * SPDX-FileCopyrightText: © 2018 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {Link} from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';

/**
 * @return {React.Component}
 */
export default () => {
	const description =
		'This is Clay. A web implementation of the Lexicon Experience Language; built by Liferay.';

	const year = new Date().getFullYear();

	return (
		<div className="home">
			<div
				className="alert alert-dismissible alert-fluid alert-warning"
				role="alert"
			>
				<div className="container">
					{
						'This site is for version 3.x. If you are looking for version 2.x documentation, it has been moved to '
					}
					<a
						href="https://v2.clayui.com"
						rel="noopener noreferrer"
						target="_blank"
					>
						{'v2.clayui.com.'}
					</a>
				</div>
			</div>

			<Helmet>
				<title>{'Clay'}</title>
				<meta content={description} name="description" />
				<meta content={description} name="og:description" />
				<meta content={description} name="twitter:description" />
				<meta content="Clay" name="og:title" />
			</Helmet>
			<main className="content">
				<header className="header">
					<div className="container-fluid">
						<div className="row">
							<div className="col intro text-left">
								<div className="container-fluid container-fluid-max-lg">
									<Link className="brand" to="/">
										<img
											alt=""
											className="logo"
											src="/images/home/clay_logo.svg"
										/>
										<span className="align-middle title">
											{'Clay'}
										</span>
									</Link>
									<h2 className="h2">
										{
											'A Web Implementation of Lexicon Experience Language'
										}
									</h2>
									<div className="navbar-nav-scroll">
										<ul className="ml-auto navbar-nav">
											<li className="nav-item">
												<Link
													className="nav-link-intro"
													to="/docs/get-started/what-is-clay.html"
												>
													{'Get Started'}
												</Link>
											</li>
											<li className="nav-item">
												<Link
													className="nav-link-intro"
													to="/docs/css/scss.html"
												>
													{'Style Guide'}
												</Link>
											</li>
											<li className="nav-item">
												<Link
													className="nav-link-intro"
													to="/docs/components/alert.html"
												>
													{'Components Library'}
												</Link>
											</li>
											<li className="nav-item">
												<Link
													className="nav-link-intro"
													to="/blog"
												>
													{'Blog'}
												</Link>
											</li>
											<li className="nav-item">
												<a
													className="nav-link-intro"
													href="https://liferay.design/lexicon"
													rel="noopener noreferrer"
													target="_blank"
												>
													{'Lexicon'}
													<span className="inline-item inline-item-after">
														<svg
															className="lexicon-icon lexicon-icon-angle-right"
															focusable="false"
															role="presentation"
														>
															<use href="/images/icons/icons.svg#angle-right" />
														</svg>
													</span>
												</a>
											</li>
											<li className="nav-item">
												<a
													className="nav-link-intro"
													href="https://github.com/liferay/clay"
													rel="noopener noreferrer"
													target="_blank"
												>
													{'Github'}
													<span className="inline-item inline-item-after">
														<svg
															className="lexicon-icon lexicon-icon-angle-right"
															focusable="false"
															role="presentation"
														>
															<use href="/images/icons/icons.svg#angle-right" />
														</svg>
													</span>
												</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</header>

				<section className="hr warning" id="warning">
					<div className="container-fluid container-fluid-max-lg spacing text-center">
						<div className="row">
							<div className="col-md-12">
								<h1 className="orange title-section">
									<svg className="lexicon-icon lexicon-icon-megaphone-full">
										<use xlinkHref="/images/icons/icons.svg#megaphone-full" />
									</svg>
									{'Deprecation warnings'}
								</h1>
								<p className="subtitle-section">
									<b>{'Deprecation warnings'}</b>
									{' was initially built on top '}
									<br />
									{
										' of Metal.js and is on deprecation warning.'
									}
								</p>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12">
								<a
									className="btn btn-borderless btn-warning-borderless mr-3"
									href="https://v2.clayui.com"
									rel="noopener noreferrer"
									target="_blank"
								>
									{'Documentation v2'}
								</a>
								<Link
									className="btn btn-brand-color btn-link"
									to="/blog/2019/10/25/introducing-clay-v3.html"
								>
									{'Read more about warnings'}
								</Link>
							</div>
						</div>
					</div>
				</section>

				<section className="components hr" id="components">
					<div className="container-fluid container-fluid-max-lg spacing text-center">
						<div className="row">
							<div className="col-md-12">
								<img alt="" src="/images/react_logo.svg" />
								<h1 className="mb-2 title-section">
									{'Clay Components'}
								</h1>
								<h2 className="version-section">{'v3.0.0'}</h2>
								<p className="subtitle-section">
									{
										'Lexicon follows the approach of Atomic Design and Clay follows '
									}
									<br />
									{
										' the approach by constructing the components at the top of React.js.'
									}
								</p>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12">
								<Link
									className="btn btn-borderless btn-warning-borderless mr-3"
									to="/docs/components/alert.html"
								>
									{'Documentation'}
								</Link>
								<a
									className="btn btn-brand-color btn-link"
									href="http://storybook.clayui.com"
									rel="noopener noreferrer"
									target="_blank"
								>
									{'Storybook'}
									<span className="fs-12 inline-item inline-item-after">
										<svg
											className="lexicon-icon lexicon-icon-angle-right"
											focusable="false"
											role="presentation"
										>
											<use href="/images/icons/icons.svg#angle-right" />
										</svg>
									</span>
								</a>
							</div>
						</div>
					</div>
				</section>

				<section className="css hr" id="css">
					<div className="container-fluid container-fluid-max-lg spacing text-left">
						<div className="row">
							<div className="col-md-5">
								<img
									alt=""
									src="/images/css_illustration.svg"
								/>
							</div>
							<div className="col-md-7">
								<div className="row">
									<div className="col-md-12">
										<h1 className="title-section">
											{'ClayCSS'}
										</h1>
										<p className="subtitle-section">
											{
												'Styles can compose a series of variations using our Sass variables and mixins, responsive grid system, and extensive pre-built components.'
											}
										</p>
										<span className="code-shell">
											{'yarn add @clay/css'}
										</span>
									</div>
								</div>
								<div className="row">
									<div className="col-md-12">
										<Link
											className="btn btn-borderless btn-warning-borderless mr-3"
											to="/docs/components/alert.html"
										>
											{'Documentation'}
										</Link>
										<a
											className="btn btn-brand-color btn-link"
											href="https://v2.clayui.com"
											rel="noopener noreferrer"
											target="_blank"
										>
											{'View Documentation v2'}
											<span className="fs-12 inline-item inline-item-after">
												<svg
													className="lexicon-icon lexicon-icon-angle-right"
													focusable="false"
													role="presentation"
												>
													<use href="/images/icons/icons.svg#angle-right" />
												</svg>
											</span>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="contribute" id="css">
					<div className="container-fluid container-fluid-max-lg text-left">
						<div className="row">
							<div className="col-md-12">
								<h2>{'Open Source'}</h2>
								<p>
									{'Clay is distributed in a '}
									<br />
									{' Open Source on Github.'}
								</p>
								<a
									className="btn btn-dark"
									href="https://github.com/liferay/clay"
									rel="noopener noreferrer"
									target="_blank"
								>
									{'Contribute on GitHub'}
								</a>
							</div>
						</div>
					</div>
				</section>

				<section className="link-blocks text-center">
					<div className="container-fluid container-fluid-max-lg">
						<div className="row">
							<div className="body col-md-9 ml-auto mr-auto">
								<h2 className="title-section">
									{'A web implementation of Lexicon'}
								</h2>
								<p className="pb-5 subtitle-section">
									{`There's always been a distinction between Lexicon as a design system, and Lexicon as a web implementation. Naming them like this didn't help with the distinction, so `}
									<b>
										{
											'the web implementation of Lexicon is now called Clay'
										}
									</b>
									{'.'}
								</p>
							</div>
						</div>
						<div className="row">
							<div className="col-md-5 mb-4 ml-auto">
								<div className="card h-100">
									<div className="card-body mx-5">
										<img
											alt=""
											className="mx-auto"
											src="/images/home/lexicon_symbol.svg"
										/>
										<p>
											{'Visit the current Lexicon '}
											<br />
											{'Experience Language site'}
										</p>
										<a
											className="mb-3"
											href="https://liferay.design/lexicon"
											rel="noopener noreferrer"
											target="_blank"
										>
											{'Lexicon 2.0'}
										</a>
									</div>
								</div>
							</div>
							<div className="col-md-5 mb-4 mr-auto">
								<div className="card h-100">
									<div className="card-body mx-5">
										<img
											alt=""
											className="mx-auto"
											src="/images/home/clay_logo_w.svg"
										/>
										<p>
											{'Visit the previous version of '}
											<br />
											{'Clay at Lexicon CSS project site'}
										</p>
										<a
											className="mb-3"
											href="https://liferay.github.io/lexiconcss/"
											rel="noopener noreferrer"
											target="_blank"
										>
											{'Lexicon CSS'}
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<div className="footer">
					<div className="container-fluid container-fluid-max-lg">
						<div className="row">
							<div className="col-lg mb-4 mb-lg-0 text-center text-lg-left">
								<a
									className="font-weight-bold"
									href="https://github.com/liferay/clay/graphs/contributors"
									rel="noopener noreferrer"
									target="_blank"
								>
									{'Clay Contributors'}
								</a>
							</div>

							<div className="col-lg text-center text-lg-right">
								<div>
									{`Copyright © ${year} `}
									<a
										className="font-weight-bold"
										href="https://www.liferay.com/"
										rel="noopener noreferrer"
										target="_blank"
									>
										{'Liferay, Inc.'}
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
};
