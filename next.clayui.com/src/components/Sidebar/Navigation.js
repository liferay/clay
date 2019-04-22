/**
 * © 2018 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React, {Component} from 'react';
import classNames from 'classnames';
import {Link} from 'gatsby';

/**
 */
class Navigation extends Component {
	/**
	 * @param {!number} index
	 * @param {!number} depth
	 * @param {!object} section
	 * @param {!event} event
	 */
	_handleOnClick(index, depth, section, event) {
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
	_isActive(section) {
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
		const {sectionList, location, depth = 0} = this.props;

		return sectionList.map((section, index) => {
			let style = classNames({
				'active': this._isActive(section) === true,
				'nav-heading': section.items,
				'draft': section.draft,
			});

			return (
				<li key={index} ref={`navItem${index}${depth}`} className={style} onClick={this._handleOnClick.bind(this, index, depth, section)}>
					<Anchor page={section} />

					{section.items && (
						<Navigation
							sectionList={section.items}
							location={location}
							depth={depth + 1}
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
		<Link
			to={`${page.link}.html`}
			className="align-middle"
		>
			<span>{page.title}</span>
		</Link>
	);
};

export default Navigation;
