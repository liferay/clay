/**
 * © 2018 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React from 'react';

import Search from './Search';

export default () => (
	<nav className="navbar navbar-clay-site navbar-expand-lg navbar-light">
		<div className="container-fluid">
			<div className="autofit-padded autofit-row">
				<div className="autofit-col autofit-col-expand">
					<Search placeholder="Search..." />
				</div>
				<div className="autofit-col">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item">
							<a
								className="nav-link"
								href="http://storybook.clayui.com"
								rel="noopener noreferrer"
								target="_blank"
							>
								{'Storybook'}
							</a>
						</li>
						{/* <li className="nav-item">
							<Link className="nav-link ml-3" to="/blog">
								{'Blog'}
							</Link>
						</li> */}
						<li className="nav-item">
							<a
								className="nav-link mx-3"
								href="https://github.com/liferay/clay"
								rel="noopener noreferrer"
								target="_blank"
							>
								<img
									alt="Github"
									className="github-logo"
									src="/images/home/github-logo.svg"
								/>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</nav>
);
