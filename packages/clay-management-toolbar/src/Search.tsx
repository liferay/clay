/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import ClayLayout from '@clayui/layout';
import classNames from 'classnames';
import React from 'react';

export interface IProps extends React.FormHTMLAttributes<HTMLFormElement> {

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

function Search({children, onlySearch, showMobile, ...otherProps}: IProps) {
	const content = (
		<form {...otherProps} role="search">
			{children}
		</form>
	);

	return (
		<div
			className={classNames('navbar-form navbar-form-autofit', {
				'navbar-overlay navbar-overlay-sm-down': !onlySearch,
				'show': showMobile,
			})}
		>
			{onlySearch ? (
				content
			) : (
				<ClayLayout.ContainerFluid>{content}</ClayLayout.ContainerFluid>
			)}
		</div>
	);
}

export default Search;
