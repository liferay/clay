/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React from 'react';

interface IProps extends React.FormHTMLAttributes<HTMLFormElement> {
	onlySearch?: boolean;
}

const SearchForm: React.FunctionComponent<IProps> = ({
	children,
	method = 'get',
	onlySearch = false,
	...otherProps
}) => {
	const content = (
		<form {...otherProps} method={method} role="search">
			{children}
		</form>
	);

	if (onlySearch) {
		return content;
	}

	return onlySearch ? (
		content
	) : (
		<div className="container-fluid container-fluid-max-xl">{content}</div>
	);
};

export default SearchForm;
