/**
 * © 2018 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {Link} from 'gatsby';
import Helmet from 'react-helmet';
import React from 'react';

/**
 * @return {React.Component}
 */
export default () => {
	const description =
		'This is Clay. A web implementation of the Lexicon Experience Language; built by Liferay.';

	return (
		<div className="home">
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
							<div className="intro text-left col">
								<div className="container-fluid container-fluid-max-lg">
									<Link className="brand" to="/">
										<img
											alt=""
											className="logo"
											src="/images/home/clay_logo.svg"
										/>
										<span className="title align-middle">
											{'Clay'}
										</span>
									</Link>
									<h2 className="h2">
										{
											'A Web Implementation of Lexicon Experience Language'
										}
									</h2>
									<div className="navbar-nav-scroll">
										<ul className="navbar-nav ml-auto">
											<li className="nav-item">
												<Link
													className="nav-link-intro"
													to="/docs/get-started/introduction.html"
												>
													{'Get Started'}
												</Link>
											</li>
											<li className="nav-item">
												<Link
													className="nav-link-intro"
													to="/docs/css"
												>
													{'Style Guide'}
												</Link>
											</li>
											<li className="nav-item">
												<Link
													className="nav-link-intro"
													to="/docs/components"
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

				<section className="warning hr" id="warning">
					<div className="container-fluid container-fluid-max-lg text-center spacing">
						<div className="row">
							<div className="col-md-12">
								<h1 className="title-section orange">
									<svg className="lexicon-icon lexicon-icon-announcement">
										<use xlinkHref="/images/icons/icons.svg#announcement" />
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
									className="btn btn-warning-borderless btn-borderless mr-3"
									href="https://clayui.com"
									rel="noopener noreferrer"
									target="_blank"
								>
									{'Documentation v2'}
								</a>
								<Link
									className="btn btn-brand-color btn-link"
									to="/blog"
								>
									{'Read more about warnings'}
								</Link>
							</div>
						</div>
					</div>
				</section>

				<section className="components hr" id="components">
					<div className="container-fluid container-fluid-max-lg text-center spacing">
						<div className="row">
							<div className="col-md-12">
								<img alt="" src="/images/react_logo.svg" />
								<h1 className="title-section mb-2">
									{'Clay Components'}
								</h1>
								<h2 className="version-section">
									{'v3.0.0 Beta'}
								</h2>
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
									className="btn btn-warning-borderless btn-borderless mr-3"
									to="/docs/components"
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
									<span className="inline-item inline-item-after fs-12">
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
					<div className="container-fluid container-fluid-max-lg text-left spacing">
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
											className="btn btn-warning-borderless btn-borderless mr-3"
											to="/docs/css"
										>
											{'Documentation'}
										</Link>
										<a
											className="btn btn-brand-color btn-link"
											href="https://clayui.com"
											rel="noopener noreferrer"
											target="_blank"
										>
											{'View Documentation v2'}
											<span className="inline-item inline-item-after fs-12">
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
							<div className="body ml-auto col-md-9 mr-auto">
								<h2 className="title-section">
									{'A web implementation of Lexicon'}
								</h2>
								<p className="subtitle-section pb-5">
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
							<div className="col-md-5 ml-auto mb-4">
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
							<div className="col-md-5 mr-auto mb-4">
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
							<div className="col-lg text-center text-lg-left mb-4 mb-lg-0">
								<a
									className="font-weight-bold"
									href="https://github.com/liferay/clay/graphs/contributors"
									rel="noopener noreferrer"
									target="_blank"
								>
									{'Clay Team'}
								</a>
							</div>

							<div className="col-lg text-center text-lg-right">
								<div>
									{'Copyright © 2019 '}
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
