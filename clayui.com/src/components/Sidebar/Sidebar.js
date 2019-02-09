/**
 * © 2018 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import Navigation from './Navigation';
import React, {useEffect} from 'react';

const SidebarRef = React.createRef();
const SideNavRef = React.createRef();

const onClick = () => {
	SidebarRef.current.classList.toggle('toggler-expanded');
};

let scrollTop = 0;

const SideNavScroll = (props) => {
	const onScroll = (event) => scrollTop = event.currentTarget.scrollTop;

	useEffect(() => {
		SideNavRef.current.scrollTop = scrollTop;
	}, []);

	return (
		<div
			ref={SideNavRef}
			onScroll={onScroll}
			className="sidebar sidebar-clay-site sidenav-menu d-flex flex-column"
		>
			{props.children}
		</div>
	);
};

export default props => (
	<React.Fragment>
		<div className="navbar navbar-mobile navbar-expand-lg navbar-header">
			<button onClick={onClick} className="navbar-toggler sidebar-toggler p-3" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<svg aria-hidden="true" className="lexicon-icon lexicon-icon-bars">
					<use xlinkHref="/images/icons/icons.svg#bars" />
				</svg>
			</button>
		</div>

		<nav
			ref={SidebarRef}
			className="sidebar-toggler-content sidenav-fixed sidenav-menu-slider"
			id="clay-sidebar"
		>
			<SideNavScroll>
				<div className="sidebar-body mb-auto">
					<Navigation
						sectionList={props.data}
						location={props.location}
					/>
				</div>
			</SideNavScroll>
		</nav>
	</React.Fragment>
);
