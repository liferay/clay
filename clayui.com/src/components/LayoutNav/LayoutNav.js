/**
 * SPDX-FileCopyrightText: © 2018 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayButton, {ClayButtonWithIcon} from '@clayui/button';
import {ClayDropDownWithItems} from '@clayui/drop-down';
import {Link} from 'gatsby';
import React from 'react';

import Search from './Search';

const spritemap = '/images/icons/icons.svg';

const isNullOrTrue = (val) => val === 'true' || val === null;

const DEV = process.env.GATSBY_CLAY_NIGHTLY === 'true';

const SSR = typeof localStorage === 'undefined';

const INITIAL_STORAGE =
	DEV && !SSR
		? {
				atlas: isNullOrTrue(localStorage.getItem('clay.showAtlas')),
				site: isNullOrTrue(localStorage.getItem('clay.showSiteCss')),
		  }
		: {
				atlas: true,
				site: true,
		  };

export default () => {
	const [settings, setSettings] = React.useState(INITIAL_STORAGE);

	React.useEffect(() => {
		if (DEV && !SSR) {
			localStorage.setItem('clay.showAtlas', settings.atlas);
			localStorage.setItem('clay.showSiteCss', settings.site);
		}
	}, [settings.atlas, settings.site]);

	return (
		<nav className="navbar navbar-clay-site navbar-expand-lg navbar-light">
			<div className="autofit-float-sm-down autofit-padded autofit-row">
				<div className="autofit-col autofit-col-expand">
					<Search placeholder="Search..." />
				</div>
				<div className="autofit-col">
					<ul className="ml-auto navbar-nav">
						<li className="nav-item">
							<Link
								activeStyle={{color: '#b3472d'}}
								className="nav-link"
								partiallyActive
								to="/docs/"
							>
								<span className="c-inner" tabIndex="-1">
									{'Docs'}
								</span>
							</Link>
						</li>
						<li className="nav-item">
							<Link
								activeStyle={{color: '#b3472d'}}
								className="nav-link"
								partiallyActive
								to="/blog"
							>
								<span className="c-inner" tabIndex="-1">
									{'Blog'}
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
									{'Storybook'}
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
									{'Codesandbox'}
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

						{DEV && (
							<li className="nav-item">
								<ClayDropDownWithItems
									footerContent={
										<>
											<ClayButton
												displayType="secondary"
												onClick={() =>
													window.location.reload()
												}
												style={{marginRight: 8}}
											>
												{'Refresh'}
											</ClayButton>

											<ClayButton
												displayType="secondary"
												onClick={() => {
													localStorage.setItem(
														'clay.showAtlas',
														true
													);
													localStorage.setItem(
														'clay.showSiteCss',
														true
													);
													window.location.reload();
												}}
											>
												{'Reset'}
											</ClayButton>
										</>
									}
									helpText="Changes will apply after refresh"
									items={[
										{
											checked: settings.atlas,
											label: 'Show Atlas',
											onChange: () => {
												setSettings({
													atlas: !settings.atlas,
													site: settings.site,
												});
											},
											type: 'checkbox',
										},
										{
											checked: settings.site,
											label: 'Show Site CSS',
											onChange: () => {
												setSettings({
													atlas: settings.atlas,
													site: !settings.site,
												});
											},
											type: 'checkbox',
										},
									]}
									spritemap={spritemap}
									trigger={
										<ClayButtonWithIcon
											className="nav-link"
											displayType="unstyled"
											symbol="cog"
										/>
									}
								/>
							</li>
						)}
					</ul>
				</div>
			</div>
		</nav>
	);
};
