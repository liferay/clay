/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import ClayLoadingIndicator from '@clayui/loading-indicator';
import Context from './Context';
import React, {useContext, useEffect} from 'react';

const LoadingIndicatorMarkup: React.FunctionComponent<
	React.HTMLAttributes<HTMLDivElement>
> = ({children, className, ...otherProps}) => (
	<div
		{...otherProps}
		className={classNames(
			'input-group-inset-item input-group-inset-item-after',
			className
		)}
	>
		<span className="inline-item inline-item-middle">{children}</span>
	</div>
);

export interface IProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * Div component to render. It can be a one component that will replace the markup.
	 */
	component?: React.ComponentType<any>;
}

const LoadingIndicator: React.FunctionComponent<IProps> = ({
	className,
	component: Component = LoadingIndicatorMarkup,
	...otherProps
}: IProps) => {
	const {onLoadingChange} = useContext(Context);

	useEffect(() => {
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

export default LoadingIndicator;
