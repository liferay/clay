/**
 * SPDX-FileCopyrightText: © 2018 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {Link} from 'gatsby';
import React from 'react';

const LayoutNavHome = () => {
	return (
		<nav className="navbar navbar-clay-site navbar-expand-lg navbar-light">
			<div className="autofit-float-sm-down autofit-padded autofit-row">
				<div className="autofit-col autofit-col-expand">
					<div className="d-inline-block text-decoration-none text-reset">
						<span className="c-inner" tabIndex="-1">
							<img
								alt="Clay"
								className="align-middle sidebar-logo-image"
								height="32"
								src="/images/clay_logo_w.png"
							/>

							<span className="align-middle font-weight-700 h3 ml-2 sidebar-logo-title">
								{'Clay'}
							</span>
						</span>
					</div>
				</div>
				<div className="autofit-col">
					<ul className="ml-auto navbar-nav">
						<li className="nav-item">
							<Link
								className="nav-link"
								to="/docs/get-started/index.html"
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
						<li className="d-none d-sm-flex nav-item">
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
						<li className="d-none d-sm-flex nav-item">
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
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default LayoutNavHome;
