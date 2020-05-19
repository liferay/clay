/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import React from 'react';

interface IProps extends React.FormHTMLAttributes<HTMLFormElement> {
	/**
	 * Flag to indicate when there is only the search element within a
	 * Management Toolbar.
	 */
	onlySearch?: boolean;

	/**
	 * Flag to control search visibility in mobile view.
	 */
	showMobile?: boolean;
}

const Search: React.FunctionComponent<IProps> = ({
	children,
	onlySearch,
	showMobile,
	...otherProps
}) => {
	const content = (
		<form {...otherProps} role="search">
			{children}
		</form>
	);

	return (
		<div
			className={classNames('navbar-form navbar-form-autofit', {
				'navbar-overlay navbar-overlay-sm-down': !onlySearch,
				show: showMobile,
			})}
		>
			{onlySearch ? (
				content
			) : (
				<div className="container-fluid container-fluid-max-xl">
					{content}
				</div>
			)}
		</div>
	);
};

export default Search;
