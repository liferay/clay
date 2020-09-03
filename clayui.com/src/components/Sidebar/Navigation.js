/**
 * SPDX-FileCopyrightText: © 2018 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import {Link} from 'gatsby';
import React, {Component} from 'react';

/**
 */
class Navigation extends Component {
	constructor(props) {
		super(props);

		this.handleToggleCollapse = this.handleToggleCollapse.bind(this);
		this.handleOnNavigation = this.handleOnNavigation.bind(this);
	}

	/**
	 * @param {!number} index
	 * @param {!number} depth
	 * @param {!object} section
	 */
	handleToggleCollapse(index, depth, section) {
		// eslint-disable-next-line react/no-string-refs
		const elementRef = this.refs[`navItem${index}${depth}`];

		if (!elementRef.classList.contains('active') || !!section.items) {
			elementRef.classList.toggle('active');
		}
	}

	handleOnNavigation() {
		document
			.querySelector('body')
			.classList.remove('clay-overflow-hidden-md-down');
	}

	/**
	 * @param {*} section
	 * @return {boolean}
	 */
	isActive(section) {
		if (section.alwaysActive) {
			return true;
		}

		const {active = [], location} = this.props;
		const match = location.pathname.split('/');

		if (section.items) {
			return match.includes(section.id);
		}

		return active.includes(section.pathname);
	}

	/**
	 * @return {React.Component}
	 */
	renderNavigationItems() {
		const {active, depth = 0, location, sectionList} = this.props;

		return sectionList.map((section, index) => {
			const style = classNames({
				active: this.isActive(section) === true,
				draft: section.draft,
				'nav-heading': section.items,
				'parent-page-active':
					section.items &&
					location.pathname.includes(`${section.link}.html`),
			});

			return (
				<li
					className={style}
					key={index}
					ref={`navItem${index}${depth}`}
				>
					<Anchor
						location={location}
						onNavigation={() => this.handleOnNavigation()}
						onToggleCollapse={() =>
							this.handleToggleCollapse(index, depth, section)
						}
						page={section}
					/>

					{section.items && (
						<Navigation
							active={active}
							depth={depth + 1}
							location={location}
							onNavigation={() => this.handleOnNavigation()}
							sectionList={section.items}
						/>
					)}
				</li>
			);
		});
	}

	/**
	 * @return {React.Component}
	 */
	render() {
		return (
			<ul className="nav nav-nested-margins">
				{this.renderNavigationItems()}
			</ul>
		);
	}
}

const Anchor = ({location, onNavigation, onToggleCollapse, page}) => {
	const link = `${page.link}.html`;

	const onClick =
		location.pathname === link || (page.items && !page.isRoot)
			? onToggleCollapse
			: onNavigation;

	return (
		<Link className="nav-link" onClick={onClick} to={link}>
			<span className="c-inner" tabIndex="-1">
				{page.title}

				{page.items && (
					<svg
						className="collapse-toggle"
						focusable
						name="keyboardArrowRight"
						onClick={(event) => {
							event.preventDefault();
							event.stopPropagation();

							onToggleCollapse();
						}}
						role="presentation"
					>
						<path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
						<path d="M0 0h24v24H0V0z" fill="none" />
					</svg>
				)}
			</span>
		</Link>
	);
};

export default Navigation;
