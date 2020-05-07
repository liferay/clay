/**
 * SPDX-FileCopyrightText: © 2020 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayIcon from '@clayui/icon';
import {Link} from 'gatsby';
import React from 'react';

import clayLogo from '../../static/images/home/clay_logo.svg';
import LayoutNav from '../components/LayoutNav';

const spritemap = '/images/icons/icons.svg';

const PageNotFound = () => {
	return (
		<div className="clay-404-page-container d-flex flex-column min-vh-100">
			<header className="d-flex">
				<div className="container-fluid-max-xl d-flex mb-0 ml-auto mr-auto mt-0 w-100">
					<Link className="d-none d-sm-flex mx-3" to="/">
						<img
							alt="Clay"
							className="align-items-center d-flex justify-content-center"
							src={clayLogo}
						/>
					</Link>

					<LayoutNav />
				</div>
			</header>

			<div className="align-items-center container-fluid-max-lg d-flex justify-content-center m-auto main-content row">
				<h1 className="col-12 display-3">
					{"These aren't the components you're looking for."}
				</h1>

				<div className="col-12 container-fluid">
					<p className="my-2 py-2">
						{
							"Hey there, we couldn't find the page that you were looking for."
						}
						<br />
						{"Maybe it's one of these:"}
					</p>

					<nav className="list-inline mt-3">
						<Link
							className="align-middle list-inline-item mb-3 mr-3 px-3 py-2 rounded shadow text-decoration-none"
							to="/"
						>
							<ClayIcon spritemap={spritemap} symbol="home" />

							<span className="pl-2">{'Home'}</span>
						</Link>

						<Link
							className="align-middle list-inline-item mb-3 mr-3 px-3 py-2 rounded shadow text-decoration-none"
							to="/docs/get-started/index.html"
						>
							<ClayIcon spritemap={spritemap} symbol="bolt" />

							<span className="pl-2">{'Get Started'}</span>
						</Link>

						<Link
							className="align-middle list-inline-item mb-3 mr-3 px-3 py-2 rounded shadow text-decoration-none"
							to="/docs/components/index.html"
						>
							<ClayIcon
								spritemap={spritemap}
								symbol="plus-squares"
							/>

							<span className="pl-2">{'Components'}</span>
						</Link>

						<a
							className="align-items-center align-middle d-inline-flex list-inline-item mb-3 px-3 py-2 rounded shadow text-decoration-none"
							href="https://github.com/liferay/clay"
						>
							<div className="githubImage" />

							<span className="pl-2">{'Clay on GitHub'}</span>
						</a>
					</nav>
				</div>
			</div>
		</div>
	);
};

export default PageNotFound;
