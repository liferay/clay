/**
 * © 2018 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React from 'react';
import {Link} from 'gatsby';

import Search from './Search';

export default () => (
	<React.Fragment>
		<div className="clay-site-alert alert alert-dark alert-fixed alert-fluid">
			<b>Clay V3 is currently in beta</b> for ready-to-use components, use <a href="https://clayui.com" target="_blank">Clay V2</a>.
		</div>
		<nav className="navbar navbar-clay-site navbar-expand-lg navbar-dark">
			<div className="container-fluid">
				<Link className="navbar-brand" to="/">
					<img className="logo mr-2" src="/images/clay_logo_w.png" alt="Clay" />
					<span className="title align-middle">Clay</span>
				</Link>
				<div className="navbar-nav-scroll">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item">
							<Link className="nav-link ml-3" to="/docs/get-started/introduction.html">Get Started</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link ml-3" to="/docs/css">
								Style Guide
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link ml-3" to="/docs/components">
								Components Library
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link ml-3" to="/blog">
								Blog
							</Link>
						</li>
						<li className="nav-item">
							<Search placeholder="Search..." />
						</li>
						<li className="nav-item">
							<a className="mx-3 mr-lg-0" href="https://github.com/liferay/clay" target="_blank">
								<img src="/images/home/GitHub-Mark-64px.svg" alt="" />
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	</React.Fragment>
);
