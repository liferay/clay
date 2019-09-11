/**
 * © 2018 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import Navigation from './Navigation';
import React, {useLayoutEffect} from 'react';
import {Link} from 'gatsby';

const SidebarRef = React.createRef();
const SideNavRef = React.createRef();

const onClick = () => {
	SidebarRef.current.classList.toggle('toggler-expanded');
};

let scrollTop = 0;

const SideNavScroll = props => {
	const onScroll = event => {
		scrollTop = event.currentTarget.scrollTop;
	};

	useLayoutEffect(() => {
		SideNavRef.current.scrollTop = scrollTop;
	}, []);

	return (
		<div
			className="sidebar sidebar-clay-site sidenav-menu d-flex flex-column p-3"
			onScroll={onScroll}
			ref={SideNavRef}
		>
			{props.children}
		</div>
	);
};

export default props => (
	<React.Fragment>
		<nav
			className="sidebar-toggler-content sidenav-sticky sidenav-menu-slider"
			id="clay-sidebar"
			ref={SidebarRef}
		>
			<SideNavScroll>
				<div className="sidebar-header d-flex justify-content-between align-items-center p-0">
					<Link
						className="sidebar-logo text-reset text-decoration-none d-inline-block p-2"
						to="/"
					>
						<img
							alt="Clay"
							className="sidebar-logo-image align-middle"
							src="/images/clay_logo_w.png"
						/>
						<span className="sidebar-logo-title align-middle h3 font-weight-700 ml-2">
							{'Clay'}
						</span>
					</Link>

					<div className="sidebar-icon-links d-flex align-items-center">
						<button
							aria-controls="navbarSupportedContent"
							aria-expanded="false"
							aria-label="Toggle navigation"
							className="btn sidebar-toggler mx-2 px-2 py-1"
							data-target="#navbarSupportedContent"
							data-toggle="collapse"
							onClick={onClick}
							type="button"
						>
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
						</button>
					</div>
				</div>
				<div className="sidebar-body p-0">
					<div className="mt-3">
						<Navigation
							location={props.location}
							sectionList={props.data}
						/>
					</div>
				</div>
			</SideNavScroll>
		</nav>
	</React.Fragment>
);
