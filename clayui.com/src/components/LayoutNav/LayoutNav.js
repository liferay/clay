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
import Search from './Search';

const spritemap = '/images/icons/icons.svg';

const isColorsLoaded = (checked) => {
	const themeEl = document.createElement('div');

	themeEl.setAttribute('id', 'clayCSSTheme');

	const loaded = () => {
		clearInterval(checkCSS);

		const colorsLoadedEvent = document.createEvent('Event');

		colorsLoadedEvent.initEvent('colorsLoaded', true, true);

		document.dispatchEvent(colorsLoadedEvent);

		themeEl.remove();
	};

	const checkCSS = setInterval(() => {
		const clayCSSTheme = window.getComputedStyle(themeEl);
		const themeName = checked ? 'atlas' : 'base';

		if (clayCSSTheme.content.replace(/"/g, '') === themeName) {
			loaded();
		}
	}, 100);

	document.body.appendChild(themeEl);
};

export default (location) => {
	const [showAtlas, setShowAtlas] = useStateWithLocalStorage(
		true,
		'clay.showAtlas'
	);

	const pathname = location.pathname || '';

	return (
		<nav className="navbar navbar-clay-site navbar-expand-lg navbar-fixed-clay-site navbar-light">
			<div className="autofit-float-sm-down autofit-padded autofit-row">
				<div className="autofit-col autofit-col-expand">
					<Search
						placeholder="Search..."
						searchRef={location.searchRef}
					/>
				</div>
				<div className="autofit-col flex-wrap">
					<ul className="ml-auto navbar-nav">
						<li className="nav-item">
							<Link
								className="nav-link"
								style={{
									color: pathname.match(/docs\//g)
										? '#b3472d'
										: '',
								}}
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
						<li className="nav-item">
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
						<li className="nav-item">
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
											{'Use this menu to toggle between '}
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
										label: 'Show Atlas Theme',
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
											isColorsLoaded(checked);

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
										<span className="c-inner" tabIndex="-1">
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
		</nav>
	);
};
