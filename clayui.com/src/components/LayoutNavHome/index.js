/**
 * SPDX-FileCopyrightText: © 2018 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayButton from '@clayui/button';
import {ClayDropDownWithItems} from '@clayui/drop-down';
import ClayIcon from '@clayui/icon';
import {Link} from 'gatsby';
import React from 'react';

import useStateWithLocalStorage from '../Hooks/useStateWithLocalStorage';

const spritemap = '/images/icons/icons.svg';

const LayoutNavHome = () => {
	const [showAtlas, setShowAtlas] = useStateWithLocalStorage(
		true,
		'clay.showAtlas'
	);

	return (
		<nav className="navbar navbar-clay-site navbar-expand-lg navbar-light">
			<div className="container-fluid container-fluid-max-xl">
				<div className="autofit-float-sm-down autofit-padded autofit-row">
					<div className="autofit-col autofit-col-expand">
						<div className="d-inline-block text-decoration-none text-reset">
							<span className="c-inner" tabIndex="-1">
								<img
									alt=""
									className="align-middle sidebar-logo-image"
									height="32"
									src="/images/clay_logo_w.png"
								/>

								<span className="align-middle font-weight-700 h3 ml-2 sidebar-logo-title">
									Clay
								</span>
							</span>
						</div>
					</div>
					<div className="autofit-col flex-wrap">
						<ul className="ml-auto navbar-nav">
							<li className="nav-item">
								<Link
									className="nav-link"
									to="/docs/get-started/index.html"
								>
									<span className="c-inner" tabIndex="-1">
										Docs
									</span>
								</Link>
							</li>
							<li className="nav-item">
								<a
									className="nav-link"
									href="/sass-api/index.html"
									rel="noopener noreferrer"
									target="_blank"
								>
									<span className="c-inner" tabIndex="-1">
										Sass API
									</span>
								</a>
							</li>
							<li className="nav-item">
								<Link
									activeStyle={{color: '#b3472d'}}
									className="nav-link"
									partiallyActive
									to="/blog"
								>
									<span className="c-inner" tabIndex="-1">
										Blog
									</span>
								</Link>
							</li>
							<li className="d-none d-sm-flex nav-item">
								<a
									className="nav-link"
									href="http://storybook.clayui.com"
									rel="noopener noreferrer"
									target="_blank"
								>
									<span className="c-inner" tabIndex="-1">
										Storybook
									</span>
								</a>
							</li>
							<li className="d-none d-sm-flex nav-item">
								<a
									className="nav-link"
									href="https://codesandbox.io/s/liferay-clay-449ve"
									rel="noopener noreferrer"
									target="_blank"
								>
									<span className="c-inner" tabIndex="-1">
										Codesandbox
									</span>
								</a>
							</li>
							<li className="nav-item">
								<a
									className="ml-3 nav-link"
									href="https://github.com/liferay/clay"
									rel="noopener noreferrer"
									target="_blank"
								>
									<span className="c-inner" tabIndex="-1">
										<img
											alt="Github"
											className="github-logo"
											src="/images/home/github-logo.svg"
										/>
									</span>
								</a>
							</li>
							<li className="nav-item">
								<ClayDropDownWithItems
									footerContent={
										<>
											<ClayButton
												block
												displayType="secondary"
												onClick={() => {
													setShowAtlas(true);

													window.location.reload();
												}}
											>
												Reset Settings
											</ClayButton>
										</>
									}
									helpText={
										<>
											<span>
												{
													'Use this menu to toggle between '
												}
											</span>
											<Link to="/docs/css/index.html#base-theme">
												<span
													className="c-inner"
													tabIndex="-1"
												>
													Atlas and Base Themes
												</span>
											</Link>
											<span>.</span>
										</>
									}
									items={[
										{
											checked: showAtlas,
											label: 'Show Atlas',
											onChange: (checked) => {
												const clayCSSFile =
													document.getElementById(
														'clayCSSFile'
													);

												const clayuiCSSFile =
													document.getElementById(
														'clayuiCSSFile'
													);

												setShowAtlas(checked);

												if (checked) {
													clayCSSFile.setAttribute(
														'href',
														'/css/atlas.css'
													);

													clayuiCSSFile.setAttribute(
														'href',
														'/css/colors.css'
													);
												} else {
													clayCSSFile.setAttribute(
														'href',
														'/css/base.css'
													);

													clayuiCSSFile.setAttribute(
														'href',
														'/css/colors-base.css'
													);
												}
											},
											type: 'checkbox',
										},
									]}
									spritemap={spritemap}
									trigger={
										<ClayButton
											aria-label="Site themes"
											className="nav-link"
											displayType="unstyled"
										>
											<span
												className="c-inner"
												tabIndex="-1"
											>
												<ClayIcon
													spritemap={spritemap}
													symbol="cog"
												/>
											</span>
										</ClayButton>
									}
								/>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default LayoutNavHome;
