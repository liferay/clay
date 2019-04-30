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

		this.handleOnClick = this.handleOnClick.bind(this);
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
					<Anchor location={location} page={section} />

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

const Anchor = ({location, page}) => {
	const link = `${page.link}.html`;
	const TagName = location.pathname === link || (page.items && !page.indexVisible) ? 'a' : Link;
	const props = location.pathname === link || (page.items && !page.indexVisible)
		? { href: 'javascript:;' }
		: { to: link }

	return (
		<TagName className="align-middle" {...props}>
			<span>{page.title}</span>
			{page.items && (
				<svg className="collapse-toggle" height="24" name="keyboardArrowRight" width="24">
					<path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path> <path d="M0 0h24v24H0V0z" fill="none"></path>
				</svg>
			)}
		</TagName>
	);
};

export default Navigation;
