/**
 * © 2018 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import Navigation from './Navigation';
import React, {useLayoutEffect} from 'react';
import Search from '../LayoutNav/Search';
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
						className="sidebar-logo text-reset text-decoration-none d-inline-block p-2 mb-1"
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
						<a
							className=""
							href="http://storybook.clayui.com"
							rel="noopener noreferrer"
							target="_blank"
							title="Storybook"
						>
							<img
								alt=""
								src="/images/docs/clay_icon_storybook.svg"
							/>
						</a>

						<a
							className="mx-2"
							href="https://github.com/liferay/clay"
							rel="noopener noreferrer"
							target="_blank"
							title="GitHub"
						>
							<img
								alt=""
								src="/images/docs/clay_icon_github.svg"
							/>
						</a>

						<button
							aria-controls="navbarSupportedContent"
							aria-expanded="false"
							aria-label="Toggle navigation"
							className="sidebar-toggler p-1"
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
					<div className="mt-3 mb-4">
						<Search placeholder="Search..." />
					</div>

					<div className="mt-3 border-top pt-3">
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
