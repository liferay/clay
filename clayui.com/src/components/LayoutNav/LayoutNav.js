/**
 * SPDX-FileCopyrightText: © 2018 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {Link} from 'gatsby';
import React from 'react';

import Search from './Search';

export default () => (
	<nav className="navbar navbar-clay-site navbar-expand-lg navbar-light">
		<div className="autofit-float-sm-down autofit-padded autofit-row">
			<div className="autofit-col autofit-col-expand">
				<Search placeholder="Search..." />
			</div>
			<div className="autofit-col">
				<ul className="ml-auto navbar-nav">
					<li className="nav-item">
						<Link
							className="nav-link"
							to="/docs/get-started/what-is-clay.html"
						>
							{'Docs'}
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/blog">
							{'Blog'}
						</Link>
					</li>
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
					<li className="nav-item">
						<a
							className="ml-3 nav-link"
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
	</nav>
);
