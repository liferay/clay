/**
 * SPDX-FileCopyrightText: © 2020 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {ClayInput} from '@clayui/form';
import ClayLoadingIndicator from '@clayui/loading-indicator';
import React from 'react';

import Context from './Context';

const LoadingIndicatorMarkup: React.FunctionComponent<React.HTMLAttributes<
	HTMLDivElement
>> = ({children, ...otherProps}) => (
	<ClayInput.GroupInsetItem {...otherProps} after>
		<span className="inline-item inline-item-middle">{children}</span>
	</ClayInput.GroupInsetItem>
);

export interface IProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * Div component to render. It can be a one component that will replace the markup.
	 */
	component?: React.ComponentType<any>;
}

const ClayAutocompleteLoadingIndicator: React.FunctionComponent<IProps> = ({
	className,
	component: Component = LoadingIndicatorMarkup,
	...otherProps
}: IProps) => {
	const {onLoadingChange} = React.useContext(Context);

	React.useEffect(() => {
		onLoadingChange(true);

		return () => {
			onLoadingChange(false);
		};
	}, []);

	return (
		<Component {...otherProps} className={className}>
			<ClayLoadingIndicator small />
		</Component>
	);
};

export default ClayAutocompleteLoadingIndicator;
