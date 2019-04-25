/**
 * © 2018 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import React, {Component} from 'react';
import {Link} from 'gatsby';

/**
 */
class Navigation extends Component {
	constructor(props) {
		super(props);

		this.handleOnClick = this.handleOnClick.bind();
	}

	/**
	 * @param {!number} index
	 * @param {!number} depth
	 * @param {!object} section
	 * @param {!event} event
	 */
	handleOnClick(index, depth, section, event) {
		event.stopPropagation();

		const elementRef = this.refs[`navItem${index}${depth}`];

		if (!elementRef.classList.contains('active') || !!section.items) {
			elementRef.classList.toggle('active');
		}
	}

	/**
	 * @param {*} section
	 * @return {boolean}
	 */
	isActive(section) {
		if (section.alwaysActive) {
			return true;
		}

		const {location} = this.props;
		const match = location.pathname.split('/');
		const id = match[match.length - 1].split('.');

		if (section.items) {
			return match.includes(section.id);
		}

		return id[0] === section.id;
	}

	/**
	 * @return {React.Component}
	 */
	renderNavigationItems() {
		const {depth = 0, location, sectionList} = this.props;

		return sectionList.map((section, index) => {
			const style = classNames({
				active: this.isActive(section) === true,
				draft: section.draft,
				'nav-heading': section.items,
			});

			return (
				<li
					className={style}
					key={index}
					onClick={event =>
						this.handleOnClick(index, depth, section, event)
					}
					ref={`navItem${index}${depth}`}
				>
					<Anchor page={section} />

					{section.items && (
						<Navigation
							depth={depth + 1}
							location={location}
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
			<ul className="nav nav-nested nav-pills nav-stacked">
				{this.renderNavigationItems()}
			</ul>
		);
	}
}

const Anchor = ({page}) => {
	if (page.items) {
		if (page.indexVisible) {
			return (
				<Link className="align-middle" to={`${page.link}.html`}>
					<span>{page.title}</span>
					<svg className="collapse-toggle clay-icon icon-monospaced">
						<use xlinkHref="/images/icons/icons.svg#caret-bottom" />
					</svg>
				</Link>
			);
		} else {
			return (
				<a className="align-middle" href="javascript:;">
					<span>{page.title}</span>
					<svg className="collapse-toggle clay-icon icon-monospaced">
						<use xlinkHref="/images/icons/icons.svg#caret-bottom" />
					</svg>
				</a>
			);
		}
	}

	return (
		<Link className="align-middle" to={`${page.link}.html`}>
			<span>{page.title}</span>
		</Link>
	);
};

export default Navigation;
