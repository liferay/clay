/**
 * SPDX-FileCopyrightText: © 2018 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {Link} from 'gatsby';
import React, {useLayoutEffect} from 'react';

import Navigation from './Navigation';

const SidebarRef = React.createRef();
const SideNavRef = React.createRef();

const onClick = () => {
	SidebarRef.current.classList.toggle('toggler-expanded');

	document
		.querySelector('body')
		.classList.toggle('clay-overflow-hidden-md-down');
};

let scrollTop = 0;

const SideNavScroll = (props) => {
	const onScroll = (event) => {
		scrollTop = event.currentTarget.scrollTop;
	};

	useLayoutEffect(() => {
		SideNavRef.current.scrollTop = scrollTop;
	}, []);

	return (
		<div
			className="d-flex flex-column p-3 sidebar sidebar-clay-site sidenav-menu"
			onScroll={onScroll}
			ref={SideNavRef}
		>
			{props.children}
		</div>
	);
};

export default ({active, data, location}) => (
	<>
		<nav
			className="sidebar-toggler-content sidenav-menu-slider sidenav-sticky"
			id="clay-sidebar"
			ref={SidebarRef}
		>
			<SideNavScroll>
				<div className="align-items-center d-flex justify-content-between p-0 sidebar-header">
					<Link
						className="d-inline-block p-2 sidebar-logo text-decoration-none text-reset"
						to="/"
					>
						<span className="c-inner" tabIndex="-1">
							<img
								alt=""
								className="align-middle sidebar-logo-image"
								src="/images/clay_logo_w.png"
							/>
							<span className="align-middle font-weight-700 h3 ml-2 sidebar-logo-title">
								Clay
							</span>
						</span>
					</Link>

					<div className="align-items-center d-flex sidebar-icon-links">
						<button
							aria-controls="navbarSupportedContent"
							aria-expanded="false"
							aria-label="Toggle navigation"
							className="btn mx-2 px-2 py-1 sidebar-toggler"
							data-target="#navbarSupportedContent"
							data-toggle="collapse"
							onClick={onClick}
							type="button"
						>
							<span className="c-inner" tabIndex="-1">
								<svg
									aria-hidden="true"
									className="lexicon-icon lexicon-icon-bars"
								>
									<use xlinkHref="/images/icons/icons.svg#bars" />
								</svg>
								<svg
									aria-hidden="true"
									className="lexicon-icon lexicon-icon-times"
								>
									<use xlinkHref="/images/icons/icons.svg#times" />
								</svg>
							</span>
						</button>
					</div>
				</div>
				<div className="p-0 sidebar-body">
					<div className="mt-3">
						<Navigation
							active={active}
							location={location}
							sectionList={data}
						/>
					</div>
				</div>
			</SideNavScroll>
		</nav>
	</>
);
