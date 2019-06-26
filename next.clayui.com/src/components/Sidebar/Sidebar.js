/**
 * © 2018 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import Navigation from './Navigation';
import React, {useLayoutEffect} from 'react';
import {Link} from 'gatsby';
import Search from '../LayoutNav/Search';

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
			className="sidebar sidebar-clay-site sidenav-menu d-flex flex-column"
			onScroll={onScroll}
			ref={SideNavRef}
		>
			{props.children}
		</div>
	);
};

export default props => (
	<React.Fragment>
		<div className="navbar navbar-mobile navbar-expand-lg navbar-header">
			<button
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
				className="navbar-toggler sidebar-toggler ml-auto p-3"
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
			</button>
		</div>

		<nav
			className="sidebar-toggler-content sidenav-sticky sidenav-menu-slider"
			id="clay-sidebar"
			ref={SidebarRef}
		>
			<SideNavScroll>
				<div className="sidebar-body mb-auto">
					<div className="d-flex justify-content-between align-items-center">
						<Link className="sidebar-logo text-reset text-decoration-none d-inline-block p-2 mb-1" to="/">
							<img
								alt="Clay"
								className="sidebar-logo-image align-middle"
								src="/images/clay_logo_w.png"
								/>
							<span className="sidebar-logo-title align-middle h3 font-weight-700 ml-2">{'Clay'}</span>
						</Link>

						<div className="label label-danger mr-auto" title="Version">v 0.1.0</div>

						<a
							className="mr-2"
							href="http://storybook.clayui.com"
							rel="noopener noreferrer"
							target="_blank"
							title="Storybook"
							>
							<img
								alt=""
								src="/images/home/clay_icon_storybook.svg"
								/>
						</a>

						<a
							className=""
							href="https://github.com/liferay/clay"
							rel="noopener noreferrer"
							target="_blank"
							title="GitHub"
							>
							<img
								alt=""
								src="/images/home/clay_icon_github.svg"
								/>
						</a>
					</div>

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
