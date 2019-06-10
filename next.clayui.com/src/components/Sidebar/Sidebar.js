/**
 * © 2018 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import Navigation from './Navigation';
import React, {useLayoutEffect} from 'react';

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
					<Navigation
						location={props.location}
						sectionList={props.data}
					/>
				</div>
			</SideNavScroll>
		</nav>
	</React.Fragment>
);
